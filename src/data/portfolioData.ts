import {
  Project,
  SkillItem,
  Achievement,
  Statistic,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  JourneyMilestone,
  PersonalInterest,
  Testimonial,
  SocialLink,
  LanguageItem,
} from '../types';

/**
 * ============================================================================
 * RISHU SINGH — OFFICIAL PORTFOLIO DATA FILE
 * ============================================================================
 * Professional dossier of Rishu Singh: Data Analyst & Computer Science Professional
 * Specialized in AI/ML, Data Analytics, Python, SQL, C, Azure, and Web Development.
 */

export const personalInfo = {
  name: "Rishu Singh",
  firstName: "Rishu",
  lastName: "Singh",
  monogram: "RS",
  title: "Data Analyst / Junior Data Analyst (1 Year Experience)",
  subtitle: "Data Analyst • Junior Data Analyst • 1 Year Experience",
  tagline: "Ambitious and detail-oriented Data Analyst with 1 year of applied experience in Machine Learning predictive models, SQL data querying, and software platforms. Seeking opportunities to contribute meaningfully.",
  location: "Sector 108, Gurgaon, Haryana, India",
  email: "rishusingh627h@gmail.com",
  phone: "+91 8375050619",
  linkedin: "http://linkedin.com/in/rishu-singh-00006924b",
  availability: "Available for Data Analyst & Junior Data Analyst Roles",
  availabilityStatus: "available" as const,
  resumeDownloadUrl: "#resume",
  profilePhoto: "/assets/images/rishu_profile.jpg",
  editorialPhoto: "/assets/images/rishu_pic.jpg",
  shortBio:
    "Detail-oriented Data Analyst / Junior Data Analyst with 1 year of applied experience in Machine Learning, predictive modeling, SQL, Python, C, and Azure Cloud tools.",
  philosophy:
    "Data without structured synthesis is merely noise. Whether building predictive models, writing analytical SQL queries, or engineering sensor pipelines, I focus on turning complex datasets into reliable, actionable insights.",
  personalStory:
    "Living in Sector 108, Gurgaon, Haryana, and pursuing my B-Tech in Computer Science (AI & Machine Learning) at Manav Rachna International Institute. With 1 year of hands-on experience spanning 3 internships (Machine Learning at BharatIntern, Web Development at Inventrom Bolt IoT, and IoT Hardware prototyping) alongside 10 industry certifications, I bring dedicated analytical rigor to data teams.",
};

export const languagesData: LanguageItem[] = [
  {
    language: "Hindi",
    proficiency: "Native Proficiency",
    level: "Native",
  },
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    level: "Fluent",
  },
  {
    language: "German",
    proficiency: "Elementary / Beginner",
    level: "Beginner",
  },
];

export const hobbiesList = [
  { name: "Basketball", description: "Team coordination, tactical court vision, discipline, and endurance." },
  { name: "Problem-Solving", description: "Analytical puzzles, algorithmic challenge solving, and mathematical logic." },
  { name: "Programming", description: "Exploring AI/ML pipelines, C memory systems, and modern web architectures." },
  { name: "Anime", description: "Visual storytelling, rich conceptual worldbuilding, and creative direction." },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/rishu-singh-00006924b",
    icon: "Linkedin",
    handle: "rishu-singh-00006924b",
  },
  {
    name: "Email",
    url: "mailto:rishusingh627h@gmail.com",
    icon: "Mail",
    handle: "rishusingh627h@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+918375050619",
    icon: "Phone",
    handle: "+91 8375050619",
  },
  {
    name: "GitHub",
    url: "https://github.com/RISHU1510?tab=repositories",
    icon: "Github",
    handle: "@RISHU1510",
  },
];

