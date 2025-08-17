import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  currentLanguage: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLanguage }) => {
  const getTestimonialText = (key: string) => {
    const translations = {
      en: {
        title: 'What Our Community Says',
        subtitle: 'Real experiences from real people'
      },
      af: {
        title: 'Wat Ons Gemeenskap Sê',
        subtitle: 'Werklike ervarings van werklike mense'
      },
      zu: {
        title: 'Lokho Okushiwo Umphakathi Wethu',
        subtitle: 'Okwenzeka kwangempela kubantu bangempela'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mthembu',
      location: 'Johannesburg',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: {
        en: 'Mzansi Market has transformed how I shop for fresh produce. The local traders are so friendly and their products are always fresh!',
        af: 'Mzansi Market het die manier waarop ek vars produkte koop, verander. Die plaaslike handelaars is so vriendelik en hul produkte is altyd vars!',
        zu: 'I-Mzansi Market iguqule indlela engithengela ngayo imikhiqizo emusha. Abathengisi bendawo banomusa kakhulu futhi imikhiqizo yabo ihlala imusha!'
      }
    },
    {
      id: 2,
      name: 'Pieter van der Merwe',
      location: 'Cape Town',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: {
        en: 'The convenience of same-day delivery and supporting local businesses makes this platform amazing. Highly recommended!',
        af: 'Die gerief van dieselfde-dag aflewering en die ondersteuning van plaaslike besighede maak hierdie platform ongelooflik. Hoogs aanbeveel!',
        zu: 'Ukulula kokulethelwa ngosuku olulodwa nokusekela amabhizinisi endawo kwenza le nkundla ibe mnandi. Kuyanconywa kakhulu!'
      }
    },
    {
      id: 3,
      name: 'Nomthandazo Dlamini',
      location: 'Durban',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: {
        en: 'I love how easy it is to find authentic South African products. The quality is excellent and the traders are trustworthy.',
        af: 'Ek is lief vir hoe maklik dit is om outentieke Suid-Afrikaanse produkte te vind. Die kwaliteit is uitstekend en die handelaars is betroubaar.',
        zu: 'Ngiyakuthanda ukuthi kulula kangakanani ukuthola imikhiqizo yangempela yaseNingizimu Afrika. Ikhwalithi inhle kakhulu futhi abathengisi bathembekile.'
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {getTestimonialText('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTestimonialText('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-8 relative hover:bg-gray-100 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text[currentLanguage as keyof typeof testimonial.text]}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};