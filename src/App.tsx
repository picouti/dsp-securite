import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Coverage from './components/Coverage';
import MediaBanner from './components/MediaBanner';
import About from './components/About';
import Contact from './components/Contact';
import TrustedBy from './components/TrustedBy';

function LandingPage() {
  return (
    <>
      <Header /> 
      <Hero />
      <MediaBanner />
      {/* <Coverage /> */}
      <About />
      <TrustedBy />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/zone" element={<Coverage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;