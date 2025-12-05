import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Selected Works</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-500">Cuplikan pengalaman proyek dan kontribusi profesional saya.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ITEM 1: AKADEMIK */}
          <Link to="/portfolio/academic" className="group rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
            <div className="h-56 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"
                alt="Academic Research"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/30 transition-all duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-stone-800">
                Akademik
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">
                Analisis Kejahatan Pinjol
              </h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                Skripsi & Riset mendalam mengenai dampak sosial pinjaman online ilegal.
              </p>
              <div className="flex items-center text-amber-600 text-sm font-medium">
                Lihat Detail <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
          </Link>

          {/* ITEM 2: KREATIF */}
          <Link to="/portfolio/creative" className="group rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
            <div className="h-56 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070&auto=format&fit=crop"
                alt="Creative Writing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/30 transition-all duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-stone-800">
                Kreatif / Sastra
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">
                Penulis Antologi Terbaik
              </h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                Kumpulan cerpen dan puisi pemenang lomba nasional.
              </p>
              <div className="flex items-center text-amber-600 text-sm font-medium">
                Lihat Detail <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
          </Link>

          {/* ITEM 3: JURNALISTIK */}
          <Link to="/portfolio/jurnalistik" className="group rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
            <div className="h-56 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
                alt="Journalism"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/30 transition-all duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-stone-800">
                Jurnalistik
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">
                Liputan & Berita
              </h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                Arsip berita, wawancara eksklusif, dan reportase lapangan diberbagai media.
              </p>
              <div className="flex items-center text-amber-600 text-sm font-medium">
                Lihat Detail <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
          </Link>

          {/* ITEM 4: PUBLIC RELATIONS */}
          <Link to="/portfolio/organization" className="group rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
            <div className="h-56 relative overflow-hidden">
               <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                  alt="Public Relations"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/30 transition-all duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-stone-800">
                Organisasi / PR
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">
                Organisasi / PR
              </h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                 Dokumentasi kegiatan konser, talkshow, dan manajemen acara skala nasional.
              </p>
              <div className="flex items-center text-amber-600 text-sm font-medium">
                Lihat Detail <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
          </Link>

          {/* ITEM 5: BROADCAST */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-56 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
                alt="Broadcasting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/30 transition-all duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-stone-800">
                Broadcast
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">
                Audio Transcriber - RRI
              </h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                Transkrip audio berita, penulisan naskah siaran, dan editing konten radio.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-100 border border-stone-200 rounded text-stone-600">Editing</span>
                <span className="px-2 py-1 bg-stone-100 border border-stone-200 rounded text-stone-600">Scriptwriting</span>
              </div>
            </div>
          </div>

          {/* ITEM 6: TEKNIS / SOUND */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-56 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
                alt="Sound Engineering"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/30 transition-all duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-stone-800">
                Teknis
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">
                Soundman Freelance
              </h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                Operasional sound system live event, mixing, dan manajemen peralatan audio.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-100 border border-stone-200 rounded text-stone-600">Live Sound</span>
                <span className="px-2 py-1 bg-stone-100 border border-stone-200 rounded text-stone-600">Technical</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;