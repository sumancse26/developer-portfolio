"use client";

import { isValidEmail } from '@/utils/check-email';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithoutCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [loading, setLoading] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success('Message sent successfully!');
        setInput({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message!');
      }
    } catch (err) {
      toast.error(err?.message || 'Failed to send message!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
        Send an Instant Message
      </h3>
      <p className="text-sm text-slate-600 mt-1 mb-6 leading-relaxed">
        Fill out the form below and I will get back to you within 24 business hours.
      </p>

      <form onSubmit={handleSendMail} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase text-slate-700 mb-1.5">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15 transition-all"
            type="text"
            placeholder="John Doe"
            maxLength={100}
            required
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            onBlur={checkRequired}
            value={input.name}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-700 mb-1.5">
            Your Email <span className="text-rose-500">*</span>
          </label>
          <input
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15 transition-all"
            type="email"
            placeholder="john@example.com"
            maxLength={100}
            required
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(input.email) });
            }}
          />
          {error.email && (
            <p className="text-xs text-rose-500 mt-1 font-medium">Please provide a valid email address</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-700 mb-1.5">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15 transition-all resize-y min-h-[110px]"
            maxLength={500}
            name="message"
            placeholder="Describe your role, project requirements, or opportunity..."
            required
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            onBlur={checkRequired}
            rows={4}
            value={input.message}
          />
        </div>

        {error.required && (
          <p className="text-xs text-rose-500 font-medium">
            Please fill in all required fields.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
          <TbMailForward size={16} />
        </button>
      </form>
    </div>
  );
}

export default ContactWithoutCaptcha;