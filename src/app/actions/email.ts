"use server";

export async function sendAuditReport(email: string, siteUrl: string, results: any) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return { success: false, error: "Configuration error" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Auralogics Labs <audit@auralogicslabs.com>",
        to: [email, "hello@auralogicslabs.com"],
        subject: `Technical Infrastructure Report: ${siteUrl}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #eee; border-radius: 20px;">
            <h1 style="color: #1A3FD8; margin-bottom: 24px;">Infrastructure Analysis</h1>
            <p>We have completed the technical probe for: <strong>${siteUrl}</strong></p>
            
            <div style="background: #f8faff; padding: 24px; border-radius: 16px; margin: 32px 0;">
              <h2 style="margin-top: 0;">Diagnostic Summary</h2>
              <p><strong>Infrastructure Score:</strong> ${results.score}/100</p>
              <p><strong>Detected TTFB:</strong> ${results.ttfb.current}</p>
              <p><strong>Security Profile:</strong> ${results.security.current}</p>
            </div>

            <h2 style="color: #020617;">Optimized Potential</h2>
            <p>With Nexora Engine active, your infrastructure achieves the following benchmarks:</p>
            <ul>
              <li><strong>TTFB:</strong> ${results.ttfb.optimized} (${results.ttfb.gain} reduction)</li>
              <li><strong>LCP:</strong> ${results.lcp.optimized} (${results.lcp.gain} improvement)</li>
              <li><strong>Security:</strong> Ghost Protocol (100% Cloaked)</li>
            </ul>

            <p style="margin-top: 40px;">Our engineering team is available at <a href="mailto:hello@auralogicslabs.com">hello@auralogicslabs.com</a> to assist with your deployment roadmap.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 40px 0;" />
            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">© 2026 Auralogics Labs. Infrastructure Intelligence.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return { success: true, id: data.id };
    } else {
      console.error("Resend API error:", data);
      return { success: false, error: data.message };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
