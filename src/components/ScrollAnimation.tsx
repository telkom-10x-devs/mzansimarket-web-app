import React, { useEffect, useState } from 'react';
import { Apple, Carrot, Fish, Beef, Milk, Heading as Bread } from 'lucide-react';

export const ScrollAnimation: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate animation phase based on scroll position
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(currentScrollY / (maxScroll * 0.6), 1);
      setAnimationPhase(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const foods = [
    { icon: Apple, color: 'text-red-500', delay: 0 },
    { icon: Carrot, color: 'text-orange-500', delay: 0.2 },
    { icon: Fish, color: 'text-blue-500', delay: 0.4 },
    { icon: Beef, color: 'text-red-700', delay: 0.6 },
    { icon: Milk, color: 'text-blue-300', delay: 0.8 },
    { icon: Bread, color: 'text-yellow-600', delay: 1.0 }
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {/* Floating Food Items */}
      {foods.map((food, index) => {
        const Icon = food.icon;
        const progress = Math.max(0, Math.min(1, (animationPhase - food.delay) * 2));
        const startX = 20 + (index * 15);
        const startY = 20 + (index * 10);
        const endX = 85;
        const endY = 15;
        
        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress + Math.sin(progress * Math.PI * 2) * 5;
        const scale = 0.8 + progress * 0.4;
        const opacity = animationPhase > 0.1 ? Math.min(1, progress * 2) : 0;
        
        return (
          <div
            key={index}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${currentX}%`,
              top: `${currentY}%`,
              transform: `scale(${scale}) rotate(${progress * 360}deg)`,
              opacity: opacity,
              transitionDelay: `${food.delay * 100}ms`
            }}
          >
            <Icon className={`w-8 h-8 ${food.color} drop-shadow-lg`} />
          </div>
        );
      })}

      {/* Shopping Basket */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          right: '10%',
          top: '15%',
          transform: `scale(${0.8 + animationPhase * 0.4}) rotate(${animationPhase * 10}deg)`,
          opacity: animationPhase > 0.1 ? 1 : 0
        }}
      >
        <div className="relative">
          {/* Basket */}
          <div className="w-16 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-lg relative overflow-hidden">
            <div className="absolute inset-x-2 top-2 bottom-1 bg-gradient-to-b from-amber-500 to-amber-700 rounded-b-lg"></div>
            <div className="absolute inset-x-3 top-3 bottom-2 bg-gradient-to-b from-amber-400 to-amber-600 rounded-b-lg"></div>
            
            {/* Basket Handle */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 border-2 border-amber-800 rounded-t-full bg-transparent"></div>
            
            {/* Basket Weave Pattern */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="absolute w-full h-0.5 bg-amber-900" style={{ top: `${30 + i * 20}%` }}></div>
              ))}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="absolute h-full w-0.5 bg-amber-900" style={{ left: `${20 + i * 20}%` }}></div>
              ))}
            </div>
          </div>
          
          {/* Sparkle Effects */}
          {animationPhase > 0.5 && (
            <>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 200}ms`,
                    animationDuration: '1s'
                  }}
                ></div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Success Message */}
      {animationPhase > 0.8 && (
        <div
          className="absolute right-[5%] top-[30%] bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce"
          style={{
            opacity: Math.min(1, (animationPhase - 0.8) * 5)
          }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-1 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium">Fresh & Local!</span>
          </div>
        </div>
      )}
    </div>
  );
};