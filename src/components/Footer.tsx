import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Bloc logo corrigé */}
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full blur-lg opacity-20 bg-yellow-400 z-0"></div>
              <div className="bg-black p-2 rounded-full shadow-md overflow-hidden transform transition-transform duration-300 group-hover:scale-105 z-10 w-25 h-20 flex items-center justify-center">
                <img
                  src={logo}
                  alt="DSP Sécurité Logo"
                  className="h-full w-full object-contain p-1"
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 tracking-widest font-medium z-10">
              DSP SÉCURITÉ
            </p>
            <div className="w-20 h-1 bg-yellow-400 rounded-full z-10"></div>
          </div>

          {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Nos Services</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Agent de Sécurité (ADS)",
                  "Agent SSIAP (Incendie)",
                  "Agent Cynophile (Maître-chien)",
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  À Propos
                </button>
              </li>
              <li>
                <Link
                  to="/zone"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Zone d'Intervention
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <a
                  href="tel:+33660383858"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  06 60 38 38 58
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <a
                  href="mailto:Idia.dspsecurite@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Idia.dspsecurite@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>6 rue Jean Pierre Timbaud</p>
                  <p>78180 Montigny-le-Bretonneux</p>
                  <p>Yvelines (78)</p>
                </div>
              </div>
              <div className="mt-4">
                <iframe
                  title="Localisation DSP Sécurité"
                  width="100%"
                  height="200"
                  loading="lazy"
                  allowFullScreen
                  className="rounded"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA9jZI7XLs3OgPAFzgi1Xf3GPtiO333c3M&q=6+rue+Jean+Pierre+Timbaud,+78180+Montigny-le-Bretonneux"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 DSP Sécurité. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                Mentions Légales
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                CGV
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-500 text-center leading-relaxed">
            <div>RCS 98479725800014</div>
            <div>Autorisation d’exercer n°AUT -094-2123-12-04-20240947786</div>
            <div>
              L’autorisation d’exercice ne confère aucune prérogative publique à l’entreprise ou aux personnes qui en bénéficient.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
