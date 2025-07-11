import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // true for SSL, false for TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // your receiving email
    subject: `New Contact Form Message: ${subject}`,
    text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, message: 'Email sending failed.' }, { status: 500 })
  }
}