export const statistics: Statistic[] = [
  {
    label: "Applied Experience",
    value: 1,
    suffix: " Year",
    description: "Hands-on internships across ML, Web Dev & IoT",
  },
  {
    label: "Certifications",
    value: 10,
    suffix: "",
    description: "From Microsoft, Oracle, Infosys & LinkedIn",
  },
  {
    label: "Technical Internships",
    value: 3,
    suffix: "",
    description: "Machine Learning, Web Dev & IoT Hardware",
  },
  {
    label: "Featured Projects",
    value: 5,
    suffix: "+",
    description: "AI/ML, IoT Embedded, Web Apps & ML Suites",
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "B-Tech in Computer Science & Engineering (AI & ML)",
    institution: "Manav Rachna International Institute of Research & Studies",
    duration: "2021 — 2025 (Completed)",
    specialization: "Artificial Intelligence & Machine Learning",
    grade: "6.22 CGPA",
    highlights: [
      "Graduated with 6.22 CGPA in specialized Artificial Intelligence & Machine Learning curriculum.",
      "Specialized coursework in Machine Learning, Deep Learning, Natural Language Processing, and Data Structures & Algorithms.",
      "Developed Personality Detection System using Deep Learning & NLP for social media behavioral analysis.",
      "Comprehensive laboratory training in relational database management (SQL), Python programming, C systems, and cloud infrastructure (Azure).",
    ],
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Doon International School, Dehradun",
    duration: "2019 — 2021",
    specialization: "Science Stream (PCM & Computer Science)",
    grade: "69%",
    highlights: [
      "Strong academic foundation in physics, advanced mathematics, and algorithmic problem solving.",
      "Formed core competencies in analytical logic and procedural programming.",
    ],
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Doon International School, Dehradun",
    duration: "2017 — 2019",
    specialization: "General Science, Mathematics & Humanities",
    grade: "64%",
    highlights: [
      "Active participant in athletics and inter-school basketball competitions.",
      "Developed passion for logical reasoning, computer technology, and collaborative teamwork.",
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "personality-detection-system",
    number: "01",
    title: "Personality Detection System",
    subtitle: "Deep Learning & NLP Social Media Trait Profiling",
    category: "AI/ML",
    year: "2024 — 2025",
    shortDescription:
      "An intelligent behavioral analytics system that parses and analyzes unstructured social media text data using Deep Learning architectures and Natural Language Processing to accurately detect and classify psychological personality traits.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=85",
    tags: ["Deep Learning", "NLP", "Python", "Social Media Analytics", "Machine Learning", "Scikit-Learn"],
    githubUrl: "https://github.com/RISHU1510?tab=repositories",
    liveDemoUrl: "https://github.com/RISHU1510?tab=repositories",
    featured: true,
    caseStudy: {
      problem:
        "Unstructured social media posts are inherently noisy, filled with slang, informal syntactic contractions, and high variance in sentiment, making psychological trait assessment manual and intractable at scale.",
      goal:
        "Develop an automated NLP and Deep Learning prediction pipeline capable of ingesting social media post histories and accurately inferring psychological personality dimensions.",
      solution:
        "Engineered an end-to-end Python NLP pipeline leveraging linguistic tokenization, semantic vector representations, and deep neural network classifiers trained on psychometric datasets.",
      developmentProcess: [
        "Collected, cleansed, and normalized social media text datasets with stop-word filtering, lemmatization, and tokenization.",
        "Constructed linguistic feature representations incorporating TF-IDF vectors, N-grams, and semantic embeddings.",
        "Trained Deep Learning classification architectures to predict personality trait distributions across multidimensional categories.",
        "Evaluated classification precision, recall, and F1-metrics to optimize model generalization.",
      ],
      challenges: [
        "Handling context shifts, subtle sarcasm, and diverse informal slang across user writing styles.",
        "Overcoming category imbalance across under-represented personality trait archetypes.",
      ],
      result:
        "Successfully delivered a deep learning behavioral profiling model capable of inferring personality traits from raw social media streams with high classification accuracy.",
      metrics: ["High Multi-Class Trait Accuracy", "Sub-second inference per profile", "Tested on 10,000+ text samples"],
      technologies: ["Python", "PyTorch / TensorFlow", "NLP", "Scikit-Learn", "Pandas", "NumPy", "NLTK"],
      screenshots: [
        "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      ],
    },
  },
  {
    id: "earthquake-detection-system",
    number: "02",
    title: "Earthquake Detection & Alert System",
    subtitle: "Hardware IoT Microcontroller & Real-Time Seismic Alarm",
    category: "IoT & Embedded",
    year: "2022",
    shortDescription:
      "Hardware and software IoT seismic monitoring system engineered with Arduino Uno/Nano, SW-420 high-sensitivity vibration sensor, and ADXL335/ADXL345 accelerometers triggering instantaneous audible buzzer, LED, and IoT alerts.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    tags: ["Arduino Uno/Nano", "SW-420 Sensor", "ADXL335/345", "IoT Alert", "C/C++", "Hardware Interfacing"],
    githubUrl: "https://github.com/RISHU1510?tab=repositories",
    liveDemoUrl: "https://github.com/RISHU1510?tab=repositories",
    featured: true,
    caseStudy: {
      problem:
        "Commercial seismic detection instruments are prohibitively costly and often lack direct, localized auditory and visual emergency notification mechanisms for occupants during initial shockwaves.",
      goal:
        "Design and construct an affordable, highly sensitive, real-time seismic detection apparatus utilizing commercial microcontrollers and multi-axis acceleration sensors.",
      solution:
        "Integrated an Arduino microcontroller with an SW-420 vibration sensor and ADXL335/ADXL345 tri-axis accelerometers, programmed in embedded C/C++ to trigger immediate multi-sensory emergency alarms.",
      developmentProcess: [
        "Calibrated SW-420 vibration sensor sensitivity thresholds via potentiometer adjustments to ignore normal ambient foot traffic.",
        "Interfaced ADXL335/345 accelerometers over analog and I2C channels to compute sudden gravitational delta-G acceleration vectors.",
        "Programmed Arduino micro-controller routines in C/C++ executing continuous interrupt-driven sensor polling.",
        "Engineered fail-safe alarm outputs driving an audible high-decibel warning buzzer, visual flashing LED indicators, and IoT telemetry.",
      ],
      challenges: [
        "Filtering out spurious mechanical vibrations caused by HVAC or door slams while maintaining maximum sensitivity to seismic P-waves.",
        "Ensuring minimal latency between vibration threshold detection and audible alarm sounding.",
      ],
      result:
        "Produced an operational prototype delivering sub-100ms emergency alarm activation upon detecting simulated earthquake vibrations, featured at the college engineering exposition.",
      metrics: ["< 100ms Alert Trigger Latency", "3-Axis Vector Calibration", "Dual Sensor Fusion (Vibration + Acceleration)"],
      technologies: ["Arduino Uno/Nano", "C/C++", "SW-420 Vibration Sensor", "ADXL335/345 Accelerometer", "IoT Protocols", "Circuit Prototyping"],
      screenshots: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      ],
    },
  },
  {
    id: "inventrom-website",
    number: "03",
    title: "Inventrom Bolt IoT Web Portal",
    subtitle: "Commercial Corporate Website & IoT Solutions Portal",
    category: "Web Development",
    year: "2022",
    shortDescription:
      "A responsive commercial corporate website engineered as the final capstone project during the web development internship at Inventrom Bolt IoT Pvt. Ltd., showcasing hardware products and cloud integrations.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Corporate Web", "Inventrom Bolt IoT"],
    githubUrl: "https://github.com/RISHU1510?tab=repositories",
    liveDemoUrl: "https://github.com/RISHU1510?tab=repositories",
    featured: true,
    caseStudy: {
      problem:
        "Enterprise IoT clients require intuitive web portals where device specifications, cloud platform features, and integration guides are accessible without friction.",
      goal:
        "Design and implement the culminating capstone corporate website for Inventrom Bolt IoT showcasing smart hardware devices, cloud capabilities, and customer case studies.",
      solution:
        "Built a multi-page responsive website employing semantic HTML, bespoke CSS styling, and interactive JavaScript modules showcasing IoT product tiers, specifications, and interactive contact channels.",
      developmentProcess: [
        "Structured modular website architecture with clean navigation, product showcase, and support tiers.",
        "Styled custom responsive components with CSS flexbox and CSS grid matching corporate brand identity.",
        "Integrated interactive product image galleries and dynamic feature comparison tables.",
        "Tested thoroughly across Chrome, Edge, and mobile viewports for responsive fidelity.",
      ],
      challenges: [
        "Balancing dense technical hardware specifications with an engaging visual aesthetic.",
        "Creating smooth interactive navigation without relying on third-party JavaScript libraries.",
      ],
      result:
        "Successfully delivered the culminating final internship capstone website, earning commendations from the technical mentors at Inventrom Bolt IoT.",
      metrics: ["Comprehensive Multi-Page Site", "Final Capstone Project Distinction", "Fully Responsive Architecture"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Standards", "Responsive UI"],
      screenshots: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      ],
    },
  },
  {
    id: "movie-finder-app",
    number: "04",
    title: "Movie Finder Web Application",
    subtitle: "Interactive Entertainment Search & Filter Portal",
    category: "Web Development",
    year: "2022",
    shortDescription:
      "Interactive movie discovery and search application built with HTML, CSS, and JavaScript during the Inventrom internship, featuring dynamic query filtering, modal details, and responsive styling.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=85",
    tags: ["HTML5", "CSS3", "JavaScript", "REST API", "DOM Manipulation", "Responsive Design"],
    githubUrl: "https://github.com/RISHU1510?tab=repositories",
    liveDemoUrl: "https://github.com/RISHU1510?tab=repositories",
    featured: true,
    caseStudy: {
      problem:
        "Casual entertainment seekers frequently struggle with clunky movie portals that suffer from slow search responses and bloated navigational layouts.",
      goal:
        "Build a lightweight, lightning-fast movie discovery application during the Inventrom web development curriculum with zero external bloated frameworks.",
      solution:
        "Developed clean asynchronous JavaScript fetch routines querying external movie APIs, updating dynamic DOM nodes smoothly with poster art, ratings, release years, and plot summaries.",
      developmentProcess: [
        "Constructed semantic HTML5 layout and custom CSS grid/flexbox cards for movie items.",
        "Implemented debounced live search queries using native JavaScript asynchronous fetch requests.",
        "Designed modal popup windows for comprehensive movie synopses and metadata details.",
        "Optimized mobile responsiveness across small smartphone displays and wide desktop viewports.",
      ],
      challenges: [
        "Gracefully handling missing poster image URLs and incomplete API metadata.",
        "Preventing excessive API calls during rapid user keyboard typing through input debouncing.",
      ],
      result:
        "Delivered a fluid, user-friendly movie exploration tool with instantaneous search feedback and clean responsive design.",
      metrics: ["Instantaneous Live Filter", "100% Native Vanilla JS (Zero Dependency)", "Cross-Browser Compatible"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Movie REST API", "Git"],
      screenshots: [
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      ],
    },
  },
  {
    id: "bharatintern-ml-predictive-suite",
    number: "05",
    title: "Machine Learning Predictive Suite",
    subtitle: "House Price Linear Regression, Wine Quality Assessment & KNN",
    category: "Data Analytics",
    year: "2023",
    shortDescription:
      "A triad of supervised machine learning solutions developed at BharatIntern: multivariate Linear Regression for real estate price forecasting, classification for wine quality assessment, and KNN for botanical species clustering.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["Machine Learning", "Linear Regression", "KNN", "Classification", "Python", "Scikit-Learn", "Pandas"],
    githubUrl: "https://github.com/RISHU1510?tab=repositories",
    liveDemoUrl: "https://github.com/RISHU1510?tab=repositories",
    featured: true,
    caseStudy: {
      problem:
        "Real-world datasets contain missing values, multicollinearity, and non-linear boundaries that hinder straightforward predictive modeling.",
      goal:
        "Design, train, and validate three distinct predictive models addressing regression, multi-class quality classification, and nearest-neighbor distance clustering.",
      solution:
        "Developed a structured Python workflow executing Exploratory Data Analysis (EDA), feature scaling, model training, cross-validation, and performance visualization using Scikit-Learn and Matplotlib.",
      developmentProcess: [
        "Constructed House Price Prediction model using multivariate Linear Regression with feature coefficient analysis.",
        "Built Wine Quality Classification model evaluating physicochemical properties (acidity, residual sugar, alcohol).",
        "Implemented K-Nearest Neighbors (KNN) model for botanical Iris flower classification using Euclidean distance optimization.",
        "Analyzed model performance using R² score, Mean Squared Error (MSE), confusion matrices, and ROC curves.",
      ],
      challenges: [
        "Overcoming feature correlation in housing variables and tuning the optimal hyperparameter k in KNN.",
        "Normalizing disparate feature scales across chemical attributes for balanced gradient computations.",
      ],
      result:
        "Successfully validated all three machine learning tasks with high predictive fidelity, satisfying all BharatIntern certification criteria.",
      metrics: ["High R² on Housing Regression", "High Precision on Wine Classification", "Optimal Hyperparameter Tuning"],
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      ],
    },
  },
];

