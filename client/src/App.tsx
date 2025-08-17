import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { FeaturedTraders } from "./components/FeaturedTraders";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Shop } from "./components/Shop";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import { TraderDashboard } from "./components/TraderDashboard";
import "./index.css";
import { ChatOverlay } from "./components/ChatBotOverlay/ChatOverlay";

type Page =
  | "home"
  | "login"
  | "register"
  | "shop"
  | "product"
  | "cart"
  | "dashboard";
type UserType = "customer" | "trader" | "delivery" | null;

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProductId, setSelectedProductId] = useState<number>(1);
  const [user, setUser] = useState<UserType>(null);
  const [cartItems, setCartItems] = useState<number[]>([]);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = (userType: UserType) => {
    setUser(userType);
    if (userType === "trader") {
      setCurrentPage("dashboard");
    } else {
      setCurrentPage("home");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("home");
  };

  const handleRegister = (userType: UserType) => {
    setUser(userType);
    if (userType === "trader") {
      setCurrentPage("dashboard");
    } else {
      setCurrentPage("home");
    }
  };

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage("product");
  };

  const handleAddToCart = (productId: number, quantity: number) => {
    setCartItems([...cartItems, ...Array(quantity).fill(productId)]);
    alert("Product added to cart!");
  };

  const handleCheckoutComplete = () => {
    setCartItems([]);
    setCurrentPage("home");
  };

  // Render different pages based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return (
          <Login
            currentLanguage={currentLanguage}
            onBack={() => setCurrentPage("home")}
            onLogin={handleLogin}
            onSwitchToRegister={() => setCurrentPage("register")}
          />
        );

      case "register":
        return (
          <Register
            currentLanguage={currentLanguage}
            onBack={() => setCurrentPage("home")}
            onRegister={handleRegister}
            onSwitchToLogin={() => setCurrentPage("login")}
          />
        );

      case "shop":
        return (
          <Shop
            currentLanguage={currentLanguage}
            onProductClick={handleProductClick}
          />
        );

      case "product":
        return (
          <ProductDetail
            currentLanguage={currentLanguage}
            productId={selectedProductId}
            onBack={() => setCurrentPage("shop")}
            onAddToCart={handleAddToCart}
          />
        );

      case "cart":
        return (
          <Cart
            currentLanguage={currentLanguage}
            onBack={() => setCurrentPage("shop")}
            onCheckoutComplete={handleCheckoutComplete}
          />
        );

      case "dashboard":
        return user === "trader" ? (
          <TraderDashboard currentLanguage={currentLanguage} />
        ) : (
          <div className="min-h-screen pt-20 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Access Denied
              </h2>
              <p className="text-gray-600 mt-2">
                You need to be a trader to access this page.
              </p>
              <button
                onClick={() => setCurrentPage("home")}
                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg"
              >
                Go Home
              </button>
            </div>
          </div>
        );

      default:
        return (
          <>
            <Hero currentLanguage={currentLanguage} />
            <HowItWorks currentLanguage={currentLanguage} />
            <FeaturedTraders currentLanguage={currentLanguage} />
            <Testimonials currentLanguage={currentLanguage} />
          </>
        );
    }
  };

  // Enhanced Navbar with navigation handlers
  const EnhancedNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);

    const languages = {
      en: "English",
      af: "Afrikaans",
      zu: "isiZulu",
    };

    const getNavText = (key: string) => {
      const translations = {
        en: {
          home: "Home",
          traders: "Traders",
          products: "Products",
          about: "About",
          contact: "Contact",
          login: "Login",
          signup: "Sign Up",
          logout: "Logout",
          dashboard: "Dashboard",
          searchPlaceholder: "Search products or traders...",
        },
        af: {
          home: "Tuis",
          traders: "Handelaars",
          products: "Produkte",
          about: "Oor Ons",
          contact: "Kontak",
          login: "Meld Aan",
          signup: "Registreer",
          logout: "Meld Af",
          dashboard: "Bedienpaneel",
          searchPlaceholder: "Soek produkte of handelaars...",
        },
        zu: {
          home: "Ikhaya",
          traders: "Abathengisi",
          products: "Imikhiqizo",
          about: "Mayelana",
          contact: "Xhumana",
          login: "Ngena",
          signup: "Bhalisa",
          logout: "Phuma",
          dashboard: "I-dashboard",
          searchPlaceholder: "Sesha imikhiqizo noma abathengisi...",
        },
      };
      return translations[currentLanguage as keyof typeof translations][
        key as keyof typeof translations.en
      ];
    };

    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/85 via-white/90 to-white/85 backdrop-blur-xl border-b border-orange-200/30 shadow-lg shadow-orange-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div
              className="flex-shrink-0 group cursor-pointer"
              onClick={() => handleNavigation("home")}
            >
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
                <button
                  onClick={() => handleNavigation("home")}
                  className="text-gray-700 hover:text-orange-500 px-4 py-3 text-sm font-medium transition-all duration-300 relative group rounded-lg hover:bg-orange-50/50"
                >
                  {getNavText("home")}
                </button>
                <button
                  onClick={() => handleNavigation("shop")}
                  className="text-gray-700 hover:text-orange-500 px-4 py-3 text-sm font-medium transition-all duration-300 relative group rounded-lg hover:bg-orange-50/50"
                >
                  {getNavText("products")}
                </button>
                {user === "trader" && (
                  <button
                    onClick={() => handleNavigation("dashboard")}
                    className="text-gray-700 hover:text-orange-500 px-4 py-3 text-sm font-medium transition-all duration-300 relative group rounded-lg hover:bg-orange-50/50"
                  >
                    {getNavText("dashboard")}
                  </button>
                )}
              </div>
            </div>

            {/* Right side items */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Cart Icon */}
              <div
                className="relative group cursor-pointer"
                onClick={() => handleNavigation("cart")}
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.1H19"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartItems.length}
                  </div>
                )}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-orange-50/50 group"
                >
                  <svg
                    className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                    />
                  </svg>
                  <span>
                    {languages[currentLanguage as keyof typeof languages]}
                  </span>
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl py-2 z-10 border border-orange-100">
                    {Object.entries(languages).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setCurrentLanguage(code);
                          setIsLanguageOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Auth Buttons */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-slate-900 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
                >
                  {getNavText("logout")}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleNavigation("login")}
                    className="text-slate-900 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
                  >
                    {getNavText("login")}
                  </button>
                  <button
                    onClick={() => handleNavigation("register")}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    {getNavText("signup")}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <EnhancedNavbar />
      {renderPage()}
      {currentPage === "home" && <Footer currentLanguage={currentLanguage} />}
      <ChatOverlay />
    </div>
  );
}

export default App;
