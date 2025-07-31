import React, { useState } from 'react';
import { Heart, ArrowLeft } from 'lucide-react';

const LoveGame: React.FC = () => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Progressive questions that get more pleading/romantic
  const questions = [
    "Do you love me?",
    "Please love me 🥺",
    "Pretty please with a cherry on top? 🍒",
    "I'll give you all my snacks... 🍪",
    "I promise to do the dishes forever! 🧽",
    "I'll watch all your favorite movies! 🎬",
    "I'll let you choose the music in the car! 🎵",
    "I'll share my Netflix password! 📺",
    "I'll give you the last slice of pizza! 🍕",
    "I'll wake up early to make you breakfast! 🥞",
    "Fine... I'll even watch reality TV with you! 📺",
    "I'll pretend to like your cooking! 👨‍🍳",
    "I'll laugh at all your jokes (even the bad ones)! 😂",
    "I'll carry your shopping bags forever! 🛍️",
    "I'll remember all our anniversaries! 📅",
    "Okay, you win... just say yes already! 😭"
  ];

  // Calculate YES button size (exponential growth)
  const yesButtonScale = Math.pow(1.5, noClickCount);
  const maxScale = 6; // Prevent button from getting too large
  const actualScale = Math.min(yesButtonScale, maxScale);

  const handleNoClick = () => {
    if (noClickCount < questions.length - 1) {
      setIsAnimating(true);
      setNoClickCount(prev => prev + 1);
      
      // Reset animation after a short delay
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  const resetGame = () => {
    setShowSuccess(false);
    setNoClickCount(0);
    setIsAnimating(false);
  };

  if (showSuccess) {
    return (
      <div className="relative bg-gradient-to-br from-pink-200 via-red-200 to-rose-300 rounded-3xl p-8 overflow-hidden">
        {/* Celebration Hearts */}
        <div className="celebration-hearts-game">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`celebration-heart-game heart-game-${i + 1}`}>
              <Heart className="text-red-500" size={Math.random() * 25 + 10} />
            </div>
          ))}
        </div>

        <div className="text-center relative z-10">
          <div className="success-animation">
            <div className="mb-6">
              <Heart className="text-red-500 mx-auto animate-bounce" size={60} />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-4 animate-pulse">
              Yay! I knew it! 💕
            </h3>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-pink-300 mb-6">
              <p className="text-lg md:text-xl text-gray-800 mb-3">
                You finally said YES! 🎉
              </p>
              <p className="text-base text-gray-700 mb-4">
                I love you too, Divyanshi Gautam! ❤️
              </p>
              <p className="text-sm text-gray-600 italic">
                "Every love story is beautiful, but ours is my favorite."
              </p>
            </div>

            <button
              onClick={resetGame}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              <ArrowLeft size={16} />
              Ask me again!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 rounded-3xl p-8 relative overflow-hidden">
      {/* Background Hearts */}
      <div className="game-floating-hearts">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`game-floating-heart heart-game-bg-${i + 1}`}>
            <Heart className="text-pink-400 opacity-20" size={Math.random() * 20 + 8} />
          </div>
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Question Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-pink-200 mb-6">
          <div className="mb-6">
            <Heart className="text-red-500 mx-auto mb-4 animate-pulse" size={40} />
            <h3 className={`text-xl md:text-2xl font-bold text-gray-800 mb-6 transition-all duration-500 ${isAnimating ? 'animate-bounce' : ''}`}>
              {questions[noClickCount]}
            </h3>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col items-center gap-4">
            {/* YES Button - Grows exponentially */}
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-500 hover:scale-110 shadow-lg transform"
              style={{
                transform: `scale(${actualScale})`,
                padding: `${Math.max(10, 6 * actualScale)}px ${Math.max(20, 12 * actualScale)}px`,
                fontSize: `${Math.max(14, 10 * Math.min(actualScale, 2))}px`,
                zIndex: 10,
                position: 'relative'
              }}
            >
              YES! 💕
            </button>

            {/* NO Button - Stays same size but becomes less prominent */}
            <button
              onClick={handleNoClick}
              className={`bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold py-2 px-4 rounded-full hover:from-gray-500 hover:to-gray-700 transition-all duration-300 shadow-md text-sm ${
                noClickCount > 5 ? 'opacity-50 scale-75' : ''
              } ${
                noClickCount > 10 ? 'opacity-25 scale-50' : ''
              }`}
            >
              {noClickCount > 10 ? 'Really? 😢' : noClickCount > 5 ? 'No... 😔' : 'NO'}
            </button>
          </div>

          {/* Progress indicator */}
          {noClickCount > 0 && (
            <div className="mt-6 text-xs text-gray-600">
              <p>NO clicks: {noClickCount}</p>
              <p className="text-xs mt-1 italic">
                {noClickCount < 5 && "The YES button is growing... 👀"}
                {noClickCount >= 5 && noClickCount < 10 && "Look how big YES is getting! 😏"}
                {noClickCount >= 10 && "Just click YES already! 😂"}
              </p>
            </div>
          )}
        </div>

        {/* Hint Text */}
        <div className="text-center">
          <p className="text-gray-600 text-xs italic">
            {noClickCount === 0 && "Choose wisely... 😉"}
            {noClickCount > 0 && noClickCount < 3 && "Notice anything different? 🤔"}
            {noClickCount >= 3 && noClickCount < 6 && "The YES button is getting bigger! 📈"}
            {noClickCount >= 6 && noClickCount < 10 && "You can't escape the YES! 😄"}
            {noClickCount >= 10 && "Resistance is futile! 🤖💕"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveGame;