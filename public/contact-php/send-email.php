<?php
// Use statements must be at the top before any other code
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Start session for rate limiting
session_start();

// Load configuration
require_once __DIR__ . '/config.php';

// Get client IP (handle proxies)
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'];
$ip = explode(',', $ip)[0]; // If multiple IPs, take the first

// CORS Headers - Only allow specific origins (SECURE)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = ALLOWED_ORIGINS;

if (in_array($origin, $allowed)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    // For same-origin requests (no HTTP_ORIGIN header)
    if (empty($origin)) {
        // Allow if no origin header (same-origin request)
        header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_HOST']);
    } else {
        // Reject cross-origin requests from untrusted domains
        http_response_code(403);
        logSecurityEvent($ip, "Rejected", "CORS origin not allowed: $origin");
        exit();
    }
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    logSecurityEvent($ip, "Rejected", "Invalid HTTP method: " . $_SERVER['REQUEST_METHOD']);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// ===== RATE LIMITING =====
$limit_key = "email_limit_" . hash('sha256', $ip);
$time_key = "email_time_" . hash('sha256', $ip);

if (!isset($_SESSION[$limit_key])) {
    $_SESSION[$limit_key] = 0;
    $_SESSION[$time_key] = time();
}

// Reset counter if 1 hour has passed
if (time() - $_SESSION[$time_key] > 3600) {
    $_SESSION[$limit_key] = 0;
    $_SESSION[$time_key] = time();
}

// Check if limit exceeded
if ($_SESSION[$limit_key] >= MAX_EMAILS_PER_HOUR) {
    http_response_code(429);
    logSecurityEvent($ip, "Rejected", "Rate limit exceeded");
    echo json_encode(['error' => 'Too many requests. Please try again after 1 hour.']);
    exit();
}

$_SESSION[$limit_key]++;

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// ===== HONEYPOT VALIDATION (Bot Protection) =====
if (!empty($input['website'])) {
    // Bot detected - silently pass to avoid revealing honeypot
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    logSecurityEvent($ip, "Bot", "Honeypot triggered");
    exit();
}

// Validate input
$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$company = isset($input['company']) ? trim($input['company']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    logSecurityEvent($ip, "Rejected", "Missing required fields");
    echo json_encode(['error' => 'Name, email, and message are required']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    logSecurityEvent($ip, "Rejected", "Invalid email format");
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Validate name length
if (strlen($name) > 100) {
    http_response_code(400);
    echo json_encode(['error' => 'Name is too long']);
    exit();
}

// Validate company length
if (strlen($company) > 100) {
    http_response_code(400);
    echo json_encode(['error' => 'Company name is too long']);
    exit();
}

// Validate message length
if (strlen($message) > MAX_MESSAGE_LENGTH) {
    http_response_code(400);
    logSecurityEvent($ip, "Rejected", "Message too long: " . strlen($message) . " characters");
    echo json_encode(['error' => 'Message is too long (max ' . MAX_MESSAGE_LENGTH . ' characters)']);
    exit();
}

// Validate message minimum length (prevent spam)
if (strlen($message) < 10) {
    http_response_code(400);
    logSecurityEvent($ip, "Rejected", "Message too short");
    echo json_encode(['error' => 'Message must be at least 10 characters']);
    exit();
}

// Check for suspicious patterns
if (containsSuspiciousPatterns($name) || containsSuspiciousPatterns($company) || containsSuspiciousPatterns($message)) {
    http_response_code(400);
    logSecurityEvent($ip, "Rejected", "Suspicious content detected");
    echo json_encode(['error' => 'Invalid input detected']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Check if PHPMailer exists
if (file_exists(__DIR__ . '/PHPMailer/PHPMailer.php')) {
    // Use PHPMailer for better SMTP handling
    require_once __DIR__ . '/PHPMailer/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/SMTP.php';
    require_once __DIR__ . '/PHPMailer/Exception.php';

    try {
        // Create PHPMailer instance
        $mail = new PHPMailer(true);
        
        // Server settings - Use constants from config.php
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';
        
        // Recipients - Email to DevDaa
        $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
        $mail->addAddress(TO_EMAIL);
        $mail->addReplyTo($email, $name);
        $mail->isHTML(true);
        
        // Email body
        $subject = "New Contact Form Submission from $name";
        $body = "
            <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
                <h2 style='color: #14b8a6;'>New Contact Form Submission</h2>
                <div style='background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;'>
                    <p><strong>Name:</strong> $name</p>
                    <p><strong>Email:</strong> $email</p>
                    " . ($company ? "<p><strong>Company:</strong> $company</p>" : "") . "
                    <p><strong>Message:</strong></p>
                    <p style='white-space: pre-wrap;'>" . nl2br($message) . "</p>
                </div>
            </div>
        ";
        
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        
        // Send auto-reply
        $reply_mail = new PHPMailer(true);
        $reply_mail->isSMTP();
        $reply_mail->Host = SMTP_HOST;
        $reply_mail->SMTPAuth = true;
        $reply_mail->Username = SMTP_USER;
        $reply_mail->Password = SMTP_PASSWORD;
        $reply_mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $reply_mail->Port = SMTP_PORT;
        $reply_mail->CharSet = 'UTF-8';
        $reply_mail->setFrom(SMTP_FROM_EMAIL, 'DevDaa');
        $reply_mail->addAddress($email);
        $reply_mail->isHTML(true);
        
        $reply_subject = "Thank you for contacting DevDaa";
        $reply_body = "
            <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
                <h2 style='color: #14b8a6;'>Thank You for Reaching Out!</h2>
                <p>Hi $name,</p>
                <p>Thank you for contacting DevDaa. We've received your message and will get back to you within 24 hours.</p>
                <p>Best regards,<br><strong>DevDaa Team</strong></p>
            </div>
        ";
        
        $reply_mail->Subject = $reply_subject;
        $reply_mail->Body = $reply_body;
        $reply_mail->send();
        
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
        logSecurityEvent($ip, "Success", "Email sent from $email");
        
    } catch (Exception $e) {
        http_response_code(500);
        logSecurityEvent($ip, "Error", "PHPMailer failed: " . $e->getMessage());
        echo json_encode(['error' => 'Failed to send email']);
    }
} else {
    // Fallback: Use PHP mail() function (less reliable, but works without PHPMailer)
    $subject = "New Contact Form Submission from $name";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: DevDaa Contact Form <" . SMTP_FROM_EMAIL . ">\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    $body = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
            <h2 style='color: #14b8a6;'>New Contact Form Submission</h2>
            <div style='background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;'>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                " . ($company ? "<p><strong>Company:</strong> $company</p>" : "") . "
                <p><strong>Message:</strong></p>
                <p style='white-space: pre-wrap;'>" . nl2br($message) . "</p>
            </div>
        </div>
    ";
    
    if (mail(TO_EMAIL, $subject, $body, $headers)) {
        // Send auto-reply
        $reply_subject = "Thank you for contacting DevDaa";
        $reply_headers = "MIME-Version: 1.0\r\n";
        $reply_headers .= "Content-type: text/html; charset=UTF-8\r\n";
        $reply_headers .= "From: DevDaa <" . SMTP_FROM_EMAIL . ">\r\n";
        
        $reply_body = "
            <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
                <h2 style='color: #14b8a6;'>Thank You for Reaching Out!</h2>
                <p>Hi $name,</p>
                <p>Thank you for contacting DevDaa. We've received your message and will get back to you within 24 hours.</p>
                <p>Best regards,<br><strong>DevDaa Team</strong></p>
            </div>
        ";
        
        mail($email, $reply_subject, $reply_body, $reply_headers);
        
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
        logSecurityEvent($ip, "Success", "Email sent (via mail) from $email");
    } else {
        http_response_code(500);
        logSecurityEvent($ip, "Error", "mail() function failed");
        echo json_encode(['error' => 'Failed to send email']);
    }
}

// ===== HELPER FUNCTIONS =====

/**
 * Check if input contains suspicious patterns
 */
function containsSuspiciousPatterns($input) {
    $patterns = [
        '/<script/i',           // Script tags
        '/javascript:/i',       // JavaScript protocol
        '/on\w+\s*=/i',        // Event handlers
        '/eval\(/i',           // Eval function
        '/union\s+select/i',   // SQL injection
        '/drop\s+table/i',     // SQL injection
        '/insert\s+into/i',    // SQL injection
        '/delete\s+from/i',    // SQL injection
    ];
    
    foreach ($patterns as $pattern) {
        if (preg_match($pattern, $input)) {
            return true;
        }
    }
    
    return false;
}

/**
 * Log security events
 */
function logSecurityEvent($ip, $type, $message) {
    if (!defined('LOG_FILE')) return;
    
    $timestamp = date('Y-m-d H:i:s');
    $log_message = "[$timestamp] [$type] IP: $ip | $message\n";
    
    // Ensure directory exists
    $log_dir = dirname(LOG_FILE);
    if (!is_dir($log_dir)) {
        @mkdir($log_dir, 0755, true);
    }
    
    @file_put_contents(LOG_FILE, $log_message, FILE_APPEND);
}
?>
