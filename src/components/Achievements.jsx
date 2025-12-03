import React from 'react';
import { Award } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Award size={48} className="mx-auto text-amber-500 mb-4" />
          <h2 className="text-3xl font-serif font-bold">Achievements</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-amber-500 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-amber-100">1st Place</h3>
            <p className="text-sm text-stone-400">Best Writer in Anthology "The Subconscious"</p>
            <p className="text-xs text-stone-500 mt-2">Pelangi Media, 2021</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-amber-500 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-amber-100">1st Place</h3>
            <p className="text-sm text-stone-400">Best Author in Anthology "When Twilight & Scratches"</p>
            <p className="text-xs text-stone-500 mt-2">Pelangi Media, 2021</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-amber-500 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-amber-100">2nd Place</h3>
            <p className="text-sm text-stone-400">Best Writer in Anthology "Love and Hate Humans"</p>
            <p className="text-xs text-stone-500 mt-2">Pelangi Media, 2021</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-amber-500 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-amber-100">Favorite</h3>
            <p className="text-sm text-stone-400">Best Favorite Author, Anthology of Short Stories</p>
            <p className="text-xs text-stone-500 mt-2">Sila Media, 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;