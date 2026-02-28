import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// API key process.env se uthayi jaye gi
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Form data extraction
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      // Pehle yahan onboarding@resend.dev tha, ab official email use hoga
      from: 'TechRollin Inquiry <inquiry@techrollin.com>',
      to: ['inquiry@techrollin.com', 'jalaljawwad@gmail.com'], // Dono jagah alert milay ga
      subject: `New Inquiry: ${subject}`,
      replyTo: email, // Is se aap direct client ko reply kar saken ge
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0891b2;">New Business Inquiry from TechRollin</h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Client Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;"><strong>Message:</strong><br />${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ success: false, error });
  }
}