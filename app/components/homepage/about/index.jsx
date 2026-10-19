"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiBriefcase, FiAward, FiArrowUpRight } from "react-icons/fi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const FACETS = [
  {
    id: "system-design",
    accent: "#3b82f6", // blue-500
    title: "System Design & ERPs",
    desc: "I draw the boundaries first: modular domains, RBAC permission matrices, and transactional state machines that keep enterprise systems scalable and testable.",
    colStart: "lg:col-start-1 lg:row-start-1",
    dotClass: "bg-blue-500",
    borderHover: "hover:border-blue-400/60",
    glowColor: "rgba(59, 130, 246, 0.08)"
  },
  {
    id: "problem-solving",
    accent: "#10b981", // emerald-500
    title: "Database Performance",
    desc: "Finding the query that got slow as the data grew, and the strategic composite index, cache layer, or schema refactor that puts latency back under 50ms (35%+ gain).",
    colStart: "lg:col-start-3 lg:row-start-1",
    dotClass: "bg-emerald-500",
    borderHover: "hover:border-emerald-400/60",
    glowColor: "rgba(16, 185, 129, 0.08)"
  },
  {
    id: "type-safety",
    accent: "#f97316", // orange-500
    title: "End-to-End Type Safety",
    desc: "Unbreakable contracts from Next.js 14 App Router server actions down to NestJS DTOs and Prisma PostgreSQL models—eliminating runtime surprises before production.",
    colStart: "lg:col-start-1 lg:row-start-3",
    dotClass: "bg-orange-500",
    borderHover: "hover:border-orange-400/60",
    glowColor: "rgba(249, 115, 22, 0.08)"
  },
  {
    id: "the-stack",
    accent: "#f43f5e", // rose-500
    title: "The Production Stack",
    desc: "3+ years engineering with Next.js, React, TypeScript, NestJS, Node.js, and PostgreSQL—plus the multi-stage Docker images and CI/CD pipelines carrying them to production.",
    colStart: "lg:col-start-3 lg:row-start-3",
    dotClass: "bg-rose-500",
    borderHover: "hover:border-rose-400/60",
    glowColor: "rgba(244, 63, 94, 0.08)"
  }
];

