import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Camera, Shield, Users } from 'lucide-react';

const MediaBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Surveillance Professionnelle',
      description: 'Agents qualifiés en action'
    },
    {
      url: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Technologie de Pointe',
      description: 'Systèmes de sécurité avancés'
    },
    {
      url: 'https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Protection 24h/24',
      description: 'Surveillance continue garantie'
    },
    {
      url: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Équipes Mobiles',
      description: 'Intervention rapide sur site'
    }
  ];

  const videos = [
    {
      thumbnail: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Formation de nos Agents',
      duration: '2:30'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Systèmes de Surveillance',
      duration: '1:45'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Intervention d\'Urgence',
      duration: '3:15'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DSP Sécurité en Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez notre expertise à travers nos réalisations et notre équipement de pointe
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16 animate-slideInUp">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="relative h-96 md:h-[500px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-300">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold text-white mb-6">
              Nos Vidéos de Présentation
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Plongez dans l'univers de DSP Sécurité à travers nos vidéos exclusives. 
              Découvrez nos méthodes de travail, notre équipement et l'expertise de nos équipes.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-yellow-400/50"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-20 h-14 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                      <Play className="h-6 w-6 text-yellow-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                      {video.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slideInRight">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Camera className="h-6 w-6 text-yellow-400" />
                <span>Galerie Photos</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative group cursor-pointer">
                  <img
                    src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Équipe sécurité"
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <img
                    src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Surveillance"
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <img
                    src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Contrôle accès"
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Users className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <img
                    src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Intervention"
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Voir Toute la Galerie
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBanner;