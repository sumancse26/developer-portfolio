"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiKey, FiCheck, FiCopy, FiCode, FiEye, FiCheckCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

function ProjectCard({ project }) {
  const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'code'
  const [copiedCreds, setCopiedCreds] = useState(false);

  const handleCopyCredentials = () => {
    if (!project.credentials) return;
    const text = `Username: ${project.credentials.username} | Password: ${project.credentials.password}`;
    navigator.clipboard.writeText(text);
    setCopiedCreds(true);
    toast.success('Demo credentials copied to clipboard!');
    setTimeout(() => setCopiedCreds(false), 2500);
  };

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300 overflow-hidden transition-all duration-300">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/80 border-b border-slate-200">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex space-x-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-400"></div>
            <div className="h-3 w-3 rounded-full bg-amber-400"></div>
            <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
          </div>
          {/* Category Badge */}
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            {project.category || 'Production Solution'}
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline font-medium">
            Role: <span className="text-slate-800 font-semibold">{project.role}</span>
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => setViewMode('visual')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-all ${
              viewMode === 'visual'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <FiEye size={12} />
            <span>Product View</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('code')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-all ${
              viewMode === 'code'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <FiCode size={12} />
            <span>Tech Spec</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'visual' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 lg:p-8 items-center">
          {/* Left: UI Mockup Screenshot */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={project.id <= 2}
                />
              </div>
            )}

            {/* Quick Live Link Overlay Button */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 border border-slate-200 text-xs font-semibold text-slate-800 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-md backdrop-blur-sm"
              >
                <span>Live Preview</span>
                <FiExternalLink size={12} />
              </a>
            )}
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {project.name}
                </h3>
              </div>

              {project.tagline && (
                <p className="text-xs sm:text-sm font-semibold text-indigo-600 mb-3">
                  {project.tagline}
                </p>
              )}

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Business & Technical Highlights */}
              {project.highlights && (
                <div className="space-y-2 mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key Technical Deliverables:
                  </p>
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <FiCheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={13} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-sm"
                >
                  <span>Launch Live Application</span>
                  <FiExternalLink size={14} />
                </a>
              )}

              {project.credentials && (
                <button
                  type="button"
                  onClick={handleCopyCredentials}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-amber-800 bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-all"
                  title="Click to copy demo username & password"
                >
                  <FiKey size={13} />
                  <span>
                    Demo Login: {project.credentials.username} / {project.credentials.password}
                  </span>
                  {copiedCreds ? <FiCheck className="text-emerald-600" size={13} /> : <FiCopy size={11} />}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Technical Spec View */
        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-slate-900 text-slate-200">
          <pre>
            <code>
{`// Production Project Specification
export const ${project.name.replace(/[^a-zA-Z0-9]/g, '')}: ProjectSpec = {
  name: "${project.name}",
  category: "${project.category || 'Full Stack'}",
  developerRole: "${project.role}",
  techStack: [${project.tools.map(t => `"${t}"`).join(', ')}],
  highlights: [
${(project.highlights || []).map(f => `    "${f}"`).join(',\n')}
  ],
  liveUrl: "${project.demo || project.liveLink}",
${project.credentials ? `  demoCredentials: { username: "${project.credentials.username}", password: "${project.credentials.password}" }\n` : ''}};`}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;