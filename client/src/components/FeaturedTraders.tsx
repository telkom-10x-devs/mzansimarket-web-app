import React from 'react';
import { Star, MapPin, Badge, Truck } from 'lucide-react';

interface FeaturedTradersProps {
  currentLanguage: string;
}

export const FeaturedTraders: React.FC<FeaturedTradersProps> = ({ currentLanguage }) => {
  const getTraderText = (key: string) => {
    const translations = {
      en: {
        title: 'Featured Traders',
        subtitle: 'Meet our trusted community of verified local traders',
        viewAll: 'View All Traders',
        verified: 'Verified',
        delivers: 'Delivers',
        pickup: 'Pickup Available'
      },
      af: {
        title: 'Uitgestalde Handelaars',
        subtitle: 'Ontmoet ons vertroude gemeenskap van geverifieerde plaaslike handelaars',
        viewAll: 'Sien Alle Handelaars',
        verified: 'Geverifieer',
        delivers: 'Lewer Af',
        pickup: 'Optel Beskikbaar'
      },
      zu: {
        title: 'Abathengisi Abakhethiwe',
        subtitle: 'Hlangana nomphakathi wethu othembekile wabathengisi bendawo abaqinisekisiwe',
        viewAll: 'Buka Bonke Abathengisi',
        verified: 'Kuqinisekisiwe',
        delivers: 'Kuyaletha',
        pickup: 'Ukuthatha Kuyatholakala'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const traders = [
    {
      id: 1,
      name: 'Nomsa\'s Fresh Produce',
      location: 'Soweto, Johannesburg',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      speciality: 'Fresh Vegetables & Fruits',
      delivers: true,
      pickup: true
    },
    {
      id: 2,
      name: 'Mandla\'s Spice Corner',
      location: 'Mitchell\'s Plain, Cape Town',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
      speciality: 'Traditional Spices & Herbs',
      delivers: true,
      pickup: true
    },
    {
      id: 3,
      name: 'Zanele\'s Craft Market',
      location: 'Umlazi, Durban',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=400',
      speciality: 'Handmade Crafts & Art',
      delivers: false,
      pickup: true
    },
    {
      id: 4,
      name: 'Thabo\'s Meat Market',
      location: 'Mamelodi, Pretoria',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=400',
      speciality: 'Fresh Meat & Biltong',
      delivers: true,
      pickup: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {getTraderText('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {getTraderText('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {traders.map((trader) => (
            <div
              key={trader.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={trader.image}
                  alt={trader.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Badge className="w-3 h-3 mr-1" />
                  {getTraderText('verified')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{trader.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{trader.location}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{trader.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-1">({trader.reviews} reviews)</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{trader.speciality}</p>
                
                <div className="flex items-center space-x-4 text-xs">
                  {trader.delivers && (
                    <div className="flex items-center text-green-600">
                      <Truck className="w-3 h-3 mr-1" />
                      {getTraderText('delivers')}
                    </div>
                  )}
                  {trader.pickup && (
                    <div className="flex items-center text-blue-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {getTraderText('pickup')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
            {getTraderText('viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};