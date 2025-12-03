import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  // State untuk formulir kontak
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle perubahan input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Fungsi Kirim ke WhatsApp
  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Mohon isi Nama dan Pesan terlebih dahulu.");
      return;
    }

    const phoneNumber = "6285186899864"; // Format internasional
    const text = `Halo Mutiara, perkenalkan saya ${formData.name} (${formData.email}).%0A%0A${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  // Fungsi Kirim ke Email
  const handleEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Mohon isi Nama dan Pesan terlebih dahulu.");
      return;
    }

    const emailTo = "dewimutiarakomala@gmail.com";
    const subject = `Pesan Portfolio dari ${formData.name}`;
    const body = `Halo Mutiara,%0D%0A%0D%0ASaya ${formData.name} (${formData.email}) ingin menyampaikan pesan:%0D%0A%0D%0A${formData.message}`;

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6">Let's Work Together</h2>
          <p className="text-stone-600 mb-8">
            Saya selalu terbuka untuk diskusi mengenai peluang kerjasama, proyek penulisan, atau komunikasi media. Jangan ragu untuk menghubungi saya.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-100 rounded-full text-stone-700">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Email</h4>
                <a href="mailto:dewimutiarakomala@gmail.com" className="text-stone-600 hover:text-amber-700">dewimutiarakomala@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-100 rounded-full text-stone-700">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">WhatsApp / Phone</h4>
                <p className="text-stone-600">0851-8689-9864</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-100 rounded-full text-stone-700">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Location</h4>
                <p className="text-stone-600">Bojonggede, Bogor, Jawa Barat</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-100 rounded-full text-stone-700">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Social Media</h4>
                <p className="text-stone-600">IG: @kumala_ara</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 p-8 rounded-3xl shadow-sm border border-stone-100">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                placeholder="Pesan Anda..."
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all flex justify-center items-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp
              </button>
              <button
                type="button"
                onClick={handleEmail}
                className="w-full py-4 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 transition-all flex justify-center items-center gap-2"
              >
                <Send size={18} /> Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;