import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CollectionPage({ darkMode, language }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const translations = {
    id: {
      title: "Koleksi Karya",
      subtitle: "Setiap Karya Memiliki Cerita",
      description: "Jelajahi koleksi lengkap karya-karya otentik dari para maestro pengrajin Kalimantan Utara. Setiap produk dilengkapi dengan cerita di balik pembuatannya.",
      filterByCategory: "Filter Kategori",
      filterByRegion: "Filter Daerah",
      categories: {
        all: "Semua",
        carving: "Ukiran Kayu",
        weaving: "Anyaman",
        batik: "Batik",
        traditional: "Kerajinan Tradisional"
      },
      regions: {
        all: "Semua Daerah",
        bulungan: "Bulungan",
        malinau: "Malinau", 
        tarakan: "Tarakan"
      },
      seeStory: "Lihat Kisahnya",
      buyNow: "Beli Sekarang",
      noResults: "Tidak ada produk yang sesuai dengan filter"
    },
    en: {
      title: "Collection",
      subtitle: "Every Work Has a Story",
      description: "Explore the complete collection of authentic works from North Kalimantan master craftsmen. Each product comes with the story behind its creation.",
      filterByCategory: "Filter by Category",
      filterByRegion: "Filter by Region",
      categories: {
        all: "All",
        carving: "Wood Carving",
        weaving: "Weaving",
        batik: "Batik",
        traditional: "Traditional Crafts"
      },
      regions: {
        all: "All Regions",
        bulungan: "Bulungan",
        malinau: "Malinau",
        tarakan: "Tarakan"
      },
      seeStory: "See the Story",
      buyNow: "Buy Now",
      noResults: "No products match the current filters"
    }
  };

  const t = translations[language];

  const products = [
    {
      id: 1,
      name: language === 'id' ? 'Perisai Naga Kalimantan' : 'Kalimantan Dragon Shield',
      craftsman: 'Pak Ahmad',
      region: 'bulungan',
      category: 'carving',
      price: 'Rp 2.500.000',
      image: 'https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg',
      description: language === 'id' ? 
        'Perisai ukir dengan motif naga yang melambangkan kekuatan dan perlindungan' :
        'Carved shield with dragon motif symbolizing strength and protection',
      craftsmanId: 'budi'
    },
    {
      id: 2,
      name: language === 'id' ? 'Topeng Ritual Dayak' : 'Dayak Ritual Mask',
      craftsman: 'Pak Ahmad',
      region: 'bulungan',
      category: 'carving',
      price: 'Rp 1.800.000',
      image: 'https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg',
      description: language === 'id' ?
        'Topeng tradisional untuk upacara ritual dengan detail ukiran yang halus' :
        'Traditional mask for ritual ceremonies with fine carved details',
      craftsmanId: 'budi'
    },
    {
      id: 3,
      name: language === 'id' ? 'Keranjang Rotan Tradisional' : 'Traditional Rattan Basket',
      craftsman: 'Ibu Dayang',
      region: 'malinau',
      category: 'weaving',
      price: 'Rp 850.000',
      image: 'https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg',
      description: language === 'id' ?
        'Keranjang anyaman dengan motif tradisional Malinau yang kuat dan tahan lama' :
        'Woven basket with traditional Malinau motifs that are strong and durable',
      craftsmanId: 'sari'
    },
    {
      id: 4,
      name: language === 'id' ? 'Topi Rotan Dayak' : 'Dayak Rattan Hat',
      craftsman: 'Ibu Dayang',
      region: 'malinau',
      category: 'weaving',
      price: 'Rp 450.000',
      image: 'https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg',
      description: language === 'id' ?
        'Topi tradisional yang nyaman digunakan dengan ventilasi alami' :
        'Traditional hat that is comfortable to wear with natural ventilation',
      craftsmanId: 'sari'
    },
    {
      id: 5,
      name: language === 'id' ? 'Kain Batik Motif Bakau' : 'Mangrove Motif Batik Cloth',
      craftsman: 'Sanggar Tarakan Lestari',
      region: 'tarakan',
      category: 'batik',
      price: 'Rp 1.200.000',
      image: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0',
      description: language === 'id' ?
        'Kain batik dengan motif bakau yang melambangkan kehidupan pesisir' :
        'Batik cloth with mangrove motifs symbolizing coastal life',
      craftsmanId: 'joko'
    },
    {
      id: 6,
      name: language === 'id' ? 'Selendang Batik Kepiting' : 'Crab Batik Scarf',
      craftsman: 'Sanggar Tarakan Lestari',
      region: 'tarakan',
      category: 'batik',
      price: 'Rp 800.000',
      image: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0',
      description: language === 'id' ?
        'Selendang dengan motif kepiting yang unik dan khas Tarakan' :
        'Scarf with unique crab motifs characteristic of Tarakan',
      craftsmanId: 'joko'
    },
    {
      id: 7,
      name: language === 'id' ? 'Patung Penjaga Rumah' : 'House Guardian Statue',
      craftsman: 'Pak Ahmad',
      region: 'bulungan',
      category: 'traditional',
      price: 'Rp 3.200.000',
      image: 'https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg',
      description: language === 'id' ?
        'Patung ukir yang dipercaya membawa keberuntungan dan perlindungan' :
        'Carved statue believed to bring good luck and protection',
      craftsmanId: 'budi'
    },
    {
      id: 8,
      name: language === 'id' ? 'Vas Hias Rotan' : 'Rattan Decorative Vase',
      craftsman: 'Ibu Dayang',
      region: 'malinau',
      category: 'weaving',
      price: 'Rp 680.000',
      image: 'https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg',
      description: language === 'id' ?
        'Vas dekoratif dengan anyaman rumit yang indah untuk hiasan rumah' :
        'Decorative vase with beautiful intricate weaving for home decoration',
      craftsmanId: 'sari'
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || product.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

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

      {/* Filters */}
      <section className={`py-8 sticky top-20 z-40 ${darkMode ? 'bg-gray-800/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'} border-b ${darkMode ? 'border-gray-700' : 'border-green-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {/* Category Filter */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {t.filterByCategory}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`px-4 py-2 rounded-xl border focus:outline-none focus:ring-4 focus:ring-green-300 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-green-200 text-green-900'}`}
              >
                {Object.entries(t.categories).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                {t.filterByRegion}
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className={`px-4 py-2 rounded-xl border focus:outline-none focus:ring-4 focus:ring-green-300 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-green-200 text-green-900'}`}
              >
                {Object.entries(t.regions).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
              {filteredProducts.length} {language === 'id' ? 'produk ditemukan' : 'products found'}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`product-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      product.category === 'carving' ? 'bg-amber-100 text-amber-800' :
                      product.category === 'weaving' ? 'bg-green-100 text-green-800' :
                      product.category === 'batik' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {t.categories[product.category]}
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                      {product.name}
                    </h3>
                    
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                      {product.craftsman} - {t.regions[product.region]}
                    </p>
                    
                    <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-amber-600">
                        {product.price}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link 
                        to={`/craftsman/${product.craftsmanId}`}
                        className={`flex-1 text-center py-2 px-4 rounded-xl font-medium transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                      >
                        {t.seeStory}
                      </Link>
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                        {t.buyNow}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className={`text-6xl mb-6 ${darkMode ? 'text-gray-600' : 'text-green-200'}`}>
                🔍
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                {t.noResults}
              </h3>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-green-600'}`}>
                {language === 'id' ? 
                  'Coba ubah filter untuk melihat produk lainnya' :
                  'Try changing the filters to see other products'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {language === 'id' ? 'Tidak Menemukan yang Dicari?' : "Can't Find What You're Looking For?"}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'id' ? 
              'Hubungi kami untuk request khusus atau jelajahi cerita di balik setiap karya' :
              'Contact us for custom requests or explore the stories behind each work'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/maestro" className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300">
              {language === 'id' ? 'Temui Para Maestro' : 'Meet the Masters'}
            </Link>
            <Link to="/virtual-tours" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              {language === 'id' ? 'Ikuti Tur Virtual' : 'Take Virtual Tour'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollectionPage;