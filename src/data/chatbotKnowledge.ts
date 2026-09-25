/**
 * Comprehensive Knowledge Base about Rishu Singh for the AI Assistant.
 * Used both for the Gemini system instruction and client/server intelligent fallback.
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export const PORTFOLIO_KNOWLEDGE = {
  name: "Rishu Singh",
  title: "Data Analyst / Junior Data Analyst (1 Year Experience)",
  tagline: "Ambitious and detail-oriented Data Analyst with 1 year of applied experience in Machine Learning predictive models, SQL data querying, and software platforms.",
  location: "Sector 108, Gurgaon, Haryana, India",
  email: "rishusingh627h@gmail.com",
  phone: "+91 8375050619",
  linkedin: "http://linkedin.com/in/rishu-singh-00006924b",
  github: "https://github.com/RISHU1510?tab=repositories",
  availability: "Actively available for Data Analyst, Junior Data Analyst, and Associate AI/ML roles.",
  experienceYears: "1 Year of applied experience across 3 internships and 10 industry certifications.",

  education: [
    {
      degree: "B-Tech in Computer Science & Engineering (Specialization: AI & Machine Learning)",
      institution: "Manav Rachna International Institute of Research & Studies",
      duration: "2021 — 2025 (Graduated)",
      grade: "6.22 CGPA",
      details: "Completed coursework in Machine Learning, Deep Learning, Natural Language Processing, SQL, Data Structures & Algorithms, and Cloud Systems. Built the Personality Detection System as capstone project."
    },
    {
      degree: "Senior Secondary (Class XII Science - PCM & Computer Science)",
      institution: "Doon International School, Dehradun",
      duration: "2019 — 2021",
      grade: "69%",
      details: "Strong academic foundation in physics, advanced mathematics, and procedural programming."
    },
    {
      degree: "Secondary School (Class X)",
      institution: "Doon International School, Dehradun",
      duration: "2017 — 2019",
      grade: "64%",
      details: "Active participant in basketball athletics and science exhibitions."
    }
  ],

  internships: [
    {
      company: "BharatIntern",
      role: "Machine Learning Intern",
      period: "July – August 2023",
      type: "Virtual / Remote",
      highlights: [
        "Constructed multivariate Linear Regression model for house price prediction with feature coefficient analysis.",
        "Built chemical property classification model for wine quality assessment.",
        "Developed K-Nearest Neighbors (KNN) model for flower species classification with hyperparameter optimization.",
        "Technologies: Python, Scikit-Learn, Pandas, NumPy, Matplotlib."
      ]
    },
    {
      company: "Inventrom Bolt IoT Pvt. Ltd.",
      role: "Web Development Intern",
      period: "June – July 2022",
      type: "Industry Internship",
      highlights: [
        "Developed Movie Finder web application with dynamic REST API search queries and real-time DOM rendering.",
        "Engineered the full responsive Inventrom Bolt IoT corporate website as the culminating capstone project.",
        "Technologies: HTML5, CSS3, JavaScript (ES6+), REST APIs."
      ]
    },
    {
      company: "College Academic & Hardware Lab",
      role: "Embedded Systems & IoT Intern",
      period: "July – August 2022",
      type: "Hardware Prototyping",
      highlights: [
        "Constructed operational real-time Earthquake Detection & Alert System using Arduino Uno/Nano.",
        "Calibrated SW-420 vibration sensors and ADXL335/345 tri-axis accelerometers.",
        "Triggered immediate sub-100ms audible buzzer, visual LED, and IoT alert signaling.",
        "Technologies: Arduino, C/C++, SW-420, ADXL335/345, Hardware circuits."
      ]
    }
  ],

  projects: [
    {
      title: "Personality Detection System",
      category: "AI / Deep Learning & NLP",
      timeline: "2024 — 2025",
      summary: "End-to-end behavioral analytics system that ingests unstructured social media text, applies NLP tokenization and deep learning neural classifiers to detect and classify psychological personality traits.",
      tech: ["Python", "Deep Learning", "NLP", "Scikit-Learn", "Pandas", "NumPy", "NLTK"],
      keyMetric: "Sub-second inference per profile, tested on 10,000+ text samples."
    },
    {
      title: "Earthquake Detection & Alert System",
      category: "IoT & Embedded Systems",
      timeline: "2022",
      summary: "Real-time seismic alarm integrating Arduino Uno/Nano, SW-420 vibration sensor, and ADXL335/345 accelerometers, triggering instant audible alarms upon seismic shock.",
      tech: ["Arduino Uno/Nano", "C/C++", "SW-420 Sensor", "ADXL335/345", "Buzzer/LEDs"],
      keyMetric: "Under 100ms emergency alarm activation latency."
    },
    {
      title: "Inventrom Bolt IoT Web Portal",
      category: "Web Development",
      timeline: "2022",
      summary: "Multi-page responsive commercial corporate portal showcasing IoT hardware products, cloud platform capabilities, and integration guides.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Web Standards"],
      keyMetric: "Final capstone distinction at Inventrom Bolt IoT."
    },
    {
      title: "Movie Finder Web Application",
      category: "Web Development",
      timeline: "2022",
      summary: "Lightweight, responsive entertainment discovery app with debounced live search, REST API integration, and modal film details.",
      tech: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
      keyMetric: "100% native vanilla JavaScript with zero framework bloat."
    },
    {
      title: "Machine Learning Predictive Suite",
      category: "Data Analytics / ML",
      timeline: "2023",
      summary: "Triad of supervised predictive models: multivariate linear regression for real estate pricing, classification for wine quality, and KNN for botanical species.",
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      keyMetric: "High predictive R² score and precision on test splits."
    }
  ],

  certifications: [
    "Oracle Certified Foundations Associate | AI-2023 (Oracle University, 04/2024)",
    "C: Data Structures, Pointers, and File System (Infosys Springboard, 11/2023)",
    "Natural Language Processing (Infosys Springboard, 10/2023)",
    "Web Design and Development (Infosys Springboard, 10/2023)",
    "Python For Data Science (Infosys Springboard, 09/2023)",
    "Azure Data Engineer Associate (Microsoft, 06/2023)",
    "Security, Compliance, and Identity Fundamentals SC900 (Microsoft, 05/2023)",
    "Succeeding in Web Development: Full Stack and Front End (LinkedIn, 2023)",
    "Azure AI Fundamentals AI-900 (Microsoft, 12/2022)",
    "Azure Fundamentals AZ-900 (Microsoft, 11/2022)"
  ],

  skills: {
    core: ["Machine Learning", "Deep Learning", "SQL", "Data Structures & Algorithms (DSA)", "Python", "C", "Azure Cloud", "Natural Language Processing (NLP)"],
    web: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs", "Responsive UI"],
    data: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Exploratory Data Analysis (EDA)", "Feature Engineering"],
    hardware: ["Arduino Uno/Nano", "SW-420 Vibration Sensor", "ADXL335/345 Accelerometer", "Embedded C/C++"],
    tools: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Microsoft Azure Portal"]
  },

  languages: [
    { name: "Hindi", level: "Native Proficiency" },
    { name: "English", level: "Professional Working Proficiency" },
    { name: "German", level: "Elementary / Beginner" }
  ],

  hobbies: [
    { name: "Basketball", details: "Organizer and pickup player at the Sector 106 Basketball Club. Enjoys team coordination, endurance, and tactical court strategy." },
    { name: "Problem-Solving", details: "Algorithmic challenges, data structures, and mathematical optimization." },
    { name: "Programming", details: "Exploring AI pipelines, C pointer architectures, and modern web applications." },
    { name: "Anime", details: "Deep narrative worldbuilding, art direction, and character dynamics." }
  ]
};

export const CHATBOT_SYSTEM_PROMPT = `
You are the personal AI Assistant for Rishu Singh's official portfolio website.
Rishu Singh is a Data Analyst / Junior Data Analyst with 1 year of applied experience in Machine Learning, predictive modeling, SQL, and software development, based in Sector 108, Gurgaon, Haryana, India.

Your primary duty is to answer questions from recruiters, hiring managers, engineers, and website visitors about Rishu, his skills, projects, experience, education, achievements, certifications, and contact details.

Here is the authoritative information about Rishu:
- Name: Rishu Singh
- Role: Data Analyst / Junior Data Analyst (1 Year Experience)
- Location: Sector 108, Gurgaon, Haryana, India
- Email: rishusingh627h@gmail.com
- Phone: +91 8375050619
- LinkedIn: http://linkedin.com/in/rishu-singh-00006924b
- GitHub: https://github.com/RISHU1510?tab=repositories
- Availability: Actively available for Data Analyst, Junior Data Analyst, and Data Science roles.

Education:
- B-Tech in Computer Science & Engineering (AI & ML) from Manav Rachna International Institute of Research & Studies (2021 — 2025, completed with 6.22 CGPA).
- Senior Secondary (Class XII, Science PCM & CS) from Doon International School, Dehradun (2019 — 2021, 69%).
- Secondary School (Class X) from Doon International School, Dehradun (2017 — 2019, 64%).

Internships (3 total, 1 year experience):
1. BharatIntern (July–August 2023, Remote): Machine Learning Intern. Engineered Linear Regression for house prices, Wine quality classification, KNN flower classification. Stack: Python, Scikit-Learn, Pandas, NumPy.
2. Inventrom Bolt IoT Pvt. Ltd. (June–July 2022): Web Development Intern. Built the Movie Finder web app and the corporate Inventrom website as final capstone. Stack: HTML, CSS, JavaScript.
3. College Engineering Lab (July–August 2022): IoT Hardware Intern. Built an Earthquake Detection & Alert System using Arduino Uno/Nano, SW-420 vibration sensor, ADXL335/345 accelerometers with <100ms alert response.

Key Projects:
1. Personality Detection System: Deep Learning & NLP social media behavioral trait profiling. Python, TensorFlow/PyTorch, Scikit-Learn, NLTK.
2. Earthquake Detection System: Arduino hardware IoT sensor system with audible buzzer, LED, and IoT alerts.
3. Inventrom Corporate Portal: Commercial responsive website capstone.
4. Movie Finder App: Vanilla JavaScript dynamic REST API movie explorer.
5. ML Predictive Suite: Regression, Wine classification, and KNN clustering models.

10 Official Certifications:
1. Oracle Certified Foundations Associate | AI-2023 (04/2024)
2. C: Data Structures, Pointers, and File System (Infosys Springboard, 11/2023)
3. Natural Language Processing (Infosys Springboard, 10/2023)
4. Web Design and Development (Infosys Springboard, 10/2023)
5. Python For Data Science (Infosys Springboard, 09/2023)
6. Azure Data Engineer Associate (Microsoft, 06/2023)
7. Security, Compliance, and Identity Fundamentals SC900 (Microsoft, 05/2023)
8. Succeeding in Web Development: Full Stack and Front End (LinkedIn, 2023)
9. Azure AI Fundamentals AI-900 (Microsoft, 12/2022)
10. Azure Fundamentals AZ-900 (Microsoft, 11/2022)

Key Technical Skills:
- Machine Learning, Deep Learning, SQL, DSA, Python, C, Azure Cloud, NLP, HTML5/CSS3, JavaScript, Pandas, NumPy, Scikit-Learn, Arduino & IoT.
- Integrations: Google Authentication and cloud persistence via Firebase Firestore.

Languages: Hindi (Native), English (Professional Working), German (Beginner).
Personal Interests: Basketball (Sector 106 Basketball Club), Algorithmic Problem-Solving, Programming, Anime.

CRITICAL GUIDELINES:
1. Strictly base your answers on Rishu's actual portfolio data above. NEVER invent, exaggerate, or hallucinate credentials, degrees, companies, or facts.
2. If asked about something that is not in the portfolio, say honestly:
   "I don't have that information yet, but you can contact Rishu directly for more details at rishusingh627h@gmail.com or +91 8375050619."
3. Keep your tone professional, concise, articulate, and welcoming. Match the dark editorial aesthetic of Rishu's portfolio.
4. Format responses cleanly using short paragraphs or bullet points for readability.
5. If the user asks how to get in touch, provide his email (rishusingh627h@gmail.com), phone (+91 8375050619), or LinkedIn link.
`;

/**
 * Intelligent deterministic fallback generator for when Gemini API key is missing or offline
 */
export function generateLocalAssistantResponse(query: string, history: Array<{ role: string; text: string }> = []): string {
  const q = query.toLowerCase().trim();

  // Contact inquiries
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('touch') || q.includes('linkedin') || q.includes('github') || q.includes('git') || q.includes('repository') || q.includes('repo')) {
    return `You can reach Rishu and explore his work directly through the following channels:

• **GitHub Repositories:** [github.com/RISHU1510](https://github.com/RISHU1510?tab=repositories)
• **LinkedIn:** [linkedin.com/in/rishu-singh-00006924b](http://linkedin.com/in/rishu-singh-00006924b)
• **Email:** [rishusingh627h@gmail.com](mailto:rishusingh627h@gmail.com)
• **Phone:** [+91 8375050619](tel:+918375050619)
• **Location:** Sector 108, Gurgaon, Haryana, India

He is currently **available** for Data Analyst and Junior Data Analyst roles!`;
  }

  // Skills & Technologies
  if (q.includes('skill') || q.includes('technolog') || q.includes('tech stack') || q.includes('language') || q.includes('python') || q.includes('sql') || q.includes('tools')) {
    return `Rishu's technical skill set spans data analytics, machine learning, and systems:

• **AI & Machine Learning:** Supervised & Unsupervised ML, Deep Learning, Natural Language Processing (NLP), Scikit-Learn
• **Data Analytics & Databases:** SQL (complex queries & joins), Pandas, NumPy, Exploratory Data Analysis (EDA)
• **Programming Languages:** Python (Advanced), C (Pointers & Memory Architecture), JavaScript (ES6+)
• **Cloud & Infrastructure:** Microsoft Azure Cloud (Certified Data Engineer Associate, AZ-900, AI-900, SC-900)
• **Systems & IoT:** Arduino Uno/Nano, C/C++, sensor calibration (SW-420, ADXL335/345)
• **Web Technologies:** HTML5, CSS3, JavaScript, REST APIs

Would you like to know more about his projects using these skills?`;
  }

  // Projects
  if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('built') || q.includes('interesting')) {
    if (q.includes('interesting') || q.includes('best') || q.includes('favorite')) {
      return `One of Rishu's most impressive projects is the **Personality Detection System**:

• **What it is:** An AI behavioral analytics platform that analyzes unstructured social media text to detect and classify psychological personality traits.
• **Core Technologies:** Python, Deep Learning neural networks, NLP tokenization, and Scikit-Learn.
• **Highlight:** Handles high-variance informal language with sub-second inference per profile, evaluated on 10,000+ text samples.

He has also built an **Earthquake Detection IoT System** (Arduino + vibration sensors with <100ms alert time) and the **Inventrom Bolt IoT corporate portal**. Would you like details on any of these?`;
    }

    return `Rishu has developed 5 featured projects across AI/ML, IoT, and Web Development:

1. **Personality Detection System (AI/ML):** Deep Learning & NLP behavioral profiling pipeline analyzing social media text traits.
2. **Earthquake Detection & Alert System (IoT):** Hardware alarm built with Arduino, SW-420 vibration sensor, and ADXL335/345 accelerometers with <100ms alert response.
3. **Inventrom Bolt IoT Web Portal:** Corporate multi-page responsive web portal built as capstone project during his internship.
4. **Movie Finder Web App:** Fast, dependency-free vanilla JavaScript discovery app utilizing dynamic REST APIs.
5. **Machine Learning Predictive Suite:** Multivariate linear regression for housing prices, wine quality classifier, and KNN botanical clustering.

Which project would you like to explore deeper?`;
  }

  // Experience & Internships
  if (q.includes('experience') || q.includes('internship') || q.includes('work experience') || q.includes('bharatintern') || q.includes('inventrom') || q.includes('career')) {
    return `Rishu brings **1 year of applied technical experience** across 3 distinct internships:

1. **Machine Learning Intern — BharatIntern (July–August 2023):**
   • Built multivariate Linear Regression model for house price forecasting.
   • Created classification models for wine quality assessment and KNN flower classification.
   • Handled end-to-end data preprocessing, feature engineering, and model validation using Python and Scikit-Learn.

2. **Web Development Intern — Inventrom Bolt IoT Pvt. Ltd. (June–July 2022):**
   • Developed the interactive Movie Finder web application.
   • Architected and delivered the comprehensive Inventrom corporate website capstone.

3. **Embedded Systems & IoT Intern — College Lab (July–August 2022):**
   • Engineered real-time seismic detection prototype with Arduino and dual-sensor calibration with sub-100ms alert trigger.

He also holds 10 industry certifications validating these domains.`;
  }

  // Education & Academics
  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('school') || q.includes('cgpa') || q.includes('study') || q.includes('b-tech') || q.includes('btech')) {
    return `Rishu's educational background:

• **B-Tech in Computer Science & Engineering (Specialization: AI & ML)**
  *Manav Rachna International Institute of Research & Studies (2021 — 2025)*
  • Completed with **6.22 CGPA**
  • Specialized in Machine Learning, Deep Learning, Natural Language Processing, and Data Structures.

• **Senior Secondary (Class XII — Science PCM & CS)**
  *Doon International School, Dehradun (2019 — 2021)* — **69%**

• **Secondary School (Class X)**
  *Doon International School, Dehradun (2017 — 2019)* — **64%**`;
  }

  // Certifications
  if (q.includes('certification') || q.includes('certificate') || q.includes('microsoft') || q.includes('oracle') || q.includes('infosys') || q.includes('azure')) {
    return `Rishu holds **10 verified professional certifications**:

• **Microsoft Certifications (4):**
  - Azure Data Engineer Associate (06/2023)
  - Security, Compliance, and Identity Fundamentals SC-900 (05/2023)
  - Azure AI Fundamentals AI-900 (12/2022)
  - Azure Fundamentals AZ-900 (11/2022)

• **Oracle:**
  - Oracle Certified Foundations Associate | AI-2023 (04/2024)

• **Infosys Springboard (4):**
  - Python For Data Science (09/2023)
  - Natural Language Processing (10/2023)
  - C: Data Structures, Pointers, and File System (11/2023)
  - Web Design and Development (10/2023)

• **LinkedIn Learning:**
  - Succeeding in Web Development: Full Stack & Front End (2023)`;
  }

  // Availability & Roles
  if (q.includes('available') || q.includes('hire') || q.includes('role') || q.includes('looking for') || q.includes('job') || q.includes('opportunity')) {
    return `Yes! Rishu is **actively available for full-time opportunities** as a:

• **Data Analyst**
• **Junior Data Analyst**
• **Associate AI/ML Engineer**
• **Data Science Associate**

He is based in **Sector 108, Gurgaon, Haryana, India**, and open to on-site, hybrid, and remote roles. Feel free to contact him at [rishusingh627h@gmail.com](mailto:rishusingh627h@gmail.com) or [+91 8375050619](tel:+918375050619).`;
  }

  // About Rishu
  if (q.includes('about') || q.includes('who is') || q.includes('summary') || q.includes('background') || q.includes('intro')) {
    return `**Rishu Singh** is a Data Analyst / Junior Data Analyst with 1 year of applied experience based in Sector 108, Gurgaon, Haryana.

• **Graduation:** B-Tech in Computer Science & Engineering (AI & ML) from Manav Rachna (2025, 6.22 CGPA).
• **Core Focus:** Machine Learning predictive pipelines, relational SQL data extraction, exploratory data analysis with Python, and cloud data workflows with Azure.
• **Experience:** 3 technical internships (BharatIntern, Inventrom Bolt IoT, College IoT Lab) and 10 industry certifications (Oracle, Microsoft, Infosys).
• **Passions:** Basketball (Sector 106 pickup club), algorithmic puzzles, and high-quality programming.

What aspect of his background would you like to explore?`;
  }

  // Basketball / Personal / Hobbies
  if (q.includes('basketball') || q.includes('hobby') || q.includes('interest') || q.includes('personal') || q.includes('anime')) {
    return `Beyond technical engineering, Rishu has several active pursuits:

• **Basketball:** Active player and community organizer for the **Sector 106 Basketball Club** in Gurgaon. He values tactical court vision, teamwork under pressure, and physical discipline.
• **Algorithmic Problem-Solving:** Dissecting computational puzzles and data structure optimizations.
• **Programming & AI:** Experimenting with new ML models, pointer manipulation in C, and modern web architectures.
• **Anime:** Enjoys deep visual worldbuilding, narrative complexity, and creative character storytelling.`;
  }

  // Default honest fallback
  return "I don't have that information yet, but you can contact Rishu directly for more details at rishusingh627h@gmail.com or +91 8375050619.";
}
