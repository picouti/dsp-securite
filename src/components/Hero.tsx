import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 animate-fadeInUp">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-slideInDown">
              <Shield className="h-5 w-5 text-yellow-400" />
              <span className="text-white text-sm font-medium">Sécurité Professionnelle • Yvelines (78)</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slideInLeft">
              Votre Sécurité, 
              <span className="text-yellow-400"> Notre Priorité</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slideInRight">
              DSP Sécurité vous accompagne avec des solutions de sécurité sur mesure dans les Yvelines. 
              Surveillance, gardiennage, et protection adaptés à vos besoins.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fadeIn">
            <div className="flex items-center justify-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-400 p-3 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <Clock className="h-6 w-6 text-gray-900" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">24h/24 - 7j/7</p>
                <p className="text-gray-300 text-sm">Surveillance continue</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-400 p-3 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <Users className="h-6 w-6 text-gray-900" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Agents Qualifiés</p>
                <p className="text-gray-300 text-sm">Formation certifiée</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-400 p-3 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <Shield className="h-6 w-6 text-gray-900" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Intervention Rapide</p>
                <p className="text-gray-300 text-sm">Réactivité garantie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;