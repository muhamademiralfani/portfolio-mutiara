import React from 'react';
import { BookOpen, PenTool, Globe, Users, Mic, Headphones } from 'lucide-react';

import myPortofolioJurnal from '../assets/portfolio-jurnalistik.pdf'

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
          {/* Portfolio Item 1 */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-stone-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen className="text-stone-400 opacity-50" size={48} />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Akademik
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-700 transition-colors">Analisis Kejahatan Pinjol</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                Skripsi yang meneliti fenomena kejahatan pinjaman online ilegal di kalangan mahasiswa IPB dalam era komunikasi digital.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Research</span>
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Writing</span>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-stone-800 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <PenTool className="text-stone-600 opacity-50" size={48} />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Kreatif / Sastra
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-700 transition-colors">Penulis Antologi Terbaik</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                Juara 1 dan 2 dalam berbagai kompetisi menulis antologi cerpen dan puisi yang diselenggarakan oleh Pelangi Media dan Sila Media.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Creative Writing</span>
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Storytelling</span>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <a href={myPortofolioJurnal} className="group rounded-2xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-amber-50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="text-amber-200 opacity-50" size={48} />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Jurnalistik
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-700 transition-colors">Liputan Jurnalistik</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                Pengalaman luas sebagai jurnalis kontributor untuk Contributor Media Bogor dan National Headline, melakukan wawancara dan reportase.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Interview</span>
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">News</span>
              </div>
            </div>
          </a>

          {/* Portfolio Item 4 */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-blue-50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="text-blue-200 opacity-50" size={48} />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Organisasi
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-700 transition-colors">Public Relations - Jendela Ibu</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                Memantau media, mendistribusikan undangan konferensi pers, dan membuat rilis pers untuk dokumentasi kegiatan.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">PR</span>
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Media Relations</span>
              </div>
            </div>
          </div>

          {/* Portfolio Item 5 */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-pink-50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Mic className="text-pink-200 opacity-50" size={48} />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Broadcast
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-700 transition-colors">Audio Transcriber - RRI Jakarta</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                Memastikan kualitas hasil transkrip audio layak dipublikasikan pada portal berita, serta membuat siaran berita dan showbiz.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Editing</span>
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Broadcasting</span>
              </div>
            </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-stone-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Headphones className="text-stone-400 opacity-50" size={48} />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Teknis
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-700 transition-colors">Soundman Freelance</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                Mengoperasikan sistem suara untuk live event, memanipulasi suara untuk hasil optimal, dan manajemen peralatan rekaman.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Technical</span>
                <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">Operations</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;