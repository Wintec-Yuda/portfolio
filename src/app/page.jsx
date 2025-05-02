'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiCode, FiSmartphone, FiMail, FiPhone, FiUsers, FiAward, FiClock, FiGift, FiLayers } from 'react-icons/fi';
import { TfiRocket } from 'react-icons/tfi';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGmail, SiGithub, SiVercel } from 'react-icons/si';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PortDev
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Fitur
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Harga
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contoh
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Kontak
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Pesan Sekarang
              </motion.button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated with Promo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Tingkatkan Personal Branding</span> dengan Portfolio Profesional
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                🔥 Kami mengubah CV Anda menjadi website portfolio elegan dalam 1-2 jam! Tampil lebih meyakinkan di mata rekruter & klien.
              </p>
              
              {/* Promo Badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  <FiClock className="mr-1" /> Bisa ditunggu (1-2 jam)
                </div>
                <div className="flex items-center bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm">
                  <FiLayers className="mr-1" /> Terima beres, tanpa ribet
                </div>
                <div className="flex items-center bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                  <FiGift className="mr-1" /> Free domain 1 tahun
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Buat Sekarang (1-2 Jam Siap)
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all"
                >
                  Lihat Contoh Portfolio
                </motion.button>
              </div>
            </motion.div>

            {/* Rest of hero section unchanged */}
          </div>
        </div>
      </section>

      {/* New Promo Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border border-blue-100"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  💻 Cocok Untuk Job Seeker, Freelancer & Profesional
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Tunjukkan keahlian Anda dengan cara modern dan dapatkan lebih banyak peluang karir!
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
                >
                  👉 Hubungi Kami Sekarang
                </motion.button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <SiGmail className="text-4xl text-red-500" />, text: "Akun Gmail Profesional" },
                  { icon: <SiGithub className="text-4xl text-gray-800" />, text: "GitHub Portfolio" },
                  { icon: <SiVercel className="text-4xl text-black" />, text: "Deployment Vercel" },
                  { icon: <FiGift className="text-4xl text-blue-500" />, text: "Domain Gratis 1 Tahun" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center"
                  >
                    {item.icon}
                    <span className="mt-2 text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updated Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kenapa Portfolio Online Penting?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Di era digital, CV biasa sudah tidak cukup. Portfolio online membantu Anda:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiUsers className="w-6 h-6 text-blue-600" />,
                title: "Meningkatkan Kredibilitas",
                desc: "90% rekruter lebih memilih kandidat dengan portfolio online"
              },
              {
                icon: <TfiRocket className="w-6 h-6 text-purple-600" />,
                title: "Proses Cepat 1-2 Jam",
                desc: "Website siap pakai dalam waktu singkat, tanpa ribet"
              },
              {
                icon: <FiClock className="w-6 h-6 text-blue-600" />,
                title: "All-in-One Package",
                desc: "Sudah termasuk domain, hosting, email profesional, dan deployment"
              },
              {
                icon: <FiSmartphone className="w-6 h-6 text-purple-600" />,
                title: "Mobile Friendly",
                desc: "Tampilan optimal di semua perangkat termasuk smartphone"
              },
              {
                icon: <FiAward className="w-6 h-6 text-blue-600" />,
                title: "Free Revisi",
                desc: "2x revisi minor gratis setelah website selesai"
              },
              {
                icon: <FiGift className="w-6 h-6 text-purple-600" />,
                title: "Bonus Spesial",
                desc: "Gratis konsultasi personal branding selama 1 bulan"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            🚀 Siap Tingkatkan Personal Branding Anda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Kirim CV Anda sekarang dan dapatkan website portfolio profesional dalam 1-2 jam!
            <br />
            <span className="font-semibold">Bonus:</span> Free Domain + Akun Profesional
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              📩 Kirim CV Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              💬 Chat Via WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <FiUsers className="w-8 h-8 mx-auto text-blue-600" />, number: "250+", label: "Klien Puas" },
              { icon: <FiCode className="w-8 h-8 mx-auto text-purple-600" />, number: "3 Hari", label: "Pengerjaan" },
              { icon: <FiAward className="w-8 h-8 mx-auto text-blue-600" />, number: "100%", label: "Original Design" },
              { icon: <FiSmartphone className="w-8 h-8 mx-auto text-purple-600" />, number: "Responsif", label: "Semua Device" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <div className="mb-3">{stat.icon}</div>
                <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan Portfolio Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Website portfolio yang kami buat dilengkapi dengan fitur-fitur modern untuk menampilkan karya Anda secara profesional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiSmartphone className="w-6 h-6 text-blue-600" />,
                title: "Responsive Design",
                desc: "Tampilan optimal di semua perangkat, dari desktop hingga smartphone"
              },
              {
                icon: <TfiRocket className="w-6 h-6 text-purple-600" />,
                title: "Loading Super Cepat",
                desc: "Optimasi performa untuk kecepatan loading terbaik"
              },
              {
                icon: <FiCode className="w-6 h-6 text-blue-600" />,
                title: "Kode Berkualitas",
                desc: "Struktur kode yang rapi dan mudah dikembangkan"
              },
              {
                icon: <FiMail className="w-6 h-6 text-purple-600" />,
                title: "Form Kontak",
                desc: "Formulir kontak langsung ke email Anda"
              },
              {
                icon: <FiUsers className="w-6 h-6 text-blue-600" />,
                title: "SEO Friendly",
                desc: "Optimasi dasar SEO untuk visibilitas di mesin pencari"
              },
              {
                icon: <FiAward className="w-6 h-6 text-purple-600" />,
                title: "Gratis Revisi",
                desc: "2x revisi minor gratis setelah website selesai"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Teknologi Modern</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami menggunakan teknologi terbaru untuk membangun website portfolio yang cepat, aman, dan mudah dikembangkan.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <FaReact className="text-5xl text-blue-500" />, name: "React" },
              { icon: <SiNextdotjs className="text-5xl text-gray-900" />, name: "Next.js" },
              { icon: <SiTailwindcss className="text-5xl text-cyan-500" />, name: "Tailwind CSS" },
              { icon: <SiTypescript className="text-5xl text-blue-600" />, name: "TypeScript" },
              { icon: <FaNodeJs className="text-5xl text-green-600" />, name: "Node.js" },
              { icon: <FaFigma className="text-5xl text-purple-600" />, name: "Figma" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl"
              >
                {tech.icon}
                <span className="mt-3 text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Harga</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan Anda. Harga terjangkau dengan kualitas premium.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "1.499K",
                desc: "Cocok untuk portfolio sederhana",
                features: [
                  "1 Halaman Utama",
                  "Desain Responsif",
                  "Form Kontak",
                  "Optimasi SEO Dasar",
                  "Revisi 1x"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "2.499K",
                desc: "Solusi lengkap untuk profesional",
                features: [
                  "3-5 Halaman",
                  "Animasi Modern",
                  "Integrasi Media Sosial",
                  "Optimasi SEO Lengkap",
                  "Revisi 2x",
                  "Hosting 1 Tahun Gratis"
                ],
                popular: true
              },
              {
                name: "Premium",
                price: "3.999K",
                desc: "Solusi premium dengan fitur lengkap",
                features: [
                  "5+ Halaman",
                  "CMS Kustom",
                  "Blog Integrasi",
                  "Analytics Dashboard",
                  "Revisi Unlimited",
                  "Hosting & Domain 1 Tahun",
                  "Support Prioritas"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-xl shadow-sm overflow-hidden ${plan.popular ? "border-2 border-blue-500" : "border border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.desc}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">Rp{plan.price}</span>
                    <span className="text-gray-600">/project</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium ${plan.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-white border border-gray-300 text-gray-700 hover:border-blue-500"}`}
                  >
                    Pilih Paket
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contoh Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beberapa contoh website portfolio yang telah kami buat untuk klien.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={`/portfolio-example-${item}.jpg`} 
                    alt={`Portfolio Example ${item}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">Portfolio {item}</h3>
                      <button className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Siap Membuat Portfolio Profesional Anda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Hubungi kami sekarang dan dapatkan website portfolio impian dalam waktu singkat!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Pesan Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Konsultasi Gratis
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
              <p className="text-lg text-gray-600 mb-8">
                Punya pertanyaan atau ingin memulai proyek portfolio Anda? Isi formulir atau hubungi kami langsung.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMail className="text-blue-600 mt-1 mr-4 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:hello@portdev.com" className="text-gray-600 hover:text-blue-600 transition-colors">hello@portdev.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="text-blue-600 mt-1 mr-4 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telepon/WA</h3>
                    <a href="tel:+6281234567890" className="text-gray-600 hover:text-blue-600 transition-colors">+62 812-3456-7890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="text-blue-600 mt-1 mr-4 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Media Sosial</h3>
                    <div className="flex space-x-4 mt-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Instagram</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">LinkedIn</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="0812-3456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Ceritakan kebutuhan portfolio Anda..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Kirim Pesan
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PortDev</h3>
              <p className="text-gray-400">
                Jasa pembuatan website portfolio profesional dengan desain modern dan performa optimal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Harga</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Contoh</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pembuatan Website</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Konsultasi Gratis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <FiMail className="mt-1 mr-3" />
                  <span>hello@portdev.com</span>
                </li>
                <li className="flex items-start">
                  <FiPhone className="mt-1 mr-3" />
                  <span>+62 812-3456-7890</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PortDev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}