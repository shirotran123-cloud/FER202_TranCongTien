"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl group-hover:scale-105 transition-transform">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            TechStore
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-4">
          {user ? (
            <>
              <Link href="/account" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
                <span data-testid="user-email">{user.email}</span>
              </Link>
              <Button
                data-testid="btn-logout"
                variant="ghost"
                onClick={() => signOut()}
                className="font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" passHref legacyBehavior>
                <Button data-testid="btn-login" variant="ghost" className="font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                  Log in
                </Button>
              </Link>
              <Link href="/register" passHref legacyBehavior>
                <Button data-testid="btn-register" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all rounded-full px-6">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
