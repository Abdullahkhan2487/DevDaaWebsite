# Hostinger Deployment Guide

## 📦 Upload Files to Hostinger

### Step 1: Upload PHP Backend

Upload these files from `/public/contact-php/` to your Hostinger:

```
public_html/
├── api/
│   ├── send-email.php
│   ├── config.php
│   ├── test-form.html
│   └── .htaccess
```

**Via File Manager:**
1. Log in to Hostinger hPanel
2. Go to **Files** → **File Manager**
3. Navigate to `public_html/`
4. Create folder: `api`
5. Upload all files from `/public/contact-php/` to `public_html/api/`

**Via FTP (FileZilla):**
1. Connect to your Hostinger FTP
2. Navigate to `public_html/`
3. Create `api` folder
4. Upload files

---

### Step 2: Upload .env File

1. Upload `.env` file to **root directory** (NOT inside public_html)
2. Structure should be:
   ```
   /home/username/
   ├── .env (HERE - outside public_html)
   └── public_html/
       └── api/
   ```

**Important:** `.env` must be OUTSIDE public_html for security

---

### Step 3: Verify .env Configuration

Edit `.env` on server and ensure:
```env
SMTP_PASSWORD=Devdaa@revvo1$
SMTP_USER=abdullah.khan@devdaa.com
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
TO_EMAIL=abdullah.khan@devdaa.com
ALLOWED_ORIGINS=https://devdaa.com,https://www.devdaa.com
```

**Remove** `http://localhost:3000` from production!

---

### Step 4: Set File Permissions

```bash
chmod 644 api/send-email.php
chmod 644 api/config.php
chmod 644 api/.htaccess
chmod 755 api/
```

---

### Step 5: Create Logs Directory

```bash
mkdir -p logs
chmod 755 logs
```

Or let PHP auto-create it (it will on first form submission).

---

### Step 6: Test PHP Backend

Open in browser:
```
https://devdaa.com/api/test-form.html
```

Submit a test message:
- ✅ You should receive email at abdullah.khan@devdaa.com
- ✅ Sender should receive auto-reply
- ✅ Success message should appear

---

### Step 7: Deploy Next.js Frontend

Your contact form is now configured to use PHP backend:
```typescript
fetch("https://devdaa.com/api/send-email.php", {...})
```

**Deploy to Hostinger:**

1. Build Next.js project locally:
   ```bash
   npm run build
   ```

2. Export static files:
   ```bash
   npm run export
   # Or if using Next.js 13+:
   npx next build && npx next export
   ```

3. Upload `out/` folder contents to `public_html/`

---

## 🔍 Troubleshooting

### Test PHP backend directly
```bash
curl -X POST https://devdaa.com/api/send-email.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

Expected response:
```json
{"success":true,"message":"Email sent successfully"}
```

### Common Issues

**"Failed to send email"**
- Check `.env` file exists and has correct password
- Verify SMTP password is correct (from Hostinger Email settings)
- Check logs: `logs/contact_form.log`

**CORS error**
- Verify ALLOWED_ORIGINS in `.env` includes your domain
- Make sure using `https://` not `http://`

**404 Not Found**
- Verify files uploaded to correct path: `public_html/api/`
- Check file names are exact (case-sensitive)

**Rate limit exceeded**
- Check logs to see IP addresses
- Adjust MAX_EMAILS_PER_HOUR in config.php if needed

---

## ✅ Final Checklist

- [ ] PHP files uploaded to `public_html/api/`
- [ ] `.env` file in root (outside public_html)
- [ ] SMTP_PASSWORD correct in `.env`
- [ ] ALLOWED_ORIGINS updated (no localhost)
- [ ] File permissions set (644)
- [ ] Test form works: `https://devdaa.com/api/test-form.html`
- [ ] Next.js app built and deployed
- [ ] Contact form submits successfully
- [ ] Email received at abdullah.khan@devdaa.com
- [ ] Auto-reply received by sender
- [ ] Logs directory created and writable

---

## 🚀 You're All Set!

Contact form now uses secure PHP backend on Hostinger with:
- ✅ Rate limiting (5 emails/hour)
- ✅ Bot protection (honeypot)
- ✅ Input validation
- ✅ CORS security
- ✅ HTTPS enforcement
- ✅ Security logging
- ✅ Password stored in .env (never in code)

Need help? Check logs at: `logs/contact_form.log`
