"use client";

import React from "react";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#121212] p-6 sm:p-12 relative overflow-hidden text-white">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-600/20 blur-[120px]"></div>

      <div className="w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text and Intro */}
        <div className="space-y-8 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent uppercase">
              Hello, I'm
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight drop-shadow-2xl">
            Trần Công Tiến
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed font-light">
            A passionate Developer focused on creating beautiful, functional, and user-centric digital experiences. Welcome to my space on the web.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <a href="#" className="px-8 py-3.5 rounded-xl bg-white text-black font-bold hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-95 duration-300">
              Contact Me
            </a>
            <a href="#" className="px-8 py-3.5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md font-bold hover:bg-white/10 hover:border-white/40 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-95 duration-300">
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side: Image/Avatar Card */}
        <div className="order-1 md:order-2 flex justify-center w-full relative perspective-1000">
          <div className="relative group w-72 h-72 md:w-96 md:h-96 transition-transform duration-700 ease-out hover:rotate-y-12 hover:rotate-x-12">
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-slow"></div>
            
            {/* Card Content */}
            <div className="relative w-full h-full rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50 z-0 pointer-events-none"></div>
              
              {/* Initials since no image is provided */}
              <div className="z-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center shadow-[inset_0_-8px_16px_rgba(0,0,0,0.4)] mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-6xl font-black text-white tracking-tighter drop-shadow-lg">TCT</span>
              </div>
              <h3 className="z-10 text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-rose-300 transition-all duration-500">Tiến Trần</h3>
              <p className="z-10 text-sm text-white/60 mt-2 uppercase tracking-[0.3em] font-semibold">Developer</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills / Stack Section (Glassmorphism bar) */}
      <div className="w-full max-w-5xl mt-24 z-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center shadow-2xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-white/40 mb-6 uppercase">Tech Stack & Tools</p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'].map((tech) => (
            <div key={tech} className="group flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110">
                <div className="w-6 h-6 bg-white/40 group-hover:bg-gradient-to-br group-hover:from-indigo-400 group-hover:to-rose-400 rounded-sm transition-all duration-300"></div>
              </div>
              <span className="text-white/50 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