export const skillsData: SkillItem[] = [
  // Primary Highlighted Skills from Resume
  {
    name: "Machine Learning",
    level: "Advanced",
    category: "AI / Machine Learning",
    highlight: true,
    description: "Supervised and unsupervised models, linear regression, KNN classification, cross-validation, and evaluation metrics.",
  },
  {
    name: "Deep Learning",
    level: "Advanced",
    category: "AI / Machine Learning",
    highlight: true,
    description: "Neural network architectures, forward/backpropagation, loss functions, NLP text modeling, and behavioral classification.",
  },
  {
    name: "SQL",
    level: "Advanced",
    category: "Databases",
    highlight: true,
    description: "Relational database schema modeling, complex JOIN operations, aggregations, subqueries, and analytical data extraction.",
  },
  {
    name: "DSA (Data Structures & Algorithms)",
    level: "Advanced",
    category: "Programming",
    highlight: true,
    description: "Arrays, linked lists, stacks, queues, trees, searching/sorting algorithms, and asymptotic time/space complexity.",
  },
  {
    name: "Python",
    level: "Advanced",
    category: "Programming",
    highlight: true,
    description: "Core programming for machine learning pipelines, predictive modeling, data wrangling, and automated scripting.",
  },
  {
    name: "C",
    level: "Proficient",
    category: "Programming",
    highlight: true,
    description: "Low-level systems programming, pointers, pointer arithmetic, memory management, and procedural data structures.",
  },
  {
    name: "Azure Cloud",
    level: "Proficient",
    category: "Cloud",
    highlight: true,
    description: "Microsoft Azure Cloud fundamentals, Azure AI cognitive services, Data Engineering principles, and cloud architecture.",
  },
  {
    name: "Natural Language Processing (NLP)",
    level: "Proficient",
    category: "AI / Machine Learning",
    highlight: true,
    description: "Text tokenization, TF-IDF vectorization, lemmatization, sentiment analysis, and social media text modeling.",
  },

  // Web Development
  {
    name: "HTML5 & CSS3",
    level: "Advanced",
    category: "Web Development",
    highlight: true,
    description: "Semantic web layouts, CSS Grid, Flexbox, media queries, mobile-first design, and corporate web portal development.",
  },
  {
    name: "JavaScript (ES6+)",
    level: "Proficient",
    category: "Web Development",
    highlight: true,
    description: "Asynchronous fetch operations, dynamic DOM manipulation, event handling, and interactive web application logic.",
  },

  // IoT & Systems
  {
    name: "IoT & Hardware Prototyping",
    level: "Proficient",
    category: "Tools",
    highlight: true,
    description: "Arduino Uno/Nano microcontrollers, SW-420 vibration sensors, ADXL335/345 accelerometers, buzzer/LED circuits.",
  },

  // Data Analytics
  {
    name: "Pandas & NumPy",
    level: "Advanced",
    category: "Data Analytics",
    highlight: true,
    description: "Data cleaning, feature engineering, missing value imputation, multi-dimensional array operations, and EDA.",
  },
  {
    name: "Data Visualization (Matplotlib & Seaborn)",
    level: "Proficient",
    category: "Data Analytics",
    description: "Exploratory plotting, correlation heatmaps, residual distribution plots, and confusion matrix visualizations.",
  },
  {
    name: "Scikit-Learn",
    level: "Advanced",
    category: "AI / Machine Learning",
    description: "Model selection, hyperparameter tuning, train-test splitting, regression, classification, and clustering pipelines.",
  },

  // Tools & Environment
  {
    name: "Git & GitHub",
    level: "Proficient",
    category: "Tools",
    description: "Version control, repository management, collaborative branching, commits, and project documentation.",
  },
  {
    name: "VS Code & Jupyter Notebook",
    level: "Advanced",
    category: "Tools",
    description: "Interactive data analysis environments, code debugging, and iterative model development workflows.",
  },
];

