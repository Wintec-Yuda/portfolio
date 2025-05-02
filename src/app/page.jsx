'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaLaravel, FaReact, FaVuejs, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNestjs, SiExpress, SiSpringboot, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbApi, TbBrandPython } from 'react-icons/tb';
import { BsGearFill, BsApple } from 'react-icons/bs';
import { GiSittingDog, GiFilmProjector } from 'react-icons/gi';
import { IoLogoGameControllerB } from 'react-icons/io';

const PortfolioPage = () => {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'education', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content translations
  const content = {
    en: {
      about: {
        title: "About Me",
        description: "I am a Full Stack Web Developer with expertise in backend and frontend development, specializing in Laravel, React.js, SQL, and REST APIs. I enjoy building scalable, efficient, and user-friendly web applications, focusing on clean code, performance, and usability. With hands-on experience in both database management and UI development, I strive to create seamless and well-integrated solutions that enhance user experience and business processes."
      },
      skills: {
        title: "Skills",
        backend: "Backend Development",
        frontend: "Frontend Development",
        database: "Database Management",
        api: "API & Machine Learning",
        collaboration: "Collaboration & Problem-Solving"
      },
      experience: {
        title: "Work Experience",
        items: [
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
        ]
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Bachelor's Degree in Informatics Engineering (S.Kom)",
            institution: "Universitas Nusantara PGRI Kediri",
            period: "2020 – 2024",
            description: "Graduated: 2024 | GPA: 3.84\nDuring my studies, I gained a solid foundation in software development, databases, and REST API implementation. I worked on several projects involving web and mobile applications, strengthening my problem-solving skills and teamwork abilities."
          }
        ]
      },
      projects: {
        title: "Projects",
        items: [
          {
            title: "Detection Sit Up",
            period: "Jan 2024 – Jun 2024",
            description: "This project focused on developing a web application to help users improve their sit-up performance. By leveraging Mediapipe and OpenCV for real-time motion analysis, the application detects incorrect sit-up movements and provides feedback to guide users in performing exercises correctly. This project was part of my thesis and aimed at using computer vision techniques to enhance fitness training."
          }
        ]
      },
      hobbies: {
        title: "Hobbies & Interests"
      },
      contact: {
        title: "Contact Me"
      }
    },
    id: {
      about: {
        title: "Tentang Saya",
        description: "Saya seorang Full Stack Web Developer dengan keahlian dalam pengembangan backend dan frontend, khususnya Laravel, React.js, SQL, dan REST API. Saya menikmati membangun aplikasi web yang scalable, efisien, dan ramah pengguna, dengan fokus pada kode yang bersih, performa, dan kegunaan. Dengan pengalaman langsung dalam manajemen database dan pengembangan UI, saya berusaha menciptakan solusi yang mulus dan terintegrasi dengan baik untuk meningkatkan pengalaman pengguna dan proses bisnis."
      },
      skills: {
        title: "Keahlian",
        backend: "Pengembangan Backend",
        frontend: "Pengembangan Frontend",
        database: "Manajemen Database",
        api: "API & Machine Learning",
        collaboration: "Kolaborasi & Pemecahan Masalah"
      },
      experience: {
        title: "Pengalaman Kerja",
        items: [
          {
            title: "AI Mastery (Studi Independen Kampus Merdeka)",
            company: "Orbit Future Academy",
            period: "Agu 2022 – Des 2022",
            description: "Mempelajari dasar-dasar Machine Learning, Artificial Intelligence, Computer Vision, Data Science, dan Natural Language Processing (NLP). Berkolaborasi dalam tim untuk menyelesaikan proyek akhir, menerapkan konsep AI untuk memecahkan masalah dunia nyata."
          },
          {
            title: "Web Developer (Magang Kampus Merdeka)",
            company: "PT Kalbe Farma",
            period: "Feb 2023 – Jun 2023",
            description: "Mengembangkan sistem berbasis web untuk mengelola proses pelatihan, dari pendaftaran hingga pengumpulan data, menggantikan alur kerja manual sebelumnya. Dibangun menggunakan Laravel 10 dan jQuery, meningkatkan efisiensi dan akurasi data."
          },
          {
            title: "Frontend Developer (Magang Independen)",
            company: "CV Kasih Inovasi Teknologi",
            period: "Agu 2023 – Des 2023",
            description: "Mengembangkan website Tryout Academy, memungkinkan guru membuat soal ujian dan siswa membeli serta mengikuti ujian secara online. Menggunakan Laravel 10 dan Vue 3 untuk meningkatkan pengalaman pengguna dan fungsionalitas platform."
          }
        ]
      },
      education: {
        title: "Pendidikan",
        items: [
          {
            degree: "Sarjana Teknik Informatika (S.Kom)",
            institution: "Universitas Nusantara PGRI Kediri",
            period: "2020 – 2024",
            description: "Lulus: 2024 | IPK: 3.84\nSelama studi, saya mendapatkan dasar yang kuat dalam pengembangan perangkat lunak, database, dan implementasi REST API. Saya mengerjakan beberapa proyek yang melibatkan aplikasi web dan mobile, memperkuat kemampuan pemecahan masalah dan kerja tim."
          }
        ]
      },
      projects: {
        title: "Proyek",
        items: [
          {
            title: "Detection Sit Up",
            period: "Jan 2024 – Jun 2024",
            description: "Proyek ini berfokus pada pengembangan aplikasi web untuk membantu pengguna meningkatkan performa sit-up. Dengan memanfaatkan Mediapipe dan OpenCV untuk analisis gerakan real-time, aplikasi mendeteksi gerakan sit-up yang salah dan memberikan umpan balik untuk memandu pengguna melakukan latihan dengan benar. Proyek ini merupakan bagian dari tesis saya dan bertujuan menggunakan teknik computer vision untuk meningkatkan pelatihan kebugaran."
          }
        ]
      },
      hobbies: {
        title: "Hobi & Minat"
      },
      contact: {
        title: "Hubungi Saya"
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 bg-gray-800 p-2 rounded-lg shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <FiChevronUp className="w-6 h-6" />
        ) : (
          <FiChevronDown className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 right-4 z-40 bg-gray-800 rounded-lg shadow-xl p-4"
          >
            <nav className="flex flex-col space-y-2">
              {['about', 'skills', 'experience', 'education', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-md text-left ${activeSection === section ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                >
                  {currentContent[section]?.title || section}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 mt-2"
              >
                {language === 'en' ? 'ID' : 'EN'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 lg:w-1/4"
          >
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl sticky top-8">
              {/* Profile */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center mb-6"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-gray-700 text-blue-400">
                      MY
                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-bold text-center">Mochamad Yuda Trinurais</h1>
                <p className="text-blue-400 text-sm font-medium">Fullstack Developer</p>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-blue-400" />
                  <span>East Java, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-blue-400" />
                  <span>November 23, 1999</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-blue-400" />
                  <span>085179945123</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-blue-400" />
                  <span>mochamadyudatrinurais@gmail.com</span>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 justify-center mb-6">
                <motion.a
                  whileHover={{ y: -2, scale: 1.1 }}
                  href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.1 }}
                  href="https://github.com/Wintec-Yuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Language Toggle - Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={toggleLanguage}
                  className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  {language === 'en' ? 'Switch to Bahasa Indonesia' : 'Ganti ke English'}
                </button>
              </div>

              {/* Navigation - Desktop */}
              <nav className="hidden md:block mt-8">
                <ul className="space-y-2">
                  {['about', 'skills', 'experience', 'education', 'projects'].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeSection === section ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                      >
                        {currentContent[section]?.title || section}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="md:w-2/3 lg:w-3/4 space-y-12">
            {/* About Section */}
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">{currentContent.about.title}</h2>
              <p className="text-gray-300 leading-relaxed">
                {currentContent.about.description}
              </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              id="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">{currentContent.skills.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Backend */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <BsGearFill className="text-blue-400" />
                    {currentContent.skills.backend}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <FaLaravel className="text-red-500" /> Laravel
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiNestjs className="text-red-500" /> NestJS
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiExpress className="text-gray-300" /> ExpressJS
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiSpringboot className="text-green-500" /> Spring Boot
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <FaNodeJs className="text-green-500" /> NodeJS
                    </div>
                  </div>
                </motion.div>

                {/* Frontend */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FaReact className="text-blue-400" />
                    {currentContent.skills.frontend}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <FaAngular className="text-red-500" /> AngularJS
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <FaReact className="text-blue-400" /> ReactJS
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <FaVuejs className="text-green-500" /> VueJS
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiNextdotjs className="text-white" /> NextJS
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiTailwindcss className="text-blue-400" /> Tailwind CSS
                    </div>
                  </div>
                </motion.div>

                {/* Database */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <SiMysql className="text-blue-400" />
                    {currentContent.skills.database}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiMysql className="text-blue-500" /> MySQL
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiPostgresql className="text-blue-400" /> PostgreSQL
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <SiMongodb className="text-green-500" /> MongoDB
                    </div>
                  </div>
                </motion.div>

                {/* API & ML */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <TbApi className="text-blue-400" />
                    {currentContent.skills.api}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <TbApi className="text-blue-400" /> REST API
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      <TbBrandPython className="text-yellow-400" /> Machine Learning
                    </div>
                  </div>
                </motion.div>

                {/* Collaboration */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-700 p-4 rounded-lg md:col-span-2"
                >
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {currentContent.skills.collaboration}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      Debugging
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      GIT
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm">
                      Team Work
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
              id="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">{currentContent.experience.title}</h2>
              
              <div className="space-y-6">
                {currentContent.experience.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-l-2 border-blue-500 pl-4 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-400 mb-2">
                      <span>{item.company}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              id="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">{currentContent.education.title}</h2>
              
              <div className="space-y-6">
                {currentContent.education.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-l-2 border-blue-500 pl-4 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-400 mb-2">
                      <span>{item.institution}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2 whitespace-pre-line">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">{currentContent.projects.title}</h2>
              
              <div className="space-y-6">
                {currentContent.projects.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-700 rounded-lg p-5"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <div className="text-sm text-gray-400 mb-3">{item.period}</div>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Hobbies Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">{currentContent.hobbies.title}</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 rounded-lg p-4 flex flex-col items-center"
                >
                  <BsApple className="text-3xl mb-2 text-gray-400" />
                  <span>Apple device</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 rounded-lg p-4 flex flex-col items-center"
                >
                  <GiFilmProjector className="text-3xl mb-2 text-gray-400" />
                  <span>Movie</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 rounded-lg p-4 flex flex-col items-center"
                >
                  <IoLogoGameControllerB className="text-3xl mb-2 text-gray-400" />
                  <span>Games</span>
                </motion.div>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">{currentContent.contact.title}</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMail className="text-blue-400 text-xl" />
                  <a href="mailto:mochamadyudatrinurais@gmail.com" className="hover:text-blue-400 transition-colors">
                    mochamadyudatrinurais@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiPhone className="text-blue-400 text-xl" />
                  <a href="tel:085179945123" className="hover:text-blue-400 transition-colors">
                    085179945123
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiLinkedin className="text-blue-400 text-xl" />
                  <a 
                    href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiGithub className="text-blue-400 text-xl" />
                  <a 
                    href="https://github.com/Wintec-Yuda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;