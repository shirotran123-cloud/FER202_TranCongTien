import React from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              TechStore
            </span>
          </div>
          <nav className="flex items-center gap-3 sm:gap-4">
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
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[800px] h-[800px] bg-gradient-to-tr from-indigo-200/50 via-purple-200/50 to-pink-200/50 rounded-full blur-3xl opacity-50 animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-6 border border-indigo-100 shadow-sm">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>New Tech Collection 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Elevate Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Digital Lifestyle
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Discover our curated selection of premium tech gear. Designed for performance, built for the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8 h-12 text-base font-semibold shadow-xl shadow-slate-900/20">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-slate-300 bg-white/50 hover:bg-white text-slate-700 px-8 h-12 text-base font-semibold backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 mr-2 text-indigo-600" />
              Quality Guarantee
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content - Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Trending Now</h2>
            <p className="text-slate-500 text-lg">Our most popular premium tech products.</p>
          </div>
          <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1 group">
            View all products 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div data-testid="product-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
            <ShoppingBag className="w-6 h-6 text-indigo-400" />
            <span className="text-2xl font-bold text-white tracking-wide">TechStore</span>
          </div>
          <p className="mb-6 max-w-md mx-auto">
            Providing the best premium tech gear and accessories for your modern digital lifestyle.
          </p>
          <div className="pt-8 border-t border-slate-800/50 text-sm">
            <p>&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
