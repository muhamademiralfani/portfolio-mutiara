import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-amber-600 rounded-full"></div>
        </div>

        <div className="space-y-12 border-l-2 border-stone-200 pl-8 ml-4 relative">

          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-amber-600 border-4 border-stone-100"></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Research Writer (Internship)</h3>
                  <p className="text-stone-600 font-medium">Rahma Id Jogja</p>
                </div>
                <span className="text-sm text-stone-400 bg-stone-50 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">Mei 2023 - Nov 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
                <li>Melakukan riset mendalam tentang pengetahuan Islam untuk konten media.</li>
                <li>Membuat, mengelola, dan mendistribusikan konten Islami di media sosial.</li>
                <li>Mengedit naskah sebelum diserahkan ke tim konten PR.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-stone-300 border-4 border-stone-100"></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">National Headline Contributor</h3>
                  <p className="text-stone-600 font-medium">Freelance Journalist</p>
                </div>
                <span className="text-sm text-stone-400 bg-stone-50 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">Feb 2021 - Des 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
                <li>Melakukan wawancara narasumber untuk mendapatkan informasi akurat.</li>
                <li>Menjaga komunikasi baik dengan warga dan narasumber.</li>
                <li>Menyajikan berita yang berimbang untuk publik.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-stone-300 border-4 border-stone-100"></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Head of DKI Jakarta Coverage</h3>
                  <p className="text-stone-600 font-medium">PT Jabartek Media Tama</p>
                </div>
                <span className="text-sm text-stone-400 bg-stone-50 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">Jul 2018 - Des 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
                <li>Bertanggung jawab mengembangkan dan mengimplementasikan strategi periklanan.</li>
                <li>Negosiasi kontrak iklan untuk berbagai kampanye media.</li>
                <li>Mengawasi efektivitas hasil kampanye iklan.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-stone-300 border-4 border-stone-100"></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Staff Editor & Journalist</h3>
                  <p className="text-stone-600 font-medium">PT Headline Bogor</p>
                </div>
                <span className="text-sm text-stone-400 bg-stone-50 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">Jun 2018 - Agu 2020</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
                <li>Mengedit berita agar lebih mudah dibaca publik.</li>
                <li>Menulis berita liputan dan menghadiri konferensi pers.</li>
                <li>Menulis rilis pers untuk liputan berita.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;