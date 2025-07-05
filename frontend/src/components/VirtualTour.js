import React from 'react';
import { Link } from 'react-router-dom';

function VirtualTour({ darkMode, language }) {
  const translations = {
    id: {
      title: "Tur Virtual Interaktif",
      subtitle: "Jelajahi proses pembuatan kerajinan tradisional dari dekat",
      description: "Rasakan pengalaman imersif mengunjungi sanggar-sanggar pengrajin di pedalaman Kalimantan Utara. Saksikan setiap tahapan pembuatan karya seni dengan detail yang menakjubkan.",
      tours: [
        {
          id: 'dayak-shield',
          title: 'Proses Pembuatan Perisai Dayak Kayan',
          description: 'Saksikan proses pembuatan perisai tradisional Dayak Kayan dari pemilihan kayu hingga pewarnaan alami.',
          duration: '45 menit',
          stages: '6 tahapan',
          difficulty: 'Pemula',
          image: 'https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg'
        },
        {
          id: 'rattan-weaving',
          title: 'Seni Anyaman Rotan Malinau',
          description: 'Jelajahi hutan untuk mencari rotan terbaik dan pelajari teknik anyaman tradisional.',
          duration: '60 menit',
          stages: '8 tahapan',
          difficulty: 'Menengah',
          image: 'https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg'
        },
        {
          id: 'batik-tarakan',
          title: 'Batik Pesisir Tarakan',
          description: 'Temukan filosofi motif bakau dan kepiting dalam batik khas pesisir Tarakan.',
          duration: '50 menit',
          stages: '7 tahapan',
          difficulty: 'Lanjutan',
          image: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0'
        }
      ],
      startTour: "Mulai Tur",
      duration: "Durasi",
      stages: "Tahapan",
      difficulty: "Tingkat"
    },
    en: {
      title: "Interactive Virtual Tours",
      subtitle: "Explore traditional craft-making processes up close",
      description: "Experience immersive visits to craftsmen's workshops in remote North Kalimantan. Witness every stage of artwork creation with stunning detail.",
      tours: [
        {
          id: 'dayak-shield',
          title: 'Dayak Kayan Shield Making Process',
          description: 'Witness the traditional Dayak Kayan shield making process from wood selection to natural coloring.',
          duration: '45 minutes',
          stages: '6 stages',
          difficulty: 'Beginner',
          image: 'https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg'
        },
        {
          id: 'rattan-weaving',
          title: 'Malinau Rattan Weaving Art',
          description: 'Explore the forest to find the best rattan and learn traditional weaving techniques.',
          duration: '60 minutes',
          stages: '8 stages',
          difficulty: 'Intermediate',
          image: 'https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg'
        },
        {
          id: 'batik-tarakan',
          title: 'Tarakan Coastal Batik',
          description: 'Discover the philosophy of mangrove and crab motifs in Tarakan coastal batik.',
          duration: '50 minutes',
          stages: '7 stages',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0'
        }
      ],
      startTour: "Start Tour",
      duration: "Duration",
      stages: "Stages",
      difficulty: "Level"
    }
  };

  const t = translations[language];

  return (
    <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-lg text-green-200 max-w-4xl mx-auto">
            {t.description}
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {t.tours.map((tour) => (
              <div key={tour.id} className={`tour-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {tour.title}
                  </h3>
                  <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {tour.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-4 text-sm">
                      <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {tour.duration}
                      </span>
                      <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {tour.stages}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tour.difficulty === 'Pemula' || tour.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      tour.difficulty === 'Menengah' || tour.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tour.difficulty}
                    </span>
                  </div>
                  
                  <Link to={`/virtual-tour/${tour.id}`} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center block">
                    {t.startTour}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-50 to-emerald-50'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {language === 'id' ? 'Dapatkan Pengalaman Lengkap' : 'Get the Complete Experience'}
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
            {language === 'id' ? 
              'Kumpulkan semua lencana pengetahuan dan buka akses ke konten eksklusif dari para maestro pengrajin.' :
              'Collect all knowledge badges and unlock access to exclusive content from master craftsmen.'
            }
          </p>
          <Link to="/collection" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            {language === 'id' ? 'Lihat Koleksi Karya' : 'View Collection'}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default VirtualTour;