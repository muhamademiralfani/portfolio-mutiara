import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrolled, activeSection, isMenuOpen, setIsMenuOpen, navLinks, scrollToSection }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold tracking-tighter text-stone-900 cursor-pointer" onClick={() => scrollToSection('home')}>
          MKD<span className="text-amber-600">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${activeSection === link.id ? 'text-amber-700' : 'text-stone-500 hover:text-stone-900'}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-800 focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-medium text-stone-600 hover:text-amber-700"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;