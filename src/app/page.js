'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiGlobe, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { FaLaravel, FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNestjs, SiExpress, SiSpringboot, SiAngular, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BsRobot } from 'react-icons/bs';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Translations
  const translations = {
    en: {
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      fullstackDeveloper: 'Fullstack Developer',
      aboutContent: 'I am a Full Stack Web Developer with expertise in backend and frontend development, specializing in Laravel, React.js, SQL, and REST APIs. I enjoy building scalable, efficient, and user-friendly web applications, focusing on clean code, performance, and usability. With hands-on experience in both database management and UI development, I strive to create seamless and well-integrated solutions that enhance user experience and business processes.',
      educationContent: 'During my studies, I gained a solid foundation in software development, databases, and REST API implementation. I worked on several projects involving web and mobile applications, strengthening my problem-solving skills and teamwork abilities.',
      hobbies: 'Hobbies & Interests',
      seeMore: 'See More',
      viewProject: 'View Project',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV'
    },
    id: {
      about: 'Tentang',
      education: 'Pendidikan',
      experience: 'Pengalaman',
      projects: 'Proyek',
      skills: 'Keahlian',
      contact: 'Kontak',
      fullstackDeveloper: 'Pengembang Fullstack',
      aboutContent: 'Saya seorang Pengembang Web Full Stack dengan keahlian dalam pengembangan backend dan frontend, khususnya Laravel, React.js, SQL, dan REST API. Saya menikmati membangun aplikasi web yang skalabel, efisien, dan ramah pengguna, dengan fokus pada kode yang bersih, performa, dan kegunaan. Dengan pengalaman langsung dalam manajemen database dan pengembangan UI, saya berusaha menciptakan solusi yang mulus dan terintegrasi dengan baik untuk meningkatkan pengalaman pengguna dan proses bisnis.',
      educationContent: 'Selama masa studi, saya memperoleh dasar yang kuat dalam pengembangan perangkat lunak, database, dan implementasi REST API. Saya mengerjakan beberapa proyek yang melibatkan aplikasi web dan mobile, memperkuat kemampuan pemecahan masalah dan kerja tim saya.',
      hobbies: 'Hobi & Minat',
      seeMore: 'Lihat Selengkapnya',
      viewProject: 'Lihat Proyek',
      contactMe: 'Hubungi Saya',
      downloadCV: 'Unduh CV'
    }
  };

  const t = translations[language];

  const skills = [
    { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
    { name: 'ReactJS', icon: <FaReact className="text-blue-500" /> },
    { name: 'VueJS', icon: <FaVuejs className="text-green-500" /> },
    { name: 'NextJS', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
    { name: 'ExpressJS', icon: <SiExpress className="text-black dark:text-white" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
    { name: 'NodeJS', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'AngularJS', icon: <SiAngular className="text-red-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'REST API', icon: <TbApi className="text-purple-500" /> },
    { name: 'Machine Learning', icon: <BsRobot className="text-yellow-500" /> }
  ];

  const experiences = [
    {
      title: 'AI Mastery (Study Independent Kampus Merdeka)',
      company: 'Orbit Future Academy',
      period: 'Aug 2022 – Dec 2022',
      description: language === 'en' 
        ? 'Studied the fundamentals of Machine Learning, Artificial Intelligence, Computer Vision, Data Science, and Natural Language Processing (NLP). Collaborated in a team to complete a final project, applying AI concepts to solve real-world problems.'
        : 'Mempelajari dasar-dasar Machine Learning, Artificial Intelligence, Computer Vision, Data Science, dan Natural Language Processing (NLP). Berkolaborasi dalam tim untuk menyelesaikan proyek akhir, menerapkan konsep AI untuk memecahkan masalah dunia nyata.'
    },
    {
      title: 'Web Developer (Kampus Merdeka Internship)',
      company: 'PT Kalbe Farma',
      period: 'Feb 2023 – Jun 2023',
      description: language === 'en' 
        ? 'Developed a web-based system to manage the training process, from registration to data collection, replacing the previous manual workflow. Built using Laravel 10 and jQuery, improving efficiency and data accuracy.'
        : 'Mengembangkan sistem berbasis web untuk mengelola proses pelatihan, dari pendaftaran hingga pengumpulan data, menggantikan alur kerja manual sebelumnya. Dibangun menggunakan Laravel 10 dan jQuery, meningkatkan efisiensi dan akurasi data.'
    },
    {
      title: 'Frontend Developer (Independent Internship)',
      company: 'CV Kasih Inovasi Teknologi',
      period: 'Aug 2023 – Dec 2023',
      description: language === 'en' 
        ? 'Developed the Tryout Academy website, enabling teachers to create test questions and students to purchase and take exams online. Utilized Laravel 10 and Vue 3 to enhance user experience and platform functionality.'
        : 'Mengembangkan website Tryout Academy, memungkinkan guru untuk membuat soal ujian dan siswa untuk membeli dan mengikuti ujian secara online. Menggunakan Laravel 10 dan Vue 3 untuk meningkatkan pengalaman pengguna dan fungsionalitas platform.'
    }
  ];

  const projects = [
    {
      title: 'Detection Sit Up',
      period: 'Jan 2024 – Jun 2024',
      description: language === 'en' 
        ? 'This project focused on developing a web application to help users improve their sit-up performance. By leveraging Mediapipe and OpenCV for real-time motion analysis, the application detects incorrect sit-up movements and provides feedback to guide users in performing exercises correctly. This project was part of my thesis and aimed at using computer vision techniques to enhance fitness training.'
        : 'Proyek ini berfokus pada pengembangan aplikasi web untuk membantu pengguna meningkatkan performa sit-up mereka. Dengan memanfaatkan Mediapipe dan OpenCV untuk analisis gerakan real-time, aplikasi mendeteksi gerakan sit-up yang salah dan memberikan umpan balik untuk memandu pengguna dalam melakukan latihan dengan benar. Proyek ini merupakan bagian dari tesis saya dan bertujuan menggunakan teknik computer vision untuk meningkatkan pelatihan kebugaran.',
      technologies: ['Mediapipe', 'OpenCV', 'Computer Vision', 'React']
    }
  ];

  const hobbies = ['Apple device', 'Movie', 'Games'];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header/Navigation */}
      <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                MYT
              </div>
              <span className="font-bold text-lg">Mochamad Yuda</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['about', 'education', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeSection === item ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}`}
                >
                  {t[item]}
                  {activeSection === item && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
                aria-label={language === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
              >
                <FiGlobe className="w-5 h-5" />
                <span className="ml-1 text-sm">{language === 'en' ? 'ID' : 'EN'}</span>
              </button>
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <FiChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-2 pb-4 space-y-2">
                  {['about', 'education', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === item ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                      {t[item]}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 container mx-auto px-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mochamad Yuda Trinurais</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">{t.fullstackDeveloper}</h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              {language === 'en' 
                ? 'Building seamless digital experiences with clean code and modern technologies.'
                : 'Membangun pengalaman digital yang mulus dengan kode bersih dan teknologi modern.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                {t.contactMe}
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                {t.downloadCV}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Placeholder for profile image - replace with actual image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-500 dark:text-gray-400">MYT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              {t.about}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t.aboutContent}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <FiMail className="text-blue-600 dark:text-blue-400" />
                  <span>mochamadyudatrinurais@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiPhone className="text-blue-600 dark:text-blue-400" />
                  <span>085179945123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="text-blue-600 dark:text-blue-400" />
                  <span>East Java, Indonesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiLinkedin className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href="https://www.linkedin.com/in/mochamadyuda-trinurais-4a87a1309/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FiGithub className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href="https://github.com/Mintec-Yuda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              {t.education}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-semibold">Universitas Nusantara PGRI Kediri</h3>
                  <span className="text-gray-500 dark:text-gray-400">2020 – 2024</span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                  Bachelor's Degree in Informatics Engineering (S.Kom) Graduated: 2024 | GPA: 3.84
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{t.educationContent}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              {t.experience}
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              {t.projects}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-gray-500 dark:text-gray-400">{project.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                      {t.viewProject} <FiExternalLink className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              {t.skills}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Hobbies Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              {t.hobbies}
            </h2>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm"
                >
                  {hobby}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              {t.contact}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t.contactMe}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {language === 'en' 
                      ? "Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
                      : "Jangan ragu untuk menghubungi jika Anda mencari developer, memiliki pertanyaan, atau hanya ingin terhubung."}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <FiMail className="text-blue-600 dark:text-blue-400 text-xl" />
                      <span>mochamadyudatrinurais@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FiPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                      <span>085179945123</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FiMapPin className="text-blue-600 dark:text-blue-400 text-xl" />
                      <span>East Java, Indonesia</span>
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/mochamadyuda-trinurais-4a87a1309/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/Mintec-Yuda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        {language === 'en' ? 'Name' : 'Nama'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder={language === 'en' ? 'Your name' : 'Nama Anda'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        {language === 'en' ? 'Message' : 'Pesan'}
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder={language === 'en' ? 'Your message here...' : 'Pesan Anda di sini...'}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg w-full"
                    >
                      {language === 'en' ? 'Send Message' : 'Kirim Pesan'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Mochamad Yuda Trinurais. {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
          </p>
        </div>
      </footer>
    </div>
  );
}