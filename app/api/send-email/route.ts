import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'gemedatam@gmail.com', // where to send emails
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Message</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #3b82f6;">Name:</strong> ${name}</p>
            <p><strong style="color: #3b82f6;">Email:</strong> ${email}</p>
            <p><strong style="color: #3b82f6;">Subject:</strong> ${subject}</p>
            
            <div style="margin-top: 20px;">
              <p><strong style="color: #3b82f6;">Message:</strong></p>
              <p style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>
          </div>
          
          <p style="color: #666; font-size: 14px; border-top: 1px solid #ddd; padding-top: 10px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
      // Plain text version as fallback
      text: `
        New Contact Message
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}