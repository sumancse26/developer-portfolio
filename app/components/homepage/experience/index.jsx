"use client";

import { experiences } from "@/utils/data/experience";
import { FiCheckCircle, FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";

function Experience() {
  return (
    <section id="experience" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Career &amp; Enterprise Milestones
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl">
          Architecting mission-critical ERP solutions, optimizing database performance, and shipping production software.
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      {/* Experience Cards Stack */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
          >
            {/* Top Bar with Title, Company & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {exp.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {exp.type || 'Full-time'}
                  </span>
                  {idx === 0 && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Present Role
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-slate-600 font-medium flex-wrap">
                  <span className="text-slate-800 font-semibold flex items-center gap-1.5">
                    <FiBriefcase className="text-indigo-600" size={14} />
                    {exp.company}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1 text-slate-500">
                      <FiMapPin size={13} className="text-slate-400" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Duration Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-600 whitespace-nowrap self-start">
                <FiCalendar size={13} className="text-indigo-600" />
                <span>{exp.duration}</span>
              </div>
            </div>

            {/* Summary */}
            {exp.summary && (
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                {exp.summary}
              </p>
            )}

            {/* Highlights & Deliverables */}
            {exp.highlights && exp.highlights.length > 0 && (
              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Key Technical Deliverables &amp; Impact:
                </p>
                <div className="space-y-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <FiCheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={14} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-slate-500 mr-1">Stack:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;