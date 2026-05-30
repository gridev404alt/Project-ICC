import AppLayout from '../../Layouts/AppLayout'; 
import { Head } from '@inertiajs/react';
import { HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineGlobe } from 'react-icons/hi';

export default function About() {
    return (
        <AppLayout>
            <Head>
                <title>Tentang Kami - Indonesia Coffee Center</title>
                <meta name="description" content="Mengenal lebih dekat visi, misi, dan peran Indonesia Coffee Center dalam industri kopi nasional." />
            </Head>

            {/* HEADER SECTION */}
            <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-20 lg:pb-28 border-b border-slate-200/50">
                {/* Glow Background Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-full w-full max-w-7xl opacity-20">
                    <div className="absolute -top-20 left-10 size-96 rounded-full bg-teal-300 blur-[120px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/10">
                        Tentang ICC
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-950">
                        Menjaga Tradisi, Membawa Kopi Nusantara ke <span className="text-transparent bg-clip-text bg-brand-gradient">Masa Depan Digital</span>
                    </h1>
                    <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto pt-2">
                        Indonesia Coffee Center (ICC) hadir sebagai jembatan inklusif yang menghubungkan dedikasi para petani lokal di pelosok daerah dengan ekosistem pasar modern dan global.
                    </p>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-0 bg-transparent relative z-20 -mt-14 sm:-mt-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-slate-950 p-8 rounded-3xl shadow-xl shadow-slate-950/10 border border-slate-800">
                        <div className="text-center space-y-1">
                            <span className="block text-2xl sm:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-brand-gradient">45+</span>
                            <span className="text-xs sm:text-sm text-slate-400 font-medium">Varietas Kopi Terdata</span>
                        </div>
                        <div className="text-center space-y-1 border-l border-slate-800">
                            <span className="block text-2xl sm:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-brand-gradient">12K+</span>
                            <span className="text-xs sm:text-sm text-slate-400 font-medium">Petani Binaan</span>
                        </div>
                        <div className="text-center space-y-1 border-l border-slate-800">
                            <span className="block text-2xl sm:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-brand-gradient">34</span>
                            <span className="text-xs sm:text-sm text-slate-400 font-medium">Wilayah Geografis</span>
                        </div>
                        <div className="text-center space-y-1 border-l border-slate-800">
                            <span className="block text-2xl sm:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-brand-gradient">5M+</span>
                            <span className="text-xs sm:text-sm text-slate-400 font-medium">Aktivitas Distribusi</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISI & MISI SECTION */}
            <section className="pt-20 pb-16 sm:pt-24 sm:pb-24 bg-slate-100/60 border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Kiri: Judul & Visi */}
                        <div className="lg:col-span-5 space-y-6 sticky top-28">
                            <h2 className="text-3xl font-black font-display tracking-tight text-slate-950">
                                Visi Kami
                            </h2>
                            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-brand-gradient"></div>
                                <p className="text-lg text-slate-800 font-medium leading-relaxed font-sans">
                                    "Menjadi pusat ekosistem digital komoditas kopi terbesar di Asia Tenggara yang menjunjung tinggi pilar keberlanjutan, transparansi data, dan kemakmuran petani lokal."
                                </p>
                            </div>
                        </div>

                        {/* Kanan: Misi Point-by-Point */}
                        <div className="lg:col-span-7 space-y-6">
                            <h2 className="text-3xl font-black font-display tracking-tight text-slate-950">
                                Misi Strategis
                            </h2>
                            
                            <div className="space-y-4">
                                {/* Misi 1 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex gap-5 items-start">
                                    <div className="size-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                                        <HiOutlineSparkles className="size-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold font-display text-slate-950">Digitalisasi Supply Chain</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Membangun platform katalog terpadu untuk mendata asal-usul (*traceability*) biji kopi mulai dari elevasi tanam hingga proses pasca-panen.
                                        </p>
                                    </div>
                                </div>

                                {/* Misi 2 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex gap-5 items-start">
                                    <div className="size-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                                        <HiOutlineShieldCheck className="size-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold font-display text-slate-950">Standarisasi Mutu Nasional</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Menyediakan laboratorium uji cita rasa (*cupping*) yang terakreditasi untuk menjamin kualitas fisik dan sensori biji kopi yang dipasarkan.
                                        </p>
                                    </div>
                                </div>

                                {/* Misi 3 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex gap-5 items-start">
                                    <div className="size-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                                        <HiOutlineGlobe className="size-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold font-display text-slate-950">Ekspansi Pasar Global</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Membuka akses perdagangan internasional secara langsung bagi produsen kopi lokal guna memotong rantai tengkulak yang merugikan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUE BARS SECTION */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-black font-display text-slate-950 tracking-tight">Komitmen Budaya ICC</h2>
                        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
                            Tiga nilai mendasar yang membentuk cara kami bekerja membangun masa depan agrikultur digital Indonesia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                            <span className="text-sm font-bold font-display text-teal-600 block">01. Integritas Data</span>
                            <p className="text-slate-600 text-xs leading-relaxed">Semua profil komoditas, skor cupping, dan riwayat proses panen disajikan apa adanya secara akurat.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                            <span className="text-sm font-bold font-display text-teal-600 block">02. Kemitraan Adil</span>
                            <p className="text-slate-600 text-xs leading-relaxed">Mengutamakan sistem bagi hasil perdagangan yang transparan dan memprioritaskan kesejahteraan petani.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                            <span className="text-sm font-bold font-display text-teal-600 block">03. Inovasi Berkelanjutan</span>
                            <p className="text-slate-600 text-xs leading-relaxed">Terus beradaptasi dengan teknologi terbaru guna menjaga kelestarian lingkungan agroforestri kopi.</p>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}