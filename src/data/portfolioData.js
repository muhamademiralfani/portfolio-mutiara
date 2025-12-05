import laporanBintangRadio from '../assets/laporan-bintangradio.pdf'

export const portfolioData = {
  jurnalistik: {
    title: "Jurnalistik",
    description: "Kumpulan liputan, berita, dan artikel yang telah dipublikasikan di berbagai media.",
    items: [
      {
        id: 1,
        title: "Bintang Radio Mengajarkan Generasi Muda Boyong Warisan Musik Daerah",
        image: "https://www.jabaronline.com/media/images/2025/11/11690928d1473fe.jpeg?location=14&width=&height=&quality=90&fit=1",
        date: "2025",
        excerpt: "Liputan mengenai ajang Bintang Radio yang menjadi wadah pelestarian musik daerah bagi generasi muda.",
        link: "https://www.jabaronline.com/bintang-radio-mengajarkan-generasi-muda-boyong-warisan-musik-daerah"
      },
      {
        id: 2,
        title: "Persaingan Sengit Bintang Radio 2025: Voting Online Memanas",
        image: "https://www.jabaronline.com/media/images/2025/11/1169095eb14a4ce.jpeg?location=14&width=&height=&quality=90&fit=1",
        date: "2025",
        excerpt: "Berita terkini mengenai antusiasme publik dalam voting online ajang Bintang Radio 2025.",
        link: "https://www.jabaronline.com/persaingan-sengit-bintang-radio-2025-voting-online-memanas"
      },
      {
        id: 3,
        title: "Bintang Radio 2025: Persaingan Sengit Talenta Muda di Panggung Jakarta",
        image: "https://www.jabaronline.com/media/images/2025/11/116909c6b5b7ecf.jpeg?location=14&width=&height=&quality=90&fit=1",
        date: "2025",
        excerpt: "Reportase langsung dari panggung Jakarta mengenai kompetisi talenta muda.",
        link: "https://www.jabaronline.com/bintang-radio-2025-persaingan-sengit-talenta-muda-di-panggung-jakarta"
      },
      {
        id: 4,
        title: "YWKI Luncurkan Gerakan 'Hidup Sesudah Hidup'",
        image: "https://www.jabaronline.com/media/images/2025/10/1168feea7c85477.jpeg?location=14&width=&height=&quality=90&fit=1",
        date: "Terkini",
        excerpt: "Peluncuran gerakan wakaf produktif oleh YWKI sebagai upaya pembangunan fasilitas pendidikan Kauny Al-Quran University.",
        link: "https://www.jabaronline.com/ywki-luncurkan-gerakan-hidup-sesudah-hidup-gerakan-wakaf-produktif-untuk-pembangunan-kauny-al-quran-university"
      },
      {
        id: 5,
        title: "Talkshow Music Prenur: Kemkraf & RRI Dukung Pelestarian Musik Lokal",
        image: "https://www.jabaronline.com/media/images/2025/03/1167c92c85de523.jpeg?location=14&width=&height=&quality=90&fit=1",
        date: "Terkini",
        excerpt: "Liputan kolaborasi antara Kemenparekraf dan RRI dalam mendukung pengembangan serta pelestarian musik lokal melalui talkshow interaktif.",
        link: "https://www.jabaronline.com/talkshow-music-prenur-kemkraf-bekerjasama-rri-mendukung-plestarian-dan-pengembangan-music-lokal"
      },
    ]
  },
  academic: {
    title: "Akademik & Riset",
    description: "Publikasi ilmiah dan penelitian selama masa studi.",
    items: [
      {
        id: 1,
        title: "Skripsi: Kejahatan Pinjaman Online Ilegal",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        date: "2023",
        excerpt: "Penelitian mendalam tentang dampak pinjol ilegal terhadap mahasiswa IPB.",
        link: "#"
      }
    ]
  },
  creative: {
    title: "Kreatif & Sastra",
    description: "Karya fiksi, antologi cerpen, dan puisi.",
    items: [
      {
        id: 1,
        title: "Antologi: The Subconscious",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
        date: "2021",
        excerpt: "Juara 1 Lomba Menulis Cerpen Nasional oleh Pelangi Media.",
        link: "#"
      }
    ]
  },
  // KATEGORI BARU DITAMBAHKAN DI SINI
  organization: {
    title: "Organisasi & PR",
    description: "Pengalaman dalam manajemen acara (Event Organizer), hubungan masyarakat, dan strategi komunikasi publik.",
    items: [
      {
        id: 1,
        title: "Bintang Radio Indonesia 2025",
        // Ganti URL di bawah ini dengan URL gambar poster Bintang Radio (portfolio.png)
        image: "https://res.cloudinary.com/dvat9t8q9/image/upload/v1764929737/portfolio_mmylra.jpg", 
        date: "Nov 2025",
        excerpt: "Rangkaian show spesial RRI menampilkan Maliq & D'Essentials dan Shabrina Leonar di Auditorium Abdulrahman Saleh.",
        // Link ini akan mengarah ke gambar poster ketika 'Lihat Detail' diklik
        link: laporanBintangRadio 
      },
      {
        id: 2,
        title: "InspireNation Concert 2025",
        // Ganti URL di bawah ini dengan URL gambar poster InspireNation (portfolio2.png)
        image: "https://res.cloudinary.com/dvat9t8q9/image/upload/v1764929782/portfolio2_h4metv.jpg",
        date: "13 Des 2025",
        excerpt: "Konser musik oleh Humas & Promosi Universitas Pakuan menampilkan Pamungkas & Raissa Anggiani di The Bucketlist Bogor.",
        link: "https://res.cloudinary.com/dvat9t8q9/image/upload/v1764929782/portfolio2_h4metv.jpg"
      },
      {
        id: 3,
        title: "Muse Model: Fun Hunting Race",
        // Ganti URL di bawah ini dengan URL gambar poster Muse Model (portfolio3.png)
        image: "https://res.cloudinary.com/dvat9t8q9/image/upload/v1764929790/portfolio3_ldaela.jpg",
        date: "12 Juli 2025",
        excerpt: "Event fotografi dan talkshow interaktif 'Ruang Cerita di Balik Lensa' bersama Muse Model Community di Ciplaz Depok.",
        link: "https://res.cloudinary.com/dvat9t8q9/image/upload/v1764929790/portfolio3_ldaela.jpg"
      }
    ]
  }
};