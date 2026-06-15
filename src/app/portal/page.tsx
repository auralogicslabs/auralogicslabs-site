"use client";

import { motion } from "motion/react";
import { ArrowRight, Lock, User, Key, Loader2, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function PortalPageInner() {
  const searchParams = useSearchParams();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const { login, isAuthenticated, isLoading, setPendingSite, verifyEmail } = useAuth();
  const router = useRouter();
  const verifiedRef = useRef(false);

  const siteUrl  = searchParams.get('site_url');
  const siteName = searchParams.get('site_name');
  const ncxToken = searchParams.get('ncx_token');

  // Preserve site connection context from plugin redirect
  useEffect(() => {
    if (siteUrl) {
      setPendingSite({ url: siteUrl, name: siteName || siteUrl, token: ncxToken || undefined });
    }
  }, [siteUrl, siteName, ncxToken, setPendingSite]);

  // Handle email verification link return + redirect when authenticated
  useEffect(() => {
    const isVerified    = searchParams.get('verified') === 'true';
    const verifiedEmail = searchParams.get('email');

    // Call verifyEmail regardless of auth state. the !isAuthenticated guard was wrong
    // (user may click the link from a new tab while already logged in)
    if (isVerified && verifiedEmail && !verifiedRef.current) {
      verifiedRef.current = true;
      verifyEmail(verifiedEmail);
      // verifyEmail updates user state; the effect re-runs and the isAuthenticated
      // branch below handles the redirect.
      return;
    }

    if (isAuthenticated) {
      const dest = siteUrl
        ? `/portal/dashboard?site_url=${encodeURIComponent(siteUrl)}&site_name=${encodeURIComponent(siteName || '')}${ncxToken ? `&ncx_token=${encodeURIComponent(ncxToken)}` : ''}`
        : '/portal/dashboard';
      router.push(dest);
    }
  }, [isAuthenticated, router, siteUrl, siteName, ncxToken, searchParams, verifyEmail]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = await login(email, password);
    if (!success) setError("Email or password not recognised.");
  };

  const contextParams = siteUrl
    ? `?site_url=${encodeURIComponent(siteUrl)}&site_name=${encodeURIComponent(siteName || '')}${ncxToken ? `&ncx_token=${encodeURIComponent(ncxToken)}` : ''}`
    : '';

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-8 relative overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#F39A09]/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <Link href="/" className="mb-12 relative z-10">
        <img src="/auralogicslabs.svg" alt="Auralogics Labs" className="h-10 w-auto brightness-0 invert" />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-[460px] bg-[#0A0F2D] border border-white/10 rounded-[40px] p-10 lg:p-14 shadow-[0_80px_160px_rgba(0,0,0,0.5)]"
      >
        <div className="relative z-10">
          {siteUrl ? (
            <div className="inline-flex items-center gap-3 bg-brand/10 border border-brand/20 px-4 py-2 rounded-full mb-8">
              <Globe size={14} className="text-brand" />
              <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider">
                Connecting: {siteName || siteUrl}
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
              <Lock size={12} className="text-brand" />
              <span className="font-mono text-[9px] font-bold text-white/60 uppercase tracking-[0.3em]">
                Identity Protocol
              </span>
            </div>
          )}

          <h1 className="text-[32px] font-extrabold text-white tracking-tight mb-4 leading-tight">
            Command <br /><span className="text-brand">Center.</span>
          </h1>
          <p className="text-white/40 text-[15px] font-medium mb-10 leading-relaxed">
            {siteUrl
              ? 'Sign in to synchronize your WordPress node.'
              : 'Sign in to access your infrastructure fleet.'}
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest ml-4">
                Account Email
              </label>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 px-6 flex items-center gap-4 focus-within:border-brand transition-all">
                <User size={18} className="text-white/20 shrink-0" />
                <input
                  type="email" required autoComplete="email"
                  value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-transparent border-none text-white font-bold focus:ring-0 placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest ml-4">
                Password
              </label>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 px-6 flex items-center gap-4 focus-within:border-brand transition-all">
                <Key size={18} className="text-white/20 shrink-0" />
                <input
                  type="password" required autoComplete="current-password"
                  value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent border-none text-white font-bold focus:ring-0 placeholder:text-white/10"
                />
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#FF4D4D] text-[12px] font-bold text-center"
              >
                {error}
              </motion.p>
            )}

            <div className="pt-4">
              <button
                type="submit" disabled={isLoading}
                className="w-full bg-brand text-white py-5 rounded-2xl font-extrabold text-[16px] shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-wait"
              >
                {isLoading
                  ? <Loader2 className="h-5 w-5 animate-spin" />
                  : <><span>Sign In</span><ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></>
                }
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
            <p className="text-white/30 text-[13px] font-medium">New to Nexora Engine?</p>
            <Link
              href={`/portal/signup${contextParams}`}
              className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl text-center text-[13px] font-bold transition-all border border-white/10"
            >
              Create Account
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <Loader2 className="h-8 w-8 text-brand animate-spin" />
    </div>
  );
}

export default function PortalPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PortalPageInner />
    </Suspense>
  );
}
