import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData'; // Import data yang tadi dibuat

const PortfolioDetail = () => {
  const { id } = useParams(); // Mengambil parameter ID dari URL
  const navigate = useNavigate();
  
  // Ambil data berdasarkan ID kategori
  const categoryData = portfolioData[id];

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Jika kategori tidak ditemukan, kembalikan ke home atau tampilkan 404
  if (!categoryData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-stone-50">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Kategori tidak ditemukan</h2>
        <button onClick={() => navigate('/')} className="text-amber-600 hover:underline">Kembali ke Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-stone-500 hover:text-amber-600 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 capitalize">
            Portfolio <span className="text-amber-600">{categoryData.title}</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl">
            {categoryData.description}
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.items.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              
              {/* Card Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-700 flex items-center gap-1 shadow-sm">
                  <Calendar size={12} /> {item.date}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm mb-6 flex-1 leading-relaxed">
                  {item.excerpt}
                </p>
                
                {/* Link / Button */}
                <a 
                  href={item.link} 
                  className="inline-flex items-center justify-center w-full py-3 bg-stone-50 text-stone-700 rounded-lg font-medium text-sm hover:bg-stone-900 hover:text-white transition-all group/btn"
                >
                  Lihat Detail <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PortfolioDetail;