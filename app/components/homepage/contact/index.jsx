"use client";

import { useState } from 'react';
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FiCopy, FiCheck } from "react-icons/fi";
import { toast } from 'react-toastify';
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    toast.success('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Communication &amp; Inquiries
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl">
          Interested in discussing full-time software engineering roles, enterprise ERP consulting, or high-scale contracts?
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto px-4">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ? (
            <ContactWithCaptcha />
          ) : (
            <ContactWithoutCaptcha />
          )}
        </div>

        {/* Right Column: Contact Details, Status & Profiles */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Availability Status Card */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-sm">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-800 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open to New Engineering Roles</span>
            </div>
            <p className="text-xs text-emerald-900/80 leading-relaxed">
              Available for full-time Fullstack Software Engineer positions (remote, hybrid, or onsite) and high-impact enterprise architecture contracts.
            </p>
          </div>

          {/* Quick Copy Contact Details */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3.5">
            {/* Email */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                  <MdAlternateEmail size={18} />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-semibold uppercase text-slate-400">Direct Email</span>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm font-semibold text-slate-800 hover:text-indigo-600 truncate"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors ml-2"
                title="Copy email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-600" size={15} /> : <FiCopy size={15} />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <IoMdCall size={18} />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-semibold uppercase text-slate-400">Direct Mobile</span>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-sm font-semibold text-slate-800 hover:text-emerald-700 truncate"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyPhone}
                className="p-2 text-slate-400 hover:text-emerald-700 hover:bg-white rounded-lg transition-colors ml-2"
                title="Copy phone"
              >
                {copiedPhone ? <FiCheck className="text-emerald-600" size={15} /> : <FiCopy size={15} />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2 rounded-lg bg-slate-200 text-slate-700">
                <CiLocationOn size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase text-slate-400">Location Base</span>
                <span className="text-sm font-semibold text-slate-800">
                  {personalData.address}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <span className="block text-[11px] font-semibold uppercase text-slate-400 mb-3">
              Professional Profiles &amp; Coding Portals
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              {personalData.github && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={personalData.github}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all group text-center shadow-xs"
                >
                  <IoLogoGithub size={22} className="text-slate-700 group-hover:scale-110 transition-all" />
                  <span className="text-xs font-semibold text-slate-700 mt-1.5">GitHub</span>
                </Link>
              )}

              {personalData.linkedIn && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={personalData.linkedIn}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0077b5]/50 hover:bg-white transition-all group text-center shadow-xs"
                >
                  <BiLogoLinkedin size={22} className="text-slate-700 group-hover:text-[#0077b5] group-hover:scale-110 transition-all" />
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-[#0077b5] mt-1.5">LinkedIn</span>
                </Link>
              )}

              {personalData.leetcode && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={personalData.leetcode}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#ffa116]/50 hover:bg-white transition-all group text-center shadow-xs"
                >
                  <SiLeetcode size={20} className="text-slate-700 group-hover:text-[#ffa116] group-hover:scale-110 transition-all" />
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-[#ffa116] mt-1.5">LeetCode</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;