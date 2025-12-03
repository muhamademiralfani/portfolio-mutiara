import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Linkedin, Download, ExternalLink,
  PenTool, Mic, Users, BookOpen, Award, Briefcase, GraduationCap,
  Send, Menu, X, ChevronRight, Globe, Headphones,
  MessageCircle
} from 'lucide-react';


import myPortofolioJurnal from './assets/portfolio-jurnalistik.pdf'


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // State untuk formulir kontak
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Mohon isi Nama dan Pesan terlebih dahulu.");
      return;
    }

    const phoneNumber = "6285186899864"; // Format internasional
    const text = `Halo Mutiara, perkenalkan saya ${formData.name} (${formData.email}).%0A%0A${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  // Fungsi Kirim ke Email
  const handleEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Mohon isi Nama dan Pesan terlebih dahulu.");
      return;
    }

    const emailTo = "dewimutiarakomala@gmail.com";
    const subject = `Pesan Portfolio dari ${formData.name}`;
    const body = `Halo Mutiara,%0D%0A%0D%0ASaya ${formData.name} (${formData.email}) ingin menyampaikan pesan:%0D%0A%0D%0A${formData.message}`;

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;