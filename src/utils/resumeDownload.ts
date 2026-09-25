import { jsPDF } from 'jspdf';

/**
 * Builds the official 1-page Rishu Singh Data Analyst Resume
 * matching the exact formatting, layout, fonts, and contents.
 */
export function generateResumeDocument(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const marginX = 14;
  const colGap = 10;
  const leftColWidth = 58;
  const rightColX = marginX + leftColWidth + colGap; // 82
  const rightColWidth = pageWidth - rightColX - marginX; // 114

  // Colors
  const darkBlack = '#18181b';
  const grayText = '#3f3f46';
  const lightGray = '#71717a';

  // --- HEADER ---
  let cursorY = 16;

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(darkBlack);
  doc.text('RISHU SINGH', marginX, cursorY);

  // Decorative header accent lines on top right
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.4);
  doc.line(145, 10, 196, 10);
  doc.line(152, 12, 196, 12);
  doc.line(160, 14, 196, 14);

  // LinkedIn link on right
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text('in http://linkedin.com/in/rishu-singh-00006924b', pageWidth - marginX, cursorY, { align: 'right' });

  // Subtitle
  cursorY += 7;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(darkBlack);
  doc.text('DATA ANALYST', marginX, cursorY);

  // Summary Paragraph
  cursorY += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(grayText);
  const summary =
    'Ambitious and detail-oriented Computer Science professional focused on creating impactful and scalable solutions. Seeking opportunities to contribute meaningfully while driving innovation and continuous growth.';
  const splitSummary = doc.splitTextToSize(summary, pageWidth - 2 * marginX);
  doc.text(splitSummary, marginX, cursorY);

  // Horizontal separator line
  cursorY += (splitSummary.length * 4) + 2;
  doc.setDrawColor(160, 160, 160);
  doc.setLineWidth(0.6);
  doc.line(marginX, cursorY, pageWidth - marginX, cursorY);

  cursorY += 5;
  const startColumnsY = cursorY;

  // Helper for section headers
  const drawSectionHeader = (title: string, x: number, y: number, width: number) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkBlack);
    doc.text(title, x, y);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(x, y + 1.5, x + width, y + 1.5);
    return y + 5.5;
  };

  // ==========================================
  // LEFT COLUMN
  // ==========================================
  let leftY = startColumnsY;

  // Contact Info
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(grayText);
  doc.text('+91 8375050619', marginX, leftY);
  leftY += 4.5;
  doc.text('New Delhi, Kalkaji', marginX, leftY);
  leftY += 4.5;
  doc.text('rishusingh627h@gmail.com', marginX, leftY);
  leftY += 7;

  // EDUCATION
  leftY = drawSectionHeader('EDUCATION', marginX, leftY, leftColWidth);

  // Graduation
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(darkBlack);
  doc.text('GRADUATION', marginX, leftY);
  leftY += 3.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(grayText);
  const college = doc.splitTextToSize('Manav Rachna International Institute of Research & Studies', leftColWidth);
  doc.text(college, marginX, leftY);
  leftY += (college.length * 3.4);

  doc.setFont('helvetica', 'bold');
  doc.text('B-Tech CSE-AIML', marginX, leftY);
  leftY += 3.6;

  doc.setFont('helvetica', 'normal');
  doc.text('Completed and scored 6.22 CGPA', marginX, leftY);
  doc.text('2025', marginX + leftColWidth, leftY, { align: 'right' });
  leftY += 6;

  // Senior Secondary
  doc.setFont('helvetica', 'bold');
  doc.text('SENIOR SECONDARY', marginX, leftY);
  leftY += 3.6;

  doc.setFont('helvetica', 'normal');
  doc.text('Doon International School (Dehradun)', marginX, leftY);
  leftY += 3.6;
  doc.text('(69%)', marginX, leftY);
  doc.text('2021', marginX + leftColWidth, leftY, { align: 'right' });
  leftY += 6;

  // Secondary
  doc.setFont('helvetica', 'bold');
  doc.text('SECONDARY', marginX, leftY);
  leftY += 3.6;

  doc.setFont('helvetica', 'normal');
  doc.text('Doon International School (Dehradun)', marginX, leftY);
  leftY += 3.6;
  doc.text('(64%)', marginX, leftY);
  doc.text('2019', marginX + leftColWidth, leftY, { align: 'right' });
  leftY += 8;

  // SKILLS
  leftY = drawSectionHeader('SKILLS', marginX, leftY, leftColWidth);
  const skills = [
    'Machine Learning',
    'Deep Learning',
    'SQL',
    'DSA',
    'Python',
    'C',
    'Azure',
  ];
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(grayText);
  skills.forEach((skill) => {
    doc.text(`•  ${skill}`, marginX, leftY);
    leftY += 4.2;
  });
  leftY += 4;

  // HOBBIES AND INTERESTS
  leftY = drawSectionHeader('HOBBIES AND INTERESTS', marginX, leftY, leftColWidth);
  const hobbies = ['Basketball', 'Problem-Solving', 'Programming', 'Anime'];
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(grayText);
  hobbies.forEach((hobby) => {
    doc.text(`•  ${hobby}`, marginX, leftY);
    leftY += 4.2;
  });
  leftY += 4;

  // LANGUAGES
  leftY = drawSectionHeader('LANGUAGES', marginX, leftY, leftColWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(grayText);
  doc.text('•  Hindi (Native)', marginX, leftY);
  leftY += 4.2;
  doc.text('•  English (Professional', marginX, leftY);
  leftY += 3.6;
  doc.text('   Working Proficiency)', marginX, leftY);
  leftY += 4.2;
  doc.text('•  German (Beginner)', marginX, leftY);

  // ==========================================
  // RIGHT COLUMN
  // ==========================================
  let rightY = startColumnsY;

  // INTERNSHIPS
  rightY = drawSectionHeader('INTERNSHIPS', rightColX, rightY, rightColWidth);

  // Web Dev Internship
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(darkBlack);
  doc.text('WEB DEVELOPMENT INTERNSHIP', rightColX, rightY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(lightGray);
  doc.text('JUNE–JULY 2022', rightColX + rightColWidth, rightY, { align: 'right' });
  rightY += 3.8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(grayText);
  doc.text('INVENTROM BOLT IOT PVT. LTD', rightColX, rightY);
  rightY += 3.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  const webBullets = [
    'Learned HTML, CSS, JAVASCRIPT.',
    'Created Movie Finder project.',
    'Created Inventrom website as final project.',
  ];
  webBullets.forEach((b) => {
    doc.text(`•  ${b}`, rightColX, rightY);
    rightY += 3.6;
  });
  rightY += 3.5;

  // College Internship
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(darkBlack);
  doc.text('COLLEGE INTERNSHIP', rightColX, rightY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(lightGray);
  doc.text('JULY–AUGUST 2022', rightColX + rightColWidth, rightY, { align: 'right' });
  rightY += 3.8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(grayText);
  doc.text('EARTHQUAKE DETECTION APPLICATION', rightColX, rightY);
  rightY += 3.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  const eqBullets = [
    'Developed an Earthquake Detection System using Arduino.',
    'Implemented Vibration Sensor (SW-420) and Accelerometer (ADXL335/ADXL345).',
    'Integrated Arduino Microcontroller (Uno/Nano).',
    'Designed a Real-Time Alert System (Buzzer/LED + IoT Integration).',
  ];
  eqBullets.forEach((b) => {
    const lines = doc.splitTextToSize(`•  ${b}`, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.5;
  });
  rightY += 3.5;

  // Machine Learning Internship
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(darkBlack);
  doc.text('MACHINE LEARNING INTERNSHIP', rightColX, rightY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(lightGray);
  doc.text('JULY–AUGUST 2023', rightColX + rightColWidth, rightY, { align: 'right' });
  rightY += 3.8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(grayText);
  doc.text('BHARATINTERN', rightColX, rightY);
  rightY += 3.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  const mlBullets = [
    'Built a Linear Regression model for house price prediction.',
    'Created a Classification model for wine quality assessment.',
    'Developed a KNN model for flower classification.',
  ];
  mlBullets.forEach((b) => {
    doc.text(`•  ${b}`, rightColX, rightY);
    rightY += 3.6;
  });
  rightY += 5;

  // CERTIFICATIONS
  rightY = drawSectionHeader('CERTIFICATIONS', rightColX, rightY, rightColWidth);
  const certs = [
    'Azure Fundamentals (AZ-900), Microsoft, 11/2022.',
    'Azure AI Fundamentals (AI-900), Microsoft, 12/2022.',
    'Python For Data Science | Infosys, 9/2023.',
    'Web Design and Development | Infosys, 10/2023.',
    'C: Data Structures, Pointers, and File System | Infosys, 11/2023.',
    'Succeeding in Web Development: Full Stack and Front End | LinkedIn.',
    'Security, Compliance, and Identity Fundamentals (SC900), Microsoft, 05/2023.',
    'Azure Data Engineer Associate | Microsoft, 06/2023.',
    'Natural Language Processing | Infosys, 10/2023.',
    'Oracle Certified Foundations Associate | AI-2023 | Oracle University, 4/2024.',
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.6);
  doc.setTextColor(grayText);
  certs.forEach((cert) => {
    const lines = doc.splitTextToSize(`•  ${cert}`, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.4;
  });
  rightY += 4.5;

  // PROJECTS
  rightY = drawSectionHeader('PROJECTS', rightColX, rightY, rightColWidth);
  const projects = [
    'Inventrom Website – Developed using HTML, CSS, JavaScript.',
    'Personality Detection System – Analyzed social media data using Deep Learning & NLP.',
    'Movie Finder Web App – Built using HTML, CSS, JavaScript.',
    'Earthquake Detection System – Implemented using Arduino.',
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(grayText);
  projects.forEach((proj) => {
    const lines = doc.splitTextToSize(`•  ${proj}`, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.6;
  });

  return doc;
}

/**
 * Downloads the resume PDF immediately with fallback mechanisms.
 */
export function downloadResumePDF(fileName = 'Rishu_Singh_Resume.pdf'): void {
  try {
    // Generate fresh in-memory PDF via jsPDF and trigger immediate browser save
    const doc = generateResumeDocument();
    doc.save(fileName);
  } catch (err) {
    console.warn('In-memory save failed, trying direct link fallback:', err);
    // Fallback: trigger download attribute on static file
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
