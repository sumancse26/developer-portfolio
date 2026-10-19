"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalData } from '@/utils/data/personal-data';

const NAV_ITEMS = [
  { label: 'About', href: '#about', pageHref: '/#about' },
  { label: 'Experience', href: '#experience', pageHref: '/#experience' },
  { label: 'Skills', href: '#skills', pageHref: '/#skills' },
  { label: 'Projects', href: '#projects', pageHref: '/#projects' },
  { label: 'Education', href: '#education', pageHref: '/#education' },
  { label: 'Contact', href: '#contact', pageHref: '/#contact' }
];

function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            SUMAN <span className="gradient-text">SARKAR</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 group-hover:text-indigo-600 transition-colors">
            Fullstack Software Engineer
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={isHome ? item.href : item.pageHref}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          {personalData.resume && (
            <a
              href={personalData.resume}
              target="_blank"
              download="Suman_Sarkar_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
            >
              <FiDownload size={13} className="text-indigo-600" />
              <span>Resume</span>
            </a>
          )}
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="btn-primary flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <FiArrowRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none shadow-sm"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 mt-2 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={isHome ? item.href : item.pageHref}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-slate-200">
            {personalData.resume && (
              <a
                href={personalData.resume}
                target="_blank"
                download="Suman_Sarkar_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200"
              >
                <FiDownload size={14} className="text-indigo-600" />
                <span>Download Resume</span>
              </a>
            )}
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white"
            >
              <span>Get In Touch</span>
              <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
