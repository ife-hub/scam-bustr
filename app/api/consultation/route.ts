import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { full_name, email, phone, amount_lost, country, scam_company, scam_type, case_outline } = await req.json();

  if (!full_name || !email || !amount_lost || !country || !scam_company) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"ScamBustr Consultations" <${process.env.SMTP_USER}>`,
      to: 'help@scambustr.com',
      replyTo: email,
      subject: `New Consultation Request from ${full_name}`,
      html: `
        <p><strong>Full Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Amount Lost:</strong> ${amount_lost}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Scam Company:</strong> ${scam_company}</p>
        <p><strong>Scam Type:</strong> ${scam_type || 'Not specified'}</p>
        <p><strong>Case Outline:</strong><br/>${case_outline || 'N/A'}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}