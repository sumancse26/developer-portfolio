"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiLayers, FiServer, FiDatabase, FiCpu } from "react-icons/fi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const PILLARS = [
  {
    icon: FiLayers,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    title: 'Modern Frontend Engineering',
    desc: 'Crafting responsive, accessible, high-performance SPAs and SSR apps with Next.js 14, React 18, TypeScript, and Tailwind CSS.'
  },
  {
    icon: FiServer,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    title: 'Scalable Backend & APIs',
    desc: 'Architecting resilient RESTful APIs, WebSocket live streams, and microservices with NestJS, Node.js, Express, and role-based access control (RBAC).'
  },
  {
    icon: FiDatabase,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    title: 'Database & Query Optimization',
    desc: 'Relational data modeling, Prisma migrations, and PostgreSQL indexing—slashing analytics report turnaround times by 35%+.'
  },
  {
    icon: FiCpu,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    title: 'DevOps & Production Delivery',
    desc: 'Multi-stage Docker containerization, automated CI/CD GitHub workflows, and cloud deployments on AWS and Vercel.'
  }
];

const STATS = [
  { label: 'Enterprise Experience', value: '3+ Years' },
  { label: 'Systems Shipped', value: '15+' },
  { label: 'Academic CSE Degrees', value: 'B.Sc & M.Sc' },
  { label: 'Uptime & Reliability', value: '99.9%' }
];

function AboutSection() {
  return (
    <section id="about" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Background &amp; Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl">
          Fullstack Software Engineer dedicated to writing clean code, architecting scalable systems, and shipping production-grade solutions.
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Photo & Key Metrics Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm rounded-2xl bg-white border border-slate-200 p-6 shadow-xl shadow-slate-200/50">
            {/* Profile Avatar */}
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group">
              <Image
                src={personalData.profile}
                alt={personalData.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 192px, 224px"
                priority
              />
            </div>

            {/* Identity & Status */}
            <div className="text-center mt-5">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {personalData.name}
              </h3>
              <p className="text-xs font-mono font-medium text-indigo-600 mt-0.5">
                Fullstack Software Engineer
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Mononsoft Ltd. &bull; Dhaka, Bangladesh
              </p>
            </div>

            {/* Key Quick Stats */}
            <div className="grid grid-cols-2 gap-2.5 mt-5 pt-5 border-t border-slate-100">
              {STATS.map((stat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="block text-base font-bold text-indigo-600">{stat.value}</span>
                  <span className="text-[11px] font-medium text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 mt-5">
              {personalData.resume && (
                <a
                  href={personalData.resume}
                  target="_blank"
                  download="Suman_Sarkar_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
                >
                  <FiDownload size={13} className="text-indigo-600" />
                  <span>Resume</span>
                </a>
              )}
              {personalData.linkedIn && (
                <Link
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin size={15} />
                </Link>
              )}
              {personalData.github && (
                <Link
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all"
                  aria-label="GitHub"
                >
                  <BsGithub size={15} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Engineering Pillars */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="space-y-4 text-slate-600 text-base leading-relaxed">
            <p>
              I am a <span className="text-slate-900 font-semibold">Fullstack Software Engineer</span> with <span className="text-indigo-600 font-semibold">3+ years of enterprise experience</span> architecting, developing, and deploying high-scale web applications and comprehensive ERP systems.
            </p>
            <p>
              Holding both a <span className="text-slate-900 font-semibold">B.Sc and M.Sc in Computer Science &amp; Engineering</span> from Islamic University, Bangladesh, I combine strong theoretical foundations in data structures, algorithms, and system design with practical, industry-tested engineering practices.
            </p>
            <p>
              At <span className="text-slate-900 font-semibold">Mononsoft Ltd. (a JMI Group concern)</span>, I engineer mission-critical systems including cloud warehouse inventory platforms, multi-tenant billing suites, and procurement modules—focusing on sub-second query performance, strict type safety, and seamless user experiences.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`p-2 rounded-lg ${pillar.bgColor}`}>
                      <Icon className={pillar.color} size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;