import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Clock, Car } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const initialCenter = {
  lat: 48.8049,
  lng: 2.1204
};

const cities = [
  { name: 'Versailles', lat: 48.8049, lng: 2.1204 },
  { name: 'Saint-Germain-en-Laye', lat: 48.8976, lng: 2.093 },
  { name: 'Sartrouville', lat: 48.9452, lng: 2.1727 },
  { name: 'Mantes-la-Jolie', lat: 48.9876, lng: 1.7191 },
  { name: 'Poissy', lat: 48.9282, lng: 2.0463 },
  { name: 'Conflans-Sainte-Honorine', lat: 48.9958, lng: 2.0985 },
  { name: 'Plaisir', lat: 48.8233, lng: 1.954 },
  { name: 'Trappes', lat: 48.774, lng: 2.0085 },
  { name: 'Rambouillet', lat: 48.6446, lng: 1.8345 },
  { name: 'Montigny-le-Bretonneux', lat: 48.7714, lng: 2.0414 },
  { name: 'Vélizy-Villacoublay', lat: 48.7839, lng: 2.1917 },
  { name: 'Chatou', lat: 48.8894, lng: 2.1591 },
  { name: 'Maisons-Laffitte', lat: 48.9492, lng: 2.1442 },
  { name: 'Le Chesnay', lat: 48.8217, lng: 2.1262 },
  { name: 'Élancourt', lat: 48.7794, lng: 1.9541 },
  { name: 'Meulan-en-Yvelines', lat: 49.0036, lng: 1.9123 },
  { name: 'Houilles', lat: 48.9221, lng: 2.1922 },
  { name: 'Garches', lat: 48.8426, lng: 2.1868 }
];

const Coverage = () => {
  const mapRef = useRef(null);
  const [center, setCenter] = useState(initialCenter);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyA9jZI7XLs3OgPAFzgi1Xf3GPtiO333c3M'
  });

  // ✅ Scroll en haut au chargement de la page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCityClick = (city) => {
    setCenter({ lat: city.lat, lng: city.lng });
  };

  return (
    <>
      <Header />
      <section id="zone" className="py-20 bg-gray-800 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zone d'Intervention
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              DSP Sécurité intervient dans tout le département des Yvelines (78)
              avec une couverture complète et des temps de réponse optimisés.
            </p>
          </div>

          {/* Google Map */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-xl animate-fadeInUp">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                onLoad={(map) => (mapRef.current = map)}
              >
                {cities.map((city, index) => (
                  <Marker
                    key={index}
                    position={{ lat: city.lat, lng: city.lng }}
                    onClick={() => handleCityClick(city)}
                    title={city.name}
                    icon={{
                      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }}
                  />
                ))}
              </GoogleMap>
            )}
          </div>

          {/* Liste des villes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 animate-slideInLeft">
              <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span>Principales Villes Couvertes</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-all duration-300 border border-gray-600 hover:border-yellow-400/50 transform hover:scale-105 cursor-pointer"
                      onClick={() => handleCityClick(city)}
                    >
                      <span className="text-gray-300 font-medium">{city.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-yellow-400/30">
                  <p className="text-gray-300 text-sm">
                    <strong>Et plus encore...</strong> Nous couvrons l'ensemble du département
                    des Yvelines (78) ainsi que les communes limitrophes selon vos besoins.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slideInRight">
              <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-yellow-400 p-3 rounded-lg hover:rotate-12 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Temps de Réponse</h3>
                    <p className="text-gray-300 text-sm">Intervention rapide</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Urgence</span>
                    <span className="font-semibold text-yellow-400">{'< 15 min'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Standard</span>
                    <span className="font-semibold text-yellow-400">{'< 30 min'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Planifiée</span>
                    <span className="font-semibold text-yellow-400">Sur RDV</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-yellow-400 p-3 rounded-lg hover:rotate-12 transition-transform duration-300">
                    <Car className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Équipes Mobiles</h3>
                    <p className="text-gray-300 text-sm">Déploiement rapide</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Véhicules équipés</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">GPS temps réel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Communication radio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white text-center border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300 animate-fadeInUp">
            <h3 className="text-xl font-bold mb-3">
              Votre Commune N'est Pas Listée ?
            </h3>
            <p className="text-gray-300 mb-6">
              Contactez-nous pour connaître nos possibilités d'intervention dans votre secteur.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Coverage;
