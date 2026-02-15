import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'gemedatam@gmail.com',
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

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}