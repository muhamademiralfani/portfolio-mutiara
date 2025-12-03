import React from 'react';
import { Briefcase, PenTool, Users } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Professional Skills</h2>
            <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto md:mx-0"></div>
          </div>
          <p className="max-w-md text-stone-500 mt-4 md:mt-0">
            Kombinasi keahlian teknis dan interpersonal yang saya asah melalui pengalaman kerja dan organisasi.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Hard Skills */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-amber-600" /> Hard Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Journalism', 'News Writing', 'Press Release', 'Interviewing', 'Audio Transcription', 'Research', 'Sound Engineering', 'Media Monitoring', 'Social Media Management'].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-stone-100 text-stone-700 text-sm rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <PenTool size={20} className="text-amber-600" /> Tools
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-stone-600 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div> Microsoft Office
              </div>
              <div className="flex items-center gap-3 text-stone-600 text-sm">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div> Canva
              </div>
              <div className="flex items-center gap-3 text-stone-600 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Google Workspace
              </div>
              <div className="flex items-center gap-3 text-stone-600 text-sm">
                <div className="w-2 h-2 rounded-full bg-black"></div> CapCut & VN
              </div>
            </div>
          </div>

          {/* Soft Skills & Lang */}
          <div className="bg-stone-800 text-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-400">
              <Users size={20} /> Soft Skills
            </h3>
            <ul className="space-y-2 text-stone-300 text-sm mb-6 list-disc list-inside">
              <li>Leadership</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
              <li>Time Management</li>
            </ul>
            <div className="pt-4 border-t border-stone-600">
              <h4 className="text-sm font-bold text-amber-400 mb-2">Languages</h4>
              <div className="flex justify-between text-sm">
                <span>Indonesia</span>
                <span className="text-stone-400">Native</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>English</span>
                <span className="text-stone-400">Working</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;