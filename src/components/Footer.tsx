import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  currentLanguage: string;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const getFooterText = (key: string) => {
    const translations = {
      en: {
        tagline: 'Connecting communities through local trade',
        quickLinks: 'Quick Links',
        support: 'Support',
        legal: 'Legal',
        newsletter: 'Stay Updated',
        newsletterDesc: 'Subscribe to our newsletter for the latest updates and offers',
        subscribe: 'Subscribe',
        rights: '2025 Mzansi Market. All rights reserved.',
        home: 'Home',
        traders: 'Browse Traders',
        products: 'Products',
        about: 'About Us',
        help: 'Help Center',
        contact: 'Contact Us',
        faq: 'FAQ',
        shipping: 'Shipping Info',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        returns: 'Returns Policy'
      },
      af: {
        tagline: 'Verbind gemeenskappe deur plaaslike handel',
        quickLinks: 'Vinnige Skakels',
        support: 'Ondersteuning',
        legal: 'Wetlik',
        newsletter: 'Bly Op Hoogte',
        newsletterDesc: 'Teken in op ons nuusbrief vir die nuutste opdaterings en aanbiedinge',
        subscribe: 'Teken In',
        rights: '2025 Mzansi Market. Alle regte voorbehou.',
        home: 'Tuis',
        traders: 'Blaai Handelaars',
        products: 'Produkte',
        about: 'Oor Ons',
        help: 'Hulp Sentrum',
        contact: 'Kontak Ons',
        faq: 'Gereelde Vrae',
        shipping: 'Aflewering Info',
        privacy: 'Privaatheidsbeleid',
        terms: 'Diensvoorwaardes',
        returns: 'Terugkeerbeleid'
      },
      zu: {
        tagline: 'Ukuxhuma imiphakathi ngokuhweba kwasendaweni',
        quickLinks: 'Izixhumanisi Ezisheshayo',
        support: 'Ukusekela',
        legal: 'Ezasemthethweni',
        newsletter: 'Hlala Unolwazi',
        newsletterDesc: 'Bhalisa ku-newsletter yethu ukuze uthole izibuyekezo zakamuva namathuba',
        subscribe: 'Bhalisa',
        rights: '2025 Mzansi Market. Wonke amalungelo agodliwe.',
        home: 'Ikhaya',
        traders: 'Bheka Abathengisi',
        products: 'Imikhiqizo',
        about: 'Mayelana Nathi',
        help: 'Isikhungo Sosizo',
        contact: 'Sizokuxhumana',
        faq: 'Imibuzo Evamile',
        shipping: 'Ulwazi Lokulethwa',
        privacy: 'Inqubomgomo Yobumfihlo',
        terms: 'Imigomo Yensizakalo',
        returns: 'Inqubomgomo Yokubuyisela'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Mzansi <span className="text-orange-500">Market</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {getFooterText('tagline')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{getFooterText('quickLinks')}</h4>
            <ul className="space-y-2">
              {['home', 'traders', 'products', 'about'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {getFooterText(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{getFooterText('support')}</h4>
            <ul className="space-y-2">
              {['help', 'contact', 'faq', 'shipping'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {getFooterText(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{getFooterText('newsletter')}</h4>
            <p className="text-gray-400 mb-4 text-sm">
              {getFooterText('newsletterDesc')}
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                {getFooterText('subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {getFooterText('privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {getFooterText('terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {getFooterText('returns')}
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {getFooterText('rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};