import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface LoginProps {
  currentLanguage: string;
  onBack: () => void;
  onLogin: (userType: 'customer' | 'trader' | 'delivery') => void;
  onSwitchToRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ 
  currentLanguage, 
  onBack, 
  onLogin, 
  onSwitchToRegister 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [userType, setUserType] = useState<'customer' | 'trader' | 'delivery'>('customer');

  const getLoginText = (key: string) => {
    const translations = {
      en: {
        title: 'Welcome Back',
        subtitle: 'Sign in to your MzansiMarket account',
        email: 'Email Address',
        password: 'Password',
        forgotPassword: 'Forgot Password?',
        signIn: 'Sign In',
        orContinue: 'Or continue with',
        noAccount: "Don't have an account?",
        signUp: 'Sign Up',
        emailPlaceholder: 'Enter your email',
        passwordPlaceholder: 'Enter your password'
      },
      af: {
        title: 'Welkom Terug',
        subtitle: 'Meld aan by jou MzansiMarket rekening',
        email: 'E-pos Adres',
        password: 'Wagwoord',
        forgotPassword: 'Wagwoord Vergeet?',
        signIn: 'Meld Aan',
        orContinue: 'Of gaan voort met',
        noAccount: 'Het jy nie \'n rekening nie?',
        signUp: 'Registreer',
        emailPlaceholder: 'Voer jou e-pos in',
        passwordPlaceholder: 'Voer jou wagwoord in'
      },
      zu: {
        title: 'Siyakwamukela Futhi',
        subtitle: 'Ngena ku-akhawunti yakho ye-MzansiMarket',
        email: 'Ikheli Le-imeyili',
        password: 'Iphasiwedi',
        forgotPassword: 'Ukhohlwe Iphasiwedi?',
        signIn: 'Ngena',
        orContinue: 'Noma qhubeka nge',
        noAccount: 'Awunayo i-akhawunti?',
        signUp: 'Bhalisa',
        emailPlaceholder: 'Faka i-imeyili yakho',
        passwordPlaceholder: 'Faka iphasiwedi yakho'
      }
    };
    return translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.en];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would make API call
    onLogin(userType);
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
              {getLoginText('title')}
            </h2>
            <p className="text-gray-600">
              {getLoginText('subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Type
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value as 'customer' | 'trader' | 'delivery')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="customer">Customer</option>
                <option value="trader">Trader (Dashboard Access)</option>
                <option value="delivery">Delivery Partner</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getLoginText('email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={getLoginText('emailPlaceholder')}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getLoginText('password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={getLoginText('passwordPlaceholder')}
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                {getLoginText('forgotPassword')}
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {getLoginText('signIn')}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{getLoginText('orContinue')}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <span className="text-sm font-medium">Apple</span>
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-gray-600">{getLoginText('noAccount')} </span>
            <button
              onClick={onSwitchToRegister}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              {getLoginText('signUp')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};