import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  try {
    await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL!,
      to: process.env.RECEIVER_EMAIL!,
      subject: `New Contact Form Message: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ success: false, message: 'Email sending failed.' }, { status: 500 })
  }
}