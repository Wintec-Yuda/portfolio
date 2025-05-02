'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiBookOpen, FiAward, FiBriefcase, FiUser, FiBook } from 'react-icons/fi';
import { FaLanguage } from 'react-icons/fa';

export default function Home() {
  const [language, setLanguage] = useState('id');
  const [activeSection, setActiveSection] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
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
      const sections = ['profile', 'achievements', 'experience', 'education', 'specializations'];
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

  const content = {
    id: {
      nav: {
          profile: 'Profil',
          achievements: 'Penghargaan',
          experience: 'Pengalaman',
          education: 'Pendidikan',
          specializations: 'Spesialisasi'
      },
      profile: {
          title: 'PROFIL PRIBADI',
          description: 'Saya seorang pengajar dengan keahlian di bidang pendidikan sekolah dasar yang sudah berpengalaman sepuluh tahun lebih. Saya senang membantu para siswa mengembangkan semangat untuk belajar.'
      },
      achievements: {
          title: 'PENGHARGAAN & PENCAPAIAN',
          items: [
              'Ketua Kelompok Advokasi Pendidikan Generasi Muda',
              'Penghargaan Pendidik Luar Biasa, Komite Dewan Pendidikan 2025',
              'Guru Terbaik pada Seleksi Guru 2025'
          ]
      },
      contact: {
          title: 'INFORMASI KONTAK',
          phone: '011-223-34-56',
          address: 'Jalan Bangka No. 8, Manado 12345',
          email: 'halo@situssupercanggih.co.id',
          website: 'situssupercanggih.co.id',
          linkedin: '@situssupercanggih'
      },
      experience: {
          title: 'PENGALAMAN KERJA',
          items: [
              {
                  position: 'GURU BAHASA INGGRIS',
                  institution: 'SD Batavia',
                  period: 'Agustus 2020 - sekarang',
                  details: [
                      'Kepala departemen bahasa Inggris',
                      'Mengadvokasi permintaan buku di perpustakaan untuk siswa',
                      'Membuat inisiatif meningkatkan minat membaca sebanyak 50%'
                  ]
              },
              {
                  position: 'ASISTEN GURU',
                  institution: 'SD Brawijaya',
                  period: 'September 2015 - Mei 2020',
                  details: [
                      'Menjadi asisten pengajar di kelas pemahaman bahasa',
                      'Membantu siswa menbaca dan menulis',
                      'Mengajar bahasa Inggris sebagai bahasa kedua bagi siswa'
                  ]
              }
          ]
      },
      education: {
          title: 'LATAR AKADEMIS',
          items: [
              {
                  degree: 'Magister Ilmu Sosial dan Politik',
                  institution: 'Universitas Cendana',
                  year: 'Lulus 2020',
                  details: [
                      'Alumni Terbaik',
                      'Fokus Penelitian: Pendidikan Perkembangan dan Peran Masyarakat',
                      'Mengajar Pengantar Ilmu Sosial untuk mahasiswa program sarjana'
                  ]
              },
              {
                  degree: 'Sarjana Pendidikan',
                  institution: 'Universitas Cendana',
                  year: 'Lulus 2018',
                  details: [
                      'Penerima Beasiswa Khusus Cendana',
                      'Ketua Asosiasi Ilmu Pendidikan',
                      'Ketua Angkatan 2018',
                      'Asisten Mahasiswa untuk Dekan Fakultas'
                  ]
              }
          ]
      },
      specializations: {
          title: 'SPESIALISASI',
          items: [
              'Mengajar bahasa Inggris sebagai bahasa kedua untuk siswa',
              'Membantu siswa meningkatkan keterampilan membaca',
              'Mengembangkan kurikulum bahasa Inggris tingkat dasar'
          ]
      }
    },
    en: {
      nav: {
          profile: 'Profile',
          achievements: 'Achievements',
          experience: 'Experience',
          education: 'Education',
          specializations: 'Specializations'
      },
      profile: {
          title: 'PERSONAL PROFILE',
          description: 'I am an educator with expertise in elementary school education with over ten years of experience. I enjoy helping students develop a passion for learning.'
      },
      achievements: {
          title: 'AWARDS & ACHIEVEMENTS',
          items: [
              'Chair of Youth Education Advocacy Group',
              'Exceptional Educator Award, Education Council Committee 2025',
              'Best Teacher in Teacher Selection 2025'
          ]
      },
      contact: {
          title: 'CONTACT INFORMATION',
          phone: '011-223-34-56',
          address: 'Bangka Street No. 8, Manado 12345',
          email: 'hello@superadvancedsite.co.id',
          website: 'superadvancedsite.co.id',
          linkedin: '@superadvancedsite'
      },
      experience: {
          title: 'WORK EXPERIENCE',
          items: [
              {
                  position: 'ENGLISH TEACHER',
                  institution: 'Batavia Elementary School',
                  period: 'August 2020 - present',
                  details: [
                      'Head of English department',
                      'Advocated for library book requests for students',
                      'Created initiative that increased reading interest by 50%'
                  ]
              },
              {
                  position: 'TEACHING ASSISTANT',
                  institution: 'Brawijaya Elementary School',
                  period: 'September 2015 - May 2020',
                  details: [
                      'Assisted teaching in language comprehension classes',
                      'Helped students with reading and writing',
                      'Taught English as a second language to students'
                  ]
              }
          ]
      },
      education: {
          title: 'ACADEMIC BACKGROUND',
          items: [
              {
                  degree: 'Master of Social and Political Sciences',
                  institution: 'Cendana University',
                  year: 'Graduated 2020',
                  details: [
                      'Outstanding Alumni',
                      'Research Focus: Developmental Education and Community Role',
                      'Taught Introduction to Social Sciences for undergraduate students'
                  ]
              },
              {
                  degree: 'Bachelor of Education',
                  institution: 'Cendana University',
                  year: 'Graduated 2018',
                  details: [
                      'Recipient of Cendana Special Scholarship',
                      'Chair of Education Science Association',
                      'Class President 2018',
                      'Student Assistant to the Faculty Dean'
                  ]
              }
          ]
      },
      specializations: {
          title: 'SPECIALIZATIONS',
          items: [
              'Teaching English as a second language to students',
              'Helping students improve reading skills',
              'Developing elementary level English curriculum'
          ]
      }
    }
  };

  const currentContent = content[language];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 font-sans">
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-40 p-6 flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-2xl"
            >
              &times;
            </button>
            {Object.entries(currentContent.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`text-2xl ${activeSection === key ? 'text-indigo-600 font-bold' : 'text-gray-700'}`}
              >
                {value}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 mt-8 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700"
            >
              <FaLanguage size={20} />
              {language === 'id' ? 'EN' : 'ID'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Left */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:w-1/3 lg:w-1/4 flex flex-col gap-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* Mobile Header */}
              <div className="md:hidden flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-indigo-800">Marsela Andriani</h1>
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="hidden md:block mb-6"
              >
                <div className="w-40 h-40 mx-auto rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden shadow-md">
                  <div className="text-5xl text-indigo-600 font-bold">MA</div>
                </div>
              </motion.div>

              {/* Name and Title */}
              <motion.div 
                variants={itemVariants}
                custom={0}
                className="text-center mb-6"
              >
                <h1 className="text-2xl font-bold text-indigo-800">Marsela Andriani</h1>
                <p className="text-indigo-600 font-medium">GURU SEKOLAH DASAR</p>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                variants={sectionVariants}
                className="space-y-4"
              >
                <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <FiUser className="text-indigo-600" />
                  {currentContent.contact.title}
                </h2>
                <div className="space-y-3">
                  <motion.div 
                    variants={itemVariants}
                    custom={1}
                    className="flex items-center gap-3"
                  >
                    <FiPhone className="text-indigo-600" />
                    <span>{currentContent.contact.phone}</span>
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    custom={2}
                    className="flex items-center gap-3"
                  >
                    <FiMapPin className="text-indigo-600" />
                    <span>{currentContent.contact.address}</span>
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    custom={3}
                    className="flex items-center gap-3"
                  >
                    <FiMail className="text-indigo-600" />
                    <span>{currentContent.contact.email}</span>
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    custom={4}
                    className="flex items-center gap-3"
                  >
                    <FiGlobe className="text-indigo-600" />
                    <span>{currentContent.contact.website}</span>
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    custom={5}
                    className="flex items-center gap-3"
                  >
                    <FiLinkedin className="text-indigo-600" />
                    <span>{currentContent.contact.linkedin}</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Language Toggle - Desktop */}
              <motion.div 
                variants={itemVariants}
                custom={6}
                className="hidden md:flex justify-center mt-6"
              >
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 hover:bg-indigo-200 transition-colors"
                >
                  <FaLanguage size={18} />
                  {language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content - Right */}
          <div className="md:w-2/3 lg:w-3/4 flex flex-col gap-8">
            {/* Profile Section */}
            <motion.section 
              id="profile"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                <FiUser className="text-indigo-600" />
                {currentContent.profile.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.profile.description}
              </p>
            </motion.section>

            {/* Achievements Section */}
            <motion.section 
              id="achievements"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                <FiAward className="text-indigo-600" />
                {currentContent.achievements.title}
              </h2>
              <ul className="space-y-3">
                {currentContent.achievements.items.map((item, index) => (
                  <motion.li 
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-indigo-600 flex-shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Experience Section */}
            <motion.section 
              id="experience"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                <FiBriefcase className="text-indigo-600" />
                {currentContent.experience.title}
              </h2>
              <div className="space-y-6">
                {currentContent.experience.items.map((exp, index) => (
                  <motion.div 
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="border-l-2 border-indigo-200 pl-4"
                  >
                    <h3 className="text-lg font-medium text-gray-800">{exp.position}</h3>
                    <p className="text-indigo-600 font-medium">{exp.institution}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 mt-2 rounded-full bg-indigo-600 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section 
              id="education"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                <FiBook className="text-indigo-600" />
                {currentContent.education.title}
              </h2>
              <div className="space-y-6">
                {currentContent.education.items.map((edu, index) => (
                  <motion.div 
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="border-l-2 border-indigo-200 pl-4"
                  >
                    <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
                    <p className="text-indigo-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.year}</p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 mt-2 rounded-full bg-indigo-600 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Specializations Section */}
            <motion.section 
              id="specializations"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                <FiBookOpen className="text-indigo-600" />
                {currentContent.specializations.title}
              </h2>
              <ul className="space-y-3">
                {currentContent.specializations.items.map((item, index) => (
                  <motion.li 
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-indigo-600 flex-shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}