import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Homepage({ darkMode, language }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    alert(language === 'id' ? 
      'Terima kasih! Kami akan mengirimkan notifikasi peluncuran eksklusif ke email Anda.' :
      'Thank you! We will send exclusive launch notifications to your email.'
    );
  };

  const translations = {
    id: {
      heroTitle: "Bukan Sekadar Kerajinan, Ini Warisan Budaya dari Jantung Kalimantan",
      heroSubtitle: "Jelajahi, alami, dan miliki potongan jiwa Kalimantan Utara melalui tur virtual interaktif dan gamifikasi budaya yang memukau",
      exploreWorks: "Jelajahi Karya",
      followLaunch: "Ikuti Peluncuran Kami",
      bridgeTitle: "Menjembatani Tradisi dan Modernitas",
      bridgeDesc: "KAYANA hadir sebagai jembatan antara pengrajin yang karyanya seringkali kurang dihargai dengan pasar modern yang mendambakan otentisitas dan cerita di balik setiap karya seni.",
      featuresTitle: "Fitur Unggulan Kami",
      featuresSubtitle: "Tiga pilar utama yang membuat KAYANA menjadi pengalaman yang tak terlupakan",
      feature1Title: "Tur Virtual Interaktif",
      feature1Desc: "Kunjungi sanggar pengrajin di pedalaman Malinau melalui pengalaman virtual yang imersif dan interaktif",
      feature2Title: "Gamifikasi Budaya",
      feature2Desc: "Kumpulkan lencana pengetahuan tentang motif ukiran khas Bulungan dan filosofi batik Tarakan",
      feature3Title: "Dampak Langsung",
      feature3Desc: "Setiap pembelian secara langsung meningkatkan kesejahteraan para maestro pengrajin",
      productsTitle: "Karya Pilihan dari Kalimantan Utara",
      productsSubtitle: "Setiap karya memiliki cerita, setiap cerita memiliki makna",
      seeStory: "Lihat Kisahnya",
      mastersTitle: "Temui Para Maestro di Balik Karya",
      mastersSubtitle: "Mereka yang menjaga tradisi dan mewariskan keahlian dari generasi ke generasi",
      seeAllWorks: "Lihat Semua Karya →",
      testimonialsTitle: "Testimoni",
      testimonialsSubtitle: "Apa kata mereka yang telah merasakan pengalaman KAYANA",
      ctaTitle: "Jadilah Bagian dari Cerita Besar Ini",
      ctaSubtitle: "Daftarkan email Anda untuk mendapatkan notifikasi peluncuran eksklusif dan akses pertama ke koleksi serta konten tur virtual perdana",
      emailPlaceholder: "Masukkan email Anda",
      registerNow: "Daftar Sekarang"
    },
    en: {
      heroTitle: "Not Just Crafts, This is Cultural Heritage from the Heart of Kalimantan",
      heroSubtitle: "Explore, experience, and own a piece of North Kalimantan's soul through immersive virtual tours and captivating cultural gamification",
      exploreWorks: "Explore Works",
      followLaunch: "Follow Our Launch",
      bridgeTitle: "Bridging Tradition and Modernity",
      bridgeDesc: "KAYANA serves as a bridge between craftsmen whose works are often undervalued and modern markets that crave authenticity and stories behind every piece of art.",
      featuresTitle: "Our Key Features",
      featuresSubtitle: "Three main pillars that make KAYANA an unforgettable experience",
      feature1Title: "Interactive Virtual Tours",
      feature1Desc: "Visit craftsman workshops in remote Malinau through immersive and interactive virtual experiences",
      feature2Title: "Cultural Gamification",
      feature2Desc: "Collect knowledge badges about Bulungan's signature carving motifs and Tarakan batik philosophy",
      feature3Title: "Direct Impact",
      feature3Desc: "Every purchase directly improves the welfare of master craftsmen",
      productsTitle: "Featured Works from North Kalimantan",
      productsSubtitle: "Every work has a story, every story has meaning",
      seeStory: "See the Story",
      mastersTitle: "Meet the Masters Behind the Works",
      mastersSubtitle: "Those who preserve tradition and pass down skills from generation to generation",
      seeAllWorks: "See All Works →",
      testimonialsTitle: "Testimonials",
      testimonialsSubtitle: "What they say about their KAYANA experience",
      ctaTitle: "Be Part of This Great Story",
      ctaSubtitle: "Register your email to get exclusive launch notifications and first access to collections and premiere virtual tour content",
      emailPlaceholder: "Enter your email",
      registerNow: "Register Now"
    }
  };

  const t = translations[language];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="hero-section min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497219055242-93359eeed651"
            alt="Tangan pengrajin Dayak mengukir kayu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-center">
          <div className="max-w-3xl">
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {t.heroTitle}
            </h1>
            <p className={`text-xl md:text-2xl text-green-100 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {t.heroSubtitle}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <Link to="/collection" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                {t.exploreWorks}
              </Link>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                {t.followLaunch}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.bridgeTitle}
            </h2>
            <p className={`text-xl mb-12 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.bridgeDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.featuresTitle}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.featuresSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className={`feature-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                {t.feature1Title}
              </h3>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {t.feature1Desc}
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`feature-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-amber-50 to-orange-50'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                {t.feature2Title}
              </h3>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {t.feature2Desc}
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`feature-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-red-50 to-pink-50'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                {t.feature3Title}
              </h3>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {t.feature3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.productsTitle}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.productsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className={`product-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg"
                  alt="Anyaman Rotan Malinau"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {language === 'id' ? 'Anyaman Rotan Tradisional' : 'Traditional Rattan Weaving'}
                </h3>
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                  {language === 'id' ? 'Maestro Pak Budi - Malinau' : 'Master Pak Budi - Malinau'}
                </p>
                <p className="text-2xl font-bold text-amber-600 mb-4">Rp 850.000</p>
                <Link to="/craftsman/budi" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center block">
                  {t.seeStory}
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className={`product-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593671186131-d58817e7dee0"
                  alt="Tenun Dayak Bulungan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {language === 'id' ? 'Tenun Dayak Bulungan' : 'Dayak Bulungan Weaving'}
                </h3>
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                  {language === 'id' ? 'Maestro Ibu Sari - Bulungan' : 'Master Ibu Sari - Bulungan'}
                </p>
                <p className="text-2xl font-bold text-amber-600 mb-4">Rp 1.200.000</p>
                <Link to="/craftsman/sari" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center block">
                  {t.seeStory}
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className={`product-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg"
                  alt="Perisai Ukir Tarakan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {language === 'id' ? 'Perisai Ukir Tradisional' : 'Traditional Carved Shield'}
                </h3>
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                  {language === 'id' ? 'Maestro Pak Joko - Tarakan' : 'Master Pak Joko - Tarakan'}
                </p>
                <p className="text-2xl font-bold text-amber-600 mb-4">Rp 2.500.000</p>
                <Link to="/craftsman/joko" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center block">
                  {t.seeStory}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Craftsmen */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.mastersTitle}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.mastersSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Master 1 */}
            <div className={`maestro-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg"
                  alt="Maestro Pak Budi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                Pak Budi
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                {language === 'id' ? 'Maestro Anyaman Rotan - Malinau' : 'Master Rattan Weaver - Malinau'}
              </p>
              <blockquote className={`italic mb-6 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {language === 'id' ? 
                  "Setiap serat rotan memiliki cerita. Tugas saya adalah merajutnya menjadi karya yang bermakna." :
                  "Every rattan fiber has a story. My job is to weave it into meaningful works."
                }
              </blockquote>
              <Link to="/craftsman/budi" className={`font-semibold transition-colors ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'}`}>
                {t.seeAllWorks}
              </Link>
            </div>

            {/* Master 2 */}
            <div className={`maestro-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-amber-50 to-orange-50'}`}>
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1707716312213-b1dee92f147a"
                  alt="Maestro Ibu Sari"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                Ibu Sari
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                {language === 'id' ? 'Maestro Tenun Dayak - Bulungan' : 'Master Dayak Weaver - Bulungan'}
              </p>
              <blockquote className={`italic mb-6 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {language === 'id' ? 
                  "Motif yang saya tenun bukan sekedar hiasan, tapi doa dan harapan untuk masa depan." :
                  "The motifs I weave are not just decorations, but prayers and hopes for the future."
                }
              </blockquote>
              <Link to="/craftsman/sari" className={`font-semibold transition-colors ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'}`}>
                {t.seeAllWorks}
              </Link>
            </div>

            {/* Master 3 */}
            <div className={`maestro-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-red-50 to-pink-50'}`}>
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg"
                  alt="Maestro Pak Joko"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                Pak Joko
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                {language === 'id' ? 'Maestro Ukir Kayu - Tarakan' : 'Master Wood Carver - Tarakan'}
              </p>
              <blockquote className={`italic mb-6 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {language === 'id' ? 
                  "Kayu berbicara kepada saya. Saya hanya mengikuti alur yang sudah ditentukan alam." :
                  "Wood speaks to me. I just follow the flow that nature has determined."
                }
              </blockquote>
              <Link to="/craftsman/joko" className={`font-semibold transition-colors ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'}`}>
                {t.seeAllWorks}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.testimonialsTitle}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.testimonialsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className={`testimonial-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    Andi Wijaya
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                    {language === 'id' ? 'Kolektor Seni' : 'Art Collector'}
                  </p>
                </div>
              </div>
              <blockquote className={`italic text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {language === 'id' ? 
                  "Sebagai pecinta budaya, KAYANA memberikan saya akses ke cerita yang belum pernah saya dengar sebelumnya. Setiap karya yang saya beli bukan hanya dekorasi, tapi jembatan ke masa lalu yang berharga." :
                  "As a culture enthusiast, KAYANA gives me access to stories I've never heard before. Every piece I buy is not just decoration, but a bridge to a valuable past."
                }
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className={`testimonial-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    Maya Sari
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-green-600'}`}>
                    {language === 'id' ? 'Corporate CSR Manager' : 'Corporate CSR Manager'}
                  </p>
                </div>
              </div>
              <blockquote className={`italic text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {language === 'id' ? 
                  "Program CSR kami menjadi lebih bermakna dengan bermitra bersama KAYANA untuk mendukung pelestarian budaya. Dampak langsung yang terukur membuat kami yakin memilih platform ini." :
                  "Our CSR program becomes more meaningful by partnering with KAYANA to support cultural preservation. The measurable direct impact makes us confident in choosing this platform."
                }
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg"
            alt="Pattern Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t.ctaSubtitle}
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                required
                className="flex-1 px-6 py-4 rounded-xl text-green-900 placeholder-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {t.registerNow}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Homepage;