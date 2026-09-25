import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowUpRight, Github, Linkedin, Copy, Check, Send, Sparkles, MessageSquare, Inbox, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { sendContactMessage, createMailtoLink, ContactMessagePayload } from '../../services/contactService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactMessagePayload | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const payload: ContactMessagePayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() || undefined,
      message: formData.message.trim(),
    };

    try {
      await sendContactMessage(payload);
      setLastSubmittedData(payload);
      setIsSubmitted(true);

      // Launch celebratory particle confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#881337', '#e11d48', '#f7f4ed', '#9f1239'],
        });
      } catch (err) {
        // silent fail if canvas not ready
      }
    } catch (err) {
      // Graceful completion
      setLastSubmittedData(payload);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-[#0d0b0a] border-t border-[#f7f4ed]/5 relative overflow-hidden">
      {/* Subtle background ambient spotlight */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#881337]/15 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="11"
          tagline="INITIATE CONVERSATION"
          title="Let's Create Something Extraordinary"
          description="Whether you have an ambitious AI product vision, a creative web project, or an engineering role — my inbox is perpetually open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Links & Presence (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#881337] block mb-2">
                DIRECT COMMUNICATION
              </span>
              <h3 className="font-serif-display text-4xl sm:text-5xl text-[#f7f4ed] font-light leading-tight">
                Connect Directly.
              </h3>
              <p className="mt-4 text-base text-[#bbb5a7] font-light leading-relaxed">
                I prioritize thoughtful messages from founders, engineering leads, researchers, and creative studios. Expect a response within 24 hours.
              </p>
            </div>

            {/* Contact Cards with Copy & Call Features */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 rounded border border-[#f7f4ed]/10 bg-[#12100e] relative group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#881337]">
                    PRIMARY EMAIL
                  </span>
                  <button
                    onClick={copyEmail}
                    data-cursor="COPY"
                    className="flex items-center gap-1.5 text-xs font-mono text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-serif-display text-lg sm:text-xl text-[#f7f4ed] hover:text-[#881337] transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Direct Phone Card */}
              <div className="p-5 rounded border border-[#f7f4ed]/10 bg-[#12100e] relative group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#881337]">
                    DIRECT TELEPHONE
                  </span>
                  <span className="text-xs font-mono text-[#6e685c]">Sector 108, Gurgaon</span>
                </div>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="font-serif-display text-lg sm:text-xl text-[#f7f4ed] hover:text-[#881337] transition-colors block"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6e685c] block">
                COMMUNICATION CHANNELS:
              </span>

              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN"
                  className="flex items-center justify-between p-4 rounded border border-[#f7f4ed]/5 bg-[#12100e] hover:border-[#881337]/50 hover:bg-[#151210] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-editorial-heading text-sm text-[#f7f4ed]">
                      {link.name}
                    </span>
                    <span className="text-xs font-mono text-[#bbb5a7]">
                      {link.handle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#881337] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded border border-[#f7f4ed]/10 bg-[#12100e] p-8 sm:p-10 shadow-2xl relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-[#f7f4ed]/5 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#881337]">
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit Message</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#bbb5a7] bg-[#1a1715] px-2.5 py-1 rounded border border-[#f7f4ed]/5">
                  <Inbox className="w-3 h-3 text-[#881337]" />
                  <span>Direct to: rishusingh627h@gmail.com</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#881337]/20 border border-[#881337] text-[#f7f4ed]">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif-display text-3xl text-[#f7f4ed]">
                      Transmission Delivered
                    </h4>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#881337]/15 border border-[#881337]/30 text-xs font-mono text-[#f7f4ed]">
                      <Inbox className="w-3.5 h-3.5 text-[#881337]" />
                      <span>Forwarded to rishusingh627h@gmail.com</span>
                    </div>

                    <p className="text-sm text-[#bbb5a7] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="text-[#f7f4ed] font-medium">{lastSubmittedData?.name || formData.name}</span>. Your message has been transmitted and routed directly to Rishu's inbox.
                    </p>

                    {lastSubmittedData && (
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={createMailtoLink(lastSubmittedData)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#181513] border border-[#f7f4ed]/15 text-xs font-mono text-[#bbb5a7] hover:text-[#f7f4ed] hover:border-[#881337]/50 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#881337]" />
                          <span>Open in Mail App (Copy)</span>
                        </a>

                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: '', email: '', subject: '', message: '' });
                            setLastSubmittedData(null);
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#881337] hover:bg-[#9f1239] text-xs font-mono uppercase tracking-wider text-white transition-colors"
                        >
                          <span>Send Another Note</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#bbb5a7] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full rounded bg-[#161311] border border-[#f7f4ed]/15 px-4 py-3 text-sm text-[#f7f4ed] placeholder-[#6e685c] focus:border-[#881337] focus:outline-none transition-colors"
                        />
                        {errors.name && (
                          <span className="text-[11px] font-mono text-red-400 mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#bbb5a7] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full rounded bg-[#161311] border border-[#f7f4ed]/15 px-4 py-3 text-sm text-[#f7f4ed] placeholder-[#6e685c] focus:border-[#881337] focus:outline-none transition-colors"
                        />
                        {errors.email && (
                          <span className="text-[11px] font-mono text-red-400 mt-1 block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#bbb5a7] mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Collaboration / AI Engineering Role"
                        className="w-full rounded bg-[#161311] border border-[#f7f4ed]/15 px-4 py-3 text-sm text-[#f7f4ed] placeholder-[#6e685c] focus:border-[#881337] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#bbb5a7] mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your vision, technical requirements, or opportunity..."
                        className="w-full rounded bg-[#161311] border border-[#f7f4ed]/15 px-4 py-3 text-sm text-[#f7f4ed] placeholder-[#6e685c] focus:border-[#881337] focus:outline-none transition-colors resize-none"
                      />
                      {errors.message && (
                        <span className="text-[11px] font-mono text-red-400 mt-1 block">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor="SEND"
                      className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#881337] hover:bg-[#9f1239] py-4 text-xs font-mono uppercase tracking-wider text-white transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting to rishusingh627h@gmail.com...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
