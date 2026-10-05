"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";

export default function AccountPage() {
  const { user, loading } = React.useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 font-sans flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Your Account</h1>
          
          <div data-testid="account-page" className="space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-slate-500">Email Address</span>
              <span data-testid="account-email" className="text-lg font-semibold text-slate-800">
                {user.email}
              </span>
            </div>
            
            {/* Add more account details here if needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
