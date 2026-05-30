import AppLayout from '../../Layouts/AppLayout';
import { Head, Link } from '@inertiajs/react';

export default function Home() {
    return (
        <AppLayout>
            <Head>
                <title>Beranda - Indonesia Coffee Center</title>
                <meta name="description" content="Platform resmi profil industri, e-catalog biji kopi premium, dan jaringan mitra Indonesia Coffee Center." />
            </Head>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-20 lg:pb-28">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-30">
                    <div className="absolute -top-40 -right-40 size-20 rounded-full bg-teal-300 blur-[150px]"></div>
                    <div className="absolute top-60 right-60 size-96 rounded-full bg-emerald-200 blur-[130px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Kiri: Teks CTA */}
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/10">
                                <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Hub Kopi Digital Global Terintegrasi
                            </div>
                            
                            <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-slate-950 lg:leading-[1.15]">
                                Menghubungkan Rasa <br />
                                <span className="text-transparent bg-clip-text bg-brand-gradient">
                                    Kopi Nusantara
                                </span>
                            </h1>
                            
                            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                                Selamat datang di Indonesia Coffee Center (ICC). Ekosistem digital untuk mengeksplorasi katalog kopi pilihan, info layanan agronomi, sebaran outlet mitra, serta riset industri kopi terbaik dari hulu ke hilir.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link
                                    href="/catalog"
                                    className="px-8 py-4 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold tracking-wide rounded-2xl shadow-xl shadow-teal-600/20 hover:shadow-teal-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    Jelajahi Katalog Kopi
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold tracking-wide rounded-2xl ring-1 ring-slate-200/80 shadow-sm transition-all duration-300"
                                >
                                    Kemitraan & Hubungi Kami
                                </Link>
                            </div>
                        </div>

                        {/* Kanan: Mockup Sistem ICC Market Data */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative mx-auto w-full max-w-[450px] lg:max-w-none bg-gradient-to-tr from-slate-900 to-slate-800 p-6 rounded-3xl shadow-2xl shadow-slate-950/20 border border-slate-700/50">
                                {/* Header Mockup Windows */}
                                <div className="flex items-center space-x-2 pb-4 border-b border-slate-700/40 mb-4">
                                    <div className="size-3 rounded-full bg-red-500"></div>
                                    <div className="size-3 rounded-full bg-yellow-500"></div>
                                    <div className="size-3 rounded-full bg-emerald-500"></div>
                                    <span className="text-xs text-slate-500 pl-2 font-mono">icc-market-tracker.sys</span>
                                </div>

                                {/* Content Mini Stats */}
                                <div className="space-y-4">
                                    <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/30">
                                        <span className="text-xs text-slate-400 block mb-1">Volume Katalog Green Beans Terdata</span>
                                        <div className="flex justify-between items-end">
                                            <span className="text-2xl font-bold font-display text-white tracking-tight">824 Ton / Thn</span>
                                            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md">Grade A Premium</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/30">
                                            <span className="text-xs text-slate-400 block mb-1">Outlet & Roastery Mitra</span>
                                            <span className="text-xl font-bold font-display text-white">42 Titik</span>
                                        </div>
                                        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/30">
                                            <span className="text-xs text-slate-400 block mb-1">Arsitektur Core</span>
                                            <span className="text-xs font-mono font-bold bg-teal-500/10 text-teal-400 px-2 py-1 rounded inline-block mt-1 border border-teal-500/20">Laravel 11 + React</span>
                                        </div>
                                    </div>

                                    {/* Indikator Trend Ekspor */}
                                    <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/20 space-y-2">
                                        <span className="text-xs text-slate-400 block">Indeks Permintaan Kopi Nusantara (Global)</span>
                                        <div className="flex items-end gap-2 pt-2 h-16">
                                            <div className="w-full bg-slate-700 h-[25%] rounded-sm"></div>
                                            <div className="w-full bg-slate-700 h-[40%] rounded-sm"></div>
                                            <div className="w-full bg-slate-700 h-[60%] rounded-sm"></div>
                                            <div className="w-full bg-brand-gradient h-[80%] rounded-sm shadow-lg shadow-teal-500/20"></div>
                                            <div className="w-full bg-brand-gradient h-[95%] rounded-sm shadow-lg shadow-teal-500/20"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTIONS FEATURE LAYANAN */}
            <section className="bg-slate-100 py-20 lg:py-28 border-t border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-950">
                            Pilar Layanan Utama ICC
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-base">
                            Sistem informasi satu pintu untuk mengelola komoditas unggulan nasional demi mendukung ekosistem sirkular industri kopi Indonesia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {/* Card 1: Catalog */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                            <div className="size-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v6a2 2 0 012-2m14-0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-display text-slate-950 mb-3">E-Catalog Komoditas</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Eksplorasi beragam jenis kopi Indonesia (Gayo, Mandheling, Kintamani, Toraja) lengkap dengan skor cupping, profil proses (Full Wash, Natural, Honey), dan elevasi lahan.
                            </p>
                        </div>

                        {/* Card 2: Outlet */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                            <div className="size-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-display text-slate-950 mb-3">Jaringan Outlet & Hub</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Integrasi data sebaran outlet fisik pusat edukasi, laboratorium cupping, gudang distribusi utama, dan *roastery* resmi yang berafiliasi di bawah payung ICC.
                            </p>
                        </div>

                        {/* Card 3: Blog */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                            <div className="size-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11l2 2m0 0l2-2m-2 2v-6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-display text-slate-950 mb-3">Wawasan & Jurnal Kopi</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Publikasi artikel edukatif reguler seputar tren pasar kopi dunia, riset metode fermentasi terbaru, hingga tips mengoptimalkan produktivitas bagi petani lokal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}