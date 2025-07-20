import React from 'react';
import smileWorld from '../img/SimleWorld.jpeg';

// Remplace les URLs par tes propres logos si besoin
const logos = [
  { src: smileWorld, alt: 'Entreprise 1' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/The_Westfield_Group_logo.svg', alt: 'Entreprise 2' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Logo_F%C3%AAte_de_l%27Humanit%C3%A9.svg', alt: 'Entreprise 3' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Ils nous ont fait confiance
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300 bg-white rounded-lg p-2 shadow"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
