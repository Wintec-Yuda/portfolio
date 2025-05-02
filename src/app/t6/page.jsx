'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb';

const translations = {
  en: {
    about: "About Me",
    skills: "Key Skills",
    experience: "Experience",
    education: "Education",
    additional: "Additional Information",
    contact: "Contact",
    bio: "Informatics Engineering student with a deep interest in development and data processing, with a focus on further exploration in data science. I have experience in Human Resource Management, Digital Marketing, and Business Administration, and have worked in digital marketing and content creation. In addition to a strong understanding of data processing and algorithms, I'm also enthusiastic about continuing to develop myself in data science and data analysis to produce innovative data-based solutions.",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    hardSkillsDesc: "Creating machine learning programs using Excel or code, able to create simple graphic designs, understand and master Python, understand intelligent computing in simple programming.",
    softSkillsDesc: "Can communicate well, able to convey messages informatively, can make appropriate decisions according to conditions, able to work in teams, and maximize available resources.",
    current: "Present"
  },
  id: {
    about: "Tentang Saya",
    skills: "Keahlian Utama",
    experience: "Pengalaman",
    education: "Pendidikan",
    additional: "Informasi Tambahan",
    contact: "Kontak",
    bio: "Mahasiswa Teknik Informatika dengan minat mendalam pada pengembangan dan pengolahan data, serta fokus pada eksplorasi lebih lanjut dalam data science. Saya memiliki pengalaman di bidang Human Resource Management, Digital Marketing, dan Business Administration, serta telah bekerja dalam digital marketing dan pembuatan konten. Selain pemahaman yang kuat mengenai pengolahan data dan algoritma, saya juga antusias untuk terus mengembangkan diri di bidang data science dan analisis data guna menghasilkan solusi inovatif yang berbasis data.",
    hardSkills: "Kemampuan Teknis",
    softSkills: "Kemampuan Non-Teknis",
    hardSkillsDesc: "Membuat program machine learning menggunakan Excel maupun kode, mampu membuat desain grafis sederhana, memahami dan menguasai bahasa Python, memahami komputasi cerdas dalam pemrograman sederhana.",
    softSkillsDesc: "Dapat berkomunikasi dengan baik, mampu menyampaikan pesan secara informatif, dapat memberikan keputusan yang tepat sesuai kondisi, mampu bekerja dalam tim, dan memaksimalkan sumber daya yang ada.",
    current: "Sekarang"
  }
};

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['about', 'skills', 'experience', 'education', 'additional', 'contact'];
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
          className="bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
        >
          <FiGlobe className="text-lg" />
          <span>{language === 'en' ? 'ID' : 'EN'}</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-indigo-700 hover:bg-indigo-600 p-3 rounded-full shadow-lg transition-all duration-300"
        >
          {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-y-0 left-0 z-40 w-64 bg-indigo-800 shadow-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6 pt-20">
              {['about', 'skills', 'experience', 'education', 'additional', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`py-3 px-4 text-left rounded-lg mb-2 transition-all duration-200 ${activeSection === item ? 'bg-indigo-600 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}
                >
                  {t[item]}
                </button>
              ))}
              <div className="mt-auto pt-6 border-t border-indigo-700">
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/tito-pangestu-467131243/" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors">
                    <FiLinkedin className="text-xl" />
                  </a>
                  <a href="mailto:titopangestu34@gmail.com" className="text-indigo-200 hover:text-white transition-colors">
                    <FiMail className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-indigo-800 shadow-xl z-30">
        <div className="flex flex-col h-full p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 mb-8"
          >
            <h1 className="text-2xl font-bold">Tito Pangestu</h1>
            <p className="text-indigo-300 mt-1">Digital Media Specialist</p>
          </motion.div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {['about', 'skills', 'experience', 'education', 'additional', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${activeSection === item ? 'bg-indigo-600 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}
                  >
                    {t[item]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-6 border-t border-indigo-700"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-indigo-200">
                <FiMail className="text-lg" />
                <span>titopangestu34@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <FiMapPin className="text-lg" />
                <span>Jl Dandangan 2 No 117</span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <FiLinkedin className="text-lg" />
                <a href="https://www.linkedin.com/in/tito-pangestu-467131243/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-indigo-900/80 z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0, x: Math.random() * 1000, opacity: 0 }}
                  animate={{ 
                    y: [0, -1000],
                    x: [Math.random() * 1000, Math.random() * 1000],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    delay: Math.random() * 5
                  }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Tito Pangestu
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-indigo-200 mb-6">
              Digital Media Specialist
            </h2>
            <p className="text-lg md:text-xl text-indigo-100 mb-8">
              {t.bio}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
            >
              {t.contact}
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-indigo-950/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center"
            >
              {t.about}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed mb-6">
                {t.bio}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: <FaReact className="text-3xl text-cyan-400" />, name: "React" },
                  { icon: <SiNextdotjs className="text-3xl text-white" />, name: "Next.js" },
                  { icon: <SiTailwindcss className="text-3xl text-cyan-300" />, name: "Tailwind" },
                  { icon: <SiFramer className="text-3xl text-purple-400" />, name: "Framer" },
                  { icon: <TbBrandJavascript className="text-3xl text-yellow-400" />, name: "JavaScript" },
                  { icon: <TbBrandTypescript className="text-3xl text-blue-400" />, name: "TypeScript" },
                  { icon: <FaPython className="text-3xl text-blue-500" />, name: "Python" },
                  { icon: <FaDatabase className="text-3xl text-blue-300" />, name: "SQL" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-indigo-800/50 rounded-lg p-4 flex flex-col items-center"
                  >
                    {tech.icon}
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gradient-to-b from-indigo-950/50 to-indigo-900/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center"
            >
              {t.skills}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-200">{t.hardSkills}</h3>
                <p className="mb-6">{t.hardSkillsDesc}</p>
                <div className="space-y-4">
                  {[
                    "Data Analysis & Visualization",
                    "Machine Learning Basics",
                    "Python Programming",
                    "Web Development",
                    "SEO Optimization",
                    "Graphic Design"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-200">{t.softSkills}</h3>
                <p className="mb-6">{t.softSkillsDesc}</p>
                <div className="space-y-4">
                  {[
                    "Team Collaboration",
                    "Effective Communication",
                    "Decision Making",
                    "Problem Solving",
                    "Resource Management",
                    "Adaptability"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-indigo-950/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              {t.experience}
            </motion.h2>
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-600 ml-6 transform -translate-x-1/2"></div>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-400 border-4 border-indigo-800 transform -translate-x-1/2"></div>
                  <div className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-1">Cv. Tiga Bintang</h3>
                    <p className="text-indigo-300 mb-4">Jan 2023 - {t.current}</p>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span>Helped analyze marketing campaign data to improve engagement and conversion</span>
                      </li>
                      <li className="flex">
                        <div className="mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span>Managed digital content creation for various platforms including Facebook and Instagram</span>
                      </li>
                      <li className="flex">
                        <div className="mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span>Ensured proper SEO implementation to improve online visibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-600 ml-6 transform -translate-x-1/2"></div>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-400 border-4 border-indigo-800 transform -translate-x-1/2"></div>
                  <div className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-1">PT. Oramicin</h3>
                    <p className="text-indigo-300 mb-4">March 2023 - May 2023</p>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span>Optimized SEO to improve website performance and visibility on search engines</span>
                      </li>
                      <li className="flex">
                        <div className="mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span>Composed attractive and effective captions for Facebook Page and Instagram to increase engagement</span>
                      </li>
                      <li className="flex">
                        <div className="mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span>Created professional company emails with appropriate design and content to support internal and external communication needs</span>
                      </li>
                      <li className="flex">
                        <div className="mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span>Presented data on ornamental flower importing countries and sales insights to maximize META Ads potential in those countries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6 bg-gradient-to-b from-indigo-950/50 to-indigo-900/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              {t.education}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Informatic Engineering</h3>
                <p className="text-indigo-300 mb-6">2020 - 2025</p>
                <h4 className="font-medium text-indigo-200 mb-3">Grant Programs:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Organizational Capacity Building Program as Chairman (2022)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Organizational Capacity Building Program as Field Coordinator (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Student Entrepreneur Development Program as Chairman (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Student Entrepreneur Development Program as Team Mentor (2024)</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Kampus Merdeka</h3>
                <p className="text-indigo-300 mb-6">Export School Program by SEKOLAH EKSPOR</p>
                <h4 className="font-medium text-indigo-200 mb-3">Achievements:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Completed comprehensive export training program</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Gained practical knowledge in international trade</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Developed market analysis skills for export products</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    <span>Learned export documentation and procedures</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section id="additional" className="py-20 px-6 bg-indigo-950/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              {t.additional}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-200">{t.hardSkills}</h3>
                <p className="mb-6">{t.hardSkillsDesc}</p>
                <div className="space-y-3">
                  {[
                    "Python Programming",
                    "Data Analysis with Excel",
                    "Machine Learning Basics",
                    "Web Development (HTML, CSS, JS)",
                    "SEO & Digital Marketing",
                    "Graphic Design (Basic)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-indigo-400"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-200">{t.softSkills}</h3>
                <p className="mb-6">{t.softSkillsDesc}</p>
                <div className="space-y-3">
                  {[
                    "Team Leadership",
                    "Public Speaking",
                    "Project Management",
                    "Creative Problem Solving",
                    "Cross-functional Collaboration",
                    "Adaptability"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-indigo-400"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-indigo-900/50 to-indigo-950">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              {t.contact}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-indigo-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FiMail className="text-indigo-300 mt-1 mr-4 text-xl" />
                      <div>
                        <h4 className="font-medium text-indigo-200">Email</h4>
                        <a href="mailto:titopangestu34@gmail.com" className="hover:text-white transition-colors">titopangestu34@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiMapPin className="text-indigo-300 mt-1 mr-4 text-xl" />
                      <div>
                        <h4 className="font-medium text-indigo-200">Address</h4>
                        <p>Jl Dandangan 2 No 117</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiLinkedin className="text-indigo-300 mt-1 mr-4 text-xl" />
                      <div>
                        <h4 className="font-medium text-indigo-200">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/tito-pangestu-467131243/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          linkedin.com/in/tito-pangestu-467131243/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-indigo-200 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-indigo-200 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows="4"
                        className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-indigo-950 text-center">
          <p className="text-indigo-400">
            &copy; {new Date().getFullYear()} Tito Pangestu. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}