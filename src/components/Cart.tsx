
import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, Trash2, Truck, MapPin, CreditCard } from 'lucide-react';

interface CartProps {
  currentLanguage: string;
  onBack: () => void;
  onCheckoutComplete: () => void;
}

export const Cart: React.FC<CartProps> = ({ currentLanguage, onBack, onCheckoutComplete }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fresh Spinach Bundle',
      price: 25,
      quantity: 2,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=200',
      trader: 'Nomsa\'s Fresh Produce'
    },
    {
      id: 2,
      name: 'Traditional Spice Mix',
      price: 45,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1342191/pexels-photo-1342191.jpeg?auto=compress&cs=tinysrgb&w=200',
      trader: 'Mandla\'s Spice Corner'
    }
  ]);

  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('snapscan');
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    postal: ''
  });

  const getCartText = (key: string) => {
    const translations = {
      en: {
        title: 'Shopping Cart',
        backToShop: 'Continue Shopping',
        quantity: 'Qty',
        remove: 'Remove',
        subtotal: 'Subtotal',
        delivery: 'Delivery',
        total: 'Total',
        deliveryOptions: 'Delivery Options',
        homeDelivery: 'Home Delivery',
        pickup: 'Pickup from Trader',
        paymentMethod: 'Payment Method',
        deliveryAddress: 'Delivery Address',
        street: 'Street Address',
        city: 'City',
        postal: 'Postal Code',
        placeOrder: 'Place Order',
        orderSummary: 'Order Summary'
      },
      af: {
        title: 'Inkopiemandjie',
        backToShop: 'Gaan voort met Inkopies',
        quantity: 'Hov',
        remove: 'Verwyder',
        subtotal: 'Subtotaal',
        delivery: 'Aflewering',
        total: 'Totaal',
        deliveryOptions: 'Aflewering Opsies',
        homeDelivery: 'Tuis Aflewering',
        pickup: 'Optel by Handelaar',
        paymentMethod: 'Betaling Metode',
        deliveryAddress: 'Aflewering Adres',
        street: 'Straat Adres',
        city: 'Stad',
        postal: 'Poskode',
        placeOrder: 'Plaas Bestelling',
        orderSummary: 'Bestelling Opsomming'
      },
      zu: {
        title: 'Ikalishi Lokuthenga',
        backToShop: 'Qhubeka Ukuthenga',
        quantity: 'Ing',
        remove: 'Susa',
        subtotal: 'Isamba Sangaphansi',
        delivery: 'Ukulethwa',
        total: 'Isamba',
        deliveryOptions: 'Izinketho Zokulethwa',
        homeDelivery: 'Ukulethwa Ekhaya',
        pickup: 'Ukuthatha Kumthengisi',
        paymentMethod: 'Indlela Yokukhokha',
        deliveryAddress: 'Ikheli Lokulethwa',
        street: 'Ikheli Lesitaladi',
        city: 'Idolobha',
        postal: 'Ikhodi Yeposi',
        placeOrder: 'Beka Ukuodwa',
        orderSummary: 'Isifinyezo Somyalo'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryOption === 'delivery' ? 25 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    // Simulate order processing
    alert('Order placed successfully!');
    onCheckoutComplete();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <button
            onClick={onBack}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-orange-500 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {getCartText('backToShop')}
        </button>

        <h1 className="text-3xl font-bold text-slate-900 mb-8">{getCartText('title')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.trader}</p>
                    <p className="text-lg font-bold text-orange-500">R{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Panel */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">{getCartText('orderSummary')}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{getCartText('subtotal')}</span>
                  <span>R{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>{getCartText('delivery')}</span>
                  <span>R{deliveryFee}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                  <span>{getCartText('total')}</span>
                  <span>R{total}</span>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">{getCartText('deliveryOptions')}</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="delivery"
                    checked={deliveryOption === 'delivery'}
                    onChange={(e) => setDeliveryOption(e.target.value)}
                    className="mr-3"
                  />
                  <Truck className="w-5 h-5 mr-2 text-gray-600" />
                  {getCartText('homeDelivery')} (R25)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="pickup"
                    checked={deliveryOption === 'pickup'}
                    onChange={(e) => setDeliveryOption(e.target.value)}
                    className="mr-3"
                  />
                  <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                  {getCartText('pickup')} (Free)
                </label>
              </div>
            </div>

            {/* Delivery Address */}
            {deliveryOption === 'delivery' && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">{getCartText('deliveryAddress')}</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={getCartText('street')}
                    value={deliveryAddress.street}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder={getCartText('city')}
                    value={deliveryAddress.city}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder={getCartText('postal')}
                    value={deliveryAddress.postal}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, postal: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">{getCartText('paymentMethod')}</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="snapscan"
                    checked={paymentMethod === 'snapscan'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 mr-2 text-gray-600" />
                  SnapScan
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="ozow"
                    checked={paymentMethod === 'ozow'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 mr-2 text-gray-600" />
                  Ozow
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="eft"
                    checked={paymentMethod === 'eft'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 mr-2 text-gray-600" />
                  EFT
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              {getCartText('placeOrder')} - R{total}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
