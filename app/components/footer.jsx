import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-sm font-semibold text-slate-900">
            {personalData.name}{' '}
            <span className="text-slate-500 font-normal">&mdash; Fullstack Software Engineer</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved. Built with Next.js, React &amp; Tailwind CSS.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {personalData.github && (
            <Link
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-xs"
              aria-label="GitHub"
            >
              <BsGithub size={16} />
            </Link>
          )}
          {personalData.linkedIn && (
            <Link
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5]/40 transition-colors shadow-xs"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={16} />
            </Link>
          )}
          {personalData.leetcode && (
            <Link
              href={personalData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#ffa116] hover:border-[#ffa116]/40 transition-colors shadow-xs"
              aria-label="LeetCode"
            >
              <SiLeetcode size={16} />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
