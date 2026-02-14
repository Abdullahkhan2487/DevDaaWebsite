<?php
// SMTP Configuration for Hostinger Email
// ⚠️ Load from .env file - NEVER hardcode passwords

// Load environment variables from .env file
$env_file = __DIR__ . '/../../.env';
if (file_exists($env_file)) {
    $env_vars = file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($env_vars as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (strpos($line, '=') === false) continue;
        list($key, $value) = explode('=', $line, 2);
        putenv(trim($key) . '=' . trim($value));
    }
}

// Get SMTP settings from environment
define('SMTP_HOST', getenv('SMTP_HOST') ?: 'smtp.hostinger.com');
define('SMTP_PORT', getenv('SMTP_PORT') ?: 465);
define('SMTP_USER', getenv('SMTP_USER') ?: 'abdullah.khan@devdaa.com');
define('SMTP_PASSWORD', getenv('SMTP_PASSWORD'));
define('SMTP_FROM_EMAIL', getenv('SMTP_USER') ?: 'abdullah.khan@devdaa.com');
define('SMTP_FROM_NAME', 'DevDaa Contact Form');
define('TO_EMAIL', getenv('TO_EMAIL') ?: 'abdullah.khan@devdaa.com');

// Security settings
define('ALLOWED_ORIGINS', array_filter(explode(',', getenv('ALLOWED_ORIGINS'))));

// Rate limiting
define('MAX_EMAILS_PER_HOUR', 5);
define('MAX_EMAILS_PER_DAY', 20);
define('MAX_MESSAGE_LENGTH', 5000);
define('LOG_FILE', __DIR__ . '/../../logs/contact_form.log');

// Ensure log directory exists
if (!is_dir(dirname(LOG_FILE))) {
    mkdir(dirname(LOG_FILE), 0755, true);
}
?>
