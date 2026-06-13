// Centralized email sender configuration.
//
// The `from` address must be on a domain verified in Resend. Override via the
// RESEND_FROM env var without touching code (e.g. "Auralogics Labs <noreply@auralogicslabs.com>").
export const MAIL_FROM =
  process.env.RESEND_FROM || 'Auralogics Labs <hello@auralogicslabs.com>';

// Where internal notifications (contact form, trial requests) are delivered.
export const MAIL_TO = process.env.RESEND_TO || 'hello@auralogicslabs.com';
