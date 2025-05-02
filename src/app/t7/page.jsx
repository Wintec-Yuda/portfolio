'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiChevronDown, FiChevronUp, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaReact, FaFigma, FaPhotoshop } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiAdobephotoshop, SiCoreldraw } from 'react-icons/si';
import { MdWork, MdSchool, MdLanguage, MdComputer } from 'react-icons/md';

const PortfolioPage = () => {
  const [language, setLanguage] = useState('id');
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'skills'];
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
        about: 'Tentang',
        education: 'Pendidikan',
        experience: 'Pengalaman',
        skills: 'Keahlian',
        contact: 'Kontak'
      },
      about: {
        title: 'Tentang Saya',
        description: 'Individu yang memiliki semangat tinggi dalam mendalami teknologi digital. Berpengalaman dalam desain grafis, pengolahan office, mengelelola software, dan troble souting.'
      },
      education: {
        title: 'Pendidikan',
        items: [
          {
            institution: 'MTSN Mojoroto Kota Kediri',
            period: '2011 - 2014'
          },
          {
            institution: 'SMAN 1 Grogol - Ilmu Pengetahuan Alam',
            period: '2014 - 2017'
          },
          {
            institution: 'Universitas Nusantara PGRI Kediri - S1 Teknik Informatika',
            period: '2020 - 2024'
          }
        ]
      },
      experience: {
        title: 'Pengalaman',
        items: [
          {
            position: 'Magang Dinas UMKM Pertanian Kabupaten Kediri',
            period: 'Februari-Maret 2023',
            description: 'Membantu kebutuhan digital dinas Pertanian Kabupaten Kediri'
          },
          {
            position: 'Koordinator Dinas UMKM Kabupaten Kediri',
            period: 'Agustus 2024-November 2024',
            description: 'Mengkoordinasi tim untuk membantu umkm dalam pendampingan terhadap program pemerintah'
          },
          {
            position: 'Crew PT Sukses Prestasi Karunia (MR Suprek)',
            period: 'Desember 2024 - Maret 2025',
            description: 'Membantu Produksi sesuai SOP Perusahaan dan melayani pelanggan'
          }
        ]
      },
      skills: {
        title: 'Keahlian',
        categories: [
          {
            title: 'Teknologi',
            items: ['HTML & CSS', 'Next.js', 'Tailwind CSS', 'Framer Motion']
          },
          {
            title: 'Desain',
            items: ['Photoshop', 'Corel Draw', 'Editing Video', 'Fotografi']
          },
          {
            title: 'Office',
            items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint']
          }
        ]
      },
      contact: {
        title: 'Kontak',
        info: [
          { icon: <FiPhone />, text: '081553990898' },
          { icon: <FiMail />, text: 'farihfauzi123@gmail.com' },
          { icon: <FiMapPin />, text: 'Desa Jatirejo, Kec. Banyakan, Kab Kediri, Jawa Timur 64151' }
        ]
      }
    },
    en: {
      nav: {
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact'
      },
      about: {
        title: 'About Me',
        description: 'An individual with high enthusiasm for delving into digital technology. Experienced in graphic design, office processing, software management, and troubleshooting.'
      },
      education: {
        title: 'Education',
        items: [
          {
            institution: 'MTSN Mojoroto Kediri City',
            period: '2011 - 2014'
          },
          {
            institution: 'SMAN 1 Grogol - Natural Sciences',
            period: '2014 - 2017'
          },
          {
            institution: 'Nusantara PGRI University Kediri - Bachelor of Informatics Engineering',
            period: '2020 - 2024'
          }
        ]
      },
      experience: {
        title: 'Experience',
        items: [
          {
            position: 'Intern at UMKM Agriculture Office, Kediri Regency',
            period: 'February-March 2023',
            description: 'Assisted digital needs of the Agriculture Office in Kediri Regency'
          },
          {
            position: 'Coordinator at UMKM Office, Kediri Regency',
            period: 'August 2024-November 2024',
            description: 'Coordinated team to assist MSMEs in mentoring government programs'
          },
          {
            position: 'Crew at PT Sukses Prestasi Karunia (MR Suprek)',
            period: 'December 2024 - March 2025',
            description: 'Assisted production according to company SOP and served customers'
          }
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          {
            title: 'Technology',
            items: ['HTML & CSS', 'Next.js', 'Tailwind CSS', 'Framer Motion']
          },
          {
            title: 'Design',
            items: ['Photoshop', 'Corel Draw', 'Video Editing', 'Photography']
          },
          {
            title: 'Office',
            items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint']
          }
        ]
      },
      contact: {
        title: 'Contact',
        info: [
          { icon: <FiPhone />, text: '+62 81553990898' },
          { icon: <FiMail />, text: 'farihfauzi123@gmail.com' },
          { icon: <FiMapPin />, text: 'Jatirejo Village, Banyakan District, Kediri Regency, East Java 64151' }
        ]
      }
    }
  };

  const currentContent = content[language];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
      >
        <FiGlobe className="text-blue-600" />
        <span className="font-medium">{language === 'id' ? 'ID' : 'EN'}</span>
      </button>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white p-2 rounded-full shadow-md"
        >
          {isMenuOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-16 left-4 z-40 bg-white rounded-lg shadow-lg p-4 w-64"
          >
            <nav className="flex flex-col gap-2">
              {Object.entries(currentContent.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`px-4 py-2 rounded-md text-left ${activeSection === key ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  {value}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar */}
          <div className="lg:w-1/3 lg:sticky lg:top-8 lg:h-screen lg:max-h-[calc(100vh-4rem)] flex flex-col">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-6 overflow-hidden shadow-md">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  MF
                </div>
              </div>

              <h1 className="text-2xl font-bold text-center mb-1">MOH FARIH FAUZI</h1>
              <p className="text-gray-600 text-center mb-6">Kediri, 08 Februari 2002</p>

              <div className="w-full border-t border-gray-200 my-4"></div>

              <div className="w-full space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <MdLanguage className="text-blue-600" />
                  {language === 'id' ? 'Bahasa' : 'Languages'}
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Bahasa Indonesia</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">English</span>
                </div>
              </div>

              <div className="w-full border-t border-gray-200 my-4"></div>

              <div className="w-full space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <MdComputer className="text-blue-600" />
                  {currentContent.skills.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <SiNextdotjs /> Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <SiTailwindcss /> Tailwind
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <SiAdobephotoshop /> Photoshop
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <SiCoreldraw /> Corel Draw
                  </span>
                </div>
              </div>

              <div className="w-full border-t border-gray-200 my-4"></div>

              <div className="w-full space-y-4">
                <h2 className="text-lg font-semibold">{currentContent.contact.title}</h2>
                <div className="space-y-3">
                  {currentContent.contact.info.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-blue-600 mt-1">{item.icon}</div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full border-t border-gray-200 my-4"></div>

              <div className="flex gap-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <FiGithub size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <FiInstagram size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 space-y-16">
            {/* Desktop Navigation */}
            <motion.nav 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="hidden lg:block bg-white rounded-xl shadow-lg p-4 sticky top-4 z-10"
            >
              <ul className="flex justify-around">
                {Object.entries(currentContent.nav).map(([key, value]) => (
                  <li key={key}>
                    <button
                      onClick={() => scrollToSection(key)}
                      className={`px-4 py-2 rounded-md ${activeSection === key ? 'bg-blue-100 text-blue-600 font-medium' : 'hover:text-blue-600'}`}
                    >
                      {value}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* About Section */}
            <motion.section
              id="about"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">{currentContent.about.title}</h2>
              <p className="text-gray-700 leading-relaxed">{currentContent.about.description}</p>
            </motion.section>

            {/* Education Section */}
            <motion.section
              id="education"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdSchool className="text-blue-600" />
                {currentContent.education.title}
              </h2>

              <div className="space-y-6">
                {currentContent.education.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="border-l-4 border-blue-500 pl-6 py-2 relative"
                  >
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold">{item.institution}</h3>
                    <p className="text-gray-600 text-sm">{item.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
              id="experience"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdWork className="text-blue-600" />
                {currentContent.experience.title}
              </h2>

              <div className="space-y-8">
                {currentContent.experience.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="border-l-4 border-blue-500 pl-6 py-2 relative"
                  >
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold">{item.position}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.period}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              id="skills"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">{currentContent.skills.title}</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {currentContent.skills.categories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              id="contact"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">{currentContent.contact.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">{language === 'id' ? 'Informasi Kontak' : 'Contact Information'}</h3>
                  <div className="space-y-4">
                    {currentContent.contact.info.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-blue-600 mt-1">{item.icon}</div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">{language === 'id' ? 'Kirim Pesan' : 'Send Message'}</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder={language === 'id' ? 'Nama Anda' : 'Your Name'}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={language === 'id' ? 'Email Anda' : 'Your Email'}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder={language === 'id' ? 'Pesan Anda' : 'Your Message'}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {language === 'id' ? 'Kirim' : 'Send'}
                    </button>
                  </form>
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