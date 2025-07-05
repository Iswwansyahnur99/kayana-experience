import React from 'react';
import { Link } from 'react-router-dom';

function MaestroDirectory({ darkMode, language }) {
  const translations = {
    id: {
      title: "Para Maestro",
      subtitle: "Penjaga Tradisi dan Warisan Budaya",
      description: "Temui para maestro pengrajin yang telah mendedikasikan hidup mereka untuk melestarikan keahlian tradisional. Setiap tangan terampil memiliki cerita yang menginspirasi.",
      viewProfile: "Lihat Profil",
      seeWorks: "Lihat Karya",
      specialty: "Keahlian",
      experience: "Pengalaman",
      location: "Lokasi",
      stats: {
        masters: "Maestro Aktif",
        regions: "Daerah",
        techniques: "Teknik Tradisional",
        years: "Tahun Pengalaman"
      }
    },
    en: {
      title: "The Masters",
      subtitle: "Guardians of Tradition and Cultural Heritage",
      description: "Meet the master craftsmen who have dedicated their lives to preserving traditional skills. Every skilled hand has an inspiring story.",
      viewProfile: "View Profile",
      seeWorks: "See Works",
      specialty: "Specialty",
      experience: "Experience",
      location: "Location",
      stats: {
        masters: "Active Masters",
        regions: "Regions",
        techniques: "Traditional Techniques",
        years: "Years of Experience"
      }
    }
  };

  const t = translations[language];

  const masters = [
    {
      id: 'budi',
      name: 'Bapak Ahmad',
      title: language === 'id' ? 'Sang Maestro Ukir dari Bulungan' : 'The Master Carver from Bulungan',
      location: 'Bulungan',
      specialty: language === 'id' ? 'Ukiran Kayu Tradisional' : 'Traditional Wood Carving',
      experience: '30+',
      image: 'https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg',
      quote: language === 'id' ? 
        'Setiap serat kayu memiliki cerita. Tugas saya adalah merajutnya menjadi karya yang bermakna.' :
        'Every wood fiber has a story. My job is to weave it into meaningful works.',
      worksCount: 150,
      techniques: language === 'id' ? 
        ['Ukiran Relief', 'Patung Tradisional', 'Perisai Dayak'] :
        ['Relief Carving', 'Traditional Sculpture', 'Dayak Shield']
    },
    {
      id: 'sari',
      name: 'Ibu Dayang',
      title: language === 'id' ? 'Jemari Terampil di Balik Anyaman Rotan Malinau' : 'Skilled Hands Behind Malinau Rattan Weaving',
      location: 'Malinau',
      specialty: language === 'id' ? 'Anyaman Rotan' : 'Rattan Weaving',
      experience: '25+',
      image: 'https://images.unsplash.com/photo-1707716312213-b1dee92f147a',
      quote: language === 'id' ? 
        'Rotan adalah anugerah alam. Setiap anyaman yang saya buat adalah bentuk syukur kepada hutan.' :
        'Rattan is a gift from nature. Every weave I make is a form of gratitude to the forest.',
      worksCount: 200,
      techniques: language === 'id' ? 
        ['Anyaman Keranjang', 'Topi Tradisional', 'Vas Dekoratif'] :
        ['Basket Weaving', 'Traditional Hats', 'Decorative Vases']
    },
    {
      id: 'joko',
      name: 'Sanggar Tarakan Lestari',
      title: language === 'id' ? 'Kolektif Ibu-Ibu Penjaga Batik Pesisir' : 'Collective of Mothers Preserving Coastal Batik',
      location: 'Tarakan',
      specialty: language === 'id' ? 'Batik Pesisir' : 'Coastal Batik',
      experience: '15+',
      image: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0',
      quote: language === 'id' ? 
        'Batik adalah warisan leluhur yang harus dijaga. Setiap motif adalah doa untuk kelestarian alam pesisir.' :
        'Batik is an ancestral heritage that must be preserved. Every motif is a prayer for coastal nature preservation.',
      worksCount: 300,
      techniques: language === 'id' ? 
        ['Motif Bakau', 'Motif Kepiting', 'Batik Tulis Pesisir'] :
        ['Mangrove Motifs', 'Crab Motifs', 'Coastal Hand-drawn Batik']
    },
    {
      id: 'siti',
      name: 'Ibu Siti Aminah',
      title: language === 'id' ? 'Maestro Tenun Ikat Bulungan' : 'Master of Bulungan Ikat Weaving',
      location: 'Bulungan',
      specialty: language === 'id' ? 'Tenun Ikat' : 'Ikat Weaving',
      experience: '35+',
      image: 'https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg',
      quote: language === 'id' ? 
        'Setiap benang yang saya tenun adalah doa untuk keluarga dan masyarakat yang saya cintai.' :
        'Every thread I weave is a prayer for the family and community I love.',
      worksCount: 180,
      techniques: language === 'id' ? 
        ['Tenun Ikat Tradisional', 'Kain Upacara', 'Selendang Adat'] :
        ['Traditional Ikat Weaving', 'Ceremonial Cloth', 'Traditional Scarves']
    },
    {
      id: 'budi2',
      name: 'Pak Budi Setiawan',
      title: language === 'id' ? 'Pembuat Instrumen Musik Tradisional' : 'Traditional Musical Instrument Maker',
      location: 'Malinau',
      specialty: language === 'id' ? 'Alat Musik Tradisional' : 'Traditional Musical Instruments',
      experience: '20+',
      image: 'https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg',
      quote: language === 'id' ? 
        'Musik adalah jiwa budaya. Melalui instrumen yang saya buat, jiwa leluhur tetap hidup.' :
        'Music is the soul of culture. Through the instruments I make, the spirit of ancestors lives on.',
      worksCount: 120,
      techniques: language === 'id' ? 
        ['Sape Dayak', 'Gendang Tradisional', 'Seruling Bambu'] :
        ['Dayak Sape', 'Traditional Drums', 'Bamboo Flutes']
    },
    {
      id: 'ratna',
      name: 'Ibu Ratna Sari',
      title: language === 'id' ? 'Pengrajin Perhiasan Tradisional' : 'Traditional Jewelry Craftsman',
      location: 'Tarakan',
      specialty: language === 'id' ? 'Perhiasan Tradisional' : 'Traditional Jewelry',
      experience: '18+',
      image: 'https://images.unsplash.com/photo-1707716312213-b1dee92f147a',
      quote: language === 'id' ? 
        'Setiap manik dan logam yang saya bentuk membawa makna spiritual dan kekuatan bagi pemakainya.' :
        'Every bead and metal I shape carries spiritual meaning and strength for the wearer.',
      worksCount: 250,
      techniques: language === 'id' ? 
        ['Kalung Manik Dayak', 'Gelang Tembaga', 'Anting Tradisional'] :
        ['Dayak Bead Necklaces', 'Copper Bracelets', 'Traditional Earrings']
    }
  ];

  const stats = [
    { number: '150+', label: t.stats.masters },
    { number: '12', label: t.stats.regions },
    { number: '25+', label: t.stats.techniques },
    { number: '400+', label: t.stats.years }
  ];

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

      {/* Stats Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
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

      {/* Masters Grid */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {masters.map((master, index) => (
              <div key={master.id} className={`master-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="md:flex">
                  <div className="md:w-1/3 aspect-square md:aspect-auto">
                    <img 
                      src={master.image}
                      alt={master.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                      {master.name}
                    </h3>
                    <h4 className={`text-lg mb-4 ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                      {master.title}
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className={`text-xs uppercase tracking-wide font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                          {t.location}
                        </div>
                        <div className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-green-800'}`}>
                          {master.location}
                        </div>
                      </div>
                      <div>
                        <div className={`text-xs uppercase tracking-wide font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                          {t.experience}
                        </div>
                        <div className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-green-800'}`}>
                          {master.experience} {language === 'id' ? 'tahun' : 'years'}
                        </div>
                      </div>
                      <div>
                        <div className={`text-xs uppercase tracking-wide font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                          {language === 'id' ? 'Karya' : 'Works'}
                        </div>
                        <div className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-green-800'}`}>
                          {master.worksCount}+
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className={`text-xs uppercase tracking-wide font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                        {t.specialty}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {master.techniques.map((technique, techIndex) => (
                          <span key={techIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-green-100 text-green-700'}`}>
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className={`italic text-sm mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                      "{master.quote}"
                    </blockquote>
                    
                    <div className="flex space-x-3">
                      <Link 
                        to={`/craftsman/${master.id}`}
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center"
                      >
                        {t.viewProfile}
                      </Link>
                      <Link 
                        to="/collection"
                        className={`flex-1 text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                      >
                        {t.seeWorks}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {language === 'id' ? 'Ingin Menjadi Bagian dari Keluarga KAYANA?' : 'Want to Become Part of KAYANA Family?'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'id' ? 
              'Kami selalu mencari maestro pengrajin baru untuk bergabung dalam misi pelestarian budaya' :
              'We are always looking for new master craftsmen to join our cultural preservation mission'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partnership" className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300">
              {language === 'id' ? 'Bergabung dengan Kami' : 'Join Us'}
            </Link>
            <Link to="/virtual-tours" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              {language === 'id' ? 'Pelajari Teknik Tradisional' : 'Learn Traditional Techniques'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MaestroDirectory;