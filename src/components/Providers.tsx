"use client";

import { AuthProvider } from "@/context/AuthContext";
import { InfrastructureProvider } from "@/context/InfrastructureStore";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <InfrastructureProvider>
        {children}
      </InfrastructureProvider>
    </AuthProvider>
  );
}
