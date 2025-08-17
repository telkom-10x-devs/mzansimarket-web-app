
import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Badge, Truck, Shield, Plus, Minus, ShoppingCart, Heart } from 'lucide-react';

interface ProductDetailProps {
  currentLanguage: string;
  productId: number;
  onBack: () => void;
  onAddToCart: (productId: number, quantity: number) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ 
  currentLanguage, 
  productId, 
  onBack, 
  onAddToCart 
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const getProductText = (key: string) => {
    const translations = {
      en: {
        backToShop: 'Back to Shop',
        verified: 'Verified Trader',
        deliveryAvailable: 'Delivery Available',
        pickupAvailable: 'Pickup Available',
        quantity: 'Quantity',
        addToCart: 'Add to Cart',
        buyNow: 'Buy Now',
        description: 'Description',
        traderInfo: 'Trader Information',
        reviews: 'Reviews',
        deliveryInfo: 'Delivery Information',
        returnPolicy: 'Return Policy'
      },
      af: {
        backToShop: 'Terug na Winkel',
        verified: 'Geverifieerde Handelaar',
        deliveryAvailable: 'Aflewering Beskikbaar',
        pickupAvailable: 'Optel Beskikbaar',
        quantity: 'Hoeveelheid',
        addToCart: 'Voeg by Mandjie',
        buyNow: 'Koop Nou',
        description: 'Beskrywing',
        traderInfo: 'Handelaar Inligting',
        reviews: 'Resensies',
        deliveryInfo: 'Aflewering Inligting',
        returnPolicy: 'Terugkeer Beleid'
      },
      zu: {
        backToShop: 'Buyela Esitolo',
        verified: 'Umthengisi Oqinisekisiwe',
        deliveryAvailable: 'Ukulethwa Kuyatholakala',
        pickupAvailable: 'Ukuthatha Kuyatholakala',
        quantity: 'Inani',
        addToCart: 'Engeza Ekalishini',
        buyNow: 'Thenga Manje',
        description: 'Incazelo',
        traderInfo: 'Ulwazi Lomthengisi',
        reviews: 'Ukubuyekezwa',
        deliveryInfo: 'Ulwazi Lokulethwa',
        returnPolicy: 'Inqubomgomo Yokubuyisela'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  // Mock product data (in real app, fetch based on productId)
  const product = {
    id: productId,
    name: 'Fresh Spinach Bundle',
    price: 25,
    images: [
      'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    trader: {
      name: 'Nomsa\'s Fresh Produce',
      location: 'Soweto, Johannesburg',
      rating: 4.8,
      reviews: 127,
      verified: true,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.8,
    reviewCount: 34,
    stock: 15,
    description: 'Fresh, locally grown spinach harvested daily from our organic farm. Rich in nutrients and perfect for salads, cooking, or smoothies. No pesticides used.',
    features: ['Organic', 'Locally Grown', 'Pesticide Free', 'Fresh Daily'],
    deliveryOptions: {
      delivery: true,
      pickup: true,
      sameDay: true
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Sarah M.',
      rating: 5,
      comment: 'Excellent quality spinach! Very fresh and tasty.',
      date: '2 days ago'
    },
    {
      id: 2,
      user: 'John D.',
      rating: 4,
      comment: 'Good product, fast delivery. Will order again.',
      date: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-orange-500 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {getProductText('backToShop')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({product.reviewCount} reviews)</span>
                </div>
                <span className="text-green-600 text-sm">In Stock: {product.stock} units</span>
              </div>
              <p className="text-4xl font-bold text-orange-500 mb-6">R{product.price}</p>
            </div>

            {/* Trader Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src={product.trader.image}
                  alt={product.trader.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-slate-900">{product.trader.name}</h3>
                    {product.trader.verified && (
                      <div className="flex items-center text-green-600 text-xs">
                        <Badge className="w-3 h-3 mr-1" />
                        {getProductText('verified')}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    {product.trader.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                    {product.trader.rating} ({product.trader.reviews} reviews)
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="flex space-x-4 text-sm">
              {product.deliveryOptions.delivery && (
                <div className="flex items-center text-green-600">
                  <Truck className="w-4 h-4 mr-1" />
                  {getProductText('deliveryAvailable')}
                </div>
              )}
              {product.deliveryOptions.pickup && (
                <div className="flex items-center text-blue-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {getProductText('pickupAvailable')}
                </div>
              )}
              {product.deliveryOptions.sameDay && (
                <div className="flex items-center text-orange-600">
                  <Shield className="w-4 h-4 mr-1" />
                  Same-day delivery
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">{getProductText('quantity')}:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => onAddToCart(product.id, quantity)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {getProductText('addToCart')}
                </button>
                <button className="bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                  {getProductText('buyNow')}
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Features */}
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-orange-500 font-medium text-orange-600">
                {getProductText('description')}
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                {getProductText('reviews')} ({product.reviewCount})
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                {getProductText('deliveryInfo')}
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 space-y-6">
          {reviews.map(review => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{review.user}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
