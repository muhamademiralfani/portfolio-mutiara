import React from 'react';
import { PenTool, Users, Headphones, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
          <p>
            Halo! Saya Mutiara, lulusan Sarjana Ilmu Komunikasi dari Universitas Terbuka dengan IPK 3.51 (Cumlaude). Perjalanan akademis dan profesional saya dibentuk oleh ketertarikan mendalam pada bagaimana informasi disebarkan dan dampaknya terhadap masyarakat.
          </p>
          <p>
            Saya memiliki pengalaman beragam mulai dari Jurnalistik, Penulisan Riset, hingga Manajemen Acara. Skripsi saya mengenai "Kejahatan Pinjaman Online Ilegal di Kalangan Mahasiswa" mencerminkan kepedulian saya terhadap isu sosial di era digital.
          </p>
          <p>
            Saya adalah pribadi yang adaptif, nyaman bekerja dalam tim maupun individu, serta terbiasa dengan lingkungan yang dinamis dan berorientasi pada tenggat waktu.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
              <h4 className="font-bold text-stone-900">Education</h4>
              <p className="text-sm">S.I.Kom, Universitas Terbuka (2020-2023)</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
              <h4 className="font-bold text-stone-900">Location</h4>
              <p className="text-sm">Bogor, Jawa Barat</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 mt-8">
            <div className="bg-stone-50 p-6 rounded-2xl h-48 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <PenTool className="text-amber-600 mb-3" size={32} />
              <h3 className="font-bold mb-1">Content Writing</h3>
              <p className="text-xs text-stone-500">Artikel, Berita, Press Release</p>
            </div>
            <div className="bg-stone-900 text-white p-6 rounded-2xl h-40 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-amber-400 mb-3" size={32} />
              <h3 className="font-bold mb-1">Public Relations</h3>
              <p className="text-xs text-stone-400">Media Relations, Komunikasi</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-amber-100 p-6 rounded-2xl h-40 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <Headphones className="text-amber-800 mb-3" size={32} />
              <h3 className="font-bold text-amber-900 mb-1">Broadcasting</h3>
              <p className="text-xs text-amber-800">Radio, Sound Engineering</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl h-48 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <Globe className="text-stone-600 mb-3" size={32} />
              <h3 className="font-bold mb-1">Journalism</h3>
              <p className="text-xs text-stone-500">Liputan, Wawancara, Riset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;