import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Play, Pause, Camera, MessageCircle, Sparkles } from 'lucide-react';
import LoveGame from './components/LoveGame';

const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showMessages, setShowMessages] = useState(false);

  // Sample images - replace with actual image URLs
  const images = [
    "public/Images/Cute(1).jpg",
    "public/Images/Kamar.jpg",
    "public/Images/Rainy [hoto.jpg",
    "public/Images/Saaree(1).jpg",
    "public/Images/School.jpg"
  ];

  // Love messages
  const loveMessages = [
    "Every moment with you feels like a beautiful dream ✨",
    "Your smile lights up my entire world 🌟",
    "I fall in love with you more every single day 💕",
    "You are my sunshine on the cloudiest days ☀️",
    "With you, every day is Valentine's Day 🌹",
    "You make my heart skip a beat every time I see you 💓",
    "I love the way you laugh at my silly jokes 😄",
    "You are my favorite notification 📱💕",
    "I could listen to your voice for hours 🎵",
    "You are my happily ever after 👑"
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  // Auto-cycle messages
  useEffect(() => {
    if (showMessages) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % loveMessages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showMessages, loveMessages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float-${(i % 3) + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <Heart 
                className="text-pink-300 opacity-20" 
                size={Math.random() * 30 + 15} 
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles className="text-pink-500 animate-pulse" size={40} />
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 animate-gradient">
                Happy Girlfriend Day
              </h1>
              <Sparkles className="text-pink-500 animate-pulse" size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 mb-8">
              Divyanshi Gautam! 🎉
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200 mb-8">
            <div className="mb-8">
              <Heart className="text-red-500 mx-auto mb-6 animate-heartbeat" size={80} />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
              Today is not just another day, it’s the celebration of the most amazing person in my life—
DIVYANSHI GAUTAM! ❤️
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every moment with you feels like a gift, and today is extra special because it’s our Girlfriend Day.
You fill my life with happiness, laughter, and endless love, and I’m grateful for every second we spend together. 💕
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 border border-pink-200">
                <Heart className="text-pink-500 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-gray-800 mb-2">Your Beautiful Heart</h3>
                <p className="text-sm text-gray-600">The kindness and love you show everyone around you</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200">
                <Sparkles className="text-purple-500 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-gray-800 mb-2">Your Bright Smile</h3>
                <p className="text-sm text-gray-600">That lights up every room you enter</p>
              </div>
              
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 border border-rose-200">
                <MessageCircle className="text-rose-500 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-gray-800 mb-2">Your Sweet Voice</h3>
                <p className="text-sm text-gray-600">That makes every conversation feel like music</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="text-pink-500" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Beautiful Memories
              </h2>
              <Camera className="text-pink-500" size={32} />
            </div>
            <p className="text-gray-600 text-lg">
              Every picture tells a story of our love 📸
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-pink-200">
            <div className="relative mb-6">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={images[currentImageIndex]} 
                  alt={`Memory ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="text-gray-700" size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="text-gray-700" size={24} />
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={toggleSlideshow}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                {isPlaying ? 'Pause' : 'Play'} Slideshow
              </button>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Love Messages Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="text-pink-500" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Messages from My Heart
              </h2>
              <MessageCircle className="text-pink-500" size={32} />
            </div>
            <p className="text-gray-600 text-lg">
              Words that express how much you mean to me 💕
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200 text-center">
            {!showMessages ? (
              <div>
                <Heart className="text-red-500 mx-auto mb-6 animate-pulse" size={60} />
                <p className="text-xl text-gray-800 mb-8">
                  Click below to see some special messages I wrote for you 💌
                </p>
                <button
                  onClick={() => setShowMessages(true)}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg text-lg font-semibold"
                >
                  Show Messages 💕
                </button>
              </div>
            ) : (
              <div className="min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6">
                    <Heart className="text-red-500 mx-auto animate-heartbeat" size={50} />
                  </div>
                  <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed animate-fade-in">
                    {loveMessages[currentMessageIndex]}
                  </p>
                  <div className="mt-8 flex justify-center gap-2">
                    {loveMessages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMessageIndex 
                            ? 'bg-pink-500 scale-125' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Love Game Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="text-pink-500" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                A Special Question
              </h2>
              <Heart className="text-pink-500" size={32} />
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Before we end this special day, I have one important question for you...
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <LoveGame />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="text-red-500 animate-pulse" size={20} style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-200">
              <p className="text-lg text-gray-800 mb-2 text-center">
                With all my love, From Your Mashroom aka Nitish 🍄
              </p>
              <p className="text-sm text-gray-600 text-center">
                Made with lots of love and a little bit of coding magic ✨
              </p>
              <p className="text-xs text-gray-500 mt-4">
                Happy Girlfriend Day My Girl 💕
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(360deg); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; background-size: 200% 200%; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default App;