"use server";

export async function sendAuditReport(email: string, siteUrl: string, results: any) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: "Configuration error" };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Auralogics Labs <hello@auralogicslabs.com>",
        to: [email, "hello@auralogicslabs.com"],
        subject: `Infrastructure Report: ${siteUrl}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:40px;border:1px solid #eee;border-radius:20px;">
            <h1 style="color:#1A3FD8;margin-bottom:24px;">Infrastructure Analysis</h1>
            <p>Probe completed for: <strong>${siteUrl}</strong></p>
            <div style="background:#f8faff;padding:24px;border-radius:16px;margin:32px 0;">
              <h2 style="margin-top:0;">Diagnostic Summary</h2>
              <p><strong>Infrastructure Score:</strong> ${results.score}/100</p>
              <p><strong>Detected TTFB:</strong> ${results.ttfb.current}</p>
              <p><strong>Security Profile:</strong> ${results.security.current}</p>
            </div>
            <h2 style="color:#020617;">Optimized Potential with Nexora</h2>
            <ul>
              <li><strong>TTFB:</strong> ${results.ttfb.optimized} (${results.ttfb.gain} reduction)</li>
              <li><strong>LCP:</strong> ${results.lcp.optimized} (${results.lcp.gain} improvement)</li>
              <li><strong>Security:</strong> Ghost Protocol (100% Cloaked)</li>
            </ul>
            <p style="margin-top:40px;">Our engineering team is at <a href="mailto:hello@auralogicslabs.com">hello@auralogicslabs.com</a></p>
            <hr style="border:0;border-top:1px solid #eee;margin:40px 0;" />
            <p style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">© 2026 Auralogics Labs. Infrastructure Intelligence.</p>
          </div>
        `,
      }),
    });
    const data = await response.json();
    if (response.ok) return { success: true, id: data.id };
    return { success: false, error: data.message };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendLeadEmail(email: string, context: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: "Configuration error" };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Auralogics Labs <hello@auralogicslabs.com>",
        to: ["hello@auralogicslabs.com"],
        reply_to: email,
        subject: `New Lead: ${context}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:40px;border:1px solid #eee;border-radius:20px;">
            <h1 style="color:#1A3FD8;margin-bottom:24px;">New Lead Captured</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${context}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
            <hr style="border:0;border-top:1px solid #eee;margin:32px 0;" />
            <p style="color:#64748b;font-size:12px;">Reply directly to this email to contact the lead.</p>
          </div>
        `,
      }),
    });
    const data = await response.json();
    if (response.ok) return { success: true };
    return { success: false, error: data.message };
  } catch {
    return { success: false, error: "Failed to send" };
  }
}

export async function sendSupportTicket(
  name: string,
  email: string,
  subject: string,
  priority: string,
  description: string
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: "Configuration error" };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Auralogics Labs <hello@auralogicslabs.com>",
        to: ["hello@auralogicslabs.com"],
        reply_to: email,
        subject: `[${priority.toUpperCase()}] Support Ticket: ${subject}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:40px;border:1px solid #eee;border-radius:20px;">
            <h1 style="color:#1A3FD8;margin-bottom:24px;">New Support Ticket</h1>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;font-weight:600;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Priority</td><td style="padding:8px 0;font-weight:600;text-transform:uppercase;">${priority}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Subject</td><td style="padding:8px 0;font-weight:600;">${subject}</td></tr>
            </table>
            <div style="background:#f8faff;padding:24px;border-radius:16px;margin:32px 0;">
              <h3 style="margin-top:0;color:#020617;">Description</h3>
              <p style="white-space:pre-wrap;color:#475569;">${description}</p>
            </div>
            <p style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-top:40px;">
              Submitted: ${new Date().toISOString()} · Nexora Engine Support
            </p>
          </div>
        `,
      }),
    });
    const data = await response.json();
    if (response.ok) return { success: true, id: data.id };
    return { success: false, error: data.message };
  } catch {
    return { success: false, error: "Failed to send ticket" };
  }
}

export async function sendFeatureRequest(
  email: string,
  title: string,
  category: string,
  description: string
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: "Configuration error" };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Auralogics Labs <hello@auralogicslabs.com>",
        to: ["hello@auralogicslabs.com"],
        reply_to: email,
        subject: `[Feature Request] ${title} (${category})`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:40px;border:1px solid #eee;border-radius:20px;">
            <h1 style="color:#1A3FD8;margin-bottom:24px;">New Feature Request</h1>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;width:120px;">From</td><td style="padding:8px 0;font-weight:600;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Category</td><td style="padding:8px 0;font-weight:600;">${category}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Title</td><td style="padding:8px 0;font-weight:600;">${title}</td></tr>
            </table>
            <div style="background:#f8faff;padding:24px;border-radius:16px;margin:32px 0;">
              <h3 style="margin-top:0;color:#020617;">Details</h3>
              <p style="white-space:pre-wrap;color:#475569;">${description}</p>
            </div>
            <p style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-top:40px;">
              Submitted: ${new Date().toISOString()} · Nexora Engine Feature Board
            </p>
          </div>
        `,
      }),
    });
    const data = await response.json();
    if (response.ok) return { success: true, id: data.id };
    return { success: false, error: data.message };
  } catch {
    return { success: false, error: "Failed to send request" };
  }
}
