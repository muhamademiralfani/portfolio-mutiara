import React from 'react';
import { ChevronRight, Download } from 'lucide-react';
import myImage from '../assets/foto-hero.png'
import myCV from '../assets/CV_mutiara.pdf'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 -z-10 hidden lg:block"></div>
      <div className="absolute top-1/4 right-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Portfolio & CV
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight">
            Mutiara <br />Komala Dewi
          </h1>
          <p className="text-xl md:text-2xl text-stone-500 font-light">
            Communication Specialist <span className="text-amber-600 mx-2">|</span> Journalist <span className="text-amber-600 mx-2">|</span> Writer
          </p>
          <p className="text-stone-600 max-w-lg leading-relaxed text-lg">
            Lulusan Ilmu Komunikasi (Cumlaude) yang berdedikasi dalam dunia jurnalistik, penulisan konten, dan hubungan masyarakat. Siap memberikan dampak positif melalui komunikasi yang efektif dan strategis.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group cursor-pointer"
            >
              Contact Me <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={myCV}
              download="CV-Mutiara-Komala-Dewi.pdf"
              className="px-8 py-4 bg-white border border-stone-200 text-stone-800 rounded-full font-medium hover:bg-stone-50 transition-all flex items-center gap-2 cursor-pointer"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </div>

        <div className="relative h-full flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-stone-200 rounded-tr-[100px] rounded-bl-[100px] transform rotate-3 z-0"></div>
            <div className="absolute inset-0 border-2 border-stone-300 rounded-tr-[100px] rounded-bl-[100px] transform -rotate-3 z-0"></div>
          
            <div className="absolute inset-0 bg-stone-300 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden z-10 shadow-2xl">
              <img src={myImage} alt="Mutiara Komala Dewi" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;