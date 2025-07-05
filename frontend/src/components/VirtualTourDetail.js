import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function VirtualTourDetail({ darkMode, language }) {
  const { id } = useParams();
  const [currentStage, setCurrentStage] = useState(0);
  const [quizVisible, setQuizVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [badges, setBadges] = useState([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const translations = {
    id: {
      stages: "Tahapan",
      currentStage: "Tahap Saat Ini",
      quiz: "Kuis Interaktif",
      submit: "Kirim Jawaban",
      badge: "Lencana Diraih!",
      continue: "Lanjutkan",
      completed: "Tur Selesai!",
      unlock: "Anda telah membuka cerita eksklusif!",
      backToTours: "Kembali ke Tur Virtual",
      playVideo: "Putar Video",
      pauseVideo: "Jeda Video"
    },
    en: {
      stages: "Stages",
      currentStage: "Current Stage",
      quiz: "Interactive Quiz",
      submit: "Submit Answer",
      badge: "Badge Earned!",
      continue: "Continue",
      completed: "Tour Completed!",
      unlock: "You've unlocked exclusive stories!",
      backToTours: "Back to Virtual Tours",
      playVideo: "Play Video",
      pauseVideo: "Pause Video"
    }
  };

  const t = translations[language];

  const tourData = {
    'dayak-shield': {
      id: {
        title: 'Proses Pembuatan Perisai Dayak Kayan',
        description: 'Ikuti perjalanan pembuatan perisai tradisional Dayak Kayan dari awal hingga akhir.',
        stages: [
          {
            title: 'Pemilihan Kayu',
            description: 'Memilih kayu yang tepat dari hutan Kalimantan untuk perisai yang kuat dan tahan lama.',
            videoUrl: 'https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg',
            quiz: {
              question: 'Jenis kayu apa yang paling cocok untuk membuat perisai tradisional?',
              options: ['Kayu Ulin', 'Kayu Jati', 'Kayu Mahoni', 'Kayu Pinus'],
              correct: 0
            }
          },
          {
            title: 'Mengukir Pola Dasar',
            description: 'Menggambar dan mengukir pola dasar yang melambangkan kekuatan dan perlindungan.',
            videoUrl: 'https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg',
            quiz: {
              question: 'Motif apa yang paling sering digunakan dalam perisai Dayak?',
              options: ['Motif Naga', 'Motif Burung', 'Motif Ular', 'Motif Harimau'],
              correct: 0
            }
          },
          {
            title: 'Pewarnaan Alami',
            description: 'Menggunakan pewarna alami dari tumbuhan hutan untuk memberikan warna yang hidup.',
            videoUrl: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0',
            quiz: {
              question: 'Dari mana warna merah dalam perisai Dayak biasanya berasal?',
              options: ['Getah Pohon', 'Kulit Kayu', 'Daun Merah', 'Buah Hutan'],
              correct: 1
            }
          },
          {
            title: 'Filosofi Motif',
            description: 'Setiap motif memiliki makna mendalam yang berkaitan dengan spiritual dan budaya Dayak.',
            videoUrl: 'https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg',
            quiz: {
              question: 'Apa makna utama dari motif naga dalam perisai Dayak?',
              options: ['Kekuatan', 'Perlindungan', 'Kemakmuran', 'Semua benar'],
              correct: 3
            }
          }
        ]
      },
      en: {
        title: 'Dayak Kayan Shield Making Process',
        description: 'Follow the journey of creating traditional Dayak Kayan shields from start to finish.',
        stages: [
          {
            title: 'Wood Selection',
            description: 'Choosing the right wood from Kalimantan forests for strong and durable shields.',
            videoUrl: 'https://images.pexels.com/photos/7232500/pexels-photo-7232500.jpeg',
            quiz: {
              question: 'What type of wood is most suitable for making traditional shields?',
              options: ['Ulin Wood', 'Teak Wood', 'Mahogany Wood', 'Pine Wood'],
              correct: 0
            }
          },
          {
            title: 'Basic Pattern Carving',
            description: 'Drawing and carving basic patterns that symbolize strength and protection.',
            videoUrl: 'https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg',
            quiz: {
              question: 'What motif is most commonly used in Dayak shields?',
              options: ['Dragon Motif', 'Bird Motif', 'Snake Motif', 'Tiger Motif'],
              correct: 0
            }
          },
          {
            title: 'Natural Coloring',
            description: 'Using natural dyes from forest plants to give vibrant colors.',
            videoUrl: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0',
            quiz: {
              question: 'Where does the red color in Dayak shields usually come from?',
              options: ['Tree Sap', 'Tree Bark', 'Red Leaves', 'Forest Fruits'],
              correct: 1
            }
          },
          {
            title: 'Motif Philosophy',
            description: 'Every motif has deep meaning related to Dayak spirituality and culture.',
            videoUrl: 'https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg',
            quiz: {
              question: 'What is the main meaning of the dragon motif in Dayak shields?',
              options: ['Strength', 'Protection', 'Prosperity', 'All correct'],
              correct: 3
            }
          }
        ]
      }
    }
  };

  const currentTour = tourData[id] ? tourData[id][language] : tourData['dayak-shield'][language];

  const handleQuizAnswer = () => {
    if (selectedAnswer === currentTour.stages[currentStage].quiz.correct.toString()) {
      const newBadge = `${currentTour.stages[currentStage].title} - ${language === 'id' ? 'Ahli' : 'Expert'}`;
      setBadges([...badges, newBadge]);
      setQuizVisible(false);
      if (currentStage < currentTour.stages.length - 1) {
        setCurrentStage(currentStage + 1);
      }
    } else {
      alert(language === 'id' ? 'Jawaban kurang tepat, coba lagi!' : 'Incorrect answer, try again!');
    }
    setSelectedAnswer('');
  };

  const triggerQuiz = () => {
    setIsVideoPlaying(false);
    setQuizVisible(true);
  };

  useEffect(() => {
    // Simulate video playing for 10 seconds then show quiz
    if (isVideoPlaying) {
      const timer = setTimeout(() => {
        triggerQuiz();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isVideoPlaying, currentStage]);

  return (
    <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentTour.title}
              </h1>
              <p className="text-xl text-green-100 mb-6">
                {currentTour.description}
              </p>
              <div className="flex items-center space-x-4 text-green-200">
                <span>{t.currentStage}: {currentStage + 1}/{currentTour.stages.length}</span>
                <span>•</span>
                <span>{language === 'id' ? 'Lencana' : 'Badges'}: {badges.length}</span>
              </div>
            </div>
            <Link to="/virtual-tours" className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
              {t.backToTours}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className={`rounded-3xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="aspect-video relative">
                  <img 
                    src={currentTour.stages[currentStage].videoUrl}
                    alt={currentTour.stages[currentStage].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isVideoPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {isVideoPlaying ? (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                  {isVideoPlaying && (
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                      {language === 'id' ? 'Sedang Memutar...' : 'Playing...'}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {currentTour.stages[currentStage].title}
                  </h2>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {currentTour.stages[currentStage].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stage Navigator */}
              <div className={`rounded-3xl p-6 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {t.stages}
                </h3>
                <div className="space-y-3">
                  {currentTour.stages.map((stage, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStage(index)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                        index === currentStage
                          ? 'bg-green-600 text-white'
                          : index < currentStage
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index <= currentStage ? 'bg-white text-green-600' : 'bg-gray-300 text-gray-500'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium">{stage.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className={`rounded-3xl p-6 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {language === 'id' ? 'Lencana Pengetahuan' : 'Knowledge Badges'}
                </h3>
                <div className="space-y-2">
                  {badges.map((badge, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-amber-800">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      {quizVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-lg w-full rounded-3xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.quiz}
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {currentTour.stages[currentStage].quiz.question}
            </p>
            <div className="space-y-3 mb-6">
              {currentTour.stages[currentStage].quiz.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="quiz"
                    value={index.toString()}
                    checked={selectedAnswer === index.toString()}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    className="w-4 h-4 text-green-600 focus:ring-green-500"
                  />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
            <button
              onClick={handleQuizAnswer}
              disabled={!selectedAnswer}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50"
            >
              {t.submit}
            </button>
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {currentStage === currentTour.stages.length - 1 && badges.length === currentTour.stages.length && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-lg w-full rounded-3xl p-8 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.completed}
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
              {t.unlock}
            </p>
            <div className="flex space-x-4">
              <Link to="/virtual-tours" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                {t.backToTours}
              </Link>
              <Link to="/collection" className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
                {language === 'id' ? 'Lihat Koleksi' : 'View Collection'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VirtualTourDetail;