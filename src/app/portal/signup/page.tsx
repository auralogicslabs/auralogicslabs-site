"use client";

import { motion } from "motion/react";
import { ArrowRight, Lock, User, Mail, Loader2, CheckCircle2, Globe, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function SignupPageInner() {
  const searchParams = useSearchParams();
  const [name, setName]             = useState("");
  const [email, setEmail]           = useState("");
  const [password, setPassword]     = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading]   = useState(false);
  const [isSuccess, setIsSuccess]   = useState(false);
  const [error, setError]           = useState("");

  const { signup, setPendingSite } = useAuth();
  const router = useRouter();

  const siteUrl  = searchParams.get('site_url');
  const siteName = searchParams.get('site_name');
  const ncxToken = searchParams.get('ncx_token');

  useEffect(() => {
    if (siteUrl) {
      setPendingSite({ url: siteUrl, name: siteName || siteUrl, token: ncxToken || undefined });
    }
  }, [siteUrl, siteName, ncxToken, setPendingSite]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await signup(email, name, password);
    if (!result.success) {
      setError(result.error || 'Registration failed. Please try again.');
      setIsLoading(false);
      return;
    }

    // Send verification email via Resend
    try {
      const res = await fetch('/api/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email, name,
          siteContext: siteUrl ? { url: siteUrl, name: siteName, token: ncxToken } : null,
        }),
      });
      const data = await res.json();
      if (!data.success) console.warn('Verification email not delivered:', data.error);
    } catch (err) {
      console.error('Email dispatch failed:', err);
    }

    setIsSuccess(true);
    setIsLoading(false);
  };

  const contextParams = siteUrl
    ? `?site_url=${encodeURIComponent(siteUrl)}&site_name=${encodeURIComponent(siteName || '')}${ncxToken ? `&ncx_token=${encodeURIComponent(ncxToken)}` : ''}`
    : '';

  const dashboardUrl = siteUrl
    ? `/portal/dashboard?site_url=${encodeURIComponent(siteUrl)}&site_name=${encodeURIComponent(siteName || '')}${ncxToken ? `&ncx_token=${encodeURIComponent(ncxToken)}` : ''}`
    : '/portal/dashboard';

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
        className="relative w-full max-w-[500px] bg-[#0A0F2D] border border-white/10 rounded-[40px] p-10 lg:p-14 shadow-[0_80px_160px_rgba(0,0,0,0.5)]"
      >
        <div className="relative z-10">
          {isSuccess ? (
            /* ── Verification pending screen ── */
            <div className="text-center py-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="h-20 w-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30"
              >
                <Mail size={32} className="text-emerald-500" />
              </motion.div>

              <h2 className="text-[28px] font-extrabold text-white mb-4 tracking-tight">
                Check your inbox.
              </h2>
              <p className="text-white/40 font-medium leading-relaxed mb-8">
                We&apos;ve sent a verification link to{' '}
                <span className="text-white font-bold">{email}</span>.
                Click it to confirm your account.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => router.push(dashboardUrl)}
                  className="w-full bg-brand text-white py-4 rounded-2xl font-extrabold text-[14px] flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl shadow-brand/20"
                >
                  Continue to Dashboard <ArrowRight size={16} />
                </button>
                <p className="text-white/20 text-[11px] font-medium">
                  You can verify your email later — some features require a verified address.
                </p>
              </div>
            </div>
          ) : (
            /* ── Registration form ── */
            <>
              {siteUrl ? (
                <div className="inline-flex items-center gap-3 bg-brand/10 border border-brand/20 px-4 py-2 rounded-full mb-8">
                  <Globe size={14} className="text-brand" />
                  <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider">
                    Connecting: {siteName || siteUrl}
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
                  <CheckCircle2 size={12} className="text-brand" />
                  <span className="font-mono text-[9px] font-bold text-white/60 uppercase tracking-[0.3em]">
                    New Account
                  </span>
                </div>
              )}

              <h1 className="text-[32px] font-extrabold text-white tracking-tight mb-4 leading-tight">
                Create your <br /><span className="text-brand">account.</span>
              </h1>
              <p className="text-white/40 text-[15px] font-medium mb-10 leading-relaxed">
                {siteUrl
                  ? `Register to connect ${siteName || siteUrl} to Nexora Engine.`
                  : 'Deploy Nexora Engine across your entire WordPress fleet.'}
              </p>

              <form onSubmit={handleSignup} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest ml-4">
                    Full Name
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 px-6 flex items-center gap-4 focus-within:border-brand transition-all">
                    <User size={18} className="text-white/20 shrink-0" />
                    <input
                      type="text" required autoComplete="name"
                      value={name} onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-transparent border-none text-white font-bold focus:ring-0 placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest ml-4">
                    Email Address
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 px-6 flex items-center gap-4 focus-within:border-brand transition-all">
                    <Mail size={18} className="text-white/20 shrink-0" />
                    <input
                      type="email" required autoComplete="email"
                      value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-transparent border-none text-white font-bold focus:ring-0 placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest ml-4">
                    Password
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 px-6 flex items-center gap-4 focus-within:border-brand transition-all">
                    <Lock size={18} className="text-white/20 shrink-0" />
                    <input
                      type={showPassword ? "text" : "password"} required autoComplete="new-password"
                      value={password} onChange={e => setPassword(e.target.value)}
                      placeholder="Choose a strong password"
                      className="w-full bg-transparent border-none text-white font-bold focus:ring-0 placeholder:text-white/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(v => !v)}
                      className="text-white/20 hover:text-white/60 transition-colors shrink-0"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
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

                <div className="pt-6">
                  <button
                    type="submit" disabled={isLoading}
                    className="w-full bg-brand text-white py-5 rounded-2xl font-extrabold text-[16px] shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 group disabled:opacity-50"
                  >
                    {isLoading
                      ? <Loader2 className="animate-spin" size={20} />
                      : <><span>Create Account</span><ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} /></>
                    }
                  </button>
                </div>
              </form>

              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <p className="text-white/30 text-[13px] font-medium">
                  Already have an account?{' '}
                  <Link href={`/portal${contextParams}`} className="text-brand font-bold hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </>
          )}
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

export default function SignupPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SignupPageInner />
    </Suspense>
  );
}
