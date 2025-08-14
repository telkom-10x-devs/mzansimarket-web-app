import React from 'react';
import { Search, ShoppingCart, Truck, Star } from 'lucide-react';

interface HowItWorksProps {
  currentLanguage: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLanguage }) => {
  const getStepText = (key: string) => {
    const translations = {
      en: {
        title: 'How Mzansi Market Works',
        subtitle: 'Simple steps to connect with local traders',
        step1: 'Browse & Search',
        step1desc: 'Find products and traders in your area using our location-based search',
        step2: 'Add to Cart',
        step2desc: 'Select items from multiple verified traders and add them to your cart',
        step3: 'Choose Delivery',
        step3desc: 'Pick same-day delivery or convenient pickup from your chosen trader',
        step4: 'Rate & Review',
        step4desc: 'Share your experience to help build our trusted community'
      },
      af: {
        title: 'Hoe Mzansi Market Werk',
        subtitle: 'Eenvoudige stappe om met plaaslike handelaars te verbind',
        step1: 'Blaai & Soek',
        step1desc: 'Vind produkte en handelaars in jou area deur ons ligging-gebaseerde soektog',
        step2: 'Voeg by Mandjie',
        step2desc: 'Kies items van verskeie geverifieerde handelaars en voeg dit by jou mandjie',
        step3: 'Kies Aflewering',
        step3desc: 'Kies selfde-dag aflewering of gerieflike optel van jou gekose handelaar',
        step4: 'Gradeer & Resenseer',
        step4desc: 'Deel jou ervaring om ons vertroude gemeenskap te help bou'
      },
      zu: {
        title: 'Indlela Yokusebenza kwe-Mzansi Market',
        subtitle: 'Izinyathelo ezilula zokuxhumana nabathengisi bendawo',
        step1: 'Bheka & Sesha',
        step1desc: 'Thola imikhiqizo nabathengisi endaweni yakho usebenzisa ukusesha okususelwe endaweni',
        step2: 'Engeza Ekalishini',
        step2desc: 'Khetha izinto kubathengisi abaningana abaqinisekisiwe futhi uzengeze ekalishini lakho',
        step3: 'Khetha Ukulethwa',
        step3desc: 'Khetha ukulethwa ngosuku olulodwa noma ukuthatha okulula kumthengisi wakho okhethiwe',
        step4: 'Linganisa & Beka Umbono',
        step4desc: 'Yabelana ngolwazi lwakho ukusiza ukwakha umphakathi wethu othembekile'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const steps = [
    { icon: Search, key: 'step1' },
    { icon: ShoppingCart, key: 'step2' },
    { icon: Truck, key: 'step3' },
    { icon: Star, key: 'step4' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {getStepText('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getStepText('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group relative">
                <div className="relative mb-6">
                  <div className="bg-orange-500 text-white p-6 rounded-full inline-flex items-center justify-center group-hover:bg-orange-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-slate-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center group-hover:animate-bounce">
                    {index + 1}
                  </div>
                  <div className="absolute inset-0 bg-orange-200 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {getStepText(step.key)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {getStepText(`${step.key}desc`)}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 translate-x-8">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                      <div className="w-0 h-0 border-l-4 border-l-gray-400 border-y-2 border-y-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};