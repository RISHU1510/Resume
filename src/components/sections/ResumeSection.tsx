import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Printer,
  FileText,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Globe,
  Code,
  CheckCircle2,
  Heart,
  Check,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import {
  personalInfo,
  educationList,
  experienceData,
  achievementsData,
  skillsData,
  projectsData,
  languagesData,
  hobbiesList,
} from '../../data/portfolioData';
import { downloadResumePDF } from '../../utils/resumeDownload';

interface ResumeSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    setDownloading(true);
    try {
      downloadResumePDF('Rishu_Singh_Resume.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error('Error downloading resume:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="resume" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0908] border-t border-[#f7f4ed]/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          tagline="CURRICULUM VITAE"
          title="Official Resume & Professional Dossier"
          description="Complete professional record including academic pedigree, technical internships, 10 industry certifications, key projects, languages, and core competencies."
        />

        {/* Action Header Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 rounded border border-[#881337]/30 bg-[#141210] mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#881337] mb-1">
              <FileText className="w-4 h-4" />
              <span>Verified Candidate Dossier</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7f4ed] font-medium">
              Rishu Singh — Curriculum Vitae
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#bbb5a7] mt-1">
              Data Analyst / Junior Data Analyst (1 Year Experience) • 10 Certifications • Sector 108, Gurgaon
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              data-cursor="PRINT"
              className="inline-flex items-center gap-2 rounded border border-[#f7f4ed]/20 bg-[#181513] hover:border-[#f7f4ed]/40 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#f7f4ed] transition-colors"
            >
              <Printer className="w-4 h-4 text-[#881337]" />
              <span>Print CV</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              data-cursor="DOWNLOAD"
              className="inline-flex items-center gap-2 rounded bg-[#881337] hover:bg-[#9f1239] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white transition-all shadow-lg shadow-[#881337]/20 active:scale-95"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Downloaded!</span>
                </>
              ) : downloading ? (
                <>
                  <Download className="w-4 h-4 animate-bounce" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Formatted Editorial Document Wrapper (Print-friendly layout) */}
        <div className="rounded border border-[#f7f4ed]/10 bg-[#12100e] p-8 sm:p-12 md:p-16 text-[#f7f4ed] shadow-2xl relative">
          {/* Document Header */}
          <div className="border-b border-[#f7f4ed]/15 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#881337] block mb-1">
                CURRICULUM VITAE
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-light text-[#f7f4ed]">
                {personalInfo.name}
              </h2>
              <p className="font-mono text-sm sm:text-base tracking-wider uppercase text-[#881337] mt-1.5 font-medium">
                {personalInfo.title}
              </p>
              <p className="text-sm text-[#bbb5a7] max-w-2xl mt-3 leading-relaxed">
                {personalInfo.shortBio}
              </p>
            </div>

            <div className="flex flex-col text-xs font-mono text-[#bbb5a7] gap-2 md:text-right shrink-0">
              <a href={`tel:${personalInfo.phone}`} className="flex items-center md:justify-end gap-2 hover:text-[#f7f4ed] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#881337]" />
                <span>{personalInfo.phone}</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center md:justify-end gap-2 hover:text-[#f7f4ed] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#881337]" />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#881337]" />
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center md:justify-end gap-2 text-[#881337] hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/rishu-singh-00006924b</span>
              </a>
            </div>
          </div>

          {/* Resume Sections Grid */}
          <div className="space-y-12">
            {/* Section 01: Internships & Industry Experience */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#881337] tracking-widest uppercase mb-6 pb-2 border-b border-[#f7f4ed]/10">
                <Briefcase className="w-4 h-4" />
                <span>[01] INTERNSHIPS & PRACTICAL EXPERIENCE</span>
              </div>
              <div className="space-y-8">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-[#881337]/50 pl-6 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#f7f4ed]">
                        {exp.role} <span className="text-[#881337]">@ {exp.company}</span>
                      </h4>
                      <span className="text-xs font-mono text-[#bbb5a7] px-2 py-0.5 rounded bg-[#181513] border border-[#f7f4ed]/10">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#6e685c]">{exp.location} • {exp.type}</p>
                    <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-[#bbb5a7]">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#881337] font-bold mt-0.5">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1c1917] text-[#bbb5a7] border border-[#f7f4ed]/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 02: Education & Academic Pedigree */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#881337] tracking-widest uppercase mb-6 pb-2 border-b border-[#f7f4ed]/10">
                <GraduationCap className="w-4 h-4" />
                <span>[02] EDUCATION & FORMAL PEDIGREE</span>
              </div>
              <div className="space-y-6">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-[#881337]/50 pl-6 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="font-serif-display text-xl font-semibold text-[#f7f4ed]">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-[#bbb5a7]">{edu.duration}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="text-[#881337]">{edu.institution}</span>
                      {edu.grade && (
                        <span className="px-2 py-0.5 rounded bg-[#881337]/20 text-[#f7f4ed] border border-[#881337]/40 font-semibold">
                          Score / CGPA: {edu.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-[#bbb5a7]">{edu.specialization}</p>
                    <ul className="space-y-1 text-xs text-[#bbb5a7] pt-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#881337]">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 03: Key Technical Projects */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#881337] tracking-widest uppercase mb-6 pb-2 border-b border-[#f7f4ed]/10">
                <Code className="w-4 h-4" />
                <span>[03] KEY TECHNICAL PROJECTS</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectsData.map((p) => (
                  <div key={p.id} className="p-4 sm:p-5 rounded border border-[#f7f4ed]/10 bg-[#161311] space-y-2 hover:border-[#881337]/40 transition-colors">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#881337] font-semibold">[{p.number}] {p.title}</span>
                      <span className="text-[#6e685c]">{p.year}</span>
                    </div>
                    <p className="text-xs font-mono text-[#f7f4ed]/80 font-medium">
                      {p.subtitle}
                    </p>
                    <p className="text-xs text-[#bbb5a7] leading-relaxed">
                      {p.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1f1b19] text-[#bbb5a7] border border-[#f7f4ed]/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 04: All 10 Industry Certifications */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#f7f4ed]/10 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#881337] tracking-widest uppercase">
                  <Award className="w-4 h-4" />
                  <span>[04] VERIFIED INDUSTRY CERTIFICATIONS (10)</span>
                </div>
                <span className="text-xs font-mono text-[#bbb5a7]">
                  Microsoft • Oracle • Infosys • LinkedIn
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {achievementsData.map((ach) => (
                  <div key={ach.id} className="flex items-start gap-3 p-3.5 rounded border border-[#f7f4ed]/5 bg-[#161311]">
                    <Award className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-[#f7f4ed]">
                        {ach.title}
                      </h5>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] font-mono text-[#881337]">
                        <span>{ach.issuer}</span>
                        <span className="text-[#6e685c]">•</span>
                        <span className="text-[#bbb5a7]">{ach.year}</span>
                      </div>
                      <p className="text-[11px] text-[#bbb5a7] mt-1 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 05: Primary Skills Matrix & Languages */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#f7f4ed]/10">
              {/* Technical Skills */}
              <div className="lg:col-span-8">
                <span className="font-mono text-xs text-[#881337] tracking-widest uppercase block mb-3">
                  PRIMARY TECHNICAL SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {skillsData.filter(s => s.highlight).map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs font-mono px-3 py-1.5 rounded bg-[#181513] text-[#f7f4ed] border border-[#f7f4ed]/10 hover:border-[#881337] transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages & Hobbies */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#881337] tracking-widest uppercase block mb-3">
                    LANGUAGES
                  </span>
                  <div className="space-y-2">
                    {languagesData.map((lang) => (
                      <div key={lang.language} className="flex items-center justify-between text-xs font-mono p-2 rounded bg-[#161311] border border-[#f7f4ed]/5">
                        <span className="text-[#f7f4ed] font-medium">{lang.language}</span>
                        <span className="text-[#881337]">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs text-[#881337] tracking-widest uppercase block mb-2">
                    HOBBIES & INTERESTS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hobbiesList.map((h) => (
                      <span key={h.name} className="text-xs font-mono px-2.5 py-1 rounded bg-[#1a1715] text-[#bbb5a7] border border-[#f7f4ed]/5">
                        {h.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer for Direct Download */}
          <div className="mt-8 pt-8 border-t border-[#f7f4ed]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#bbb5a7]">
              <FileText className="w-4 h-4 text-[#881337]" />
              <span>Official 1-Page Resume Format (PDF) • Last Updated 2025</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                data-cursor="PRINT"
                className="inline-flex items-center gap-2 rounded border border-[#f7f4ed]/20 bg-[#181513] hover:border-[#f7f4ed]/40 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#f7f4ed] transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-[#881337]" />
                <span>Print</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                data-cursor="DOWNLOAD"
                className="inline-flex items-center gap-2 rounded bg-[#881337] hover:bg-[#9f1239] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white transition-all shadow-lg shadow-[#881337]/20 active:scale-95"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Downloaded!</span>
                  </>
                ) : downloading ? (
                  <>
                    <Download className="w-4 h-4 animate-bounce" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Official PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
