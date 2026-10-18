"use client";

import { useState } from 'react';
import { educations } from "@/utils/data/educations";
import { trainings } from "@/utils/data/training";
import { FiAward, FiCalendar } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";

function Education() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'academic' | 'certifications'

  return (
    <section id="education" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Academic Credentials &amp; Certifications
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Education &amp; <span className="gradient-text">Continuous Learning</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl">
          Formal Computer Science &amp; Engineering education coupled with rigorous professional engineering bootcamps.
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Credentials ({educations.length + trainings.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('academic')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'academic'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <IoSchoolOutline size={14} />
          <span>Academic Degrees ({educations.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('certifications')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'certifications'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FiAward size={14} />
          <span>Professional Certifications ({trainings.length})</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {/* Academic Degrees */}
        {(activeTab === 'all' || activeTab === 'academic') &&
          educations.map((edu) => (
            <div
              key={`edu-${edu.id}`}
              className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                      <IoSchoolOutline size={18} />
                    </div>
                    <span className="text-xs font-semibold text-indigo-700">
                      Academic Degree
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1">
                    <FiCalendar size={12} className="text-slate-400" />
                    <span>{edu.duration}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {edu.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-600 mt-1">
                  {edu.institution}
                </p>

                {edu.description && (
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>

              {edu.degree && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {edu.degree}
                  </span>
                </div>
              )}
            </div>
          ))}

        {/* Professional Trainings & Certifications */}
        {(activeTab === 'all' || activeTab === 'certifications') &&
          trainings.map((trn) => (
            <div
              key={`trn-${trn.id}`}
              className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-violet-50 text-violet-700 border border-violet-100">
                      <FiAward size={18} />
                    </div>
                    <span className="text-xs font-semibold text-violet-700">
                      Professional Certification
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1">
                    <FiCalendar size={12} className="text-slate-400" />
                    <span>{trn.duration}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {trn.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-violet-700 mt-1">
                  {trn.institution || trn.company}
                </p>

                {trn.description && (
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {trn.description}
                  </p>
                )}

                {trn.topics && (
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Curriculum Competencies:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {trn.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium px-2 py-0.5 rounded bg-violet-50 text-violet-700 border border-violet-100"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Education;