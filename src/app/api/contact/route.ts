import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { MAIL_FROM, MAIL_TO } from '@/lib/mail';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = MAIL_TO;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function esc(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const subject = String(body?.subject ?? '').trim() || 'General inquiry';
    const message = String(body?.message ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Notify the team
    await resend.emails.send({
      from: MAIL_FROM,
      to: [NOTIFY_TO],
      replyTo: email,
      subject: `Contact form. ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="font-size: 20px; margin: 0 0 20px;">New message from the contact form</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #0f172a;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 100px; vertical-align: top;">Name</td><td style="padding: 8px 0; font-weight: 600;">${esc(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; vertical-align: top;">Email</td><td style="padding: 8px 0; font-weight: 600;">${esc(email)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; vertical-align: top;">Subject</td><td style="padding: 8px 0;">${esc(subject)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap; line-height: 1.6;">${esc(message)}</td></tr>
          </table>
          <p style="font-size: 13px; color: #94a3b8; margin-top: 24px;">Reply directly to this email to respond to ${esc(name)}.</p>
        </div>
      `,
    });

    // Confirmation to the sender (best-effort)
    try {
      await resend.emails.send({
        from: MAIL_FROM,
        to: [email],
        subject: 'We received your message. Auralogics Labs',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #050B25; color: white; border-radius: 24px;">
            <img src="https://auralogicslabs.com/auralogicslabs.svg" alt="Auralogics Labs" style="height: 28px; margin-bottom: 32px;" />
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px; margin: 0 0 16px;">Thanks, ${esc(name.split(' ')[0])}.</h1>
            <p style="font-size: 15px; line-height: 1.6; color: #94a3b8; margin: 0 0 28px;">
              We've received your message and our team will get back to you shortly. In the meantime,
              feel free to explore the platform.
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
  } catch {
    return NextResponse.json({ success: false, error: 'Could not send your message. Please try again.' }, { status: 500 });
  }
}
