
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Heart, ShoppingCart, Badge } from 'lucide-react';

interface ShopProps {
  currentLanguage: string;
  onProductClick: (productId: number) => void;
}

export const Shop: React.FC<ShopProps> = ({ currentLanguage, onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const getShopText = (key: string) => {
    const translations = {
      en: {
        title: 'Browse Products',
        search: 'Search products or traders...',
        filters: 'Filters',
        category: 'Category',
        priceRange: 'Price Range',
        location: 'Location',
        verified: 'Verified',
        addToCart: 'Add to Cart',
        viewProduct: 'View Product',
        all: 'All Categories',
        fresh: 'Fresh Produce',
        spices: 'Spices & Herbs',
        crafts: 'Handmade Crafts',
        meat: 'Meat & Biltong',
        bakery: 'Bakery Items'
      },
      af: {
        title: 'Blaai Produkte',
        search: 'Soek produkte of handelaars...',
        filters: 'Filters',
        category: 'Kategorie',
        priceRange: 'Prys Reeks',
        location: 'Ligging',
        verified: 'Geverifieer',
        addToCart: 'Voeg by Mandjie',
        viewProduct: 'Bekyk Produk',
        all: 'Alle Kategorieë',
        fresh: 'Vars Produkte',
        spices: 'Speserye & Kruie',
        crafts: 'Handgemaakte Kuns',
        meat: 'Vleis & Biltong',
        bakery: 'Bakkery Items'
      },
      zu: {
        title: 'Bheka Imikhiqizo',
        search: 'Sesha imikhiqizo noma abathengisi...',
        filters: 'Izihluzi',
        category: 'Isigaba',
        priceRange: 'Inhla Yamanani',
        location: 'Indawo',
        verified: 'Kuqinisekisiwe',
        addToCart: 'Engeza Ekalishini',
        viewProduct: 'Buka Umkhiqizo',
        all: 'Zonke Izigaba',
        fresh: 'Imikhiqizo Emusha',
        spices: 'Izinongo & Amakhambi',
        crafts: 'Ubuciko Obwenziwe Ngesandla',
        meat: 'Inyama & Biltong',
        bakery: 'Izinto Zebhakari'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const categories = ['all', 'fresh', 'spices', 'crafts', 'meat', 'bakery'];

  const products = [
    {
      id: 1,
      name: 'Fresh Spinach Bundle',
      price: 25,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      trader: 'Nomsa\'s Fresh Produce',
      location: 'Soweto, JHB',
      rating: 4.8,
      reviews: 34,
      category: 'fresh',
      verified: true
    },
    {
      id: 2,
      name: 'Traditional Spice Mix',
      price: 45,
      image: 'https://images.pexels.com/photos/1342191/pexels-photo-1342191.jpeg?auto=compress&cs=tinysrgb&w=400',
      trader: 'Mandla\'s Spice Corner',
      location: 'Mitchell\'s Plain, CPT',
      rating: 4.9,
      reviews: 28,
      category: 'spices',
      verified: true
    },
    {
      id: 3,
      name: 'Handwoven Basket',
      price: 120,
      image: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=400',
      trader: 'Zanele\'s Craft Market',
      location: 'Umlazi, DBN',
      rating: 4.7,
      reviews: 19,
      category: 'crafts',
      verified: true
    },
    {
      id: 4,
      name: 'Premium Biltong 500g',
      price: 180,
      image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=400',
      trader: 'Thabo\'s Meat Market',
      location: 'Mamelodi, PTA',
      rating: 4.9,
      reviews: 45,
      category: 'meat',
      verified: true
    },
    {
      id: 5,
      name: 'Homemade Rusks',
      price: 35,
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      trader: 'Gogo\'s Kitchen',
      location: 'Alexandra, JHB',
      rating: 4.6,
      reviews: 22,
      category: 'bakery',
      verified: true
    },
    {
      id: 6,
      name: 'Organic Tomatoes 1kg',
      price: 30,
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      trader: 'Green Gardens',
      location: 'Khayelitsha, CPT',
      rating: 4.5,
      reviews: 31,
      category: 'fresh',
      verified: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.trader.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {getShopText('title')}
          </h1>
          
          {/* Search Bar */}
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder={getShopText('search')}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                {getShopText('filters')}
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getShopText('category')}
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {getShopText(category)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getShopText('priceRange')}: R{priceRange[0]} - R{priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => onProductClick(product.id)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                    {product.verified && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Badge className="w-3 h-3 mr-1" />
                        {getShopText('verified')}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-orange-500 mb-2">R{product.price}</p>
                    
                    <div className="text-sm text-gray-600 mb-2">
                      <p className="font-medium">{product.trader}</p>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {product.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">{product.rating} ({product.reviews})</span>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to cart logic
                        }}
                        className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors duration-200"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
