import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { MAIL_FROM, MAIL_TO } from '@/lib/mail';

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Lead capture, updates & early access. Notifies the team and sends the
 * subscriber a confirmation. Email-only (via Resend), matching /api/free-trial;
 * add Supabase persistence later if you want a stored subscriber list.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body?.email ?? '').trim();
    const source = String(body?.source ?? 'website').trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const when = new Date().toISOString();

    // Notify the team
    await resend.emails.send({
      from: MAIL_FROM,
      to: [MAIL_TO],
      replyTo: email,
      subject: `New subscriber · ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
          <h2 style="font-size: 20px; margin: 0 0 16px;">New updates subscriber</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #0f172a;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Email</td><td style="padding: 8px 0; font-weight: 600;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Source</td><td style="padding: 8px 0;">${source}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Received</td><td style="padding: 8px 0;">${when}</td></tr>
          </table>
        </div>
      `,
    });

    // Confirmation to the subscriber (best-effort)
    try {
      await resend.emails.send({
        from: MAIL_FROM,
        to: [email],
        subject: "You're on the list · Auralogics Labs",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #050B25; color: white; border-radius: 24px;">
            <img src="https://auralogicslabs.com/auralogicslabs.svg" alt="Auralogics Labs" style="height: 28px; margin-bottom: 32px;" />
            <h1 style="font-size: 22px; margin: 0 0 12px;">You're on the list 🎉</h1>
            <p style="font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.7); margin: 0 0 20px;">
              Thanks for subscribing. We'll send you release notes, WordPress performance tips, and early access to Pro features, no spam, unsubscribe anytime.
            </p>
            <a href="https://auralogicslabs.com/downloads" style="display: inline-block; background: #1A3FD8; color: white; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 22px; border-radius: 9999px;">Explore the downloads</a>
          </div>
        `,
      });
    } catch {
      // ignore confirmation failures, the team was still notified
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('subscribe error', err);
    return NextResponse.json({ success: false, error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
