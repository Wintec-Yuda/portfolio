'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiChevronDown, FiGlobe } from 'react-icons/fi';
import { FaLaravel, FaReact, FaVuejs, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiAngular, SiExpress, SiNestjs, SiSpringboot, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { IoMdSchool } from 'react-icons/io';
import { MdWork, MdComputer, MdMovie, MdSportsEsports } from 'react-icons/md';
import { BsApple } from 'react-icons/bs';
import Image from 'next/image';

const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set initial dark mode based on system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true' || 
                     (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setDarkMode(isDark);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Text content based on language
  const content = {
    en: {
      about: "About",
      education: "Education",
      experience: "Work Experience",
      projects: "Projects",
      skills: "Skills",
      hobbies: "Hobbies & Interest",
      contact: "Contact",
      aboutContent: "I am a Full Stack Web Developer with expertise in backend and frontend development, specializing in Laravel, React.js, SQL, and REST APIs. I enjoy building scalable, efficient, and user-friendly web applications, focusing on clean code, performance, and usability. With hands-on experience in both database management and UI development, I strive to create seamless and well-integrated solutions that enhance user experience and business processes.",
      educationContent: {
        degree: "Bachelor's Degree in Informatics Engineering (S.Kom)",
        description: "During my studies, I gained a solid foundation in software development, databases, and REST API implementation. I worked on several projects involving web and mobile applications, strengthening my problem-solving skills and teamwork abilities."
      },
      experiences: [
        {
          title: "AI Mastery (Study Independent Kampus Merdeka)",
          company: "Orbit Future Academy",
          period: "Aug 2022 – Dec 2022",
          description: "Studied the fundamentals of Machine Learning, Artificial Intelligence, Computer Vision, Data Science, and Natural Language Processing (NLP). Collaborated in a team to complete a final project, applying AI concepts to solve real-world problems."
        },
        {
          title: "Web Developer (Kampus Merdeka Internship)",
          company: "PT Kalbe Farma",
          period: "Feb 2023 – Jun 2023",
          description: "Developed a web-based system to manage the training process, from registration to data collection, replacing the previous manual workflow. Built using Laravel 10 and jQuery, improving efficiency and data accuracy."
        },
        {
          title: "Frontend Developer (Independent Internship)",
          company: "CV Kasih Inovasi Teknologi",
          period: "Aug 2023 – Dec 2023",
          description: "Developed the Tryout Academy website, enabling teachers to create test questions and students to purchase and take exams online. Utilized Laravel 10 and Vue 3 to enhance user experience and platform functionality."
        }
      ],
      projects: [
        {
          title: "Detection Sit Up",
          period: "Jan 2024 – Jun 2024",
          description: "This project focused on developing a web application to help users improve their sit-up performance. By leveraging Mediapipe and OpenCV for real-time motion analysis, the application detects incorrect sit-up movements and provides feedback to guide users in performing exercises correctly. This project was part of my thesis and aimed at using computer vision techniques to enhance fitness training."
        }
      ],
      contactTitle: "Get in Touch",
      contactSubtitle: "Feel free to reach out for collaborations or just a friendly hello"
    },
    id: {
      about: "Tentang",
      education: "Pendidikan",
      experience: "Pengalaman Kerja",
      projects: "Proyek",
      skills: "Keahlian",
      hobbies: "Hobi & Minat",
      contact: "Kontak",
      aboutContent: "Saya seorang Full Stack Web Developer dengan keahlian dalam pengembangan backend dan frontend, khususnya Laravel, React.js, SQL, dan REST API. Saya menikmati membangun aplikasi web yang skalabel, efisien, dan ramah pengguna, dengan fokus pada kode yang bersih, performa, dan kegunaan. Dengan pengalaman langsung dalam manajemen database dan pengembangan UI, saya berusaha menciptakan solusi yang mulus dan terintegrasi dengan baik untuk meningkatkan pengalaman pengguna dan proses bisnis.",
      educationContent: {
        degree: "Sarjana Teknik Informatika (S.Kom)",
        description: "Selama masa studi, saya mendapatkan dasar yang kuat dalam pengembangan perangkat lunak, database, dan implementasi REST API. Saya mengerjakan beberapa proyek yang melibatkan aplikasi web dan mobile, memperkuat kemampuan pemecahan masalah dan kerja tim saya."
      },
      experiences: [
        {
          title: "AI Mastery (Studi Independen Kampus Merdeka)",
          company: "Orbit Future Academy",
          period: "Agustus 2022 – Desember 2022",
          description: "Mempelajari dasar-dasar Machine Learning, Artificial Intelligence, Computer Vision, Data Science, dan Natural Language Processing (NLP). Berkolaborasi dalam tim untuk menyelesaikan proyek akhir, menerapkan konsep AI untuk memecahkan masalah dunia nyata."
        },
        {
          title: "Web Developer (Magang Kampus Merdeka)",
          company: "PT Kalbe Farma",
          period: "Februari 2023 – Juni 2023",
          description: "Mengembangkan sistem berbasis web untuk mengelola proses pelatihan, dari pendaftaran hingga pengumpulan data, menggantikan alur kerja manual sebelumnya. Dibangun menggunakan Laravel 10 dan jQuery, meningkatkan efisiensi dan akurasi data."
        },
        {
          title: "Frontend Developer (Magang Mandiri)",
          company: "CV Kasih Inovasi Teknologi",
          period: "Agustus 2023 – Desember 2023",
          description: "Mengembangkan website Tryout Academy, memungkinkan guru untuk membuat soal ujian dan siswa untuk membeli dan mengikuti ujian secara online. Menggunakan Laravel 10 dan Vue 3 untuk meningkatkan pengalaman pengguna dan fungsionalitas platform."
        }
      ],
      projects: [
        {
          title: "Detection Sit Up",
          period: "Januari 2024 – Juni 2024",
          description: "Proyek ini berfokus pada pengembangan aplikasi web untuk membantu pengguna meningkatkan performa sit-up mereka. Dengan memanfaatkan Mediapipe dan OpenCV untuk analisis gerakan real-time, aplikasi mendeteksi gerakan sit-up yang salah dan memberikan umpan balik untuk memandu pengguna melakukan latihan dengan benar. Proyek ini merupakan bagian dari tesis saya dan bertujuan menggunakan teknik computer vision untuk meningkatkan pelatihan kebugaran."
        }
      ],
      contactTitle: "Hubungi Saya",
      contactSubtitle: "Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa"
    }
  };

  const currentContent = content[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header/Navigation */}
      <header className={`sticky top-0 z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} shadow-sm`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className={`inline-flex items-center gap-2 text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-blue-500">
                <Image
                  src="/profile.jpeg"
                  alt="MYT Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'education', 'experience', 'projects', 'skills', 'hobbies', 'contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`px-2 py-1 rounded-md transition-colors ${activeSection === item ? 
                  (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700') : 
                  (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
                  >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <FiChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Theme and language toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              aria-label="Toggle language"
            >
              <FiGlobe className="h-5 w-5" />
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                {['about', 'education', 'experience', 'projects', 'skills', 'hobbies', 'contact'].map((item) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 text-left rounded-md transition-colors ${activeSection === item ? 
                      (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700') : 
                      (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200')}`}
                  >
                    {currentContent[item].title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="about" className="py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="md:w-1/2"
            >
              <motion.h1 variants={itemVariants} className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Mochamad Yuda Trinurais
              </motion.h1>
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-6">
                Fullstack Developer
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg mb-8">
                {currentContent.aboutContent}
              </motion.p>
              <motion.div variants={itemVariants} className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Wintec-Yuda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                  <FiGithub className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:mochamadyudatrinurais@gmail.com" 
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                  <FiMail className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} shadow-xl`}>
                {/* Placeholder for profile image - replace with your actual image */}
                <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <Image
                  src="/profile.jpeg" // Ganti path sesuai gambar kamu
                  alt="MYT Profile"
                  fill
                  className="object-cover"
                />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-8 pb-2 border-b-2 ${darkMode ? 'border-blue-600' : 'border-blue-400'} inline-block`}
          >
            {currentContent.education}
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
          >
            <motion.div variants={itemVariants} className="flex items-start mb-4">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-200'}`}>
                <IoMdSchool className={`h-6 w-6 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">2020 – 2024 | Universitas Nusantara PGRI Kediri</h3>
                <p className={`font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{currentContent.educationContent.degree}</p>
                <p className="mt-2">Graduated: 2024 | GPA: 3.84</p>
              </div>
            </motion.div>
            <motion.p variants={itemVariants} className="pl-16">
              {currentContent.educationContent.description}
            </motion.p>
          </motion.div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-8 pb-2 border-b-2 ${darkMode ? 'border-blue-600' : 'border-blue-400'} inline-block`}
          >
            {currentContent.experience}
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {currentContent.experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-200'}`}>
                    <MdWork className={`h-6 w-6 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className={`font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{exp.company}</p>
                    <p className="text-sm mt-1">{exp.period}</p>
                  </div>
                </div>
                <p className="pl-16">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-8 pb-2 border-b-2 ${darkMode ? 'border-blue-600' : 'border-blue-400'} inline-block`}
          >
            {currentContent.projects.title || "Projects"}
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {currentContent.projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-200'}`}>
                    <MdComputer className={`h-6 w-6 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm mt-1">{project.period}</p>
                  </div>
                </div>
                <p className="pl-16">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-8 pb-2 border-b-2 ${darkMode ? 'border-blue-600' : 'border-blue-400'} inline-block`}
          >
            {currentContent.skills}
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Backend Development */}
            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaLaravel className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                Backend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaLaravel className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                  Laravel
                </li>
                <li className="flex items-center">
                  <SiNestjs className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                  NestJS
                </li>
                <li className="flex items-center">
                  <SiExpress className={`mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  ExpressJS
                </li>
                <li className="flex items-center">
                  <SiSpringboot className={`mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  Spring Boot
                </li>
                <li className="flex items-center">
                  <FaNodeJs className={`mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  NodeJS
                </li>
              </ul>
            </motion.div>

            {/* Frontend Development */}
            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaReact className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                Frontend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <SiAngular className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                  AngularJS
                </li>
                <li className="flex items-center">
                  <FaReact className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  ReactJS
                </li>
                <li className="flex items-center">
                  <FaVuejs className={`mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  VueJS
                </li>
                <li className="flex items-center">
                  <SiNextdotjs className="mr-2" />
                  NextJS
                </li>
                <li className="flex items-center">
                  <SiTailwindcss className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  Tailwind CSS
                </li>
              </ul>
            </motion.div>

            {/* Database Management */}
            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <SiMysql className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                Database Management
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <SiMysql className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  MySQL
                </li>
                <li className="flex items-center">
                  <SiPostgresql className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  PostgreSQL
                </li>
                <li className="flex items-center">
                  <SiMongodb className={`mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  MongoDB
                </li>
              </ul>
            </motion.div>

            {/* API & Machine Learning */}
            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TbApi className={`mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                API & Machine Learning
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <TbApi className={`mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  REST API
                </li>
                <li className="flex items-center">
                  <MdComputer className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  Machine Learning
                </li>
              </ul>
            </motion.div>

            {/* Collaboration & Problem-Solving */}
            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaGitAlt className={`mr-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                Collaboration & Problem-Solving
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaGitAlt className={`mr-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  GIT
                </li>
                <li>Debugging</li>
                <li>Team Work</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Hobbies & Interests Section */}
        <section id="hobbies" className="py-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-8 pb-2 border-b-2 ${darkMode ? 'border-blue-600' : 'border-blue-400'} inline-block`}
          >
            {currentContent.hobbies}
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg flex flex-col items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <BsApple className={`h-10 w-10 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              <h3 className="text-lg font-semibold">Apple device</h3>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg flex flex-col items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <MdMovie className={`h-10 w-10 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              <h3 className="text-lg font-semibold">Movie</h3>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-lg flex flex-col items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <MdSportsEsports className={`h-10 w-10 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              <h3 className="text-lg font-semibold">Games</h3>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {currentContent.contactTitle}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              {currentContent.contactSubtitle}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className={`h-5 w-5 mt-1 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:mochamadyudatrinurais@gmail.com" className="hover:underline">
                      mochamadyudatrinurais@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className={`h-5 w-5 mt-1 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:085179945123" className="hover:underline">085179945123</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMapPin className={`h-5 w-5 mt-1 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>East Java, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Wintec-Yuda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                  <FiGithub className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-6">Personal Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Full Name</h4>
                  <p>Mochamad Yuda Trinurais</p>
                </div>

                <div>
                  <h4 className="font-medium">Date of Birth</h4>
                  <p>November 23, 1999</p>
                </div>

                <div>
                  <h4 className="font-medium">Hometown</h4>
                  <p>Kediri, East Java</p>
                </div>

                <div>
                  <h4 className="font-medium">Education</h4>
                  <p>Bachelor's Degree in Informatics Engineering</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            &copy; {new Date().getFullYear()} Mochamad Yuda Trinurais. All rights reserved.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} transition-colors`}
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Wintec-Yuda" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} transition-colors`}
            >
              <FiGithub className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;