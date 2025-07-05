import React from 'react';
import { Link } from 'react-router-dom';

function MissionPage({ darkMode, language }) {
  const translations = {
    id: {
      title: "Misi Kami",
      subtitle: "Menjembatani Kearifan Lokal dan Pasar Global",
      mission: "Misi kami sederhana: menjadi jembatan antara kearifan lokal dan pasar global. Kami percaya setiap karya tangan memiliki jiwa dan cerita. Melalui teknologi, kami memberikan panggung bagi para maestro pengrajin Kalimantan Utara untuk menceritakan kisah mereka, memastikan setiap ukiran, anyaman, dan goresan batik dihargai selayaknya, bukan hanya sebagai produk, melainkan sebagai warisan budaya yang hidup.",
      vision: "Visi Kami",
      visionText: "Menjadi platform utama yang menghubungkan kekayaan budaya Indonesia dengan dunia global, menciptakan ekosistem berkelanjutan di mana tradisi, teknologi, dan ekonomi bertemu dalam harmoni.",
      values: "Nilai-Nilai Kami",
      valuesList: [
        {
          title: "Otentisitas",
          description: "Setiap karya yang kami tampilkan adalah hasil autentik dari tangan-tangan terampil yang telah mewarisi tradisi turun temurun."
        },
        {
          title: "Keberlanjutan",
          description: "Kami berkomitmen pada praktik berkelanjutan yang menjaga kelestarian alam dan tradisi untuk generasi mendatang."
        },
        {
          title: "Pemberdayaan",
          description: "Setiap langkah kami ditujukan untuk memberdayakan pengrajin lokal dan meningkatkan kesejahteraan ekonomi mereka."
        },
        {
          title: "Inovasi",
          description: "Kami menggunakan teknologi terdepan untuk melestarikan dan mempromosikan warisan budaya dengan cara yang relevan dan menarik."
        }
      ],
      story: "Cerita Lahirnya KAYANA",
      storyText: "KAYANA lahir dari keprihatinan melihat kekayaan budaya Kalimantan Utara yang begitu melimpah namun kurang dikenal dunia luar. Kami menyaksikan para maestro pengrajin yang memiliki keahlian luar biasa, namun terbatas aksesnya ke pasar yang lebih luas. Di sisi lain, konsumen modern semakin mencari produk yang autentik, bermakna, dan memiliki cerita di baliknya.",
      impact: "Dampak yang Telah Kami Ciptakan",
      impactStats: [
        {
          number: "150+",
          label: "Pengrajin Bermitra"
        },
        {
          number: "5000+",
          label: "Karya Terjual"
        },
        {
          number: "50+",
          label: "Desa Tersentuh"
        },
        {
          number: "85%",
          label: "Peningkatan Pendapatan"
        }
      ]
    },
    en: {
      title: "Our Mission",
      subtitle: "Bridging Local Wisdom and Global Markets",
      mission: "Our mission is simple: to be a bridge between local wisdom and global markets. We believe every handcrafted work has a soul and story. Through technology, we provide a stage for North Kalimantan master craftsmen to tell their stories, ensuring every carving, weaving, and batik stroke is valued properly, not just as products, but as living cultural heritage.",
      vision: "Our Vision",
      visionText: "To be the leading platform connecting Indonesia's cultural richness with the global world, creating a sustainable ecosystem where tradition, technology, and economy meet in harmony.",
      values: "Our Values",
      valuesList: [
        {
          title: "Authenticity",
          description: "Every work we showcase is an authentic result from skilled hands that have inherited traditions passed down through generations."
        },
        {
          title: "Sustainability",
          description: "We are committed to sustainable practices that preserve nature and traditions for future generations."
        },
        {
          title: "Empowerment",
          description: "Every step we take is aimed at empowering local craftsmen and improving their economic welfare."
        },
        {
          title: "Innovation",
          description: "We use cutting-edge technology to preserve and promote cultural heritage in relevant and engaging ways."
        }
      ],
      story: "The Birth Story of KAYANA",
      storyText: "KAYANA was born from concern about North Kalimantan's abundant cultural richness that is not well known to the outside world. We witnessed master craftsmen with extraordinary skills, but limited access to wider markets. On the other hand, modern consumers are increasingly looking for products that are authentic, meaningful, and have stories behind them.",
      impact: "Impact We Have Created",
      impactStats: [
        {
          number: "150+",
          label: "Partner Craftsmen"
        },
        {
          number: "5000+",
          label: "Works Sold"
        },
        {
          number: "50+",
          label: "Villages Reached"
        },
        {
          number: "85%",
          label: "Income Increase"
        }
      ]
    }
  };

  const t = translations[language];

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
            {t.mission}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.vision}
            </h2>
            <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.visionText}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {t.values}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.valuesList.map((value, index) => (
              <div key={index} className={`value-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                      {value.title}
                    </h3>
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.story}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {t.storyText}
                </p>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg"
                  alt="Craftsman story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            {t.impact}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {t.impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">
                  {stat.number}
                </div>
                <div className="text-xl text-green-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {language === 'id' ? 'Bergabunglah dalam Misi Kami' : 'Join Our Mission'}
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
            {language === 'id' ? 
              'Bersama-sama kita dapat melestarikan warisan budaya dan memberdayakan pengrajin lokal' :
              'Together we can preserve cultural heritage and empower local craftsmen'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partnership" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
              {language === 'id' ? 'Jadi Partner' : 'Become Partner'}
            </Link>
            <Link to="/collection" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              {language === 'id' ? 'Dukung Pengrajin' : 'Support Craftsmen'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissionPage;