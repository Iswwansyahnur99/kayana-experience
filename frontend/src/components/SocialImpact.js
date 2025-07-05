import React from 'react';
import { Link } from 'react-router-dom';

function SocialImpact({ darkMode, language }) {
  const translations = {
    id: {
      title: "Dampak Sosial",
      subtitle: "Setiap Pembelian Adalah Apresiasi Tulus",
      description: "Setiap pembelian Anda di KAYANA adalah sebuah apresiasi tulus yang berdampak langsung. Anda tidak hanya memiliki sebuah karya seni, tetapi juga turut serta dalam siklus kebaikan: meningkatkan kesejahteraan para pengrajin, menjaga api tradisi agar tak padam, dan memberdayakan ekonomi lokal di jantung Kalimantan. Inilah dampak nyata dari sebuah cerita yang Anda pilih untuk dukung.",
      economicImpact: "Dampak Ekonomi",
      economicDesc: "Memberdayakan ekonomi lokal dan meningkatkan kesejahteraan pengrajin",
      economicStats: [
        {
          number: "Rp 2.5M",
          label: "Pendapatan Rata-rata per Pengrajin per Bulan"
        },
        {
          number: "300%",
          label: "Peningkatan Penjualan Dibanding Sebelumnya"
        },
        {
          number: "1,200",
          label: "Keluarga yang Terbantu"
        }
      ],
      culturalImpact: "Pelestarian Budaya",
      culturalDesc: "Menjaga tradisi tetap hidup dan relevan di era modern",
      culturalStats: [
        {
          number: "25",
          label: "Teknik Tradisional yang Didokumentasi"
        },
        {
          number: "8",
          label: "Motif Langka yang Dilestarikan"
        },
        {
          number: "15",
          label: "Workshop Pelatihan per Bulan"
        }
      ],
      environmentalImpact: "Dampak Lingkungan",
      environmentalDesc: "Mendukung praktik berkelanjutan dan konservasi alam",
      environmentalStats: [
        {
          number: "500",
          label: "Hektar Hutan yang Dikonservasi"
        },
        {
          number: "100%",
          label: "Bahan Baku Berkelanjutan"
        },
        {
          number: "0",
          label: "Limbah Kimia Berbahaya"
        }
      ],
      stories: "Cerita Perubahan",
      storyList: [
        {
          name: "Pak Ahmad",
          location: "Bulungan",
          image: "https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg",
          before: "Penghasilan Rp 800rb/bulan",
          after: "Penghasilan Rp 2.5jt/bulan",
          story: "Sebelum bergabung dengan KAYANA, Pak Ahmad hampir menyerah dari profesi mengukir karena persaingan dengan produk pabrikan. Kini, karyanya dihargai oleh kolektor dari seluruh Indonesia."
        },
        {
          name: "Ibu Dayang",
          location: "Malinau", 
          image: "https://images.unsplash.com/photo-1707716312213-b1dee92f147a",
          before: "Kesulitan menjual produk",
          after: "Pesanan sampai 3 bulan ke depan",
          story: "Ibu Dayang dulu hanya bisa menjual anyaman rotan di pasar lokal dengan harga sangat murah. Sekarang, karyanya dipesan khusus oleh hotel-hotel mewah di Jakarta."
        },
        {
          name: "Sanggar Tarakan Lestari",
          location: "Tarakan",
          image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
          before: "5 anggota aktif",
          after: "25 anggota aktif",
          story: "Kolektif yang sempat hampir bubar ini kini berkembang pesat. Mereka bahkan membuka program pelatihan batik untuk generasi muda di Tarakan."
        }
      ],
      partnership: "Program Kemitraan",
      partnershipDesc: "Bekerja sama dengan berbagai pihak untuk menciptakan dampak yang lebih besar",
      programs: [
        {
          title: "Program CSR Perusahaan",
          description: "Kemitraan dengan perusahaan untuk program tanggung jawab sosial yang bermakna",
          icon: "🏢"
        },
        {
          title: "Kemitraan Pendidikan",
          description: "Bekerja sama dengan sekolah dan universitas untuk program edukasi budaya",
          icon: "🎓"
        },
        {
          title: "Kolaborasi NGO",
          description: "Bersinergi dengan organisasi non-profit untuk pemberdayaan masyarakat",
          icon: "🤝"
        },
        {
          title: "Dukungan Pemerintah",
          description: "Mendapat dukungan dari Dekranasda dan Dinas Pariwisata",
          icon: "🏛️"
        }
      ]
    },
    en: {
      title: "Social Impact",
      subtitle: "Every Purchase is a Sincere Appreciation",
      description: "Every purchase you make at KAYANA is a sincere appreciation with direct impact. You not only own a work of art, but also participate in a cycle of goodness: improving craftsmen's welfare, keeping the flame of tradition alive, and empowering the local economy in the heart of Kalimantan. This is the real impact of a story you choose to support.",
      economicImpact: "Economic Impact",
      economicDesc: "Empowering local economy and improving craftsmen's welfare",
      economicStats: [
        {
          number: "Rp 2.5M",
          label: "Average Income per Craftsman per Month"
        },
        {
          number: "300%",
          label: "Sales Increase Compared to Before"
        },
        {
          number: "1,200",
          label: "Families Helped"
        }
      ],
      culturalImpact: "Cultural Preservation",
      culturalDesc: "Keeping traditions alive and relevant in the modern era",
      culturalStats: [
        {
          number: "25",
          label: "Traditional Techniques Documented"
        },
        {
          number: "8",
          label: "Rare Motifs Preserved"
        },
        {
          number: "15",
          label: "Training Workshops per Month"
        }
      ],
      environmentalImpact: "Environmental Impact",
      environmentalDesc: "Supporting sustainable practices and nature conservation",
      environmentalStats: [
        {
          number: "500",
          label: "Hectares of Forest Conserved"
        },
        {
          number: "100%",
          label: "Sustainable Raw Materials"
        },
        {
          number: "0",
          label: "Hazardous Chemical Waste"
        }
      ],
      stories: "Stories of Change",
      storyList: [
        {
          name: "Mr. Ahmad",
          location: "Bulungan",
          image: "https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg",
          before: "Income Rp 800k/month",
          after: "Income Rp 2.5M/month",
          story: "Before joining KAYANA, Mr. Ahmad almost gave up his carving profession due to competition with factory products. Now, his works are valued by collectors from all over Indonesia."
        },
        {
          name: "Mrs. Dayang",
          location: "Malinau",
          image: "https://images.unsplash.com/photo-1707716312213-b1dee92f147a",
          before: "Difficulty selling products",
          after: "Orders up to 3 months ahead",
          story: "Mrs. Dayang used to only sell rattan weaving at local markets at very cheap prices. Now, her works are specially ordered by luxury hotels in Jakarta."
        },
        {
          name: "Sanggar Tarakan Lestari",
          location: "Tarakan",
          image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
          before: "5 active members",
          after: "25 active members",
          story: "This collective, which was almost dissolved, is now thriving. They even opened batik training programs for young people in Tarakan."
        }
      ],
      partnership: "Partnership Programs",
      partnershipDesc: "Working with various parties to create greater impact",
      programs: [
        {
          title: "Corporate CSR Program",
          description: "Partnership with companies for meaningful social responsibility programs",
          icon: "🏢"
        },
        {
          title: "Educational Partnership",
          description: "Collaborating with schools and universities for cultural education programs",
          icon: "🎓"
        },
        {
          title: "NGO Collaboration",
          description: "Synergizing with non-profit organizations for community empowerment",
          icon: "🤝"
        },
        {
          title: "Government Support",
          description: "Getting support from Dekranasda and Tourism Office",
          icon: "🏛️"
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
            {t.description}
          </p>
        </div>
      </section>

      {/* Economic Impact */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.economicImpact}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.economicDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.economicStats.map((stat, index) => (
              <div key={index} className={`stat-card text-center p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                  {stat.number}
                </div>
                <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.culturalImpact}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.culturalDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.culturalStats.map((stat, index) => (
              <div key={index} className={`stat-card text-center p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-amber-50 to-orange-50'}`}>
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
                  {stat.number}
                </div>
                <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-amber-700'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.environmentalImpact}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.environmentalDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.environmentalStats.map((stat, index) => (
              <div key={index} className={`stat-card text-center p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-cyan-50'}`}>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                  {stat.number}
                </div>
                <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.stories}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {t.storyList.map((story, index) => (
              <div key={index} className={`story-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {story.name}
                  </h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                    {story.location}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className={`text-center p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-red-50'}`}>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-red-600'}`}>
                        {language === 'id' ? 'Sebelum' : 'Before'}
                      </div>
                      <div className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-red-700'}`}>
                        {story.before}
                      </div>
                    </div>
                    <div className={`text-center p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                        {language === 'id' ? 'Sesudah' : 'After'}
                      </div>
                      <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-green-700'}`}>
                        {story.after}
                      </div>
                    </div>
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {story.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.partnership}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.partnershipDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.programs.map((program, index) => (
              <div key={index} className={`program-card text-center p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
                <div className="text-5xl mb-4">
                  {program.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {program.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {language === 'id' ? 'Bergabunglah Menciptakan Dampak' : 'Join in Creating Impact'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'id' ? 
              'Setiap langkah kecil Anda menciptakan perubahan besar bagi para pengrajin dan budaya Kalimantan' :
              'Every small step you take creates big changes for craftsmen and Kalimantan culture'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collection" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              {language === 'id' ? 'Beli Karya Pengrajin' : 'Buy Craftsmen Works'}
            </Link>
            <Link to="/partnership" className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300">
              {language === 'id' ? 'Jadi Partner' : 'Become Partner'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialImpact;