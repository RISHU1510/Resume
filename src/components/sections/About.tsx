import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Compass,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo, educationList } from '../../data/portfolioData';

type TimelineCategory = 'all' | 'education' | 'experience' | 'milestone';

interface TimelineEvent {
  year: string;
  category: 'education' | 'experience' | 'milestone';
  title: string;
  organization: string;
  description: string;
  badge?: string;
  skills?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2024 — 2025',
    category: 'education',
    title: 'B-Tech in Computer Science (Specialization: AI & ML)',
    organization: 'Manav Rachna International Institute of Research & Studies',
    description: 'Completed and scored 6.22 CGPA. Specialization in Machine Learning, Deep Learning, Natural Language Processing, and procedural systems.',
    badge: 'Completed (6.22 CGPA)',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'DSA', 'SQL'],
  },
  {
    year: '2024',
    category: 'milestone',
    title: 'Oracle Certified Foundations Associate | AI-2023',
    organization: 'Oracle University',
    description: 'Accredited in core AI paradigms, neural network foundations, and enterprise cloud AI services.',
    badge: 'Certified',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Oracle Cloud'],
  },
  {
    year: '2023',
    category: 'experience',
    title: 'Machine Learning Intern',
    organization: 'BharatIntern',
    description: 'Developed three production-grade models: House Price Linear Regression, Wine Quality multi-class classification, and Iris Flower KNN species clustering.',
    badge: 'Internship',
    skills: ['Python', 'Scikit-Learn', 'Pandas', 'Linear Regression', 'KNN'],
  },
  {
    year: '2023',
    category: 'milestone',
    title: 'Microsoft Azure Data Engineer & SC-900 Certified',
    organization: 'Microsoft',
    description: 'Certified across Azure Data Engineering pipelines, cloud architecture, and Microsoft Security, Compliance, and Identity Fundamentals.',
    badge: 'Certified',
    skills: ['Azure Data Engineer', 'SC-900', 'Cloud Security'],
  },
  {
    year: '2022',
    category: 'experience',
    title: 'Web Development Intern',
    organization: 'Inventrom Bolt IoT Pvt. Ltd.',
    description: 'Engineered responsive web applications including the interactive Movie Finder app and the culminating Inventrom corporate website capstone.',
    badge: 'Internship',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'DOM Manipulation'],
  },
  {
    year: '2022',
    category: 'experience',
    title: 'Embedded Systems & IoT Engineering Intern',
    organization: 'College Academic & Hardware Lab',
    description: 'Developed an Earthquake Detection System interfacing Arduino Uno/Nano with SW-420 vibration sensors and ADXL335/345 accelerometers with real-time buzzer/LED alerts.',
    badge: 'Hardware Project',
    skills: ['Arduino', 'C/C++', 'SW-420', 'ADXL335/345', 'IoT'],
  },
  {
    year: '2022',
    category: 'milestone',
    title: 'Microsoft Azure Fundamentals (AZ-900 & AI-900)',
    organization: 'Microsoft',
    description: 'Validated foundational mastery of cloud computing infrastructure and Microsoft Azure AI cognitive tools.',
    badge: 'Certified',
    skills: ['AZ-900', 'AI-900', 'Azure Cloud'],
  },
  {
    year: '2021',
    category: 'education',
    title: 'Senior Secondary School (Class XII - Science)',
    organization: 'Doon International School, Dehradun',
    description: 'Completed Class XII in Science (Physics, Chemistry, Mathematics & Computer Science) with 69%.',
    badge: '69%',
    skills: ['Mathematics', 'Physics', 'Procedural C', 'Logic'],
  },
  {
    year: '2019',
    category: 'education',
    title: 'Secondary School (Class X)',
    organization: 'Doon International School, Dehradun',
    description: 'Graduated Class X with 64%, active in basketball and analytical problem solving.',
    badge: '64%',
    skills: ['Analytical Logic', 'Basketball', 'Teamwork'],
  },
];

export const About: React.FC = () => {
  const [filter, setFilter] = useState<TimelineCategory>('all');

  const filteredTimeline = timelineEvents.filter((item) =>
    filter === 'all' ? true : item.category === filter
  );

  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0d0b0a] border-t border-[#f7f4ed]/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          tagline="BIOGRAPHY & BACKGROUND"
          title="Transforming Complex Data into Scalable Solutions"
          description="Data Analyst / Junior Data Analyst with 1 year of hands-on experience in Machine Learning, predictive analytics, SQL querying, and software development."
        />

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Executive Profile & Snapshot (No Image) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-sm border border-[#f7f4ed]/10 bg-[#141210] p-6 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-[#f7f4ed]/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#881337]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Candidate Snapshot</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Available</span>
              </div>

              <div>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7f4ed] font-medium">
                  Rishu Singh
                </h3>
                <p className="text-xs font-mono text-[#881337] uppercase tracking-wider mt-1">
                  Data Analyst / Junior Data Analyst (1 Yr Exp)
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#bbb5a7] border-t border-b border-[#f7f4ed]/5 py-4">
                <div className="flex justify-between">
                  <span className="text-[#881337]">Location:</span>
                  <span className="text-[#f7f4ed]">Sector 108, Gurgaon, HR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#881337]">Degree:</span>
                  <span className="text-[#f7f4ed]">B-Tech CSE (AI & ML)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#881337]">Academic Status:</span>
                  <span className="text-[#f7f4ed]">Completed (6.22 CGPA)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#881337]">University:</span>
                  <span className="text-[#f7f4ed]">MRIIRS, Faridabad</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#881337]">Experience:</span>
                  <span className="text-[#f7f4ed]">1 Year Hands-on (ML/SQL/IoT)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#881337]">Accreditations:</span>
                  <span className="text-[#f7f4ed]">10 Industry Certifications</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#bbb5a7] mb-2.5">
                  Core Analytics Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Machine Learning', 'SQL Analytics', 'Predictive Modeling', 'Tableau', 'IoT Hardware', 'Python & Pandas'].map((pill) => (
                    <span
                      key={pill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1c1917] text-[#f7f4ed] border border-[#f7f4ed]/10"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Philosophy Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-sm border border-[#f7f4ed]/10 bg-[#12100e] p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#881337] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Analytical Philosophy</span>
              </div>
              <p className="font-serif-display text-lg sm:text-xl text-[#f7f4ed] italic leading-relaxed">
                "{personalInfo.philosophy}"
              </p>
            </motion.div>
          </div>

          {/* Right Column: Narrative Story, Education, and Key Competencies */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 text-base sm:text-lg text-[#bbb5a7] font-light leading-relaxed"
            >
              <p className="text-xl sm:text-2xl font-serif-display text-[#f7f4ed] font-normal leading-snug">
                {personalInfo.shortBio}
              </p>
              <p>
                {personalInfo.personalStory}
              </p>
              <p>
                Whether modeling regression curves at BharatIntern, designing sensor-triggered interrupt routines in C/C++, or engineering responsive web platforms at Inventrom Bolt IoT, my focus is always on robust, measurable, and scalable execution.
              </p>
            </motion.div>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded border border-[#f7f4ed]/10 bg-[#141210]/60 p-5 hover:border-[#881337]/50 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337] mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>Core Expertise</span>
                </div>
                <p className="text-sm text-[#bbb5a7]">
                  Machine Learning, Deep Learning, SQL Queries, DSA, Python, C Systems, and Microsoft Azure Cloud.
                </p>
              </div>

              <div className="rounded border border-[#f7f4ed]/10 bg-[#141210]/60 p-5 hover:border-[#881337]/50 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337] mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Applied Experience</span>
                </div>
                <p className="text-sm text-[#bbb5a7]">
                  Predictive Modeling (House Price, Wine Quality, KNN), Personality Detection via NLP, and IoT Seismic Sensing.
                </p>
              </div>
            </div>

            {/* Formal Education Highlight Card */}
            <div className="rounded border border-[#f7f4ed]/10 bg-[#13110f] p-6">
              <div className="flex items-center justify-between mb-4 border-b border-[#f7f4ed]/10 pb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#881337]" />
                  <h3 className="font-editorial-heading text-sm font-semibold tracking-wider uppercase text-[#f7f4ed]">
                    Education & Credentials
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#881337] uppercase">
                  Verified Academic Pedigree
                </span>
              </div>

              {educationList.map((edu, idx) => (
                <div key={idx} className={idx > 0 ? 'mt-5 pt-5 border-t border-[#f7f4ed]/10' : ''}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="font-serif-display text-xl text-[#f7f4ed] font-medium">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-[#bbb5a7]">{edu.duration}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-2">
                    <span className="text-[#881337]">{edu.institution}</span>
                    {edu.grade && (
                      <span className="px-2 py-0.5 rounded bg-[#881337]/20 text-[#f7f4ed] border border-[#881337]/30">
                        Score / CGPA: {edu.grade}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1 text-xs text-[#bbb5a7]">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#881337] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Progression Timeline */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#881337]">
                // PROGRESSION
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#f7f4ed]">
                Milestone & Progression Timeline
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-[#12100e] p-1 rounded border border-[#f7f4ed]/10">
              {(['all', 'education', 'experience', 'milestone'] as TimelineCategory[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                    filter === tab
                      ? 'bg-[#881337] text-white font-medium'
                      : 'text-[#bbb5a7] hover:text-[#f7f4ed]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Stream */}
          <div className="relative pl-6 sm:pl-8 border-l border-[#f7f4ed]/15 space-y-10">
            {filteredTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[#f7f4ed]/20 bg-[#0d0b0a] text-[#881337] group-hover:border-[#881337] group-hover:bg-[#881337]/20 transition-all">
                  {item.category === 'education' && <GraduationCap className="w-3 h-3" />}
                  {item.category === 'experience' && <Briefcase className="w-3 h-3" />}
                  {item.category === 'milestone' && <Award className="w-3 h-3" />}
                </div>

                <div className="rounded border border-[#f7f4ed]/10 bg-[#12100e]/80 p-5 sm:p-6 transition-all hover:border-[#881337]/40 hover:bg-[#151311]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#881337] font-semibold">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded bg-[#881337]/15 text-[#f7f4ed] border border-[#881337]/30">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#bbb5a7]">
                      {item.organization}
                    </span>
                  </div>

                  <h4 className="font-serif-display text-xl sm:text-2xl text-[#f7f4ed] font-medium mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#bbb5a7] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.skills && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#f7f4ed]/5">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181513] text-[#bbb5a7] border border-[#f7f4ed]/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
