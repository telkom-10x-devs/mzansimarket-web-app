import React from 'react';
import { MapPin, Truck, Shield } from 'lucide-react';

interface HeroProps {
  currentLanguage: string;
}

export const Hero: React.FC<HeroProps> = ({ currentLanguage }) => {
  const getHeroText = (key: string) => {
    const translations = {
      en: {
        title: 'Connect with Trusted Local Traders',
        subtitle: 'Discover authentic South African products from verified community traders. Fresh, local, and delivered to your door.',
        cta: 'Start Shopping',
        explore: 'Become a Trader',
        feature1: 'Local Traders',
        feature2: 'Same-Day Delivery',
        feature3: 'Verified & Trusted'
      },
      af: {
        title: 'Verbind met Vertroude Plaaslike Handelaars',
        subtitle: 'Ontdek outentieke Suid-Afrikaanse produkte van geverifieerde gemeenskapshandelaars. Vars, plaaslik, en by jou deur afgelewer.',
        cta: 'Begin Inkopies',
        explore: 'Word \'n Handelaar',
        feature1: 'Plaaslike Handelaars',
        feature2: 'Selfde-Dag Aflewering',
        feature3: 'Geverifieer & Vertrou'
      },
      zu: {
        title: 'Xhumana Nabathengisi Bendawo Abathembekile',
        subtitle: 'Thola imikhiqizo yangempela yaseNingizimu Afrika evela kubathengisi bomphakathi abaqinisekisiwe. Emusha, yasendaweni, futhi ilethwa emnyango wakho.',
        cta: 'Qala Ukuthenga',
        explore: 'Yiba Umthengisi',
        feature1: 'Abathengisi Bendawo',
        feature2: 'Ukulethwa Ngosuku Olulodwa',
        feature3: 'Kuqinisekisiwe & Kuthenjwa'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-400 rounded-full filter blur-2xl animate-bounce delay-500"></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-green-400 rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-4000"></div>
        
        {/* Animated delivery bike */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-10 hidden lg:block">
          <div className="w-32 h-32 animate-bounce">
            <Truck className="w-full h-full text-orange-500" />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in">
            {getHeroText('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            {getHeroText('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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