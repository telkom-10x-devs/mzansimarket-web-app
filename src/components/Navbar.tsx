import React, { useState } from 'react';
import { Search, MapPin, Globe, Menu, X, ShoppingBag, Heart } from 'lucide-react';

interface NavbarProps {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const languages = {
    en: 'English',
    af: 'Afrikaans',
    zu: 'isiZulu'
  };

  const getNavText = (key: string) => {
    const translations = {
      en: {
        home: 'Home',
        traders: 'Traders',
        products: 'Products',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
        signup: 'Sign Up',
        searchPlaceholder: 'Search products or traders...'
      },
      af: {
        home: 'Tuis',
        traders: 'Handelaars',
        products: 'Produkte',
        about: 'Oor Ons',
        contact: 'Kontak',
        login: 'Meld Aan',
        signup: 'Registreer',
        searchPlaceholder: 'Soek produkte of handelaars...'
      },
      zu: {
        home: 'Ikhaya',
        traders: 'Abathengisi',
        products: 'Imikhiqizo',
        about: 'Mayelana',
        contact: 'Xhumana',
        login: 'Ngena',
        signup: 'Bhalisa',
        searchPlaceholder: 'Sesha imikhiqizo noma abathengisi...'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/85 via-white/90 to-white/85 backdrop-blur-xl border-b border-orange-200/30 shadow-lg shadow-orange-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <h1 className="text-2xl font-bold text-slate-900 relative overflow-hidden">
              <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">
                Mzansi
              </span>
              <span className="text-orange-500 inline-block transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 ml-1">
                Market
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-500"></div>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {['home', 'traders', 'products', 'about', 'contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-orange-500 px-4 py-3 text-sm font-medium transition-all duration-300 relative group rounded-lg hover:bg-orange-50/50"
                >
                  <span className="relative z-10">{getNavText(item)}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 group">
            <div className={`relative w-full transition-all duration-300 ${searchFocused ? 'transform scale-105' : ''}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 transition-all duration-300 ${searchFocused ? 'text-orange-500 scale-110' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 focus:bg-white sm:text-sm transition-all duration-300 shadow-sm focus:shadow-lg"
                placeholder={getNavText('searchPlaceholder')}
              />
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/0 via-orange-400/5 to-orange-400/0 pointer-events-none transition-opacity duration-300 ${searchFocused ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          </div>

          {/* Language Selector & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Cart Icon with Animation */}
            <div className="relative group cursor-pointer">
              <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors duration-300" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-medium animate-pulse">
                3
              </div>
              <div className="absolute -inset-2 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Wishlist Icon */}
            <div className="relative group cursor-pointer">
              <Heart className="w-6 h-6 text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition-all duration-300" />
              <div className="absolute -inset-2 bg-red-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-orange-50/50 group"
              >
                <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>{languages[currentLanguage as keyof typeof languages]}</span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl py-2 z-10 border border-orange-100 animate-in slide-in-from-top-2 duration-200">
                  {Object.entries(languages).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setCurrentLanguage(code);
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 rounded-lg mx-1"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="text-slate-900 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-50 relative group">
              <span className="relative z-10">{getNavText('login')}</span>
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-orange-200 relative overflow-hidden group">
              <span className="relative z-10">{getNavText('signup')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500 p-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
            >
              {isMenuOpen ? 
                <X className="h-6 w-6 transform rotate-0 transition-transform duration-300" /> : 
                <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-orange-200/30 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'traders', 'products', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-orange-500 block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-orange-50/50"
              >
                {getNavText(item)}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-orange-200/50">
              <div className="flex items-center space-x-3 px-3">
                <button className="text-slate-900 hover:text-orange-500 text-base font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-all duration-300">
                  {getNavText('login')}
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg text-base font-medium transform hover:scale-105 transition-all duration-300">
                  {getNavText('signup')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};