export const achievementsData: Achievement[] = [
  // 10 Verified Certifications from Resume
  {
    id: "cert-1",
    number: "01",
    title: "Oracle Certified Foundations Associate | AI-2023",
    category: "Certification",
    year: "04/2024",
    description:
      "Validated comprehensive foundational understanding of Artificial Intelligence concepts, machine learning algorithms, neural network paradigms, and Oracle Cloud AI capabilities.",
    issuer: "Oracle University",
  },
  {
    id: "cert-2",
    number: "02",
    title: "C: Data Structures, Pointers, and File System",
    category: "Certification",
    year: "11/2023",
    description:
      "Demonstrated advanced proficiency in C procedural architecture, pointer manipulation, dynamic memory allocation, and custom file system operations.",
    issuer: "Infosys Springboard",
  },
  {
    id: "cert-3",
    number: "03",
    title: "Natural Language Processing",
    category: "Certification",
    year: "10/2023",
    description:
      "Certified mastery in linguistic preprocessing, text tokenization, sentiment classification, N-gram language modeling, and NLP algorithm implementation.",
    issuer: "Infosys Springboard",
  },
  {
    id: "cert-4",
    number: "04",
    title: "Web Design and Development",
    category: "Certification",
    year: "10/2023",
    description:
      "Certified competence in modern web architecture, responsive layouts, semantic HTML standards, CSS styling, and client-side web applications.",
    issuer: "Infosys Springboard",
  },
  {
    id: "cert-5",
    number: "05",
    title: "Python For Data Science",
    category: "Certification",
    year: "09/2023",
    description:
      "Mastered Python data manipulation with NumPy and Pandas, exploratory statistical analysis, data cleaning techniques, and predictive visualization.",
    issuer: "Infosys Springboard",
  },
  {
    id: "cert-6",
    number: "06",
    title: "Azure Data Engineer Associate",
    category: "Certification",
    year: "06/2023",
    description:
      "Professional accreditation in designing and implementing cloud data storage, processing pipelines, relational data synchronization, and data governance on Microsoft Azure.",
    issuer: "Microsoft",
  },
  {
    id: "cert-7",
    number: "07",
    title: "Security, Compliance, and Identity Fundamentals (SC900)",
    category: "Certification",
    year: "05/2023",
    description:
      "Official Microsoft certification establishing knowledge of cloud security paradigms, zero-trust architectures, compliance standards, and identity protection services.",
    issuer: "Microsoft",
  },
  {
    id: "cert-8",
    number: "08",
    title: "Succeeding in Web Development: Full Stack and Front End",
    category: "Certification",
    year: "2023",
    description:
      "Comprehensive multi-track credential covering modern front-end user experience best practices, responsive systems, and end-to-end full-stack web architectures.",
    issuer: "LinkedIn Learning",
  },
  {
    id: "cert-9",
    number: "09",
    title: "Azure AI Fundamentals (AI-900)",
    category: "Certification",
    year: "12/2022",
    description:
      "Demonstrated mastery of foundational artificial intelligence workloads, machine learning concepts, computer vision services, and responsible AI principles in Microsoft Azure.",
    issuer: "Microsoft",
  },
  {
    id: "cert-10",
    number: "10",
    title: "Azure Fundamentals (AZ-900)",
    category: "Certification",
    year: "11/2022",
    description:
      "Foundational certification covering cloud computing architecture, core Azure services, cloud management tools, identity, governance, and cloud security paradigms.",
    issuer: "Microsoft",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "BharatIntern",
    role: "Machine Learning Intern",
    duration: "July – August 2023",
    location: "Remote",
    type: "Virtual Internship",
    responsibilities: [
      "Engineered multivariate Linear Regression predictive model for residential house price estimation, conducting feature selection and residual analysis.",
      "Developed a multi-class Classification model evaluating chemical property indicators to determine wine quality scores.",
      "Constructed a K-Nearest Neighbors (KNN) model for botanical flower species classification using Euclidean distance optimization.",
      "Performed comprehensive data preprocessing, missing value handling, feature scaling, and model evaluation using Pandas, NumPy, and Scikit-Learn.",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Linear Regression", "KNN"],
    achievements: [
      "Successfully finalized and validated all 3 machine learning deliverables ahead of timeline with high prediction fidelity.",
      "Received official internship completion certification and positive evaluation.",
    ],
  },
  {
    id: "exp-2",
    company: "Inventrom Bolt IoT Pvt. Ltd.",
    role: "Web Development Intern",
    duration: "June – July 2022",
    location: "Remote / India",
    type: "Industry Internship",
    responsibilities: [
      "Learned core frontend technologies and industry standards across HTML, CSS, and modern JavaScript.",
      "Engineered the interactive Movie Finder web application featuring dynamic REST API search queries and real-time DOM card rendering.",
      "Architected and built the comprehensive Inventrom corporate website as the culminating capstone final project.",
      "Ensured cross-browser compatibility, responsive viewport optimization, and fluid user navigation.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "DOM Manipulation", "Responsive Design"],
    achievements: [
      "Created and presented the final Inventrom corporate website capstone project to technical supervisors.",
      "Awarded internship certificate of completion for excellent front-end implementation.",
    ],
  },
  {
    id: "exp-3",
    company: "College Academic & Hardware Lab",
    role: "Embedded Systems & IoT Engineering Intern",
    duration: "July – August 2022",
    location: "On-Campus / Lab",
    type: "Hardware Internship",
    responsibilities: [
      "Developed an operational real-time Earthquake Detection System based on Arduino microcontrollers (Uno / Nano).",
      "Interfaced SW-420 high-sensitivity vibration sensors and ADXL335/ADXL345 tri-axis accelerometers for seismic shock detection.",
      "Programmed micro-controllers in C/C++ to analyze threshold acceleration values and trigger immediate emergency routines.",
      "Constructed a real-time multimodal alert mechanism integrating high-decibel warning buzzers, visual status LEDs, and IoT alert signaling.",
    ],
    technologies: ["Arduino (Uno/Nano)", "C/C++", "SW-420 Vibration Sensor", "ADXL335/345 Accelerometer", "IoT Protocols", "Hardware Interfacing"],
    achievements: [
      "Achieved sub-100ms detection response time upon simulated seismic threshold exceedance.",
      "Presented working hardware prototype at the departmental engineering exhibition.",
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Data Analytics & Predictive Modeling",
    tagline: "Uncovering actionable patterns in complex data",
    description:
      "Transforming raw transactional and unstructured datasets into structured business intelligence. Leveraging Python, Pandas, SQL, and Scikit-Learn for exploratory analysis, regression forecasting, and classification.",
    deliverables: ["Exploratory Data Analysis (EDA)", "Predictive Modeling & Regression", "SQL Database Queries & Reporting", "Performance Metric Visualizations"],
    icon: "BarChart3",
  },
  {
    number: "02",
    title: "Machine Learning & Deep Learning",
    tagline: "Algorithms engineered for accuracy & scalability",
    description:
      "Developing supervised and unsupervised machine learning models, from personality detection using Natural Language Processing (NLP) to linear regression and KNN clustering.",
    deliverables: ["Natural Language Processing (NLP)", "Deep Learning Trait Classifiers", "Model Hyperparameter Tuning", "Cross-Validation & Accuracy Auditing"],
    icon: "Cpu",
  },
  {
    number: "03",
    title: "Web Development & Frontend Systems",
    tagline: "Clean, responsive, standards-compliant web platforms",
    description:
      "Building fast, user-friendly web portals with semantic HTML5, modern CSS3 styling, and asynchronous JavaScript. Proven through commercial projects like the Inventrom Bolt IoT website and Movie Finder app.",
    deliverables: ["Responsive Web Design", "REST API Data Integration", "DOM Architecture & Vanilla JS", "Cross-Browser Compatibility"],
    icon: "Layers",
  },
  {
    number: "04",
    title: "IoT & Embedded Hardware Prototyping",
    tagline: "Bridging physical sensor inputs with software logic",
    description:
      "Interfacing microcontrollers (Arduino Uno/Nano) with vibration and acceleration sensors (SW-420, ADXL335/345) to build low-latency real-time detection and alarm systems.",
    deliverables: ["Arduino C/C++ Firmware", "Sensor Calibration & Filtering", "Real-Time Warning Systems", "IoT Telemetry Protocols"],
    icon: "Sparkles",
  },
  {
    number: "05",
    title: "Cloud Infrastructure & Azure Systems",
    tagline: "Certified Microsoft Azure and Cloud knowledge",
    description:
      "Backed by 4 official Microsoft certifications (AZ-900, AI-900, SC-900, Azure Data Engineer Associate) and Oracle AI Foundations certification for modern cloud data workloads.",
    deliverables: ["Cloud Storage & Pipeline Concepts", "Azure AI Cognitive Services", "Security & Compliance Best Practices", "Data Architecture Foundations"],
    icon: "ShieldCheck",
  },
  {
    number: "06",
    title: "Software & Systems Engineering",
    tagline: "Rooted in C programming and Data Structures",
    description:
      "Writing clean, modular code with strong foundations in Data Structures & Algorithms (DSA), memory pointers in C, and procedural programming.",
    deliverables: ["Algorithmic Problem Solving", "Data Structure Optimization", "C Pointer & Memory Management", "Modular Code Architecture"],
    icon: "Code2",
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "jm-2019-school",
    year: "2019",
    title: "Secondary School Foundation",
    subtitle: "Doon International School, Dehradun",
    description:
      "Completed Class X (64%) at Doon International School. Developed early interest in mathematics, competitive basketball, and analytical reasoning.",
    highlights: ["Active in basketball athletics", "Mathematical reasoning foundation", "Collaborative team projects"],
  },
  {
    id: "jm-2021-senior-secondary",
    year: "2021",
    title: "Senior Secondary (XII Science)",
    subtitle: "Doon International School, Dehradun",
    description:
      "Graduated Class XII in Science (PCM & Computer Science) with 69%. Developed foundational programming acumen in procedural computational logic.",
    highlights: ["Physics, Chemistry & Advanced Mathematics", "Formative algorithmic problem-solving", "Entry into B-Tech in Computer Science"],
  },
  {
    id: "jm-2021-btech-enrollment",
    year: "2021",
    title: "Enrolled in B-Tech CSE (AI & ML)",
    subtitle: "Manav Rachna International Institute of Research & Studies",
    description:
      "Commenced undergraduate engineering degree specializing in Artificial Intelligence and Machine Learning, mastering data structures, algorithms, and C systems.",
    highlights: ["Procedural programming in C and memory pointers", "Discrete mathematics and Boolean logic", "Relational database concepts (SQL)"],
  },
  {
    id: "jm-2022-internships",
    year: "2022",
    title: "Web Development & IoT Hardware Internships",
    subtitle: "Inventrom Bolt IoT & College Seismic Detection Project",
    description:
      "Completed intensive Web Development internship at Inventrom Bolt IoT building the Movie Finder app and Inventrom corporate website. Simultaneously built the Arduino Earthquake Detection hardware system.",
    highlights: ["Built corporate Inventrom website capstone", "Engineered Movie Finder with dynamic API search", "Prototyped sub-100ms Arduino Earthquake Alert System", "Earned Microsoft AZ-900 & AI-900 Certifications"],
  },
  {
    id: "jm-2023-ml-cloud",
    year: "2023",
    title: "Machine Learning Internship & Advanced Cloud Certifications",
    subtitle: "BharatIntern & Microsoft / Infosys Certifications",
    description:
      "Executed 3 predictive ML models at BharatIntern (House Price Regression, Wine Quality, KNN Flower Classification). Earned Microsoft SC-900 and Azure Data Engineer Associate, alongside 4 Infosys credentials.",
    highlights: ["Shipped 3 supervised ML models at BharatIntern", "Earned Microsoft Azure Data Engineer Associate", "Completed Infosys Python for Data Science & NLP", "Earned LinkedIn Full Stack & Frontend Certification"],
  },
  {
    id: "jm-2024-2025-grad-capstone",
    year: "2024 — 2025",
    title: "Oracle AI Certification & Degree Completion",
    subtitle: "Personality Detection System & Completed with 6.22 CGPA",
    description:
      "Awarded Oracle Certified Foundations Associate in AI-2023. Engineered the capstone Personality Detection System utilizing Deep Learning & NLP on social media datasets. Completed B-Tech in CSE (AI & ML) with 6.22 CGPA.",
    highlights: ["Earned Oracle Certified Foundations Associate | AI-2023", "Engineered Deep Learning Personality Detection System", "Completed B-Tech CSE (AI & ML) scored 6.22 CGPA", "Open for full-time Data Analyst and Software opportunities"],
  },
];

export const personalInterests: PersonalInterest[] = [
  {
    category: "Athletics & Fitness",
    title: "Basketball & Kinetic Teamwork",
    description:
      "Playing basketball fosters strategic court vision, rapid tactical decision-making, physical endurance, and the synergy of collaborative teamwork under pressure.",
    icon: "Compass",
    tags: ["Basketball", "Tactical Vision", "Team Synergy", "Physical Discipline"],
  },
  {
    category: "Intellectual Passion",
    title: "Algorithmic Problem-Solving",
    description:
      "I genuinely enjoy dissecting intricate computational puzzles, optimizing time and space complexity, and finding clean solutions to analytical bottlenecks.",
    icon: "ShieldCheck",
    tags: ["Data Structures", "Algorithmic Logic", "Optimization", "Analytical Thinking"],
  },
  {
    category: "Craft & Technology",
    title: "Programming & Applied AI",
    description:
      "From training deep neural networks for personality profiling in Python to writing pointer-precise C code or crafting responsive web layouts, coding is my creative craft.",
    icon: "BookOpen",
    tags: ["Python", "Deep Learning", "SQL Queries", "Systems in C"],
  },
  {
    category: "Culture & Imagination",
    title: "Anime & Visual Worldbuilding",
    description:
      "An avid appreciation for Japanese animation, narrative depth, character evolution, rich thematic visual art, and inventive high-concept storytelling.",
    icon: "Heart",
    tags: ["Visual Storytelling", "Creative Worldbuilding", "Art Direction", "Thematic Depth"],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Rishu demonstrated remarkable diligence during his Machine Learning internship at BharatIntern. His predictive models in house price regression and classification were structured, well-documented, and executed ahead of deadline.",
    person: "Technical Mentorship Lead",
    role: "Internship Review Panel",
    company: "BharatIntern",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-2",
    quote:
      "Working with Rishu during his Web Development tenure at Inventrom was a great experience. He rapidly grasped frontend best practices and delivered both the Movie Finder app and our corporate website with clean responsive polish.",
    person: "Supervising Engineer",
    role: "Web Development Division",
    company: "Inventrom Bolt IoT Pvt. Ltd.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-3",
    quote:
      "Rishu's hands-on initiative in designing the Earthquake Detection System with Arduino and multi-sensor calibration demonstrated a strong blend of hardware comprehension, embedded programming, and problem-solving grit.",
    person: "Faculty Project Coordinator",
    role: "Department of Computer Science & Engineering",
    company: "Manav Rachna International Institute",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];
