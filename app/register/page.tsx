"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
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

    let newErrors: {
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    let isValid = true;

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

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
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
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
            Create an Account
          </h1>
          <p className="text-white/70 text-sm">Join us today</p>
        </div>

        {success && (
          <div data-testid="form-success" className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-100 text-sm text-center font-medium">
            Registration successful (demo)
          </div>
        )}

        <form data-testid="register-form" className="space-y-4" noValidate onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white font-medium">
              Full Name
            </Label>
            <Input
              data-testid="register-name"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName)
                  setErrors({ ...errors, fullName: undefined });
              }}
              aria-invalid={!!errors.fullName}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:border-white focus-visible:ring-white/30"
            />
            {errors.fullName && (
              <p data-testid="error-name" className="text-sm text-red-300">{errors.fullName}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">
              Email
            </Label>
            <Input
              data-testid="register-email"
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
            <Label htmlFor="password" className="text-white font-medium">
              Password
            </Label>
            <Input
              data-testid="register-password"
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a password (min. 6 characters)"
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

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white font-medium">
              Confirm Password
            </Label>
            <Input
              data-testid="register-confirm-password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword)
                  setErrors({ ...errors, confirmPassword: undefined });
              }}
              aria-invalid={!!errors.confirmPassword}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:border-white focus-visible:ring-white/30"
            />
            {errors.confirmPassword && (
              <p data-testid="error-confirm-password" className="text-sm text-red-300">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              data-testid="register-submit"
              type="submit"
              className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-semibold h-11 rounded-lg shadow transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Register
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
