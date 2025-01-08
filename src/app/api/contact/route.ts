import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'subashc2023@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 24px;">
            New Contact Form Submission
          </h1>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="color: #4a4a4a; font-size: 18px; margin-bottom: 16px;">
              Contact Details
            </h2>
            <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h2 style="color: #4a4a4a; font-size: 18px; margin-bottom: 16px;">
              Message
            </h2>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error sending message' },
      { status: 500 }
    )
  }
} 