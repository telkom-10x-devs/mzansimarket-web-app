
import React, { useState } from 'react';
import { Mail, Lock, User, Phone, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface RegisterProps {
  currentLanguage: string;
  onBack: () => void;
  onRegister: (userType: 'customer' | 'trader' | 'delivery') => void;
  onSwitchToLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ 
  currentLanguage, 
  onBack, 
  onRegister, 
  onSwitchToLogin 
}) => {
  const [userType, setUserType] = useState<'customer' | 'trader' | 'delivery'>('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const getRegisterText = (key: string) => {
    const translations = {
      en: {
        title: 'Join MzansiMarket',
        subtitle: 'Create your account and start trading',
        customer: 'Customer',
        trader: 'Trader',
        delivery: 'Delivery Partner',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        createAccount: 'Create Account',
        haveAccount: 'Already have an account?',
        signIn: 'Sign In',
        namePlaceholder: 'Enter your full name',
        emailPlaceholder: 'Enter your email',
        phonePlaceholder: 'Enter your phone number',
        passwordPlaceholder: 'Create a password',
        confirmPasswordPlaceholder: 'Confirm your password'
      },
      af: {
        title: 'Sluit aan by MzansiMarket',
        subtitle: 'Skep jou rekening en begin handel',
        customer: 'Kliënt',
        trader: 'Handelaar',
        delivery: 'Aflewering Vennoot',
        name: 'Volledige Naam',
        email: 'E-pos Adres',
        phone: 'Telefoonnommer',
        password: 'Wagwoord',
        confirmPassword: 'Bevestig Wagwoord',
        createAccount: 'Skep Rekening',
        haveAccount: 'Het jy reeds \'n rekening?',
        signIn: 'Meld Aan',
        namePlaceholder: 'Voer jou volledige naam in',
        emailPlaceholder: 'Voer jou e-pos in',
        phonePlaceholder: 'Voer jou telefoonnommer in',
        passwordPlaceholder: 'Skep \'n wagwoord',
        confirmPasswordPlaceholder: 'Bevestig jou wagwoord'
      },
      zu: {
        title: 'Joyina i-MzansiMarket',
        subtitle: 'Dala i-akhawunti yakho futhi uqale ukuthenga',
        customer: 'Ikhasimende',
        trader: 'Umthengisi',
        delivery: 'Isisebenzi Sokulethwa',
        name: 'Igama Eliphelele',
        email: 'Ikheli Le-imeyili',
        phone: 'Inombolo Yocingo',
        password: 'Iphasiwedi',
        confirmPassword: 'Qinisekisa Iphasiwedi',
        createAccount: 'Dala I-akhawunti',
        haveAccount: 'Usunayo i-akhawunti?',
        signIn: 'Ngena',
        namePlaceholder: 'Faka igama lakho eliphelele',
        emailPlaceholder: 'Faka i-imeyili yakho',
        phonePlaceholder: 'Faka inombolo yakho yocingo',
        passwordPlaceholder: 'Dala iphasiwedi',
        confirmPasswordPlaceholder: 'Qinisekisa iphasiwedi yakho'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onRegister(userType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100 py-12 px-4">
      <div className="max-w-md mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-orange-500 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {getRegisterText('title')}
            </h2>
            <p className="text-gray-600">
              {getRegisterText('subtitle')}
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-lg">
              {(['customer', 'trader', 'delivery'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    userType === type
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {getRegisterText(type)}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getRegisterText('name')}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={getRegisterText('namePlaceholder')}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getRegisterText('email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={getRegisterText('emailPlaceholder')}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getRegisterText('phone')}
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={getRegisterText('phonePlaceholder')}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getRegisterText('password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={getRegisterText('passwordPlaceholder')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getRegisterText('confirmPassword')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={getRegisterText('confirmPasswordPlaceholder')}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {getRegisterText('createAccount')}
            </button>
          </form>

          <div className="mt-8 text-center">
            <span className="text-gray-600">{getRegisterText('haveAccount')} </span>
            <button
              onClick={onSwitchToLogin}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              {getRegisterText('signIn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
