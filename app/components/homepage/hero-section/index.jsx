"use client";

import { useState } from 'react';
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
import { FiArrowRight, FiCheck, FiCopy, FiLayers, FiServer, FiDatabase, FiCheckCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

const METRICS = [
  { value: '3+ Years', label: 'Enterprise Exp' },
  { value: '15+ Systems', label: 'Shipped to Prod' },
  { value: 'Full-Stack', label: 'Next.js & Postgres' },
  { value: '99.9%', label: 'Uptime Focus' },
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
    <section className="relative py-12 lg:py-20">
      <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-10 lg:gap-14 w-full">
        {/* Left Column: Clean Value Proposition & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Time Roles &amp; Enterprise Contracts</span>
          </div>

          {/* Clean Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.18] tracking-tight">
            Engineering <span className="gradient-text">Scalable ERPs</span> &amp; Modern Web Apps.
          </h1>

          {/* Focused Bio */}
          <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Hi, I&apos;m <span className="text-slate-900 font-semibold">{personalData.name}</span> — a Software Engineer with <span className="text-slate-900 font-medium">3+ years of enterprise experience</span> architecting mission-critical ERP solutions, warehouse management platforms, and high-concurrency systems using <span className="text-slate-900 font-medium">Next.js, TypeScript, Node.js, and PostgreSQL</span>.
          </p>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full my-6 py-3.5 px-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
            {METRICS.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-indigo-600 font-bold text-base lg:text-lg tracking-tight">
                  {metric.value}
                </span>
                <span className="text-slate-500 text-xs font-medium mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold group shadow-sm"
            >
              <span>Explore Projects</span>
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

            {/* Quick Copy Email */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-medium text-slate-600 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900 transition-all"
              title="Click to copy email"
            >
              <span>{personalData.email}</span>
              {copied ? <FiCheck className="text-emerald-600" size={13} /> : <FiCopy className="text-slate-400" size={12} />}
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500">Profiles:</span>
            {personalData.github && (
              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all"
                aria-label="GitHub"
              >
                <BsGithub size={17} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:bg-slate-50 shadow-sm transition-all"
                aria-label="LinkedIn"
              >
                <BsLinkedin size={17} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#ffa116] hover:border-[#ffa116]/40 hover:bg-slate-50 shadow-sm transition-all"
                aria-label="LeetCode"
              >
                <SiLeetcode size={17} />
              </Link>
            )}
          </div>
        </div>

        {/* Right Column: Clean Architectural Showcase Card */}
        <div className="lg:col-span-6 w-full">
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Clean Window Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/80 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-rose-400"></div>
                <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                <span className="text-xs font-mono font-medium text-slate-500 pl-2">
                  fullstack-architecture.spec.ts
                </span>
              </div>
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                Production-Tested
              </span>
            </div>

            {/* Architecture Card Body */}
            <div className="p-6 space-y-4">
              {/* Frontend Tier */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <FiLayers className="text-indigo-600" size={16} />
                    <span className="text-xs font-bold text-slate-900">Frontend &amp; Client Layer</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-600 font-medium">SSR &bull; App Router</span>
                </div>
                <p className="text-xs text-slate-600 mb-2.5">
                  Next.js 14, React 18, TypeScript, Tailwind CSS, Responsive UX &amp; Micro-interactions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Tier */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <FiServer className="text-emerald-600" size={16} />
                    <span className="text-xs font-bold text-slate-900">Backend &amp; Business Logic</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 font-medium">Modular ERP &bull; RBAC</span>
                </div>
                <p className="text-xs text-slate-600 mb-2.5">
                  NestJS, Node.js, Express, RESTful APIs, WebSockets, Role-Based Access Control
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['NestJS', 'Node.js', 'Express', 'WebSockets'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Persistence Tier */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <FiDatabase className="text-sky-600" size={16} />
                    <span className="text-xs font-bold text-slate-900">Database &amp; Infrastructure</span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-600 font-medium">35%+ Query Optimization</span>
                </div>
                <p className="text-xs text-slate-600 mb-2.5">
                  PostgreSQL, Prisma ORM, Docker containerization, AWS, Automated CI/CD Deployments
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['PostgreSQL', 'Prisma', 'Docker', 'AWS', 'CI/CD'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Results Footer */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <FiCheckCircle className="text-emerald-500" size={14} />
                  <span>Mononsoft Ltd. (JMI Group)</span>
                </span>
                <span className="text-slate-500">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
