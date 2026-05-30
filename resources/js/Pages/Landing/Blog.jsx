import { useState } from 'react';
import AppLayout from '../../Layouts/AppLayout';
import { Head, Link } from '@inertiajs/react';
import { HiOutlineCalendar, HiOutlineUser, HiOutlineArrowSmRight } from 'react-icons/hi';

export default function Blog() {
    // State untuk menyaring kategori artikel secara interaktif
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Edukasi', 'Tren Pasar', 'Pasca-Panen'];

    // Data Mockup Artikel Jurnal ICC
    const blogPosts = [
        {
            id: 1,
            title: 'Memahami Aturan Skor Cupping SCA dalam Penentuan Kualitas Kopi Specialty',
            excerpt: 'Bagaimana sebuah lot kopi bisa dikategorikan sebagai Specialty Grade? Mari bedah metrik penilaian rasa mulai dari acidity, body, hingga kebersihan rasa (clean cup).',
            category: 'Edukasi',
            author: 'Rizky Chandra',
            date: '28 Mei 2026',
            isFeatured: true
        },
        {
            id: 2,
            title: 'Mengenal Proses Anaerob Digestion: Tren Pasca-Panen Eksperimental',
            excerpt: 'Proses fermentasi tanpa oksigen kini naik daun karena mampu melahirkan cita rasa buah tropis yang intens dan unik pada kopi arabika.',
            category: 'Pasca-Panen',
            author: 'Gilang Permana',
            date: '25 Mei 2026',
            isFeatured: false
        },
        {
            id: 3,
            title: 'Analisis Pasar: Permintaan Ekspor Green Beans Indonesia Meningkat di Eropa',
            excerpt: 'Laporan kuartal pertama menunjukkan peningkatan adopsi kopi bersertifikat traceability oleh roastery independen di wilayah Skandinavia.',
            category: 'Tren Pasar',
            author: 'Kayla Jasmine',
            date: '18 Mei 2026',
            isFeatured: false
        },
        {
            id: 4,
            title: 'Panduan Mengkalibrasi Mesin Roasting Komersial untuk Biji Kopi Honey Process',
            excerpt: 'Kadar gula tinggi pada proses honey menuntut manajemen kurva panas yang presisi agar terhindar dari defect scorching.',
            category: 'Pasca-Panen',
            author: 'Rizky Chandra',
            date: '12 Mei 2026',
            isFeatured: false
        },
        {
            id: 5,
            title: '5 Karakter Rasa Khas Kopi Eksotis dari Pegunungan Papua Wamena',
            excerpt: 'Menjelajahi aroma herbal, earthy yang bersih, dan balutan aroma cokelat pekat yang khas dari kebun kopi paling timur nusantara.',
            category: 'Edukasi',
            author: 'Gilang Permana',
            date: '05 Mei 2026',
            isFeatured: false
        }
    ];

    // Artikel Utama (Selalu ambil yang isFeatured)
    const featuredPost = blogPosts.find(post => post.isFeatured);

    // Menyaring daftar artikel berdasarkan kategori tab yang aktif (Kecuali artikel utama agar tidak dobel)
    const filteredPosts = blogPosts.filter(post => {
        if (post.isFeatured) return false;
        return activeCategory === 'All' || post.category === activeCategory;
    });

    return (
        <AppLayout>
            <Head>
                <title>Jurnal & Wawasan Kopi - Indonesia Coffee Center</title>
                <meta name="description" content="Baca artikel edukasi agrikultur, tren pasar kopi global, dan teknologi pemrosesan pasca-panen dari pakar ICC." />
            </Head>

            {/* BANNER HEADER */}
            <section className="bg-white border-b border-slate-200/60 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black font-display tracking-tight text-slate-950">Jurnal & Wawasan</h1>
                        <p className="text-sm text-slate-600 font-sans">Media edukasi resmi seputar teknologi pertanian, kurasi cita rasa, dan analisis data pasar kopi.</p>
                    </div>

                    {/* INTERACTIVE CATEGORY TABS */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-200 ${
                                    activeCategory === cat
                                        ? 'bg-slate-950 text-white border-slate-950 shadow-sm shadow-slate-950/10'
                                        : 'bg-white text-slate-600 border-slate-200 hover:text-slate-950 hover:bg-slate-50'
                                }`}
                            >
                                {cat === 'All' ? 'Semua Jurnal' : cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED POST (Hanya muncul jika filter di posisi 'All') */}
            {activeCategory === 'All' && featuredPost && (
                <section className="py-12 bg-slate-50 border-b border-slate-200/40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group">
                            
                            {/* Dekorasi Aksen Gradasi Kiri */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-brand-gradient"></div>

                            {/* Konten Artikel Utama */}
                            <div className="lg:col-span-8 space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-md inline-block font-sans">
                                    Artikel Utama • {featuredPost.category}
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-slate-950 leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
                                    {featuredPost.excerpt}
                                </p>
                                
                                {/* Meta Data */}
                                <div className="flex flex-wrap gap-5 text-xs text-slate-400 pt-2 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <HiOutlineUser className="size-4 text-slate-400" />
                                        <span>{featuredPost.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <HiOutlineCalendar className="size-4 text-slate-400" />
                                        <span>{featuredPost.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Link Kanan */}
                            <div className="lg:col-span-4 text-left lg:text-right shrink-0">
                                <Link 
                                    href="/blog" 
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-slate-900 text-white text-sm font-bold tracking-wide rounded-2xl transition-colors group/btn"
                                >
                                    Baca Selengkapnya
                                    <HiOutlineArrowSmRight className="size-5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* LATEST ARTICLES GRID */}
            <section className="py-12 bg-slate-100/60 border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProductsCount(filteredPosts) === 0 ? (
                        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/60 shadow-sm space-y-2">
                            <p className="text-slate-800 font-bold font-display text-lg">Belum Ada Artikel</p>
                            <p className="text-slate-500 text-sm font-sans">Kategori ini belum memuat artikel jurnal terbaru. Silakan cek kategori lainnya.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post) => (
                                <div 
                                    key={post.id} 
                                    className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                                >
                                    <div className="space-y-4">
                                        {/* Kategori & Tanggal */}
                                        <div className="flex justify-between items-center text-[11px] font-semibold font-sans">
                                            <span className="text-teal-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md">
                                                {post.category}
                                            </span>
                                            <span className="text-slate-400 flex items-center gap-1">
                                                <HiOutlineCalendar className="size-3.5" />
                                                {post.date}
                                            </span>
                                        </div>

                                        {/* Judul & Excerpt */}
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold font-display text-slate-950 tracking-tight leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="flex items-center justify-between pt-4 mt-5 border-t border-slate-100 text-xs font-sans">
                                        <span className="text-slate-400 font-medium">Oleh: <strong className="text-slate-600 font-semibold">{post.author}</strong></span>
                                        
                                        <Link href="/blog" className="text-slate-900 font-bold flex items-center gap-1 hover:text-teal-600 transition-colors group/link">
                                            <span>Baca</span>
                                            <HiOutlineArrowSmRight className="size-4 transform group-hover/link:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </AppLayout>
    );
}

// Helper inline function untuk mengecek panjang array
function filteredProductsCount(arr) {
    return arr.length;
}