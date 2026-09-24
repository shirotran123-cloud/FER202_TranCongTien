"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    let newErrors: { email?: string; password?: string } = {};
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccess(true);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-8">
      <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-lg border border-white/20 transition-transform duration-300 hover:scale-[1.02]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-white/70 text-sm">Please sign in to your account</p>
        </div>

        {success && (
          <div data-testid="form-success" className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-100 text-sm text-center font-medium">
            Login successful (demo)
          </div>
        )}

        <form data-testid="login-form" className="space-y-5" noValidate onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">
              Email
            </Label>
            <Input
              data-testid="login-email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              aria-invalid={!!errors.email}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:border-white focus-visible:ring-white/30"
            />
            {errors.email && (
              <p data-testid="error-email" className="text-sm text-red-300">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-white font-medium">
                Password
              </Label>
              <Link
                href="#"
                className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              data-testid="login-password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password)
                  setErrors({ ...errors, password: undefined });
              }}
              aria-invalid={!!errors.password}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:border-white focus-visible:ring-white/30"
            />
            {errors.password && (
              <p data-testid="error-password" className="text-sm text-red-300">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              data-testid="login-submit"
              type="submit"
              className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-semibold h-11 rounded-lg shadow transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign In
            </Button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-white/60">
          Not a member?{" "}
          <Link
            href="/register"
            className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
          >
            Register now
          </Link>
        </p>
      </div>
    </main>
  );
}
