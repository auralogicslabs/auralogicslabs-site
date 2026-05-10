import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Nexora Engine by Auralogics Labs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Subtle Background Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Content Container */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 10 }}>
          {/* Top Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Auralogics Labs
            </div>
          </div>

          {/* Main Title & Metric */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              style={{
                fontSize: 84,
                fontWeight: 700,
                color: '#0F172A',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                maxWidth: 900,
              }}
            >
              Modern Headless Infrastructure for WordPress
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  background: '#F8FAFC',
                  border: '2px solid #E2E8F0',
                  padding: '12px 24px',
                  borderRadius: 8,
                  color: '#1A3FD8',
                  fontSize: 28,
                  fontWeight: 600,
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em',
                }}
              >
                22ms TTFB
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 12,
            background: '#1A3FD8',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
