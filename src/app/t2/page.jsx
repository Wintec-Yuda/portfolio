'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun, FiChevronRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')
  const [activeSection, setActiveSection] = useState('about')

  // Check for user's preferred color scheme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  // Translations
  const translations = {
    en: {
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      achievements: 'Achievements',
      profile: 'I am an experienced Content Creator skilled in crafting compelling scripts. Writing is not just a hobby but also a source of creative ideas that flow into every content I create. I am ready to share my enthusiasm and creativity to strengthen the team with full spirit!',
      contact: 'Contact',
      viewMore: 'View More',
      educationItems: [
        {
          period: '2015 - 2019',
          institution: 'Borcelle University',
          degree: 'Bachelor of Visual Communication Design'
        },
        {
          period: '2019 - 2021',
          institution: 'Borcelle University',
          degree: 'Master of Visual Communication Design'
        }
      ],
      experienceItems: [
        {
          period: '2014 - 2016',
          position: 'Content Creator',
          company: 'Arrowai Industries',
          description: 'At Arrowai Industries, I held the position of Content Creator, designing and creating entertaining and educational content. I successfully built an audience with a 50% increase in followers and achieved a viral video with 1 million views.'
        },
        {
          period: '2018 - 2020',
          position: 'Product Manager',
          company: 'Liceria Co',
          description: 'At Liceria Co, I held the position of Product Manager, designing and creating quality and useful products. I successfully built an audience with a 50% increase in followers and sales reaching 1 million transactions.'
        },
        {
          period: '2021 - 2022',
          position: 'Copywriter',
          company: 'Borcelle',
          description: 'At Borcelle, I held the position of Copywriter, designing and creating quality and useful products. I successfully built an audience with a 50% increase in followers and sales reaching 1 million transactions.'
        }
      ],
      achievementsItems: [
        {
          year: '2017',
          title: '1st Place Photography Competition',
          company: 'Liceria Co.'
        },
        {
          year: '2019',
          title: '1st Place Writing Competition',
          company: 'Liceria Co.'
        }
      ]
    },
    id: {
      about: 'Tentang',
      education: 'Pendidikan',
      experience: 'Pengalaman',
      skills: 'Keterampilan',
      achievements: 'Pencapaian',
      profile: 'Saya adalah Content Creator berpengalaman yang piawai dalam menulis naskah yang memukau. Menulis bukan hanya sekadar hobi, tetapi juga menjadi sumber ide kreatif yang mengalir pada setiap konten yang saya buat. Saya siap membagikan semangat dan kreativitas yang saya miliki untuk memperkuat tim dengan penuh semangat!',
      contact: 'Kontak',
      viewMore: 'Lihat Lebih',
      educationItems: [
        {
          period: '2015 - 2019',
          institution: 'Universitas Borcelle',
          degree: 'S1 Desain Komunikasi Visual'
        },
        {
          period: '2019 - 2021',
          institution: 'Universitas Borcelle',
          degree: 'S2 Desain Komunikasi Visual'
        }
      ],
      experienceItems: [
        {
          period: '2014 - 2016',
          position: 'Content Creator',
          company: 'Arrowai Industries',
          description: 'Di Arrowai Industries, saya menduduki posisi sebagai Content Creator, merancang dan menciptakan konten yang menghibur dan mendidik. Saya berhasil membangun audiens sebanyak 50% peningkatan pengikut dan mencapai video viral dengan 1 juta tayangan.'
        },
        {
          period: '2018 - 2020',
          position: 'Manajer Produk',
          company: 'Liceria Co',
          description: 'Di Liceria Co, saya menduduki posisi sebagai Manajer Produk, merancang dan menciptakan produk yang berkualitas dan bermanfaat. Saya berhasil membangun audiens sebanyak 50% peningkatan pengikut dan penjualan mencapai 1 juta transaksi.'
        },
        {
          period: '2021 - 2022',
          position: 'Copywriter',
          company: 'Borcelle',
          description: 'Di Borcelle, saya menduduki posisi sebagai Copywriter, merancang dan menciptakan produk yang berkualitas dan bermanfaat. Saya berhasil membangun audiens sebanyak 50% peningkatan pengikut dan penjualan mencapai 1 juta transaksi.'
        }
      ],
      achievementsItems: [
        {
          year: '2017',
          title: 'Juara 1 Lomba Fotografi',
          company: 'Liceria Co.'
        },
        {
          year: '2019',
          title: 'Juara 1 Lomba Menulis',
          company: 'Liceria Co.'
        }
      ]
    }
  }

  const t = translations[language]

  const skills = [
    'Research Skills',
    'Time Management',
    'SEO (Search Engine Optimization)',
    'Videography',
    'Copywriting',
    'Photography',
    'Editing'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} shadow-sm`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Muhammad</span> Patel
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-gray-700" />}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={itemVariants} className="md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Muhammad <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Patel</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-2xl md:text-3xl font-semibold mb-6 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}
              >
                C O N T E N T &nbsp; C R E A T O R
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {t.profile}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex space-x-4"
              >
                <a 
                  href="#contact" 
                  className={`px-6 py-3 rounded-full font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
                >
                  {t.contact}
                </a>
                <a 
                  href="#experience" 
                  className={`px-6 py-3 rounded-full font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                  {t.viewMore}
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="md:w-1/2 flex justify-center"
            >
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'}`}>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`mb-12 rounded-lg p-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
        >
          <ul className="flex overflow-x-auto">
            {['about', 'education', 'experience', 'skills', 'achievements'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveSection(item)}
                  className={`px-6 py-3 whitespace-nowrap font-medium rounded-md transition-colors ${activeSection === item ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200')}`}
                >
                  {t[item]}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Info */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="contact"
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            >
              <h2 className="text-xl font-bold mb-4">{t.contact}</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiMail className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <span>hello@reallygreatsite.com</span>
                </li>
                <li className="flex items-center">
                  <FiPhone className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <span>+123-456-7890</span>
                </li>
                <li className="flex items-center">
                  <FiMapPin className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <span>123 Anywhere St., Any City</span>
                </li>
              </ul>
              
              <div className="mt-6 flex space-x-4">
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  <FaInstagram className="text-pink-500" />
                </a>
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  <FaLinkedin className="text-blue-600" />
                </a>
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  <FaGithub className="text-gray-800 dark:text-gray-200" />
                </a>
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  <FaYoutube className="text-red-600" />
                </a>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            >
              <h2 className="text-xl font-bold mb-4">{t.skills}</h2>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={slideIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <FiChevronRight className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <AnimatePresence mode="wait">
              {activeSection === 'about' && (
                <motion.section
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                >
                  <h2 className="text-2xl font-bold mb-6">{t.about}</h2>
                  <div className="prose max-w-none dark:prose-invert">
                    <p className="mb-4">
                      {t.profile}
                    </p>
                    <p className="mb-4">
                      {language === 'en' 
                        ? "With over 8 years of experience in content creation, I've developed a keen eye for storytelling and audience engagement. My work spans across various media platforms, delivering impactful content that resonates with diverse audiences."
                        : "Dengan pengalaman lebih dari 8 tahun dalam pembuatan konten, saya telah mengembangkan kepekaan yang tajam untuk bercerita dan keterlibatan audiens. Karya saya mencakup berbagai platform media, memberikan konten yang berdampak dan beresonansi dengan beragam audiens."}
                    </p>
                    <p>
                      {language === 'en'
                        ? "When I'm not creating content, you can find me exploring new photography techniques or mentoring aspiring content creators."
                        : "Ketika saya tidak membuat konten, Anda dapat menemukan saya menjelajahi teknik fotografi baru atau membimbing calon pembuat konten."}
                    </p>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Education Section */}
            <AnimatePresence mode="wait">
              {activeSection === 'education' && (
                <motion.section
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                >
                  <h2 className="text-2xl font-bold mb-6">{t.education}</h2>
                  <div className="space-y-6">
                    {t.educationItems.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-400 bg-gray-700' : 'border-blue-500 bg-blue-50'}`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg">{edu.institution}</h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.degree}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                            {edu.period}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Experience Section */}
            <AnimatePresence mode="wait">
              {activeSection === 'experience' && (
                <motion.section
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                  id="experience"
                >
                  <h2 className="text-2xl font-bold mb-6">{t.experience}</h2>
                  <div className="space-y-8">
                    {t.experienceItems.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/4">
                            <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                              {exp.period}
                            </span>
                          </div>
                          <div className="md:w-3/4">
                            <div className="relative pl-6 pb-6">
                              <div className={`absolute left-0 top-1 w-3 h-3 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
                              <div className={`absolute left-1.5 top-4 bottom-0 w-0.5 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                              <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">{exp.position}</h3>
                              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exp.company}</h4>
                              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Skills Section (duplicate for navigation) */}
            <AnimatePresence mode="wait">
              {activeSection === 'skills' && (
                <motion.section
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                >
                  <h2 className="text-2xl font-bold mb-6">{t.skills}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`p-4 rounded-lg flex items-center ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${darkMode ? 'bg-gray-600' : 'bg-blue-100'}`}>
                          <FiChevronRight className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                        </div>
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Achievements Section */}
            <AnimatePresence mode="wait">
              {activeSection === 'achievements' && (
                <motion.section
                  key="achievements"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                >
                  <h2 className="text-2xl font-bold mb-6">{t.achievements}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.achievementsItems.map((ach, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'}`}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{ach.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                            {ach.year}
                          </span>
                        </div>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{ach.company}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mt-12`}>
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            &copy; {new Date().getFullYear()} Muhammad Patel. {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
          </motion.p>
        </div>
      </footer>
    </div>
  )
}