import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection('about'), 300);
    } else {
      scrollToSection('about');
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const handleServicesClick = () => {
    navigate('/services');
    setIsMenuOpen(false);
  };

  const handleZoneClick = () => {
    navigate('/zone');
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-yellow-400/20'
          : 'bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO CLIQUABLE */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Logo DSP Sécurité"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8 font-poppins font-medium text-sm tracking-wide">
            <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              Accueil
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              Nos Services
            </Link>
            <button onClick={handleAboutClick} className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              À Propos
            </button>
            <Link to="/zone" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              Zone d'Intervention
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              Contact & Devis
            </Link>
          </nav>

          {/* CTA & PHONE DESKTOP */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+33660383858"
              className="flex items-center space-x-2 text-yellow-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">06 60 38 38 58</span>
            </a>
            <button
              onClick={handleContactClick}
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Devis Gratuit
            </button>
          </div>

          {/* BURGER MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 animate-fadeIn font-poppins">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={handleLogoClick}
                className="text-left text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
              >
                Accueil
              </button>
              <button
                onClick={handleServicesClick}
                className="text-left text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
              >
                Nos Services
              </button>
              <button
                onClick={handleAboutClick}
                className="text-left text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
              >
                À Propos
              </button>
              <button
                onClick={handleZoneClick}
                className="text-left text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
              >
                Zone d'Intervention
              </button>
              <button
                onClick={handleContactClick}
                className="text-left text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
              >
                Contact
              </button>

              {/* CTA & phone in mobile */}
              <div className="flex flex-col space-y-2 pt-2">
                <a href="tel:+33660383858" className="flex items-center space-x-2 text-yellow-400 hover:text-white transition-all duration-300">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">06 60 38 38 58</span>
                </a>
                <button
                  onClick={handleContactClick}
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-all duration-300 text-left transform hover:scale-105"
                >
                  Devis Gratuit
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
