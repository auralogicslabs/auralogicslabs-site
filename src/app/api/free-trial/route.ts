import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { MAIL_FROM, MAIL_TO } from '@/lib/mail';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = MAIL_TO;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body?.email ?? '').trim();
    const source = String(body?.source ?? 'website').trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'A valid email is required.' }, { status: 400 });
    }

    const when = new Date().toISOString();

    // 1) Notify the team at hello@auralogicslabs.com
    await resend.emails.send({
      from: MAIL_FROM,
      to: [NOTIFY_TO],
      replyTo: email,
      subject: `New 14-day free trial request. ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
          <h2 style="font-size: 20px; margin: 0 0 16px;">New free trial request</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #0f172a;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Email</td><td style="padding: 8px 0; font-weight: 600;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Source</td><td style="padding: 8px 0;">${source}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Received</td><td style="padding: 8px 0;">${when}</td></tr>
          </table>
          <p style="font-size: 13px; color: #94a3b8; margin-top: 24px;">Reply to this email to reach the requester directly.</p>
        </div>
      `,
    });

    // 2) Confirmation to the person who signed up (best-effort)
    try {
      await resend.emails.send({
        from: MAIL_FROM,
        to: [email],
        subject: 'Your Auralogics Labs free trial',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #050B25; color: white; border-radius: 24px;">
            <img src="https://auralogicslabs.com/auralogicslabs.svg" alt="Auralogics Labs" style="height: 28px; margin-bottom: 32px;" />
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px; margin: 0 0 16px;">You're on the list.</h1>
            <p style="font-size: 15px; line-height: 1.6; color: #94a3b8; margin: 0 0 28px;">
              Thanks for your interest in a 14-day free trial of the Auralogics Labs platform.
              Our team will reach out shortly with your trial access. In the meantime, explore what's included.
            </p>
            <a href="https://auralogicslabs.com/products" style="display: inline-block; background: #1A3FD8; color: white; padding: 14px 28px; border-radius: 14px; text-decoration: none; font-weight: bold; font-size: 14px;">
              Explore the platform
            </a>
            <div style="margin-top: 48px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #475569;">
              © ${new Date().getFullYear()} Auralogics Labs. All rights reserved.
            </div>
          </div>
        `,
      });
    } catch {
      // confirmation is non-critical
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Could not submit your request.' }, { status: 500 });
  }
}
