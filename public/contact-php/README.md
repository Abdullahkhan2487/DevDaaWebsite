# PHP Contact Form Setup for DevDaa

This folder contains the PHP backend for the contact form that works with Hostinger email.

## 📁 Files

- `send-email.php` - Main contact form handler
- `config.php` - SMTP configuration (⚠️ contains password)
- `README.md` - Setup instructions (this file)

## 🚀 Quick Setup

### Step 1: Get Your Hostinger Email Password

1. Log in to your **Hostinger** account
2. Go to **hPanel** → **Email**
3. Find **abdullah.khan@devdaa.com**
4. Click **Manage** → **Password**
5. Either view or reset the password
6. Copy the password

### Step 2: Configure the PHP File

Edit `send-email.php` and replace:
```php
$smtp_pass = 'YOUR_EMAIL_PASSWORD_HERE'; // Replace with your actual password
```

With your actual password:
```php
$smtp_pass = 'your_actual_hostinger_password';
```

### Step 3: Upload to Your Server

Upload these files to your Hostinger cPanel:

```
public_html/
├── api/
│   ├── send-email.php
│   └── config.php (optional)
```

Or via **File Manager** in hPanel:
1. Go to **Files** → **File Manager**
2. Create folder: `public_html/api/`
3. Upload `send-email.php`

### Step 4: Install PHPMailer (Recommended)

#### Option A: Via Composer (Recommended)
```bash
cd public_html/api/
composer require phpmailer/phpmailer
```

#### Option B: Manual Download
1. Download from: https://github.com/PHPMailer/PHPMailer/releases
2. Extract to: `public_html/api/PHPMailer/`
3. Folder structure should be:
   ```
   public_html/api/
   ├── send-email.php
   └── PHPMailer/
       ├── PHPMailer.php
       ├── SMTP.php
       └── Exception.php
   ```

**Note:** If PHPMailer is not installed, the script will fallback to PHP's native `mail()` function (less reliable).

### Step 5: Update Contact Form

Update your Next.js contact form to use PHP:

```typescript
// In src/sections/Contact.tsx
const response = await fetch("https://devdaa.com/api/send-email.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
});
```

### Step 6: Test the Form

1. Go to your website's contact form
2. Fill out all fields
3. Submit
4. Check:
   - ✅ abdullah.khan@devdaa.com receives notification
   - ✅ Sender receives auto-reply
   - ✅ Success message appears on form

## 🔧 Troubleshooting

### "Failed to authenticate"
- ❌ Wrong SMTP password
- ✅ Get password from Hostinger Email settings
- ✅ Make sure it's the email password, not cPanel password

### "Connection timeout"
- ❌ Port blocked or wrong port
- ✅ Try port 587 instead of 465
- ✅ Check hosting firewall settings

### "Email not received"
- ❌ In spam folder
- ✅ Check spam/junk folders first
- ✅ Add devdaa.com to email whitelist

### "CORS error"
- ❌ Wrong domain in CORS headers
- ✅ Update CORS header in send-email.php:
  ```php
  header('Access-Control-Allow-Origin: https://devdaa.com');
  ```

### "PHPMailer not found"
- ❌ PHPMailer not installed
- ✅ Script will use fallback mail()
- ✅ For better reliability, install PHPMailer

## 🔒 Security

### Protect Your Password
Add to `.htaccess` in `/api/` folder:
```apache
<Files "config.php">
    Require all denied
</Files>
```

### Rate Limiting
Consider adding rate limiting to prevent spam:
```php
// Add at top of send-email.php
session_start();
$limit = 5; // 5 emails per hour
if (!isset($_SESSION['email_count'])) {
    $_SESSION['email_count'] = 0;
    $_SESSION['email_time'] = time();
}
if (time() - $_SESSION['email_time'] > 3600) {
    $_SESSION['email_count'] = 0;
    $_SESSION['email_time'] = time();
}
if ($_SESSION['email_count'] >= $limit) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please try again later.']);
    exit();
}
$_SESSION['email_count']++;
```

## 📧 SMTP Settings Reference

- **Host:** smtp.hostinger.com
- **Port:** 465 (SSL) or 587 (TLS)
- **Username:** abdullah.khan@devdaa.com
- **Password:** [Your email password]
- **Security:** SSL/TLS
- **Authentication:** Yes

## ✅ Testing Checklist

- [ ] PHP file uploaded to server
- [ ] SMTP password configured
- [ ] PHPMailer installed (or fallback enabled)
- [ ] CORS headers updated to your domain
- [ ] Contact form points to PHP URL
- [ ] Test submission works
- [ ] Email received at abdullah.khan@devdaa.com
- [ ] Auto-reply received by sender
- [ ] Success/error messages display correctly

## 🆘 Still Having Issues?

1. Check PHP error logs in cPanel
2. Test SMTP connection separately
3. Verify email quota not exceeded
4. Contact Hostinger support for email issues
5. Try the Next.js API route alternative (see main SETUP_EMAIL.md)

## 📝 Notes

- **Hostinger aliases:** If you have contact@devdaa.com as an alias, emails still go to abdullah.khan@devdaa.com
- **Email limits:** Check your Hostinger email plan for sending limits
- **Deliverability:** Set up SPF, DKIM, and DMARC records for better deliverability
- **Backup:** The Next.js API route (already created) can be used as an alternative

## 🔗 Related Files

- Main setup instructions: `/SETUP_EMAIL.md`
- Next.js API route: `/src/app/api/contact/route.ts`
- Contact form: `/src/sections/Contact.tsx`
