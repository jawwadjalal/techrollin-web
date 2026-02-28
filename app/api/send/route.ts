import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      // Email kahan se aa rahi hai
      from: 'TechRollin Inquiry <inquiry@techrollin.com>',
      
      // Email kahan jani chahiye (Sirf aapka business inbox)
      to: ['inquiry@techrollin.com'], 
      
      subject: `New Web Inquiry: ${subject}`,
      
      // Is se jab aap reply karenge toh client ko jayega
      replyTo: email, 
      
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Client Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 30px;">This email was sent from the TechRollin contact form.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}