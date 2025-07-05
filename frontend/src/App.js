import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Import components
import Homepage from './components/Homepage';
import VirtualTour from './components/VirtualTour';
import VirtualTourDetail from './components/VirtualTourDetail';
import CraftsmanProfile from './components/CraftsmanProfile';
import CollectionPage from './components/CollectionPage';
import MaestroDirectory from './components/MaestroDirectory';
import CulturalStories from './components/CulturalStories';
import MissionPage from './components/MissionPage';
import SocialImpact from './components/SocialImpact';
import Partnership from './components/Partnership';
import CareerPage from './components/CareerPage';

// Header Component
function Header({ darkMode, toggleDarkMode, language, toggleLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    id: {
      about: "Tentang",
      works: "Karya",
      masters: "Maestro",
      contact: "Kontak",
      tours: "Tur Virtual",
      stories: "Cerita"
    },
    en: {
      about: "About",
      works: "Works",
      masters: "Masters",
      contact: "Contact",
      tours: "Virtual Tours",
      stories: "Stories"
    }
  };

  const t = translations[language];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-lg'
    } ${darkMode ? 'bg-gray-900/90' : ''} border-b border-green-100`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-12 h-12 bg-gradient-to-br from-green-700 to-green-900 rounded-xl flex items-center justify-center transition-transform hover:scale-105`}>
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-green-900'}`}>KAYANA</h1>
              <p className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                {language === 'id' ? 'Cerita dalam Setiap Cipta' : 'Story in Every Creation'}
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-green-800 hover:text-green-600'} transition-colors`}>
              {t.about}
            </Link>
            <Link to="/collection" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-green-800 hover:text-green-600'} transition-colors`}>
              {t.works}
            </Link>
            <Link to="/virtual-tours" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-green-800 hover:text-green-600'} transition-colors`}>
              {t.tours}
            </Link>
            <Link to="/maestro" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-green-800 hover:text-green-600'} transition-colors`}>
              {t.masters}
            </Link>
            <Link to="/cultural-stories" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-green-800 hover:text-green-600'} transition-colors`}>
              {t.stories}
            </Link>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer Component
function Footer({ darkMode, language }) {
  const translations = {
    id: {
      tagline: "Cerita dalam Setiap Cipta",
      description: "Platform story-commerce yang mengangkat nilai kerajinan tangan tradisional Kalimantan Utara",
      explore: "Jelajahi",
      collection: "Koleksi Karya",
      virtualTours: "Tur Virtual",
      masters: "Para Maestro",
      culturalStories: "Cerita Budaya",
      about: "Tentang",
      mission: "Misi Kami",
      socialImpact: "Dampak Sosial",
      partnership: "Partnership",
      career: "Karir",
      contact: "Kontak",
      copyright: "Semua hak dilindungi. Dibuat dengan ❤️ untuk melestarikan budaya Kalimantan Utara."
    },
    en: {
      tagline: "Story in Every Creation",
      description: "Story-commerce platform that elevates traditional handicrafts from North Kalimantan",
      explore: "Explore",
      collection: "Collection",
      virtualTours: "Virtual Tours",
      masters: "Masters",
      culturalStories: "Cultural Stories",
      about: "About",
      mission: "Our Mission",
      socialImpact: "Social Impact",
      partnership: "Partnership",
      career: "Career",
      contact: "Contact",
      copyright: "All rights reserved. Made with ❤️ to preserve North Kalimantan culture."
    }
  };

  const t = translations[language];

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-green-900 text-white'} py-12`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KAYANA</h3>
                <p className="text-sm text-green-300">{t.tagline}</p>
              </div>
            </div>
            <p className="text-green-300 text-sm mb-4">
              {t.description}
            </p>
            <p className="text-green-300 text-xs">
              KAYANA dari KUMUDA EXPERIENCE<br />
              (PT KUMUUDA KREASI NUSANTARA)
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.explore}</h4>
            <ul className="space-y-2 text-sm text-green-300">
              <li><Link to="/collection" className="hover:text-white transition-colors">{t.collection}</Link></li>
              <li><Link to="/virtual-tours" className="hover:text-white transition-colors">{t.virtualTours}</Link></li>
              <li><Link to="/maestro" className="hover:text-white transition-colors">{t.masters}</Link></li>
              <li><Link to="/cultural-stories" className="hover:text-white transition-colors">{t.culturalStories}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.about}</h4>
            <ul className="space-y-2 text-sm text-green-300">
              <li><Link to="/mission" className="hover:text-white transition-colors">{t.mission}</Link></li>
              <li><Link to="/social-impact" className="hover:text-white transition-colors">{t.socialImpact}</Link></li>
              <li><Link to="/partnership" className="hover:text-white transition-colors">{t.partnership}</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">{t.career}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-sm text-green-300">
              <li>Email: hello@kayana.id</li>
              <li>WhatsApp: +62 812-3456-7890</li>
              <li>Instagram: @kayana.id</li>
              <li>LinkedIn: KAYANA Indonesia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-300">
          <p>&copy; 2024 KAYANA. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('id');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        
        <Routes>
          <Route path="/" element={<Homepage darkMode={darkMode} language={language} />} />
          <Route path="/virtual-tours" element={<VirtualTour darkMode={darkMode} language={language} />} />
          <Route path="/virtual-tour/:id" element={<VirtualTourDetail darkMode={darkMode} language={language} />} />
          <Route path="/craftsman/:id" element={<CraftsmanProfile darkMode={darkMode} language={language} />} />
          <Route path="/collection" element={<CollectionPage darkMode={darkMode} language={language} />} />
          <Route path="/maestro" element={<MaestroDirectory darkMode={darkMode} language={language} />} />
          <Route path="/cultural-stories" element={<CulturalStories darkMode={darkMode} language={language} />} />
          <Route path="/mission" element={<MissionPage darkMode={darkMode} language={language} />} />
          <Route path="/social-impact" element={<SocialImpact darkMode={darkMode} language={language} />} />
          <Route path="/partnership" element={<Partnership darkMode={darkMode} language={language} />} />
          <Route path="/career" element={<CareerPage darkMode={darkMode} language={language} />} />
          <Route path="/about" element={<MissionPage darkMode={darkMode} language={language} />} />
        </Routes>
        
        <Footer darkMode={darkMode} language={language} />
      </div>
    </Router>
  );
}

export default App;