function AboutSection() {
  return (
    <section id="about" className="relative px-2 sm:px-4 py-20 lg:py-28 scroll-mt-24">
      <div className="container mx-auto flex max-w-6xl flex-col gap-12">
        {/* Section Heading like kzaman.com */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Engineering
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-900 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 mt-3 max-w-xl text-base sm:text-lg leading-relaxed">
            How I think about system design, what I build with, and the problems I solve in enterprise production.
          </p>
        </div>

        {/* Desktop Connected Radial Hub (kzaman signature visual) */}
        <div className="relative mx-auto hidden w-full max-w-4xl lg:grid lg:min-h-[28rem] lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-[1fr_auto_1fr] lg:place-items-center lg:gap-x-12 lg:gap-y-8">
          {/* Connecting SVG lines from center (50, 50) to corners */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden size-full lg:block -z-0"
          >
            {/* Top-Left: Blue */}
            <path
              d="M50 50 L18 20"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeDasharray="4 3"
              opacity="0.65"
            />
            {/* Top-Right: Emerald */}
            <path
              d="M50 50 L82 20"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeDasharray="4 3"
              opacity="0.65"
            />
            {/* Bottom-Left: Orange */}
            <path
              d="M50 50 L18 80"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeDasharray="4 3"
              opacity="0.65"
            />
            {/* Bottom-Right: Rose */}
            <path
              d="M50 50 L82 80"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeDasharray="4 3"
              opacity="0.65"
            />
          </svg>

          {/* Center Circular Profile Photo with glowing aura */}
          <div className="relative z-10 flex justify-center lg:col-start-2 lg:row-start-2">
            <div className="relative group">
              {/* Multi-color ambient gradient aura */}
              <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-blue-500 via-emerald-400 to-rose-400 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500 animate-pulse-slow"></div>
              
              <div className="relative size-40 sm:size-44 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-white">
                <Image
                  src={personalData.profile}
                  alt={personalData.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="176px"
                  priority
                />
              </div>

              {/* Status pill under photo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-mono font-medium shadow-md border border-slate-700 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Mononsoft &bull; JMI Group</span>
              </div>
            </div>
          </div>

          {/* 4 Connected Facet Cards */}
          {FACETS.map((facet) => (
            <div
              key={facet.id}
              className={`z-10 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-5 shadow-sm transition-all duration-300 hover:shadow-lg ${facet.borderHover} hover:-translate-y-1 w-full max-w-sm ${facet.colStart}`}
              style={{
                boxShadow: `0 4px 20px -2px ${facet.glowColor}`
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`size-2.5 rounded-full ${facet.dotClass}`}></span>
                <h3 className="text-slate-900 font-bold text-sm tracking-tight">{facet.title}</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                {facet.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Responsive Fallback for Radial Hub */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          {/* Mobile Profile Photo */}
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500 via-emerald-400 to-rose-400 opacity-60 blur-md"></div>
            <div className="relative size-36 rounded-full overflow-hidden ring-4 ring-white shadow-xl bg-white">
              <Image
                src={personalData.profile}
                alt={personalData.name}
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-mono shadow-md border border-slate-700 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>Mononsoft Ltd.</span>
            </div>
          </div>

          {/* Mobile Facets Grid */}
          <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {FACETS.map((facet) => (
              <div
                key={facet.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`size-2.5 rounded-full ${facet.dotClass}`}></span>
                  <h3 className="text-slate-900 font-bold text-sm">{facet.title}</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {facet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Career Story Bento Grid (Inspired by kzaman.com) */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] mt-4">
          {/* Left Bento: In-depth Engineering Narrative */}
          <div className="space-y-4 rounded-2xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
            <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
              Behind the Screen
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I design and build the systems behind the screen: relational schemas, RESTful &amp; WebSocket APIs, asynchronous queues, and role-based workflows written in <strong className="text-slate-900">TypeScript, Next.js 14, NestJS, and Node.js</strong>, held up by <strong className="text-slate-900">PostgreSQL, Prisma, Docker, and AWS</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At <strong className="text-slate-900">Mononsoft Ltd. (a JMI Group concern)</strong>, that work powers enterprise operations—warehouse inventories, procurement suites, and multi-tenant billing portals—where a system either handles concurrency cleanly or it fails.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The work I enjoy most sits right where architecture meets speed: isolating slow analytical queries, structuring composite indexes, drawing clean domain boundaries, and leaving code the next engineer can test and maintain effortlessly.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
              {personalData.resume && (
                <a
                  href={personalData.resume}
                  target="_blank"
                  download="Suman_Sarkar_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  <FiDownload size={13} className="text-indigo-600" />
                  <span>Download Complete Resume</span>
                </a>
              )}
              {personalData.linkedIn && (
                <Link
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0077b5] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <BsLinkedin size={15} />
                </Link>
              )}
              {personalData.github && (
                <Link
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <BsGithub size={15} />
                </Link>
              )}
              {personalData.leetcode && (
                <Link
                  href={personalData.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#ffa116] transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={15} />
                </Link>
              )}
            </div>
          </div>

          {/* Right Bento: Structured Timeline (Experience & Education) */}
          <div className="space-y-6 rounded-2xl border border-slate-200/90 bg-white/95 p-6 sm:p-7 backdrop-blur-sm shadow-sm flex flex-col justify-between">
            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3.5">
                <FiBriefcase size={14} />
                <span>Experience</span>
              </div>
              <ul className="space-y-4">
                <li className="relative pl-4 border-l-2 border-indigo-200">
                  <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-indigo-600"></span>
                  <p className="text-slate-900 font-bold text-sm">Software Engineer</p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Mononsoft Ltd. (JMI Group) &bull; Dec 2024 - Present
                  </p>
                </li>
                <li className="relative pl-4 border-l-2 border-slate-200">
                  <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-slate-400"></span>
                  <p className="text-slate-900 font-semibold text-sm">Jr. Software Engineer</p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Mononsoft Ltd. (JMI Group) &bull; Jan 2021 - Dec 2024
                  </p>
                </li>
              </ul>
            </div>

            {/* Academic CSE Degrees */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3.5">
                <FiAward size={14} />
                <span>Education</span>
              </div>
              <ul className="space-y-3">
                <li className="relative pl-4 border-l-2 border-emerald-200">
                  <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-emerald-600"></span>
                  <p className="text-slate-900 font-bold text-sm">M.Sc in Computer Science &amp; Eng.</p>
                  <p className="text-slate-500 text-xs mt-0.5">Islamic University, Bangladesh</p>
                </li>
                <li className="relative pl-4 border-l-2 border-slate-200">
                  <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-slate-400"></span>
                  <p className="text-slate-900 font-semibold text-sm">B.Sc in Computer Science &amp; Eng.</p>
                  <p className="text-slate-500 text-xs mt-0.5">Islamic University, Bangladesh</p>
                </li>
              </ul>
            </div>

            {/* Quick Location / Work Status */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Timezone: UTC+6</span>
              <span className="text-emerald-600 font-semibold">Available for Global Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;