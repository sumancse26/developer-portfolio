"use client";

import { useState } from 'react';
import { categorizedSkills } from '@/utils/data/skills';
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import { FiLayers, FiCpu, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

const CATEGORIES = [
  'All',
  'Advanced Frontend Architecture',
  'Distributed Backend & APIs',
  'Databases & Performance Engineering',
  'DevOps, Cloud & Infrastructure'
];

const CATEGORY_ICONS = {
  'Advanced Frontend Architecture': FiLayers,
  'Distributed Backend & APIs': FiServer,
  'Databases & Performance Engineering': FiDatabase,
  'DevOps, Cloud & Infrastructure': FiCloud
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const displayedSkills = activeCategory === 'All'
    ? categorizedSkills.flatMap((cat) => cat.skills.map((s) => ({ ...s, category: cat.category })))
    : (categorizedSkills.find((c) => c.category === activeCategory)?.skills || []).map((s) => ({
        ...s,
        category: activeCategory
      }));

  const activeCategoryMeta = categorizedSkills.find((c) => c.category === activeCategory);

  return (
    <section id="skills" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Engineering Depth &amp; Systems Mastery
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Technical <span className="gradient-text">Competencies</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 text-center max-w-2xl leading-relaxed">
          Architecting production systems with deep, battle-tested expertise across modern frontend rendering, distributed backend microservices, and database query optimization.
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-8 max-w-4xl mx-auto px-4">
        {CATEGORIES.map((cat) => {
          const count = cat === 'All'
            ? categorizedSkills.reduce((acc, c) => acc + c.skills.length, 0)
            : (categorizedSkills.find((c) => c.category === cat)?.skills.length || 0);

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "text-slate-600 bg-white border border-slate-200/90 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                activeCategory === cat ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Description Notice */}
      {activeCategoryMeta && (
        <div className="max-w-2xl mx-auto mb-8 px-4 text-center">
          <p className="text-xs font-mono text-indigo-700 bg-indigo-50/80 border border-indigo-100 py-1.5 px-4 rounded-full inline-block">
            {activeCategoryMeta.description}
          </p>
        </div>
      )}

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {displayedSkills.map((skill, idx) => {
          const iconSrc = skillsImage(skill.name)?.src;
          const CategoryIcon = CATEGORY_ICONS[skill.category] || FiCpu;

          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 hover:shadow-lg transition-all duration-250 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="h-11 w-11 relative flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-indigo-50/50 group-hover:border-indigo-200 transition-colors">
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <CategoryIcon className="text-indigo-600" size={22} />
                    )}
                  </div>

                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                    {skill.level}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h4>

                {activeCategory === 'All' && (
                  <span className="block text-[11px] font-medium text-slate-600 mt-0.5">
                    {skill.category}
                  </span>
                )}
              </div>

              {/* Advanced Competency Tags */}
              {skill.tags && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/70 group-hover:border-slate-300 transition-colors"
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
    </section>
  );
}

export default Skills;