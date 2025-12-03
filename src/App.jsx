import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioDetail from './pages/PortfolioDetail'; // Import komponen
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    // Jika berada di halaman detail, kita harus kembali ke home dulu
    if (window.location.pathname !== '/') {
        window.location.href = `/#${id}`;
    } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="bg-stone-50 text-stone-800 font-sans min-h-screen selection:bg-stone-200 selection:text-stone-900">
      <Navbar scrolled={scrolled} activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} scrollToSection={scrollToSection} />
      
      <Router>
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<HomePage scrollToSection={scrollToSection} />} />
          
          {/* Halaman Detail Portfolio (Routing Dinamis) */}
          {/* :id akan menangkap 'jurnalistik', 'academic', dll */}
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
};

export default App;