import React, { useState } from 'react';

function CareerPage({ darkMode, language }) {
  const [expandedJob, setExpandedJob] = useState(null);

  const translations = {
    id: {
      title: "Bergabunglah dengan Misi Kami",
      subtitle: "Lestarikan Budaya Melalui Talenta Anda",
      description: "KAYANA adalah startup dengan dampak sosial yang mencari individu-individu kreatif dan bersemangat untuk tumbuh bersama. Kami percaya bahwa setiap talenta memiliki peran penting dalam melestarikan warisan budaya Indonesia.",
      openPositions: "Lowongan Terbuka (Freelance)",
      applyNow: "Lamar Sekarang",
      readMore: "Baca Selengkapnya",
      readLess: "Tutup",
      jobs: [
        {
          title: "Freelance Content Creator & Host",
          shortDesc: "Membuat konten kreatif dan menjadi host untuk tur virtual interaktif",
          fullDesc: "Kami mencari content creator berbakat yang dapat membuat konten engaging untuk platform KAYANA. Tugas meliputi pembuatan script untuk tur virtual, hosting video interaktif, dan mengembangkan konten edukasi tentang budaya Kalimantan Utara. Kandidat ideal memiliki pengalaman di bidang content creation, public speaking, dan memahami budaya Indonesia.",
          requirements: [
            "Pengalaman minimal 2 tahun di bidang content creation",
            "Kemampuan public speaking dan hosting yang baik",
            "Memahami budaya Indonesia, khususnya Kalimantan",
            "Kreatif dan dapat bekerja dalam timeline yang ketat",
            "Memiliki portfolio video/konten yang menarik"
          ]
        },
        {
          title: "Freelance Videographer & Editor",
          shortDesc: "Merekam dan mengedit video berkualitas tinggi untuk tur virtual dan profil pengrajin",
          fullDesc: "Bergabunglah dengan tim produksi KAYANA untuk menciptakan konten video yang memukau. Anda akan bertanggung jawab merekam proses pembuatan kerajinan, mewawancarai pengrajin, dan mengedit video untuk platform tur virtual. Lokasi kerja bervariasi di seluruh Kalimantan Utara.",
          requirements: [
            "Pengalaman minimal 3 tahun di bidang videography",
            "Menguasai software editing video (Premiere Pro, Final Cut, dll)",
            "Memiliki peralatan kamera dan audio profesional",
            "Bersedia melakukan perjalanan ke lokasi remote",
            "Portfolio video dokumenter yang kuat"
          ]
        },
        {
          title: "Freelance Graphic Designer",
          shortDesc: "Merancang material visual untuk platform digital dan marketing",
          fullDesc: "Kami membutuhkan graphic designer yang dapat menerjemahkan kekayaan budaya Kalimantan ke dalam desain visual yang modern dan menarik. Tugas meliputi desain UI/UX untuk platform, material marketing, dan branding untuk produk-produk kerajinan.",
          requirements: [
            "Pengalaman minimal 2 tahun di bidang graphic design",
            "Menguasai Adobe Creative Suite (Photoshop, Illustrator, dll)",
            "Memahami prinsip UI/UX design",
            "Memiliki sense of aesthetic yang kuat",
            "Portfolio yang menunjukkan kemampuan branding dan digital design"
          ]
        }
      ],
      whyJoin: "Mengapa Bergabung dengan KAYANA?",
      benefits: [
        {
          icon: "🎯",
          title: "Misi yang Bermakna",
          description: "Berkontribusi langsung dalam pelestarian budaya Indonesia dan pemberdayaan ekonomi lokal"
        },
        {
          icon: "🌱",
          title: "Pertumbuhan Karir",
          description: "Kesempatan untuk mengembangkan skill di industri yang berkembang pesat"
        },
        {
          icon: "🤝",
          title: "Tim yang Solid",
          description: "Bekerja dengan tim yang passionate dan saling mendukung"
        },
        {
          icon: "🏆",
          title: "Dampak Nyata",
          description: "Melihat hasil kerja yang memberikan dampak positif bagi masyarakat"
        }
      ]
    },
    en: {
      title: "Join Our Mission",
      subtitle: "Preserve Culture Through Your Talent",
      description: "KAYANA is a social impact startup looking for creative and passionate individuals to grow together. We believe that every talent has an important role in preserving Indonesia's cultural heritage.",
      openPositions: "Open Positions (Freelance)",
      applyNow: "Apply Now",
      readMore: "Read More",
      readLess: "Close",
      jobs: [
        {
          title: "Freelance Content Creator & Host",
          shortDesc: "Create creative content and host interactive virtual tours",
          fullDesc: "We're looking for talented content creators who can create engaging content for the KAYANA platform. Tasks include creating scripts for virtual tours, hosting interactive videos, and developing educational content about North Kalimantan culture. Ideal candidates have experience in content creation, public speaking, and understanding of Indonesian culture.",
          requirements: [
            "Minimum 2 years experience in content creation",
            "Good public speaking and hosting skills",
            "Understanding of Indonesian culture, especially Kalimantan",
            "Creative and able to work within tight timelines",
            "Portfolio of attractive video/content"
          ]
        },
        {
          title: "Freelance Videographer & Editor",
          shortDesc: "Record and edit high-quality videos for virtual tours and craftsman profiles",
          fullDesc: "Join KAYANA's production team to create stunning video content. You'll be responsible for recording craft-making processes, interviewing craftsmen, and editing videos for virtual tour platforms. Work locations vary throughout North Kalimantan.",
          requirements: [
            "Minimum 3 years experience in videography",
            "Proficient in video editing software (Premiere Pro, Final Cut, etc.)",
            "Have professional camera and audio equipment",
            "Willing to travel to remote locations",
            "Strong documentary video portfolio"
          ]
        },
        {
          title: "Freelance Graphic Designer",
          shortDesc: "Design visual materials for digital platforms and marketing",
          fullDesc: "We need a graphic designer who can translate Kalimantan's cultural richness into modern and attractive visual designs. Tasks include UI/UX design for platforms, marketing materials, and branding for craft products.",
          requirements: [
            "Minimum 2 years experience in graphic design",
            "Proficient in Adobe Creative Suite (Photoshop, Illustrator, etc.)",
            "Understanding of UI/UX design principles",
            "Strong aesthetic sense",
            "Portfolio showing branding and digital design capabilities"
          ]
        }
      ],
      whyJoin: "Why Join KAYANA?",
      benefits: [
        {
          icon: "🎯",
          title: "Meaningful Mission",
          description: "Directly contribute to preserving Indonesian culture and local economic empowerment"
        },
        {
          icon: "🌱",
          title: "Career Growth",
          description: "Opportunity to develop skills in a rapidly growing industry"
        },
        {
          icon: "🤝",
          title: "Solid Team",
          description: "Work with a passionate and supportive team"
        },
        {
          icon: "🏆",
          title: "Real Impact",
          description: "See work results that have a positive impact on society"
        }
      ]
    }
  };

  const t = translations[language];

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-200 mb-8">
            {t.subtitle}
          </h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>

      {/* Job Openings */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {t.openPositions}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {t.jobs.map((job, index) => (
              <div key={index} className={`job-card rounded-3xl overflow-hidden shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white border border-green-100'}`}>
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                        {job.title}
                      </h3>
                      <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                        {job.shortDesc}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <a 
                        href="mailto:halo.iswansyah@gmail.com" 
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                      >
                        {t.applyNow}
                      </a>
                      <button
                        onClick={() => toggleJob(index)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                      >
                        {expandedJob === index ? t.readLess : t.readMore}
                      </button>
                    </div>
                  </div>
                  
                  {expandedJob === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                        {job.fullDesc}
                      </p>
                      <div>
                        <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                          {language === 'id' ? 'Persyaratan:' : 'Requirements:'}
                        </h4>
                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {t.whyJoin}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.map((benefit, index) => (
              <div key={index} className={`benefit-card text-center p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="text-5xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {language === 'id' ? 'Siap Bergabung?' : 'Ready to Join?'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'id' ? 
              'Kirimkan CV dan portfolio Anda ke email kami. Kami akan menghubungi Anda untuk tahap selanjutnya.' :
              'Send your CV and portfolio to our email. We will contact you for the next stage.'
            }
          </p>
          <a 
            href="mailto:halo.iswansyah@gmail.com" 
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            {language === 'id' ? 'Kirim Lamaran' : 'Send Application'}
          </a>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;