"use client";

import { useState } from 'react';
import { skillsData, categorizedSkills } from '@/utils/data/skills';
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { FiLayers } from 'react-icons/fi';

const CATEGORIES = ['All', 'Frontend Engineering', 'Backend & APIs', 'Databases & ORMs', 'DevOps & Cloud'];

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const displayedSkills = activeCategory === 'All'
    ? categorizedSkills.flatMap((cat) => cat.skills.map((s) => ({ ...s, category: cat.category })))
    : (categorizedSkills.find((c) => c.category === activeCategory)?.skills || []).map((s) => ({
        ...s,
        category: activeCategory
      }));

  return (
    <section id="skills" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Technical Arsenal &amp; Tooling
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Skills &amp; <span className="gradient-text">Proficiencies</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl">
          Comprehensive fullstack toolchain spanning modern frontends, enterprise microservices, databases, and DevOps.
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10 max-w-3xl mx-auto px-4">
        {CATEGORIES.map((cat) => {
          const count = cat === 'All'
            ? categorizedSkills.reduce((acc, c) => acc + c.skills.length, 0)
            : (categorizedSkills.find((c) => c.category === cat)?.skills.length || 0);

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeCategory === cat ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-6xl mx-auto px-4">
        {displayedSkills.map((skill, idx) => {
          const iconSrc = skillsImage(skill.name)?.src;

          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 relative flex items-center justify-center p-1.5 rounded-lg bg-slate-50 border border-slate-200 group-hover:bg-indigo-50/50 transition-colors">
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt={skill.name}
                        width={30}
                        height={30}
                        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <FiLayers className="text-indigo-600" size={20} />
                    )}
                  </div>

                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {skill.level}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h4>
              </div>

              {skill.tags && (
                <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-slate-100">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Visual Live Marquee Banner */}
      <div className="w-full mt-14 pt-8 border-t border-slate-200/80 overflow-hidden">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Continuous Fullstack Toolchain
        </p>
        <Marquee
          gradient={true}
          gradientColor={[248, 250, 252]}
          gradientWidth={60}
          speed={45}
          pauseOnHover={true}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const iconSrc = skillsImage(skill)?.src;
            return (
              <div
                key={id}
                className="flex items-center gap-2.5 px-4 py-2 mx-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all cursor-default"
              >
                {iconSrc && (
                  <Image
                    src={iconSrc}
                    alt={skill}
                    width={20}
                    height={20}
                    className="h-5 w-auto object-contain"
                  />
                )}
                <span className="text-xs font-medium text-slate-700">
                  {skill}
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;