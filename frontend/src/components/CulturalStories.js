import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CulturalStories({ darkMode, language }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const translations = {
    id: {
      title: "Cerita Budaya",
      subtitle: "Kearifan dan Warisan Kalimantan Utara",
      description: "Jelajahi cerita-cerita mendalam tentang sejarah, budaya, dan makna simbolik dari Kalimantan Utara yang tidak terikat pada satu pengrajin, melainkan warisan bersama yang harus dilestarikan.",
      categories: {
        all: "Semua Cerita",
        history: "Sejarah",
        culture: "Budaya & Tradisi",
        symbolism: "Makna Simbolik",
        conservation: "Konservasi"
      },
      readMore: "Baca Selengkapnya",
      readTime: "menit baca",
      featuredStory: "Cerita Unggulan"
    },
    en: {
      title: "Cultural Stories",
      subtitle: "Wisdom and Heritage of North Kalimantan",
      description: "Explore deep stories about history, culture, and symbolic meanings from North Kalimantan that are not tied to one craftsman, but shared heritage that must be preserved.",
      categories: {
        all: "All Stories",
        history: "History",
        culture: "Culture & Tradition",
        symbolism: "Symbolic Meaning",
        conservation: "Conservation"
      },
      readMore: "Read More",
      readTime: "min read",
      featuredStory: "Featured Story"
    }
  };

  const t = translations[language];

  const stories = [
    {
      id: 1,
      category: 'history',
      title: language === 'id' ? 
        'Jejak Sejarah Kerajaan Bulungan: Pusat Peradaban di Utara Kalimantan' :
        'Historical Traces of Bulungan Kingdom: Center of Civilization in North Kalimantan',
      excerpt: language === 'id' ? 
        'Kerajaan Bulungan yang berdiri sejak abad ke-15 menjadi saksi bisu perkembangan peradaban di Kalimantan Utara. Pengaruh kerajaan ini masih terasa dalam motif ukiran dan filosofi kerajinan yang ada hingga kini.' :
        'The Bulungan Kingdom, established since the 15th century, has been a silent witness to the development of civilization in North Kalimantan. The influence of this kingdom can still be felt in carving motifs and craft philosophy that exist today.',
      image: 'https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg',
      readTime: 8,
      featured: true
    },
    {
      id: 2,
      category: 'culture',
      title: language === 'id' ? 
        'Ritual Adat Dayak Kenyah: Upacara Penting dalam Kehidupan Masyarakat' :
        'Dayak Kenyah Traditional Rituals: Important Ceremonies in Community Life',
      excerpt: language === 'id' ? 
        'Upacara adat Dayak Kenyah bukan sekadar ritual, melainkan manifestasi dari hubungan harmonis antara manusia, alam, dan leluhur. Setiap unsur dalam upacara memiliki makna mendalam yang tercermin dalam kerajinan tradisional.' :
        'Dayak Kenyah traditional ceremonies are not just rituals, but manifestations of harmonious relationships between humans, nature, and ancestors. Every element in the ceremony has deep meaning reflected in traditional crafts.',
      image: 'https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg',
      readTime: 6
    },
    {
      id: 3,
      category: 'symbolism',
      title: language === 'id' ? 
        'Filosofi Motif Naga dalam Seni Ukir Dayak: Simbol Kekuatan dan Perlindungan' :
        'Dragon Motif Philosophy in Dayak Carving Art: Symbol of Strength and Protection',
      excerpt: language === 'id' ? 
        'Motif naga atau aso dalam seni ukir Dayak bukan sekadar hiasan dekoratif. Ia merupakan representasi dari kekuatan kosmis yang melindungi dan memberkati kehidupan manusia, serta jembatan antara dunia fana dan spiritual.' :
        'The dragon or aso motif in Dayak carving art is not just decorative ornament. It represents cosmic power that protects and blesses human life, as well as a bridge between the material and spiritual worlds.',
      image: 'https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg',
      readTime: 5
    },
    {
      id: 4,
      category: 'conservation',
      title: language === 'id' ? 
        'Pelestarian Hutan Rotan Malinau: Menjaga Sumber Kehidupan Pengrajin' :
        'Malinau Rattan Forest Conservation: Preserving Craftsmen\'s Livelihood Source',
      excerpt: language === 'id' ? 
        'Hutan rotan di Malinau bukan hanya sumber bahan baku kerajinan, tetapi juga ekosistem yang mendukung kehidupan berbagai species. Program konservasi yang melibatkan masyarakat lokal menjadi kunci keberlanjutan tradisi anyaman.' :
        'Rattan forests in Malinau are not only sources of craft raw materials, but also ecosystems that support the lives of various species. Conservation programs involving local communities are key to the sustainability of weaving traditions.',
      image: 'https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg',
      readTime: 7
    },
    {
      id: 5,
      category: 'culture',
      title: language === 'id' ? 
        'Batik Pesisir Tarakan: Pertemuan Budaya Laut dan Darat' :
        'Tarakan Coastal Batik: Meeting of Sea and Land Cultures',
      excerpt: language === 'id' ? 
        'Batik Tarakan menghadirkan keunikan perpaduan motif kehidupan laut dan tradisi daratan. Motif bakau, kepiting, dan ombak tidak hanya estetik, tetapi juga cerminan dari kehidupan masyarakat pesisir yang harmonis dengan alam.' :
        'Tarakan batik presents the unique blend of marine life motifs and mainland traditions. Mangrove, crab, and wave motifs are not only aesthetic, but also reflections of coastal community life in harmony with nature.',
      image: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0',
      readTime: 6
    },
    {
      id: 6,
      category: 'history',
      title: language === 'id' ? 
        'Jalur Perdagangan Kuno Kalimantan: Jejak Pengaruh Budaya Nusantara' :
        'Ancient Trade Routes of Kalimantan: Traces of Archipelago Cultural Influence',
      excerpt: language === 'id' ? 
        'Kalimantan Utara sejak dahulu menjadi persimpangan jalur perdagangan antara Cina, India, dan Nusantara. Pengaruh budaya-budaya ini terlihat dalam teknik kerajinan, motif, dan filosofi yang berkembang di wilayah ini.' :
        'North Kalimantan has long been a crossroads of trade routes between China, India, and the Archipelago. The influence of these cultures can be seen in craft techniques, motifs, and philosophies that developed in this region.',
      image: 'https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg',
      readTime: 9
    },
    {
      id: 7,
      category: 'symbolism',
      title: language === 'id' ? 
        'Makna Warna dalam Tenun Dayak: Bahasa Jiwa yang Tertuang dalam Benang' :
        'Color Meanings in Dayak Weaving: Soul Language Poured into Threads',
      excerpt: language === 'id' ? 
        'Setiap warna dalam tenun Dayak memiliki makna spiritual dan sosial yang mendalam. Merah melambangkan keberanian, hitam untuk kebijaksanaan, putih untuk kesucian, dan kuning untuk kemakmuran - sebuah kode warna yang diwariskan turun temurun.' :
        'Every color in Dayak weaving has deep spiritual and social meaning. Red symbolizes courage, black for wisdom, white for purity, and yellow for prosperity - a color code passed down through generations.',
      image: 'https://images.unsplash.com/photo-1707716312213-b1dee92f147a',
      readTime: 5
    },
    {
      id: 8,
      category: 'conservation',
      title: language === 'id' ? 
        'Program Regenerasi Pengrajin Muda: Menjaga Kontinuitas Tradisi' :
        'Young Craftsman Regeneration Program: Maintaining Traditional Continuity',
      excerpt: language === 'id' ? 
        'Tantangan terbesar pelestarian budaya adalah regenerasi. Program pelatihan dan pemberdayaan pemuda lokal menjadi kunci untuk memastikan keahlian tradisional tidak punah bersama para maestro senior.' :
        'The biggest challenge in cultural preservation is regeneration. Training and empowerment programs for local youth are key to ensuring traditional skills do not disappear with senior masters.',
      image: 'https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg',
      readTime: 8
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  const featuredStory = stories.find(story => story.featured);
  const regularStories = stories.filter(story => !story.featured);

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

      {/* Category Filter */}
      <section className={`py-8 sticky top-20 z-40 ${darkMode ? 'bg-gray-800/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'} border-b ${darkMode ? 'border-gray-700' : 'border-green-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(t.categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      {selectedCategory === 'all' && featuredStory && (
        <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'}`}>
                {t.featuredStory}
              </div>
              
              <div className={`featured-story-card rounded-3xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
                <div className="md:flex">
                  <div className="md:w-1/2 aspect-video md:aspect-auto">
                    <img 
                      src={featuredStory.image}
                      alt={featuredStory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 lg:p-12">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      featuredStory.category === 'history' ? 'bg-blue-100 text-blue-800' :
                      featuredStory.category === 'culture' ? 'bg-green-100 text-green-800' :
                      featuredStory.category === 'symbolism' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {t.categories[featuredStory.category]}
                    </div>
                    
                    <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-green-900'}`}>
                      {featuredStory.title}
                    </h2>
                    
                    <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                      {featuredStory.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                        {featuredStory.readTime} {t.readTime}
                      </span>
                      <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                        {t.readMore}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stories Grid */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'all' ? regularStories : filteredStories).map((story) => (
              <article key={story.id} className={`story-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    story.category === 'history' ? 'bg-blue-100 text-blue-800' :
                    story.category === 'culture' ? 'bg-green-100 text-green-800' :
                    story.category === 'symbolism' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {t.categories[story.category]}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 leading-tight ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {story.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                      {story.readTime} {t.readTime}
                    </span>
                    <button className={`text-sm font-semibold transition-colors ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'}`}>
                      {t.readMore} →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {language === 'id' ? 'Jelajahi Lebih Dalam' : 'Explore Deeper'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'id' ? 
              'Rasakan langsung kekayaan budaya Kalimantan melalui tur virtual dan karya para maestro' :
              'Experience the cultural richness of Kalimantan directly through virtual tours and master works'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/virtual-tours" className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300">
              {language === 'id' ? 'Ikuti Tur Virtual' : 'Take Virtual Tour'}
            </Link>
            <Link to="/collection" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              {language === 'id' ? 'Lihat Koleksi Karya' : 'View Collection'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CulturalStories;