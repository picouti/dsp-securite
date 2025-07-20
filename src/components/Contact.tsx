import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Scroll automatique en haut de page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Votre demande a été envoyée avec succès. Nous vous recontacterons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex flex-col items-center justify-centerv mt-10">
        <section id="contact" className="py-20 bg-gray-900 w-full">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Demande de Devis & Contact
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Contactez DSP Sécurité pour obtenir un devis personnalisé et discuter 
                de vos besoins spécifiques en matière de sécurité.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300 animate-slideInLeft">
                <h3 className="text-xl font-bold text-white mb-6">
                  Demande de Devis Gratuit
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        placeholder="01 23 45 67 89"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Demandé *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      >
                        <option value="">Choisir un service</option>
                        <option value="gardiennage">Gardiennage Statique</option>
                        <option value="telesurveillance">Télésurveillance</option>
                        <option value="evenementiel">Sécurité Événementielle</option>
                        <option value="entreprise">Sécurité Entreprise</option>
                        <option value="rondiers">Rondiers de Nuit</option>
                        <option value="urgence">Intervention d'Urgence</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message / Détails de la Demande *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="Décrivez vos besoins en sécurité, votre secteur d'activité, et tout autre détail pertinent..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    <span>Envoyer ma Demande</span>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 animate-slideInRight">
                <div className="bg-gray-800 rounded-xl p-8 text-white border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-6">Informations de Contact</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-400 p-2 rounded-lg hover:rotate-12 transition-transform duration-300">
                        <Phone className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Téléphone</h4>
                        <p className="text-yellow-400">01 23 45 67 89</p>
                        <p className="text-sm text-gray-400">Disponible 24h/24 - 7j/7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-400 p-2 rounded-lg hover:rotate-12 transition-transform duration-300">
                        <Mail className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-yellow-400">contact@dspsecurite.fr</p>
                        <p className="text-sm text-gray-400">Réponse sous 24h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-400 p-2 rounded-lg hover:rotate-12 transition-transform duration-300">
                        <MapPin className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Adresse</h4>
                        <p className="text-gray-300">123 Avenue de la Sécurité</p>
                        <p className="text-gray-300">78000 Versailles</p>
                        <p className="text-sm text-gray-400">Yvelines (78)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <span>Horaires d'Intervention</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Urgences</span>
                      <span className="font-semibold text-yellow-400">24h/24 - 7j/7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bureau</span>
                      <span className="font-semibold text-yellow-400">Lun-Ven 8h-19h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Samedi</span>
                      <span className="font-semibold text-yellow-400">9h-17h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Dimanche</span>
                      <span className="font-semibold text-yellow-400">Urgences uniquement</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    Devis Gratuit & Sans Engagement
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Nous vous proposons une étude personnalisée de vos besoins avec un devis 
                    détaillé et transparent. Aucun engagement de votre part n'est requis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
