'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [language, setLanguage] = useState('id');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const content = {
    id: {
      nav: {
        about: 'Tentang Saya',
        experience: 'Pengalaman',
        education: 'Pendidikan',
        achievements: 'Pencapaian',
        skills: 'Keahlian',
        interests: 'Kesukaan'
      },
      about: {
        title: 'TENTANG SAYA',
        description: 'Saya seorang remaja yang berusia 24 tahun, saya lulusan S1 Peternakan di universitas nusantara pgri kediri. Saya pernah bekerja di outlet seblak fck, coffe brantas dan beberapa kopi lainya.'
      },
      experience: {
        title: 'PENGALAMAN ORGANISASI',
        items: [
          {
            title: 'SIE KEHARONIAN ISLAM (SKI SMAPTA)',
            role: 'Menjabat sebagai Humas',
            period: '2017-2018'
          },
          {
            title: 'HIMPUNAN MAHASISWA PETERNAKAN (HIMA PETERNAKAN UNP PGRI KEDIRI)',
            role: 'Menjabat sebagai Ketua',
            period: '2021-2022'
          },
          {
            title: 'UNIT KEGIATAN KEHARONIAN ISLAM (UKKI UNP PGRI KEDIRI)',
            role: 'Menjabat sebagai Anggota Takmir'
          }
        ]
      },
      education: {
        title: 'PENDIDIKAN',
        items: [
          'TK Endah',
          'SDN Bandar Kidul 1',
          'SMP Pawyatan Daha 2',
          'SMAN 7 Kediri',
          'S1 Peternakan'
        ]
      },
      achievements: {
        title: 'PENCAPAIAN',
        items: [
          'Peraih pendanaan dikti pada pkm 2021 | pkm riset resakta tingkat nasional',
          'Kredensial mikro Mahasiswa indonesia universitas muhammadiyah malang 2021 | KMMI tingkat nasional',
          'Lolos Kampus Merdeka program Wirausaha Merdeka di universitas Brawijaya malang 2022 | Wirausaha Merdeka tingkat nasional'
        ]
      },
      skills: {
        title: 'KEAHLIAN',
        items: [
          'Mengoperasikan komputer',
          'Mengatur Tim',
          'Pembicara Publik',
          'Organisasi'
        ]
      },
      interests: {
        title: 'KESUKAAN',
        items: [
          'Menjelajah alam',
          'Sepak bola',
          'Tenis meja'
        ]
      },
      contact: {
        title: 'HUBUNGI SAYA',
        subtitle: 'Saya terbuka untuk peluang kerja dan kolaborasi'
      }
    },
    en: {
      nav: {
        about: 'About Me',
        experience: 'Experience',
        education: 'Education',
        achievements: 'Achievements',
        skills: 'Skills',
        interests: 'Interests'
      },
      about: {
        title: 'ABOUT ME',
        description: 'I am a 24-year-old young man, a graduate of Animal Husbandry at Nusantara PGRI University Kediri. I have worked at seblak fck outlet, coffe brantas and several other coffee shops.'
      },
      experience: {
        title: 'ORGANIZATIONAL EXPERIENCE',
        items: [
          {
            title: 'ISLAMIC SPIRITUAL DIVISION (SKI SMAPTA)',
            role: 'Served as Public Relations',
            period: '2017-2018'
          },
          {
            title: 'ANIMAL HUSBANDRY STUDENT ASSOCIATION (HIMA PETERNAKAN UNP PGRI KEDIRI)',
            role: 'Served as Chairman',
            period: '2021-2022'
          },
          {
            title: 'ISLAMIC SPIRITUAL ACTIVITY UNIT (UKKI UNP PGRI KEDIRI)',
            role: 'Served as Takmir Member'
          }
        ]
      },
      education: {
        title: 'EDUCATION',
        items: [
          'Endah Kindergarten',
          'Bandar Kidul 1 Elementary School',
          'Pawyatan Daha 2 Junior High School',
          '7th State Senior High School Kediri',
          'Bachelor of Animal Husbandry'
        ]
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        items: [
          'Recipient of DIKTI funding in PKM 2021 | national level PKM research',
          'Micro credential of Indonesian students at Muhammadiyah University Malang 2021 | national level KMMI',
          'Passed Kampus Merdeka program Wirausaha Merdeka at Brawijaya University Malang 2022 | national level Wirausaha Merdeka'
        ]
      },
      skills: {
        title: 'SKILLS',
        items: [
          'Computer operation',
          'Team management',
          'Public speaking',
          'Organization'
        ]
      },
      interests: {
        title: 'INTERESTS',
        items: [
          'Exploring nature',
          'Football',
          'Table tennis'
        ]
      },
      contact: {
        title: 'CONTACT ME',
        subtitle: 'I am open to job opportunities and collaborations'
      }
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 font-sans text-gray-800">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                HEBI IRAWAN
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {Object.keys(content[language].nav).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative px-1 py-2 font-medium transition-colors ${activeSection === section ? 'text-green-600' : 'text-gray-600 hover:text-green-500'}`}
                >
                  {content[language].nav[section]}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Language Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Toggle language"
              >
                <IoLanguage className="text-xl" />
                <span className="ml-1 text-sm font-medium">{language === 'id' ? 'ID' : 'EN'}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-600 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiChevronDown className="text-xl" />
                ) : (
                  <FiChevronRight className="text-xl" />
                )}
              </button>
            </div>
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
              className="md:hidden bg-white shadow-lg"
            >
              <div className="container mx-auto px-4 py-2">
                <div className="flex flex-col space-y-2">
                  {Object.keys(content[language].nav).map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`px-3 py-2 text-left rounded-md transition-colors ${activeSection === section ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {content[language].nav[section]}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {language === 'id' ? 'Halo, Saya Hebi Irawan' : 'Hello, I am Hebi Irawan'}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {language === 'id' ? 'Lulusan Peternakan dengan pengalaman organisasi yang kuat' : 'Animal Husbandry graduate with strong organizational experience'}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/hebiirawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow-md text-pink-600 hover:bg-pink-50 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="mailto:perpisahan9d@gmail.com"
                  className="p-2 bg-white rounded-full shadow-md text-green-600 hover:bg-green-50 transition-colors"
                  aria-label="Email"
                >
                  <FiMail className="text-xl" />
                </a>
                <a
                  href="tel:+62895620119214"
                  className="p-2 bg-white rounded-full shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="Phone"
                >
                  <FiPhone className="text-xl" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-full overflow-hidden shadow-xl">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    <span className="text-lg">Profile Image</span>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
                  className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md"
                >
                  <span className="font-medium text-green-600">Hebi Irawan</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 scroll-mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
              {content[language].about.title}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-700 leading-relaxed">
                {content[language].about.description}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20 scroll-mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
              {content[language].experience.title}
            </h2>
            <div className="space-y-6">
              {content[language].experience.items.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-green-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 font-medium mb-1">{item.role}</p>
                  {item.period && <p className="text-gray-500 text-sm">{item.period}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20 scroll-mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
              {content[language].education.title}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="space-y-3">
                {content[language].education.items.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-20 scroll-mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
              {content[language].achievements.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content[language].achievements.items.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-green-600 text-4xl mb-4 font-bold">0{index + 1}</div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
              {content[language].skills.title}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex flex-wrap gap-3">
                {content[language].skills.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="mb-20 scroll-mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
              {content[language].interests.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content[language].interests.items.map((interest, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    {index === 0 && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{interest}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 flex items-center">
              <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
              {content[language].contact.title}
            </h2>
            <p className="text-gray-600 mb-8">{content[language].contact.subtitle}</p>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={itemVariants}
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium">{language === 'id' ? 'Email' : 'Email'}</h3>
                    <a href="mailto:perpisahan9d@gmail.com" className="text-gray-800 hover:text-green-600 transition-colors">
                      perpisahan9d@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium">{language === 'id' ? 'Telepon' : 'Phone'}</h3>
                    <a href="tel:+62895620119214" className="text-gray-800 hover:text-green-600 transition-colors">
                      (+62) 895-6201-19214
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaInstagram className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium">Instagram</h3>
                    <a 
                      href="https://instagram.com/hebiirawan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-green-600 transition-colors"
                    >
                      @hebiirawan
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium">{language === 'id' ? 'Alamat' : 'Address'}</h3>
                    <p className="text-gray-800">
                      JL KH Wahid Hasyim Kelurahan Bandar Lor, Kecamatan Mojoroto Gang Tangkis No.6 Kota Kediri
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:mb-0"
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                HEBI IRAWAN
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {language === 'id' ? 'Lulusan Peternakan & Pengalaman Organisasi' : 'Animal Husbandry Graduate & Organizational Experience'}
              </p>
            </motion.div>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com/hebiirawan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="mailto:perpisahan9d@gmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="text-xl" />
              </a>
              <a
                href="tel:+62895620119214"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Phone"
              >
                <FiPhone className="text-xl" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Hebi Irawan. {language === 'id' ? 'Semua hak dilindungi.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;