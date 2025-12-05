import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Editor in Chief, Media Bogor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    quote: "Mutiara adalah jurnalis yang sangat detail dan berdedikasi. Kemampuannya dalam menggali informasi saat wawancara membuat berita yang dihasilkan selalu mendalam dan berimbang."
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    role: "Project Manager, Jendela Ibu",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    quote: "Bekerja sama dengan Mutiara di divisi Public Relations sangat menyenangkan. Ia mampu menangani krisis komunikasi dengan tenang dan membuat rilis pers yang sangat efektif. Dedikasinya luar biasa dalam setiap proyek yang kami jalankan bersama."
  },
  {
    id: 3,
    name: "Andi Pratama",
    role: "Station Manager, RRI Jakarta",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    quote: "Kualitas transkrip audio dan naskah berita yang dikerjakan Mutiara selalu presisi. Etos kerjanya tinggi dan selalu tepat waktu dalam deadline. Sangat direkomendasikan untuk posisi yang membutuhkan ketelitian tinggi."
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Penulis & Mentor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    quote: "Tulisan-tulisan kreatif Mutiara memiliki nyawa. Ia pandai merangkai kata yang tidak hanya informatif tapi juga menyentuh hati pembacanya. Sebuah bakat alami yang terus diasah dengan pengalaman."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    // UBAHAN 1: Background Section lebih gelap (Stone-950) agar kontras dengan kartu
    <section id="testimonials" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      
      {/* Background Decoration (Gradient Blobs) - Dibuat lebih halus */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-800/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">Testimonials</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-stone-400 mt-4 text-lg font-light">Pengakuan profesional dari rekan & klien.</p>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* UBAHAN 2: Card Design dengan Gradient Halus & Border Tipis */}
          <div className="relative bg-gradient-to-b from-stone-900 to-stone-900/50 rounded-[2rem] p-8 md:p-14 shadow-2xl border border-stone-800/50 flex flex-col items-center">
            
            {/* Quote Icon Background - Warna Amber Emas Pudar */}
            <div className="absolute top-8 left-8 text-amber-600/10 pointer-events-none">
              <Quote size={100} />
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 w-full items-center"> 
              {testimonialsData.map((item, index) => (
                <div
                  key={item.id}
                  className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out flex flex-col items-center text-center ${
                    index === currentIndex 
                      ? 'opacity-100 translate-y-0 scale-100 blur-0 z-10' 
                      : 'opacity-0 translate-y-4 scale-95 blur-sm -z-10 pointer-events-none'
                  }`}
                >
                  {/* Image dengan Border Gradient */}
                  <div className="relative mb-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-stone-600 rounded-full opacity-70 blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-stone-900 shadow-xl">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1.5 mb-8 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" className="drop-shadow-lg" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <div className="mb-10 px-2 md:px-12">
                    <p className="text-xl md:text-2xl text-stone-200 italic leading-relaxed font-serif font-light">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Name & Role */}
                  <div className="pb-2">
                    <h4 className="text-2xl font-bold text-white mb-2 tracking-wide">{item.name}</h4>
                    <p className="text-sm text-amber-500 font-bold tracking-widest uppercase border-b border-amber-500/30 pb-1 inline-block">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Desain Modern Minimalis */}
            <button 
              onClick={prevSlide}
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-amber-600 transition-all shadow-xl border border-stone-700 hover:border-amber-500 z-20 group"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-amber-600 transition-all shadow-xl border border-stone-700 hover:border-amber-500 z-20 group"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>

          {/* Indicators (Dots) - Style Pipih */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-12 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' 
                    : 'w-3 bg-stone-700 hover:bg-stone-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;