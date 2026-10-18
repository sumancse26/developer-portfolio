"use client";

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const CATEGORIES = ['All', 'Full Stack', 'Enterprise / ERP', 'E-Commerce', 'FinTech / Web3'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Portfolio &amp; Production Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl">
          Production ERP solutions, multi-vendor platforms, and real-time financial terminals built for enterprise clients.
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => {
          const count = cat === 'All'
            ? projectsData.length
            : projectsData.filter(p => p.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 bg-white border border-slate-200 hover:text-slate-900 hover:bg-slate-50"
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

      {/* Projects Stack */}
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {filteredProjects.map((project) => (
          <div key={project.id} className="w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;