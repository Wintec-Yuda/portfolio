'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiGlobe, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check user's preferred color scheme
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      setIsLoading(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  // Content translations
  const content = {
    en: {
      about: "About Me",
      aboutText: "A Digital Marketing Strategist with experience in designing and implementing effective digital marketing strategies to increase brand awareness and conversion. Graduate from Borcelle University with in-depth knowledge of SEO, SEM, data analysis, and social media management.",
      skills: "Skills",
      education: "Education",
      educationText: "Borcelle University | 2024\nBachelor's in Digital Marketing Management",
      certifications: "Certifications",
      experience: "Experience",
      contact: "Contact",
      downloadCV: "Download CV"
    },
    id: {
      about: "Tentang Saya",
      aboutText: "Seorang Digital Marketing Strategist dengan pengalaman dalam merancang dan menerapkan strategi pemasaran digital yang efektif untuk meningkatkan brand awareness dan konversi. Lulusan dari Universitas Borcelle dengan pengetahuan yang mendalam tentang SEO, SEM, analisis data, dan manajemen media sosial.",
      skills: "Kemampuan",
      education: "Pendidikan",
      educationText: "Universitas Borcelle | 2024\nS1 Manajemen Pemasaran Digital",
      certifications: "Sertifikasi",
      experience: "Pengalaman",
      contact: "Kontak",
      downloadCV: "Unduh CV"
    }
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={`w-12 h-12 border-4 ${darkMode ? 'border-white border-t-transparent' : 'border-gray-900 border-t-transparent'} rounded-full`}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-opacity-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-gray-700" />}
            </button>
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              aria-label="Toggle language"
            >
              <FiGlobe className={darkMode ? 'text-blue-300' : 'text-blue-600'} />
            </button>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="#contact"
            className={`px-4 py-2 rounded-md font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors duration-300`}
          >
            {content[language].contact}
          </motion.a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="block">ROSA MARIA</span>
                <span className="block">AGUADO</span>
              </h1>
              <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Digital Marketing Strategist
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FiPhone className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>+123-456-7890</span>
                </div>
                <div className="flex items-center">
                  <FiMail className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>hello@reallygreatsite.com</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>123 Anywhere St., Any City</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}>
                  <FaFacebook className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </a>
                <a href="#" className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}>
                  <FaTwitter className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                </a>
                <a href="#" className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}>
                  <FaLinkedin className={darkMode ? 'text-blue-400' : 'text-blue-700'} />
                </a>
                <a href="#" className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}>
                  <FaInstagram className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-600' : 'border-blue-400'} shadow-xl`}>
                <div className={`absolute inset-0 ${darkMode ? 'bg-blue-900' : 'bg-blue-200'} opacity-30`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">RM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            {content[language].about}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`prose max-w-3xl ${darkMode ? 'prose-invert' : ''}`}
          >
            <p className="whitespace-pre-line">{content[language].aboutText}</p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            {content[language].skills}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Digital Marketing Strategy",
              "SEO & SEM",
              "Social Media Marketing",
              "Email Marketing",
              "Data Analysis",
              "Marketing Tools"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${80 + Math.random() * 20}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`h-2.5 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">{content[language].education}</h2>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <h3 className="text-xl font-semibold mb-2">Borcelle University</h3>
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>2024</p>
                <p className="whitespace-pre-line">{content[language].educationText}</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">{content[language].certifications}</h2>
              <div className="space-y-4">
                {[
                  "Borcelle Ads Certification",
                  "SEO Fundamentals",
                  "Content Marketing Certified"
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex items-center`}
                  >
                    <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} flex items-center justify-center mr-4`}>
                      <span className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium">{cert}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            {content[language].experience}
          </motion.h2>
          <div className="space-y-8">
            {/* Job 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Digital Marketing Strategist - Larana Inc.</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>February 2024 - August 2024</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed and implemented digital marketing strategies that increased website traffic by 35% in 6 months</li>
                <li>Managed paid advertising campaigns that increased sales conversion by 20%</li>
                <li>Conducted SEO analysis and content optimization to improve website organic search rankings</li>
              </ul>
            </motion.div>

            {/* Job 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Social Media Specialist - Borcelle Creative</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>June 2023 - January 2024</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Managed social media accounts to significantly increase engagement and followers</li>
                <li>Designed creative and interactive campaign content to increase brand awareness</li>
                <li>Conducted social media performance analysis and provided recommendations to improve audience interaction</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            {content[language].contact}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-400'}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-400'}`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-400'}`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-md font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors duration-300`}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            >
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMail className={`text-2xl mt-1 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>hello@reallygreatsite.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className={`text-2xl mt-1 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+123-456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className={`text-2xl mt-1 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>123 Anywhere St., Any City</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className={`inline-flex items-center px-6 py-3 rounded-md font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                >
                  {content[language].downloadCV}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            © {new Date().getFullYear()} Rosa Maria Aguado. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}