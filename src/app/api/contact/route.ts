import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, company, message } = await req.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Create transporter for Hostinger SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com', // Hostinger SMTP server
            port: 465, // SSL port
            secure: true, // use SSL
            auth: {
                user: process.env.SMTP_USER || 'abdullah.khan@devdaa.com',
                pass: process.env.SMTP_PASSWORD || '', // Add password in .env.local
            },
        });

        // Email to DevDaa
        await transporter.sendMail({
            from: `"DevDaa Contact Form" <abdullah.khan@devdaa.com>`,
            to: 'abdullah.khan@devdaa.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p style="color: #666; font-size: 12px;">This email was sent from the DevDaa website contact form.</p>
                </div>
            `,
        });

        // Auto-reply to sender
        await transporter.sendMail({
            from: `"DevDaa" <abdullah.khan@devdaa.com>`,
            to: email,
            subject: 'Thank you for contacting DevDaa',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #14b8a6;">Thank You for Reaching Out!</h2>
                    <p>Hi ${name},</p>
                    <p>Thank you for contacting DevDaa. We've received your message and will get back to you within 24 hours.</p>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Your message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p>Best regards,<br><strong>DevDaa Team</strong></p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        DevDaa | AI & Technology Solutions<br>
                        Email: abdullah.khan@devdaa.com<br>
                        Website: devdaa.com
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
