import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioDetail from './pages/PortfolioDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Tambahkan 'testimonials' ke daftar section yang dipantau
      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Logika deteksi section aktif sedikit disesuaikan agar lebih akurat
          return rect.top <= 150 && rect.bottom >= 150;
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
    if (window.location.pathname !== '/') {
        window.location.href = `/#${id}`;
    } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  // Tambahkan link 'Testimonials' ke navigasi
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Experience', id: 'experience' },
    { name: 'Testimonials', id: 'testimonials' }, // <-- Baru
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="bg-stone-50 text-stone-800 font-sans min-h-screen selection:bg-stone-200 selection:text-stone-900">
      <Navbar scrolled={scrolled} activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} scrollToSection={scrollToSection} />
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage scrollToSection={scrollToSection} />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
};

export default App;