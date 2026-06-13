import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { MAIL_FROM } from '@/lib/mail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, siteContext } = await req.json();
    
    // Build context-aware verification URL
    let verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/portal?verified=true&email=${encodeURIComponent(email)}`;
    if (siteContext?.url) {
      verifyUrl += `&site_url=${encodeURIComponent(siteContext.url)}&site_name=${encodeURIComponent(siteContext.name || '')}${siteContext.token ? `&ncx_token=${encodeURIComponent(siteContext.token)}` : ''}`;
    }

    const data = await resend.emails.send({
      from: MAIL_FROM,
      to: [email],
      subject: 'Authorize Your Infrastructure Identity',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #050B25; color: white; border-radius: 40px;">
          <img src="https://auralogicslabs.com/auralogicslabs.svg" alt="Auralogics Labs" style="height: 30px; margin-bottom: 40px;" />
          <h1 style="font-size: 32px; font-weight: 900; letter-spacing: -1px; margin-bottom: 20px;">Hello, ${name.split(' ')[0]}.</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #94a3b8; margin-bottom: 40px;">
            Your Nexora Engine orchestration profile is ready. Please verify your identity to begin mapping your infrastructure fleet and unlocking node intelligence.
          </p>
          <a href="${verifyUrl}" style="display: inline-block; background: #1A3FD8; color: white; padding: 16px 32px; border-radius: 16px; text-decoration: none; font-weight: bold; font-size: 14px;">
            Verify Identity & Enter Portal
          </a>
          <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #475569;">
            Nexora Engine Protocol • Secure Infrastructure Orchestration<br />
            © 2026 Auralogics Labs. All rights reserved.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
