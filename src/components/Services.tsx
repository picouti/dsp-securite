import React, { useEffect } from 'react';
import { ShieldCheck, Flame, Dog, Shield, Mail } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import agentImg from '../img/nightguard.png';
import ssiapImg from '../img/fireman.png'; // à ajouter dans /img
import dogImg from '../img/dogunit.png';    // à ajouter dans /img

const services = [
  {
    icon: ShieldCheck,
    title: 'Agent de Sécurité (ADS)',
    image: agentImg,
    description: 'Nos agents de sécurité qualifiés assurent la surveillance et la protection de vos sites, commerces, chantiers ou événements.',
    features: [
      'Surveillance statique et mobile',
      'Contrôle d’accès & filtrage',
      'Prévention des actes de malveillance',
      'Veille au respect des consignes'
    ]
  },
  {
    icon: Flame,
    title: 'Agent SSIAP (Incendie)',
    image: ssiapImg,
    description: 'Nos agents SSIAP (Service de Sécurité Incendie et d’Assistance à Personnes) assurent la prévention et l’intervention en cas d’incendie.',
    features: [
      'Prévention et détection des incendies',
      'Sécurité des personnes & évacuation',
      'Contrôle du matériel de sécurité',
      'Présence en ERP & IGH'
    ]
  },
  {
    icon: Dog,
    title: 'Agent Cynophile (Maître-chien)',
    image: dogImg,
    description: 'L’association d’un agent de sécurité et de son chien pour une dissuasion renforcée et des interventions rapides.',
    features: [
      'Patrouille avec chien',
      'Intervention dissuasive',
      'Protection de zones sensibles',
      'Sécurité événementielle & chantiers'
    ]
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-900 min-h-screen pt-24 pb-20 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 tracking-tight">
              Nos Services de Sécurité
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Expertise, réactivité et professionnalisme pour répondre à tous vos besoins en sécurité dans les Yvelines (78).
            </p>
          </div>

          {/* Grid Services */}
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400 group"
              >
                {/* Image */}
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  role="img"
                  aria-label={service.title}
                >
                  <div className="h-full w-full bg-gray-900/60 group-hover:bg-gray-900/40 transition duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 p-2 rounded-md">
                      <service.icon className="h-5 w-5 text-gray-900" />
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition duration-300">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="mt-1 w-2 h-2 bg-yellow-400 rounded-full shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between gap-4 pt-4">
                    <Link to="/contact" className="w-1/2">
                      <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                        Devis
                      </button>
                    </Link>
                    <Link to="/contact" className="w-1/2">
                      <button className="w-full border border-yellow-400 text-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
