'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiCalendar, FiAward, FiBriefcase, FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';
import { FaLaravel, FaReact, FaVuejs, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNestjs, SiExpress, SiSpringboot, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbApi, TbBrandPython } from 'react-icons/tb';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const skills = [
  { name: 'Laravel', icon: <FaLaravel className="text-red-500" />, category: 'backend' },
  { name: 'NestJS', icon: <SiNestjs className="text-red-500" />, category: 'backend' },
  { name: 'ExpressJS', icon: <SiExpress className="text-gray-800" />, category: 'backend' },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" />, category: 'backend' },
  { name: 'NodeJS', icon: <FaNodeJs className="text-green-600" />, category: 'backend' },
  { name: 'ReactJS', icon: <FaReact className="text-blue-500" />, category: 'frontend' },
  { name: 'VueJS', icon: <FaVuejs className="text-green-500" />, category: 'frontend' },
  { name: 'AngularJS', icon: <FaAngular className="text-red-500" />, category: 'frontend' },
  { name: 'NextJS', icon: <SiNextdotjs className="text-black" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, category: 'frontend' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" />, category: 'database' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, category: 'database' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, category: 'database' },
  { name: 'REST API', icon: <TbApi className="text-purple-500" />, category: 'api' },
  { name: 'Machine Learning', icon: <TbBrandPython className="text-yellow-500" />, category: 'ai' },
];

const experiences = [
  {
    role: 'AI Mastery (Study Independent Kampus Merdeka)',
    company: 'Orbit Future Academy',
    period: 'Aug 2022 – Dec 2022',
    description: 'Studied the fundamentals of Machine Learning, Artificial Intelligence, Computer Vision, Data Science, and Natural Language Processing (NLP). Collaborated in a team to complete a final project, applying AI concepts to solve real-world problems.',
    icon: <FiCpu />
  },
  {
    role: 'Web Developer (Kampus Merdeka Internship)',
    company: 'PT Kalbe Farma',
    period: 'Feb 2023 – Jun 2023',
    description: 'Developed a web-based system to manage the training process, from registration to data collection, replacing the previous manual workflow. Built using Laravel 10 and jQuery, improving efficiency and data accuracy.',
    icon: <FiCode />
  },
  {
    role: 'Frontend Developer (Independent Internship)',
    company: 'CV Kasih Inovasi Teknologi',
    period: 'Aug 2023 – Dec 2023',
    description: 'Developed the Tryout Academy website, enabling teachers to create test questions and students to purchase and take exams online. Utilized Laravel 10 and Vue 3 to enhance user experience and platform functionality.',
    icon: <FiLayers />
  }
];

const projects = [
  {
    title: 'Detection Sit Up',
    period: 'Jan 2024 – Jun 2024',
    description: 'This project focused on developing a web application to help users improve their sit-up performance. By leveraging Mediapipe and OpenCV for real-time motion analysis, the application detects incorrect sit-up movements and provides feedback to guide users in performing exercises correctly. This project was part of my thesis and aimed at using computer vision techniques to enhance fitness training.',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'Flask']
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-indigo-600"
        >
          MYT
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-indigo-600"
            >
              MYT
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-1 rounded-full transition-colors ${activeSection === section.id ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:text-indigo-600'}`}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 text-left rounded-lg transition-colors ${activeSection === section.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {section.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 container mx-auto px-6">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Mochamad Yuda <span className="text-indigo-600">Trinurais</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Fullstack Developer</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                I build scalable, efficient, and user-friendly web applications with a focus on clean code and performance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition-colors"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-80 md:h-96 bg-indigo-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-400 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-indigo-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-indigo-200 flex items-center justify-center text-6xl text-indigo-600 font-bold">
                      MYT
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <FaReact className="text-blue-500 text-3xl" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <FaLaravel className="text-red-500 text-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About <span className="text-indigo-600">Me</span></h2>
              <p className="text-gray-600 mb-6">
                I am a Full Stack Web Developer with expertise in backend and frontend development, specializing in Laravel, React.js, SQL, and REST APIs. I enjoy building scalable, efficient, and user-friendly web applications, focusing on clean code, performance, and usability.
              </p>
              <p className="text-gray-600 mb-8">
                With hands-on experience in both database management and UI development, I strive to create seamless and well-integrated solutions that enhance user experience and business processes.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <FiCalendar className="text-indigo-600 mr-2" />
                  <span className="text-gray-600">November 23, 1999</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="text-indigo-600 mr-2" />
                  <span className="text-gray-600">East Java, Indonesia</span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-indigo-600 mr-2" />
                  <span className="text-gray-600">mochamadyudatrinurais@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-indigo-600 mr-2" />
                  <span className="text-gray-600">085179945123</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center"
                >
                  <FiLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Wintec-Yuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center"
                >
                  <FiGithub className="text-xl" />
                </motion.a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <FiAward className="text-indigo-600 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Universitas Nusantara PGRI Kediri</h4>
                    <p className="text-gray-600">Bachelor's Degree in Informatics Engineering (S.Kom)</p>
                    <p className="text-gray-500 text-sm">2020 – 2024 | GPA: 3.84</p>
                    <p className="text-gray-600 mt-2">
                      During my studies, I gained a solid foundation in software development, databases, and REST API implementation. I worked on several projects involving web and mobile applications, strengthening my problem-solving skills and teamwork abilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">My <span className="text-indigo-600">Skills</span></h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Here are the technologies and tools I've worked with across various domains of web development.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['backend', 'frontend', 'database', 'api', 'ai'].map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {category === 'backend' && <FiCode className="text-indigo-600 text-xl mr-2" />}
                    {category === 'frontend' && <FiLayers className="text-indigo-600 text-xl mr-2" />}
                    {category === 'database' && <FiDatabase className="text-indigo-600 text-xl mr-2" />}
                    {category === 'api' && <TbApi className="text-indigo-600 text-xl mr-2" />}
                    {category === 'ai' && <FiCpu className="text-indigo-600 text-xl mr-2" />}
                    <h3 className="font-bold text-gray-800 capitalize">{category} Skills</h3>
                  </div>
                  <div className="space-y-3">
                    {skills
                      .filter(skill => skill.category === category)
                      .map(skill => (
                        <div key={skill.name} className="flex items-center">
                          <div className="mr-3">
                            {skill.icon}
                          </div>
                          <span className="text-gray-700">{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-4">
                {['Apple devices', 'Movies', 'Games', 'Fitness', 'Technology'].map((hobby) => (
                  <motion.div
                    key={hobby}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {hobby}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Work <span className="text-indigo-600">Experience</span></h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              My professional journey and the roles I've undertaken in the tech industry.
            </p>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="font-bold text-gray-800">{exp.role}</h3>
                        <span className="text-indigo-600 text-sm">{exp.period}</span>
                      </div>
                      <h4 className="text-gray-600 font-medium mb-3">{exp.company}</h4>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Featured <span className="text-indigo-600">Projects</span></h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Some of my notable projects that showcase my skills and expertise.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <FiBriefcase className="text-white text-6xl opacity-30" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-indigo-600 text-white">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-8">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiMail className="mr-4 text-xl" />
                    <span>mochamadyudatrinurais@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="mr-4 text-xl" />
                    <span>085179945123</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="mr-4 text-xl" />
                    <span>East Java, Indonesia</span>
                  </div>
                </div>
                <div className="mt-8 flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white text-indigo-600 rounded-full flex items-center justify-center"
                  >
                    <FiLinkedin className="text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Wintec-Yuda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white text-indigo-600 rounded-full flex items-center justify-center"
                  >
                    <FiGithub className="text-xl" />
                  </motion.a>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-2xl font-bold mb-4">Mochamad Yuda Trinurais</div>
            <p className="mb-6 max-w-lg">Fullstack Developer creating efficient and user-friendly web applications.</p>
            <div className="flex space-x-4 mb-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center"
              >
                <FiLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Wintec-Yuda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center"
              >
                <FiGithub className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:mochamadyudatrinurais@gmail.com"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center"
              >
                <FiMail className="text-xl" />
              </motion.a>
            </div>
            <div className="border-t border-gray-700 w-full max-w-xs pt-6">
              <p>© {new Date().getFullYear()} Mochamad Yuda Trinurais. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}