import React from 'react'
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import About from '../components/About';
import Testimonials from '../components/Testimonials'; // Import komponen baru

const HomePage = ({scrollToSection}) => {
  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Achievements />
      <Testimonials /> {/* Letakkan di sini, sebelum Contact */}
      <Contact />
    </>
  )
}

export default HomePage