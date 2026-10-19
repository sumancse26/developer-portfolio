"use client";

import { useState } from 'react';
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode, SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiNestjs, SiPostgresql, SiDocker, SiTailwindcss } from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
import { FiArrowRight, FiCheck, FiCopy, FiChevronDown, FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';

const CORE_STACK = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900' },
  { name: 'React', icon: SiReact, color: 'text-sky-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-red-600' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-600' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-700' },
  { name: 'Docker', icon: SiDocker, color: 'text-sky-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
];

function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center items-center text-center px-4 pt-12 pb-16 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="animate-pulse-slow absolute top-[-10%] left-[10%] h-[50vh] w-[50vw] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="animate-pulse-slow absolute top-[20%] right-[10%] h-[45vh] w-[45vw] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="animate-pulse-slow absolute bottom-[-10%] left-[25%] h-[40vh] w-[40vw] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Full-Time Roles &amp; Contracts</span>
        </div>

        {/* Clean, Bold Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.08]">
          Md. Suman <span className="gradient-text">Sarkar</span>
        </h1>

        {/* Core Fullstack Designation & Bio */}
        <p className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          Fullstack Software Engineer
        </p>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
          Specializing in <span className="text-slate-900 font-semibold">Next.js &amp; React (Latest)</span>, high-performance <span className="text-slate-900 font-semibold">caching strategies</span>, and advanced <span className="text-slate-900 font-semibold">memoization techniques</span> with type-safe Node.js and PostgreSQL backends.
        </p>

        {/* Core Competency Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-mono text-slate-600">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            <span>Next.js &amp; React (Latest)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span>Advanced Caching &amp; Memoization</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
            <span>Fullstack Type Safety &amp; SQL</span>
          </span>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 w-full sm:w-auto">
          <a
            href="#projects"
            className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold group shadow-sm"
          >
            <span>Explore Work</span>
            <FiArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          {personalData.resume && (
            <a
              href={personalData.resume}
              target="_blank"
              download="Suman_Sarkar_Resume.pdf"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
            >
              <span>Resume</span>
              <MdDownload size={16} className="text-slate-500" />
            </a>
          )}

          {/* 1-Click Copy Email */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all border border-slate-200/80 shadow-sm"
            title="Click to copy email address"
          >
            <FiMail size={14} className="text-indigo-600" />
            <span>{personalData.email}</span>
            {copied ? <FiCheck className="text-emerald-600" size={13} /> : <FiCopy className="text-slate-400" size={12} />}
          </button>
        </div>

        {/* Social Marks Row (Inspired by kzaman.com) */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 mt-8">
          {personalData.github && (
            <Link
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all hover:scale-110"
            >
              <BsGithub size={18} />
            </Link>
          )}

          {personalData.linkedIn && (
            <Link
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-slate-50 shadow-sm transition-all hover:scale-110"
            >
              <BsLinkedin size={18} />
            </Link>
          )}

          {personalData.leetcode && (
            <Link
              href={personalData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              title="LeetCode Problem Solving"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#ffa116] hover:border-[#ffa116]/50 hover:bg-slate-50 shadow-sm transition-all hover:scale-110"
            >
              <SiLeetcode size={18} />
            </Link>
          )}
        </div>

        {/* Clean Tech Pills Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 max-w-2xl">
          {CORE_STACK.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200 text-xs font-medium text-slate-700 shadow-sm"
              >
                <Icon className={`${item.color} text-sm`} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Elegant Scroll Down Cue to About Section */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="mt-12 flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-colors group cursor-pointer"
      >
        <span className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-indigo-400 flex justify-center pt-1.5 transition-colors">
          <span className="w-1 h-2 rounded-full bg-slate-400 group-hover:bg-indigo-600 animate-bounce"></span>
        </span>
        <FiChevronDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
      </a>
    </section>
  );
}

export default HeroSection;
