import AppLayout from '../../Layouts/AppLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    HiOutlineBeaker, 
    HiOutlineClipboardCheck, 
    HiOutlineCube, 
    HiOutlineArrowRight,
    HiCheckCircle
} from 'react-icons/hi';

export default function Service() {
    const coreServices = [
        {
            id: '01',
            title: 'Laboratorium Uji Mutu & Cupping',
            description: 'Fasilitas uji organoleptik standar SCA (Specialty Coffee Association) untuk menentukan skor cupping, karakteristik rasa (notes), tingkat keasaman, dan cacat fisik (defects) biji kopi Anda.',
            icon: HiOutlineBeaker,
            features: ['Sertifikasi Skor Cupping SCA', 'Analisis Defect Fisik Green Beans', 'Rekomendasi Profil Roasting Optimal']
        },
        {
            id: '02',
            title: 'Sertifikasi Asal-Usul (Traceability)',
            description: 'Layanan audit digital untuk menerbitkan sertifikat pelacakan komoditas. Memastikan produk kopi Anda memiliki data hulu yang valid, mulai dari koordinat lahan, elevasi, hingga identitas petani.',
            icon: HiOutlineClipboardCheck,
            features: ['Penerbitan QR-Code Traceability', 'Audit Keberlanjutan (Sustainability)', 'Peluang Akses Pasar Premium']
        },
        {
            id: '03',
            title: 'Fasilitas Roasting Hub & Logistik',
            description: 'Akses ke infrastruktur pemrosesan modern dengan mesin roasting komersial berkapasitas besar. Kami membantu roastery mitra mengolah green beans menjadi roasted beans dengan konsistensi profil tinggi.',
            icon: HiOutlineCube,
            features: ['Mesin Roasting Komersial Modern', 'Pengemasan Vakum Standar Ekspor', 'Manajemen Gudang Terkontrol (Suhu/Kelembaban)']
        }
    ];

    return (
        <AppLayout>
            <Head>
                <title>Layanan Komoditas - Indonesia Coffee Center</title>
                <meta name="description" content="Layanan profesional uji mutu cupping, digitalisasi traceability, dan pemrosesan kopi nusantara." />
            </Head>

            {/* HERO LAYANAN */}
            <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-slate-200/50">
                <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-30">
                    <div className="absolute top-10 right-10 size-96 rounded-full bg-emerald-200 blur-[130px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/10">
                        Ekosistem Hulu ke Hilir
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-950">
                        Infrastruktur Modern untuk <span className="text-transparent bg-clip-text bg-brand-gradient">Standardisasi Kopi</span> Nasional
                    </h1>
                    <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto pt-2">
                        Kami menyediakan layanan teknis komprehensif berbasis data untuk meningkatkan nilai jual, kualitas rasa, dan daya saing komoditas kopi Indonesia di kancah internasional.
                    </p>
                </div>
            </section>

            {/* GRID LAYANAN UTAMA */}
            <section className="py-16 sm:py-24 bg-slate-100/60 border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {coreServices.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <div 
                                    key={service.id} 
                                    className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group"
                                >
                                    <div className="space-y-6">
                                        {/* Bagian Icon & ID */}
                                        <div className="flex justify-between items-start">
                                            <div className="size-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                                                <IconComponent className="size-7" />
                                            </div>
                                            <span className="text-4xl font-black font-display text-slate-200 group-hover:text-teal-100/80 transition-colors">
                                                {service.id}
                                            </span>
                                        </div>

                                        {/* Judul & Deskripsi */}
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold font-display text-slate-950 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed font-sans">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Fitur Bullet Points */}
                                        <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium font-sans">
                                                    <HiCheckCircle className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Button Link Placeholder */}
                                    <div className="pt-6">
                                        <Link 
                                            href="/contact" 
                                            className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors group/btn"
                                        >
                                            Ajukan Permohonan 
                                            <HiOutlineArrowRight className="size-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION SECTION */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="relative bg-slate-950 p-8 sm:p-12 rounded-3xl overflow-hidden shadow-xl border border-slate-800 text-center sm:text-left">
                        {/* Background Decorative Glow */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 size-80 rounded-full bg-teal-500/10 blur-[100px] -z-0"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-8 space-y-3">
                                <h2 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                                    Ingin Meningkatkan Nilai Jual Kopi Anda?
                                </h2>
                                <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans leading-relaxed">
                                    Diskusikan sampel uji kopi Anda atau hubungi tim agronomi kami untuk integrasi digital supply chain dengan platform ICC.
                                </p>
                            </div>
                            <div className="md:col-span-4 text-center sm:text-right shrink-0">
                                <Link
                                    href="/contact"
                                    className="inline-block px-6 py-3.5 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold tracking-wide rounded-2xl shadow-lg shadow-teal-600/20 transition-all duration-300"
                                >
                                    Konsultasi Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}