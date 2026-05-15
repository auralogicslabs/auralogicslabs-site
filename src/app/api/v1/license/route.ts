import { NextResponse } from 'next/server';

/**
 * LICENSE VERIFICATION API (v1)
 * 
 * This endpoint is called by the WordPress plugin to determine its 
 * entitlement level (Free, Pro, or Enterprise).
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const site_url = searchParams.get('site_url');
  const portal_key = searchParams.get('portal_key');

  if (!portal_key || !portal_key.startsWith('prtl_')) {
    return NextResponse.json({ 
      success: false, 
      license: "expired",
      message: "Valid portal key required for entitlement sync." 
    }, { status: 401 });
  }

  // Simulation of Entitlement Logic
  // For the demo, we'll return 'pro' if the key contains 'PRO' or just default to 'pro' for testing
  const isPro = true; 

  return NextResponse.json({
    success: true,
    license: {
      type: isPro ? "pro" : "free",
      status: "active",
      expires: "2027-12-31T23:59:59Z",
      features: [
        "ghost_protocol_cloaking",
        "atomic_regeneration",
        "advanced_telemetry",
        "white_labeling",
        "multisite_sync"
      ],
      owner: "Auralogics Labs Demo User"
    }
  });
}
