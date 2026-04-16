import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your SMTP in .env.local — see .env.example
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, type, message } = body

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      )
    }

    const typeLabel: Record<string, string> = {
      student: 'Student',
      college: 'College / Institution',
      corporate: 'Corporate / Organization',
    }

    await transporter.sendMail({
      from: `"BLC Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? 'info@blcompiler.com',
      replyTo: email,
      subject: `New enquiry from ${name} — ${typeLabel[type] ?? type}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Type: ${typeLabel[type] ?? type}`,
        `Message:\n${message || '(no message)'}`,
      ].join('\n'),
      html: `
        <div style="font-family:monospace;max-width:560px;margin:0 auto;color:#0A0F2E">
          <div style="background:#1E328B;padding:20px 24px;border-radius:8px 8px 0 0">
            <h2 style="color:#FEBB39;margin:0;font-size:18px">New BLC Website Enquiry</h2>
          </div>
          <div style="background:#F7F7F7;padding:24px;border:1px solid #E8ECF4;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#6B7494;width:100px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7494">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1E328B">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6B7494">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#1E328B">${phone}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6B7494">Type</td><td style="padding:8px 0">${typeLabel[type] ?? type}</td></tr>
            </table>
            ${message ? `<div style="margin-top:16px;padding:16px;background:#fff;border:1px solid #E8ECF4;border-radius:6px;font-size:14px;line-height:1.6">${message}</div>` : ''}
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact API]', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
