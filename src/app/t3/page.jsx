'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiGlobe, FiMail, FiMapPin, FiPhone, FiExternalLink } from 'react-icons/fi';
import { FaChalkboardTeacher, FaGraduationCap, FaBookOpen, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check user's preferred color scheme
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Content based on language
  const content = {
    id: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        experience: 'Pengalaman',
        education: 'Pendidikan',
        skills: 'Keterampilan',
        contact: 'Kontak'
      },
      hero: {
        title: 'Samuel Chandra',
        subtitle: 'Guru Bahasa Inggris Profesional',
        description: 'Guru Bahasa Inggris berlisensi tingkat SMA yang kreatif dan sabar dengan pengalaman praktik mengajar satu tahun. Keterampilan komunikasi mumpuni dan memiliki pendekatan baru dalam merancang rencana pelajaran.',
        cta: 'Lihat Pengalaman'
      },
      about: {
        title: 'Tentang Saya',
        description: 'Saya seorang guru Bahasa Inggris dengan tingkat kepuasan 90% dari siswa dan rekan sejawat. Siap menerapkan keahlian dan berkontribusi terhadap pendidikan menengah berkualitas tinggi.',
        stats: [
          { value: '90%', label: 'Kepuasan Siswa' },
          { value: '1+', label: 'Tahun Pengalaman' },
          { value: '100+', label: 'Siswa Diajar' }
        ]
      },
      experience: {
        title: 'Pengalaman Terkait',
        items: [
          {
            role: 'Guru Bahasa Inggris SMA Pakuan',
            period: 'September 2024 - Maret 2025',
            description: 'Mengajar Bahasa Inggris untuk kelas 10-12 dengan pendekatan modern. Merancang rencana pelajaran sesuai kurikulum dan mengevaluasi kinerja siswa secara berkala.'
          },
          {
            role: 'Guru Honorer Lentera',
            period: 'Juni 2023 - September 2023',
            description: 'Membantu siswa memahami konsep dasar Bahasa Inggris melalui metode pembelajaran interaktif dan menyenangkan.'
          },
          {
            role: 'Staf Magang Pelatihan',
            period: 'Maret 2023 - Mei 2023',
            description: 'Membantu dalam persiapan materi pelatihan dan evaluasi pembelajaran untuk guru-guru muda.'
          }
        ]
      },
      education: {
        title: 'Pendidikan',
        items: [
          {
            degree: 'Sarjana Pendidikan Bahasa Inggris',
            institution: 'Universitas Lembayung',
            period: '2021 - 2025'
          },
          {
            degree: 'Ijazah SMA',
            institution: 'SMA Negeri Semanggi',
            period: '2017 - 2021'
          }
        ]
      },
      skills: {
        title: 'Keterampilan',
        categories: [
          {
            name: 'Manajemen Kelas',
            items: [
              'Mendorong siswa untuk presentasi singkat',
              'Komunikasi positif dengan orang tua',
              'Membangun hubungan baik dengan siswa'
            ]
          },
          {
            name: 'Penyusunan Tes',
            items: [
              'Evaluasi kinerja melalui kuis mingguan',
              'Menyusun ulangan tengah/akhir semester',
              'Berbagai format pengukuran pemahaman'
            ]
          },
          {
            name: 'Perencanaan Pembelajaran',
            items: [
              'Membuat daftar periksa pembelajaran',
              'Merancang aktivitas pembelajaran',
              'Menggunakan alat pengajaran online'
            ]
          }
        ]
      },
      contact: {
        title: 'Hubungi Saya',
        description: 'Silakan hubungi saya melalui informasi di bawah ini untuk pertanyaan atau peluang kerja sama.',
        form: {
          name: 'Nama',
          email: 'Email',
          message: 'Pesan',
          submit: 'Kirim Pesan'
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        contact: 'Contact'
      },
      hero: {
        title: 'Samuel Chandra',
        subtitle: 'Professional English Teacher',
        description: 'Licensed high school English teacher with one year of teaching practice experience. Excellent communication skills and innovative approaches to designing lesson plans according to the curriculum.',
        cta: 'View Experience'
      },
      about: {
        title: 'About Me',
        description: 'I am an English teacher with a 90% satisfaction rate from students and colleagues. Ready to apply my expertise and contribute to quality secondary education.',
        stats: [
          { value: '90%', label: 'Student Satisfaction' },
          { value: '1+', label: 'Years Experience' },
          { value: '100+', label: 'Students Taught' }
        ]
      },
      experience: {
        title: 'Related Experience',
        items: [
          {
            role: 'English Teacher at SMA Pakuan',
            period: 'September 2024 - March 2025',
            description: 'Taught English for grades 10-12 with modern approaches. Designed curriculum-aligned lesson plans and regularly evaluated student performance.'
          },
          {
            role: 'Honorary Teacher at Lentera',
            period: 'June 2023 - September 2023',
            description: 'Helped students understand basic English concepts through interactive and fun learning methods.'
          },
          {
            role: 'Training Intern Staff',
            period: 'March 2023 - May 2023',
            description: 'Assisted in preparing training materials and learning evaluations for young teachers.'
          }
        ]
      },
      education: {
        title: 'Education',
        items: [
          {
            degree: 'Bachelor of Education in English',
            institution: 'Lembayung University',
            period: '2021 - 2025'
          },
          {
            degree: 'High School Diploma',
            institution: 'Semanggi State High School',
            period: '2017 - 2021'
          }
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          {
            name: 'Classroom Management',
            items: [
              'Encouraging student presentations',
              'Positive communication with parents',
              'Building good relationships with students'
            ]
          },
          {
            name: 'Test Preparation',
            items: [
              'Weekly performance evaluation quizzes',
              'Preparing mid/final semester exams',
              'Various assessment formats'
            ]
          },
          {
            name: 'Lesson Planning',
            items: [
              'Creating learning checklists',
              'Designing English learning activities',
              'Using online teaching tools'
            ]
          }
        ]
      },
      contact: {
        title: 'Contact Me',
        description: 'Please contact me through the information below for questions or collaboration opportunities.',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send Message'
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <FaChalkboardTeacher className={`text-2xl mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="font-bold text-xl">Samuel Chandra</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'education', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item ? (darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700') : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600')}`}
                >
                  {currentContent.nav[item]}
                </button>
              ))}

              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>

              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-gray-200 text-blue-600'}`}
                aria-label="Toggle language"
              >
                <FiGlobe />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['home', 'about', 'experience', 'education', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === item ? (darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700') : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600')}`}
                  >
                    {currentContent.nav[item]}
                  </button>
                ))}

                <div className="flex justify-center space-x-4 py-3">
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? <FiSun /> : <FiMoon />}
                  </button>

                  <button
                    onClick={toggleLanguage}
                    className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-gray-200 text-blue-600'}`}
                    aria-label="Toggle language"
                  >
                    <FiGlobe />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <motion.h1 
                className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentContent.hero.title}
              </motion.h1>
              <motion.h2
                className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {currentContent.hero.subtitle}
              </motion.h2>
              <motion.p
                className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {currentContent.hero.description}
              </motion.p>
              <motion.button
                onClick={() => scrollToSection('experience')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentContent.hero.cta}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500' : 'border-blue-300'} shadow-xl`}>
                <div className={`absolute inset-0 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaChalkboardTeacher className={`text-9xl ${darkMode ? 'text-blue-400' : 'text-blue-600'} opacity-80`} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <motion.h2
            className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {currentContent.about.title}
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentContent.about.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {currentContent.about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md flex-1 min-w-[120px] text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{stat.value}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiMapPin className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Jl Bangka No. 8, Manado</span>
                  </li>
                  <li className="flex items-start">
                    <FiPhone className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>011-223-34-56</span>
                  </li>
                  <li className="flex items-start">
                    <FiMail className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>halo@situssupercanggih.co.id</span>
                  </li>
                  <li className="flex items-start">
                    <FiExternalLink className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>www.situssupercanggih.co.id</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'id' ? 'Media Sosial' : 'Social Media'}
                  </h4>
                  <div className="flex space-x-4">
                    <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-blue-300' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'} transition-colors`}>
                      <FaLinkedin />
                    </a>
                    <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-blue-300' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'} transition-colors`}>
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2
            className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {currentContent.experience.title}
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-4 md:left-1/2 h-full w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {currentContent.experience.items.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 top-4 w-4 h-4 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} transform -translate-x-1/2 z-10`}></div>

                  <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} ${index % 2 === 0 ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md'}`}>
                    <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.role}</h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.period}</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <motion.h2
            className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {currentContent.education.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.education.items.map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.degree}</h3>
                    <p className={`text-lg mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{item.institution}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2
            className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {currentContent.skills.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.skills.categories.map((category, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg mr-3 ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    <FaBookOpen className="text-xl" />
                  </div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <motion.h2
            className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {currentContent.contact.title}
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentContent.contact.description}
              </p>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiMapPin className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {language === 'id' ? 'Alamat' : 'Address'}
                      </h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Jl Bangka No. 8, Manado</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiPhone className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {language === 'id' ? 'Telepon' : 'Phone'}
                      </h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>011-223-34-56</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiMail className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>halo@situssupercanggih.co.id</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'id' ? 'Media Sosial' : 'Social Media'}
                  </h4>
                  <div className="flex space-x-4">
                    <a href="#" className={`p-3 rounded-full ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-blue-300' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'} transition-colors`}>
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href="#" className={`p-3 rounded-full ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-blue-300' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'} transition-colors`}>
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="mb-4">
                  <label htmlFor="name" className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {currentContent.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={language === 'id' ? 'Nama Anda' : 'Your name'}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {currentContent.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={language === 'id' ? 'Email Anda' : 'Your email'}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {currentContent.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={language === 'id' ? 'Pesan Anda' : 'Your message'}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentContent.contact.form.submit}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-200 text-gray-700'}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaChalkboardTeacher className={`text-xl mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="font-bold">Samuel Chandra</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                {language === 'id' ? 'Beranda' : 'Home'}
              </a>
              <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                {language === 'id' ? 'Tentang' : 'About'}
              </a>
              <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                {language === 'id' ? 'Kontak' : 'Contact'}
              </a>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Samuel Chandra. {language === 'id' ? 'Seluruh hak cipta dilindungi.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;