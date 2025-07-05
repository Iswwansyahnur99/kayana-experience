import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CraftsmanProfile({ darkMode, language }) {
  const { id } = useParams();

  const craftsmenData = {
    budi: {
      id: {
        name: "Bapak Ahmad",
        title: "Sang Maestro Ukir dari Bulungan",
        location: "Bulungan, Kalimantan Utara",
        image: "https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg",
        story: "Bapak Ahmad mewarisi keahlian mengukir dari kakeknya yang juga seorang pengrajin terkenal di Bulungan. Selama lebih dari 30 tahun, beliau telah menciptakan berbagai karya ukiran yang memukau dengan filosofi mendalam. Setiap motif yang ia pahat mengandung makna spiritual dan budaya yang kuat, terutama motif naga dan manusia yang melambangkan keseimbangan alam dan kehidupan.",
        challenge: "Usaha Bapak Ahmad sempat terancam bangkrut karena persaingan dengan produk pabrikan yang lebih murah. Namun, sejak bergabung dengan KAYANA, karyanya mulai dihargai oleh kolektor seni dan pecinta budaya dari seluruh Indonesia.",
        philosophy: "Kayu adalah sahabat saya. Setiap serat kayu memiliki cerita, dan tugas saya adalah mengeluarkan cerita tersebut melalui pahat.",
        videoUrl: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg",
        works: [
          {
            name: "Perisai Naga Kalimantan",
            price: "Rp 2.500.000",
            image: "https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg",
            description: "Perisai ukir dengan motif naga yang melambangkan kekuatan dan perlindungan"
          },
          {
            name: "Topeng Ritual Dayak",
            price: "Rp 1.800.000",
            image: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg",
            description: "Topeng tradisional untuk upacara ritual dengan detail ukiran yang halus"
          },
          {
            name: "Patung Penjaga Rumah",
            price: "Rp 3.200.000",
            image: "https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg",
            description: "Patung ukir yang dipercaya membawa keberuntungan dan perlindungan"
          }
        ]
      },
      en: {
        name: "Mr. Ahmad",
        title: "The Master Carver from Bulungan",
        location: "Bulungan, North Kalimantan",
        image: "https://images.pexels.com/photos/32327079/pexels-photo-32327079.jpeg",
        story: "Mr. Ahmad inherited his carving skills from his grandfather, who was also a renowned craftsman in Bulungan. For over 30 years, he has created stunning carved works with deep philosophy. Every motif he carves contains strong spiritual and cultural meanings, especially dragon and human motifs that symbolize the balance of nature and life.",
        challenge: "Mr. Ahmad's business was once threatened with bankruptcy due to competition with cheaper factory products. However, since joining KAYANA, his works have begun to be appreciated by art collectors and culture enthusiasts from across Indonesia.",
        philosophy: "Wood is my friend. Every wood fiber has a story, and my job is to bring out that story through the chisel.",
        videoUrl: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg",
        works: [
          {
            name: "Kalimantan Dragon Shield",
            price: "Rp 2.500.000",
            image: "https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg",
            description: "Carved shield with dragon motif symbolizing strength and protection"
          },
          {
            name: "Dayak Ritual Mask",
            price: "Rp 1.800.000",
            image: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg",
            description: "Traditional mask for ritual ceremonies with fine carved details"
          },
          {
            name: "House Guardian Statue",
            price: "Rp 3.200.000",
            image: "https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg",
            description: "Carved statue believed to bring good luck and protection"
          }
        ]
      }
    },
    sari: {
      id: {
        name: "Ibu Dayang",
        title: "Jemari Terampil di Balik Anyaman Rotan Malinau",
        location: "Malinau, Kalimantan Utara",
        image: "https://images.unsplash.com/photo-1707716312213-b1dee92f147a",
        story: "Ibu Dayang adalah seorang maestro anyaman rotan yang telah menggeluti profesi ini selama 25 tahun. Setiap pagi, beliau menelusuri hutan untuk mencari rotan terbaik dengan kualitas yang sempurna. Proses pewarnaan yang beliau lakukan menggunakan bahan-bahan alami dari hutan, menciptakan corak yang unik dan tahan lama.",
        challenge: "Tantangan terbesar Ibu Dayang adalah mendapatkan rotan berkualitas tinggi yang semakin langka karena deforestasi. Namun, dengan bergabung bersama KAYANA, beliau mendapat dukungan untuk program konservasi rotan dan pemasaran yang lebih luas.",
        philosophy: "Rotan adalah anugerah alam. Setiap anyaman yang saya buat adalah bentuk syukur saya kepada hutan yang telah memberikan kehidupan.",
        videoUrl: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
        works: [
          {
            name: "Keranjang Rotan Tradisional",
            price: "Rp 850.000",
            image: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
            description: "Keranjang anyaman dengan motif tradisional Malinau yang kuat dan tahan lama"
          },
          {
            name: "Topi Rotan Dayak",
            price: "Rp 450.000",
            image: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
            description: "Topi tradisional yang nyaman digunakan dengan ventilasi alami"
          },
          {
            name: "Vas Hias Rotan",
            price: "Rp 680.000",
            image: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
            description: "Vas dekoratif dengan anyaman rumit yang indah untuk hiasan rumah"
          }
        ]
      },
      en: {
        name: "Mrs. Dayang",
        title: "Skilled Hands Behind Malinau Rattan Weaving",
        location: "Malinau, North Kalimantan",
        image: "https://images.unsplash.com/photo-1707716312213-b1dee92f147a",
        story: "Mrs. Dayang is a rattan weaving master who has been in this profession for 25 years. Every morning, she explores the forest to find the best quality rattan. The coloring process she does uses natural materials from the forest, creating unique and durable patterns.",
        challenge: "Mrs. Dayang's biggest challenge is obtaining high-quality rattan that is increasingly rare due to deforestation. However, by joining KAYANA, she gets support for rattan conservation programs and wider marketing.",
        philosophy: "Rattan is a gift from nature. Every weave I make is a form of gratitude to the forest that has given life.",
        videoUrl: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
        works: [
          {
            name: "Traditional Rattan Basket",
            price: "Rp 850.000",
            image: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
            description: "Woven basket with traditional Malinau motifs that are strong and durable"
          },
          {
            name: "Dayak Rattan Hat",
            price: "Rp 450.000",
            image: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
            description: "Traditional hat that is comfortable to wear with natural ventilation"
          },
          {
            name: "Rattan Decorative Vase",
            price: "Rp 680.000",
            image: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
            description: "Decorative vase with beautiful intricate weaving for home decoration"
          }
        ]
      }
    },
    joko: {
      id: {
        name: "Sanggar Batik Tarakan Lestari",
        title: "Kolektif Ibu-Ibu Penjaga Batik Pesisir",
        location: "Tarakan, Kalimantan Utara",
        image: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg",
        story: "Sanggar Batik Tarakan Lestari adalah kolektif yang terdiri dari 15 ibu rumah tangga yang berdedikasi melestarikan batik khas pesisir dengan motif bakau dan kepiting. Mereka berinisiatif menghidupkan kembali tradisi batik yang hampir punah di wilayah pesisir Kalimantan Utara.",
        challenge: "Tantangan utama mereka adalah kurangnya akses ke pasar yang lebih luas dan persaingan dengan batik dari daerah lain. Sebelum bergabung dengan KAYANA, mereka kesulitan memasarkan produk mereka di luar Tarakan.",
        philosophy: "Batik adalah warisan leluhur yang harus dijaga. Setiap motif yang kami buat adalah doa untuk kelestarian alam pesisir dan kehidupan masyarakat nelayan.",
        videoUrl: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
        works: [
          {
            name: "Kain Batik Motif Bakau",
            price: "Rp 1.200.000",
            image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
            description: "Kain batik dengan motif bakau yang melambangkan kehidupan pesisir"
          },
          {
            name: "Selendang Batik Kepiting",
            price: "Rp 800.000",
            image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
            description: "Selendang dengan motif kepiting yang unik dan khas Tarakan"
          },
          {
            name: "Kemeja Batik Pesisir",
            price: "Rp 950.000",
            image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
            description: "Kemeja batik dengan corak pesisir yang elegan dan modern"
          }
        ]
      },
      en: {
        name: "Sanggar Batik Tarakan Lestari",
        title: "Collective of Mothers Preserving Coastal Batik",
        location: "Tarakan, North Kalimantan",
        image: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg",
        story: "Sanggar Batik Tarakan Lestari is a collective consisting of 15 housewives dedicated to preserving coastal batik with mangrove and crab motifs. They took the initiative to revive the batik tradition that was almost extinct in the coastal areas of North Kalimantan.",
        challenge: "Their main challenge is lack of access to wider markets and competition with batik from other regions. Before joining KAYANA, they had difficulty marketing their products outside Tarakan.",
        philosophy: "Batik is an ancestral heritage that must be preserved. Every motif we create is a prayer for the preservation of coastal nature and the lives of fishing communities.",
        videoUrl: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
        works: [
          {
            name: "Mangrove Motif Batik Cloth",
            price: "Rp 1.200.000",
            image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
            description: "Batik cloth with mangrove motifs symbolizing coastal life"
          },
          {
            name: "Crab Batik Scarf",
            price: "Rp 800.000",
            image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
            description: "Scarf with unique crab motifs characteristic of Tarakan"
          },
          {
            name: "Coastal Batik Shirt",
            price: "Rp 950.000",
            image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0",
            description: "Batik shirt with elegant and modern coastal patterns"
          }
        ]
      }
    }
  };

  const craftsman = craftsmenData[id] ? craftsmenData[id][language] : craftsmenData.budi[language];

  return (
    <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {craftsman.name}
              </h1>
              <h2 className="text-2xl text-green-200 mb-6">
                {craftsman.title}
              </h2>
              <div className="flex items-center text-green-100 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {craftsman.location}
              </div>
              <blockquote className="text-xl italic text-green-100 border-l-4 border-green-400 pl-6">
                "{craftsman.philosophy}"
              </blockquote>
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={craftsman.image}
                alt={craftsman.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {language === 'id' ? 'Kisah Perjalanan' : 'Journey Story'}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {craftsman.story}
                </p>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {language === 'id' ? 'Tantangan & Transformasi' : 'Challenge & Transformation'}
                </h3>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {craftsman.challenge}
                </p>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src={craftsman.videoUrl}
                  alt="Craftsman at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {language === 'id' ? 'Koleksi Karya' : 'Collection of Works'}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {language === 'id' ? 
                'Setiap karya adalah hasil dari dedikasi dan keahlian yang diwariskan turun temurun' :
                'Every work is the result of dedication and skills passed down through generations'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {craftsman.works.map((work, index) => (
              <div key={index} className={`work-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={work.image}
                    alt={work.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {work.name}
                  </h3>
                  <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {work.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      {work.price}
                    </span>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                      {language === 'id' ? 'Beli' : 'Buy'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'id' ? 'Dukung Karya Maestro Lainnya' : 'Support Other Master Works'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'id' ? 
              'Jelajahi karya-karya luar biasa dari para maestro pengrajin Kalimantan Utara lainnya' :
              'Explore extraordinary works from other North Kalimantan master craftsmen'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/maestro" className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300">
              {language === 'id' ? 'Lihat Semua Maestro' : 'See All Masters'}
            </Link>
            <Link to="/collection" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              {language === 'id' ? 'Jelajahi Koleksi' : 'Explore Collection'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CraftsmanProfile;