import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: '15+',
      label: 'Années d\'Expérience',
      description: 'Au service de la sécurité'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Agents Qualifiés',
      description: 'Équipe professionnelle'
    },
    {
      icon: Award,
      number: '200+',
      label: 'Clients Satisfaits',
      description: 'Confiance renouvelée'
    },
    {
      icon: MapPin,
      number: '24h/7j',
      label: 'Disponibilité',
      description: 'Service continu'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeInUp">
          <div className="animate-slideInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              À Propos de DSP Sécurité
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Forte de plus de 15 ans d'expérience dans le secteur de la sécurité privée, 
                <strong className="text-yellow-400"> DSP Sécurité</strong> s'est imposée comme un acteur 
                de référence dans les Yvelines (78).
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Notre équipe d'agents qualifiés et notre approche personnalisée nous permettent 
                de proposer des solutions de sécurité adaptées à chaque client, qu'il s'agisse 
                d'entreprises, de particuliers ou d'événements spéciaux.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Nous nous engageons à maintenir les plus hauts standards de qualité et de 
                professionnalisme, avec une disponibilité 24h/24 et 7j/7 pour répondre à 
                tous vos besoins de sécurité.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Nos Valeurs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Professionnalisme</h4>
                  <p className="text-gray-300 text-sm">Agents formés et certifiés</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Réactivité</h4>
                  <p className="text-gray-300 text-sm">Intervention rapide garantie</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Discrétion</h4>
                  <p className="text-gray-300 text-sm">Respect de la confidentialité</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Innovation</h4>
                  <p className="text-gray-300 text-sm">Technologies de pointe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 animate-slideInRight">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center text-white hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-yellow-400/50 transform hover:scale-105"
                >
                  <div className="bg-yellow-400 p-3 rounded-full inline-block mb-4 hover:rotate-12 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-colors duration-300">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Certifications & Agréments
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Licence Préfecture des Yvelines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Certification ISO 9001</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Assurance Responsabilité Civile</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Formation continue des agents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;