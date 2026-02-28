import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Humari API key jo .env.local mein hai, ye usay uthaye ga
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Form se jo data aaye ga, usay yahan pakrain gay
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'TechRollin <onboarding@resend.dev>',
      to: ['jalaljawwad@gmail.com'], // <-- YAHAN APNI ASLI GMAIL LIKHEN
      subject: `New Inquiry: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}