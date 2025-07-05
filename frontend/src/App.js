import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
    alert('Terima kasih! Kami akan mengirimkan notifikasi peluncuran eksklusif ke email Anda.');
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-green-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-900">KAYANA</h1>
                <p className="text-sm text-green-600">Cerita dalam Setiap Cipta</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#tentang" className="text-green-800 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#karya" className="text-green-800 hover:text-green-600 transition-colors">Karya</a>
              <a href="#maestro" className="text-green-800 hover:text-green-600 transition-colors">Maestro</a>
              <a href="#kontak" className="text-green-800 hover:text-green-600 transition-colors">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

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
              Bukan Sekadar Kerajinan, Ini Warisan Budaya dari Jantung Kalimantan
            </h1>
            <p className={`text-xl md:text-2xl text-green-100 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Jelajahi, alami, dan miliki potongan jiwa Kalimantan Utara melalui tur virtual interaktif dan gamifikasi budaya yang memukau
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Jelajahi Karya
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                Ikuti Peluncuran Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-8">
              Menjembatani Tradisi dan Modernitas
            </h2>
            <p className="text-xl text-green-700 mb-12 leading-relaxed">
              KAYANA hadir sebagai jembatan antara pengrajin yang karyanya seringkali kurang dihargai dengan pasar modern yang mendambakan otentisitas dan cerita di balik setiap karya seni.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Fitur Unggulan Kami
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Tiga pilar utama yang membuat KAYANA menjadi pengalaman yang tak terlupakan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Tur Virtual Interaktif</h3>
              <p className="text-green-700 leading-relaxed">
                Kunjungi sanggar pengrajin di pedalaman Malinau melalui pengalaman virtual yang imersif dan interaktif
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Gamifikasi Budaya</h3>
              <p className="text-green-700 leading-relaxed">
                Kumpulkan lencana pengetahuan tentang motif ukiran khas Bulungan dan filosofi batik Tarakan
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Dampak Langsung</h3>
              <p className="text-green-700 leading-relaxed">
                Setiap pembelian secara langsung meningkatkan kesejahteraan para maestro pengrajin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="karya" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Karya Pilihan dari Kalimantan Utara
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Setiap karya memiliki cerita, setiap cerita memiliki makna
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="product-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg"
                  alt="Anyaman Rotan Malinau"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">Anyaman Rotan Tradisional</h3>
                <p className="text-green-600 mb-2">Maestro Pak Budi - Malinau</p>
                <p className="text-2xl font-bold text-amber-600 mb-4">Rp 850.000</p>
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                  Lihat Kisahnya
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593671186131-d58817e7dee0"
                  alt="Tenun Dayak Bulungan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">Tenun Dayak Bulungan</h3>
                <p className="text-green-600 mb-2">Maestro Ibu Sari - Bulungan</p>
                <p className="text-2xl font-bold text-amber-600 mb-4">Rp 1.200.000</p>
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                  Lihat Kisahnya
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg"
                  alt="Perisai Ukir Tarakan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">Perisai Ukir Tradisional</h3>
                <p className="text-green-600 mb-2">Maestro Pak Joko - Tarakan</p>
                <p className="text-2xl font-bold text-amber-600 mb-4">Rp 2.500.000</p>
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                  Lihat Kisahnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Craftsmen */}
      <section id="maestro" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Temui Para Maestro di Balik Karya
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Mereka yang menjaga tradisi dan mewariskan keahlian dari generasi ke generasi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Master 1 */}
            <div className="maestro-card bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg"
                  alt="Maestro Pak Budi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Pak Budi</h3>
              <p className="text-green-600 mb-4">Maestro Anyaman Rotan - Malinau</p>
              <blockquote className="text-green-700 italic mb-6">
                "Setiap serat rotan memiliki cerita. Tugas saya adalah merajutnya menjadi karya yang bermakna."
              </blockquote>
              <button className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                Lihat Semua Karya →
              </button>
            </div>

            {/* Master 2 */}
            <div className="maestro-card bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1707716312213-b1dee92f147a"
                  alt="Maestro Ibu Sari"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Ibu Sari</h3>
              <p className="text-green-600 mb-4">Maestro Tenun Dayak - Bulungan</p>
              <blockquote className="text-green-700 italic mb-6">
                "Motif yang saya tenun bukan sekedar hiasan, tapi doa dan harapan untuk masa depan."
              </blockquote>
              <button className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                Lihat Semua Karya →
              </button>
            </div>

            {/* Master 3 */}
            <div className="maestro-card bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg"
                  alt="Maestro Pak Joko"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Pak Joko</h3>
              <p className="text-green-600 mb-4">Maestro Ukir Kayu - Tarakan</p>
              <blockquote className="text-green-700 italic mb-6">
                "Kayu berbicara kepada saya. Saya hanya mengikuti alur yang sudah ditentukan alam."
              </blockquote>
              <button className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                Lihat Semua Karya →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Testimoni
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Apa kata mereka yang telah merasakan pengalaman KAYANA
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Andi Wijaya</h4>
                  <p className="text-green-600">Kolektor Seni</p>
                </div>
              </div>
              <blockquote className="text-green-700 italic text-lg leading-relaxed">
                "Sebagai pecinta budaya, KAYANA memberikan saya akses ke cerita yang belum pernah saya dengar sebelumnya. Setiap karya yang saya beli bukan hanya dekorasi, tapi jembatan ke masa lalu yang berharga."
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Maya Sari</h4>
                  <p className="text-green-600">Corporate CSR Manager</p>
                </div>
              </div>
              <blockquote className="text-green-700 italic text-lg leading-relaxed">
                "Program CSR kami menjadi lebih bermakna dengan bermitra bersama KAYANA untuk mendukung pelestarian budaya. Dampak langsung yang terukur membuat kami yakin memilih platform ini."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg"
            alt="Pattern Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Jadilah Bagian dari Cerita Besar Ini
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Daftarkan email Anda untuk mendapatkan notifikasi peluncuran eksklusif dan akses pertama ke koleksi serta konten tur virtual perdana
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                required
                className="flex-1 px-6 py-4 rounded-xl text-green-900 placeholder-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">KAYANA</h3>
                  <p className="text-sm text-green-300">Cerita dalam Setiap Cipta</p>
                </div>
              </div>
              <p className="text-green-300 text-sm">
                Platform story-commerce yang mengangkat nilai kerajinan tangan tradisional Kalimantan Utara
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Jelajahi</h4>
              <ul className="space-y-2 text-sm text-green-300">
                <li><a href="#" className="hover:text-white transition-colors">Koleksi Karya</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tur Virtual</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Para Maestro</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cerita Budaya</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tentang</h4>
              <ul className="space-y-2 text-sm text-green-300">
                <li><a href="#" className="hover:text-white transition-colors">Misi Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dampak Sosial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-green-300">
                <li>Email: hello@kayana.id</li>
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Instagram: @kayana.id</li>
                <li>LinkedIn: KAYANA Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-300">
            <p>&copy; 2024 KAYANA. Semua hak dilindungi. Dibuat dengan ❤️ untuk melestarikan budaya Kalimantan Utara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;