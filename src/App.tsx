import React from 'react';
import { MapPin, Truck, Shield, Sparkles } from 'lucide-react';

interface HeroProps {
  currentLanguage: 'en' | 'af' | 'zu';
}

export const Hero: React.FC<HeroProps> = ({ currentLanguage }) => {
  const getHeroText = (key: string) => {
    const translations = {
      en: {
        title: 'Connect with Trusted Local Traders',
        subtitle:
          'Discover authentic South African products from verified community traders. Fresh, local, and delivered to your door.',
        cta: 'Start Shopping',
        explore: 'Become a Trader',
        feature1: 'Local Traders',
        feature2: 'Same-Day Delivery',
        feature3: 'Verified & Trusted',
      },
      af: {
        title: 'Verbind met Vertroude Plaaslike Handelaars',
        subtitle:
          'Ontdek outentieke Suid-Afrikaanse produkte van geverifieerde gemeenskapshandelaars. Vars, plaaslik, en by jou deur afgelewer.',
        cta: 'Begin Inkopies',
        explore: "Word 'n Handelaar",
        feature1: 'Plaaslike Handelaars',
        feature2: 'Selfde-Dag Aflewering',
        feature3: 'Geverifieer & Vertrou',
      },
      zu: {
        title: 'Xhumana Nabathengisi Bendawo Abathembekile',
        subtitle:
          'Thola imikhiqizo yangempela yaseNingizimu Afrika evela kubathengisi bomphakathi abaqinisekisiwe. Emusha, yasendaweni, futhi ilethwa emnyango wakho.',
        cta: 'Qala Ukuthenga',
        explore: 'Yiba Umthengisi',
        feature1: 'Abathengisi Bendawo',
        feature2: 'Ukulethwa Ngosuku Olulodwa',
        feature3: 'Kuqinisekisiwe & Kuthenjwa',
      },
    };

    // Fallback to English if currentLanguage is invalid
    const lang = translations[currentLanguage] || translations.en;
    return lang[key as keyof typeof lang];
  };

  // Split title safely
  const titleParts = getHeroText('title').split(' ');
  const firstPart = titleParts.slice(0, 2).join(' ');
  const secondPart = titleParts.slice(2).join(' ');

  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-300 rounded-full filter blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated delivery truck illustration */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 animate-bounce">
            <Truck className="w-full h-full text-orange-500" />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-orange-500 animate-spin mr-3" />
            <span className="text-orange-600 font-semibold text-lg animate-pulse">
              South Africa's Premier Local Market
            </span>
            <Sparkles className="w-8 h-8 text-orange-500 animate-spin ml-3" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in relative">
            <span className="inline-block animate-slide-up">{firstPart}</span>
            <br />
            <span className="inline-block animate-slide-up delay-300 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {secondPart}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            {getHeroText('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-orange-600">
              {getHeroText('cta')}
            </button>
            <button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              {getHeroText('explore')}
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{getHeroText('feature1')}</h3>
              <p className="text-gray-600">Connect with trusted community traders in your area</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4">
                <Truck className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{getHeroText('feature2')}</h3>
              <p className="text-gray-600">Fast delivery or convenient pickup options</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{getHeroText('feature3')}</h3>
              <p className="text-gray-600">All traders are verified for your peace of mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
