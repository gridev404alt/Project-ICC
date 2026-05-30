import { useState } from 'react';
import AppLayout from '../../Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineAnnotation, HiCheckCircle } from 'react-icons/hi';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        interest: 'Uji Mutu Laboratorium',
        message: ''
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', organization: '', email: '', interest: 'Uji Mutu Laboratorium', message: '' });
            setIsSubmitted(false);
        }, 4000);
    };

    return (
        <AppLayout>
            <Head>
                <title>Hubungi Kami - Indonesia Coffee Center</title>
                <meta name="description" content="Ajukan uji mutu cupping, integrasi supply chain, atau jadilah mitra distribusi resmi Indonesia Coffee Center." />
            </Head>

            {/* HEADER BANNER */}
            <section className="bg-white border-b border-slate-200/60 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-1 text-center md:text-left">
                        <h1 className="text-3xl font-black font-display tracking-tight text-slate-950">Hubungi & Bermitra</h1>
                        <p className="text-sm text-slate-600 font-sans">Pintu gerbang komunikasi untuk pengujian sampel komoditas, audit ketelusuran, dan aliansi bisnis global.</p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTACT LAYOUT */}
            <section className="py-12 bg-slate-100/60 border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* LEFT: CHANNELS & FAQ */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
                                <h2 className="text-xl font-bold font-display text-slate-950 tracking-tight">Saluran Resmi</h2>
                                
                                <div className="space-y-4 text-sm font-sans text-slate-600">
                                    <div className="flex gap-4 items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <div className="size-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                                            <HiOutlineMail className="size-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Kemitraan & Ekspor</span>
                                            <span className="font-semibold text-slate-800">partnership@indonesiacoffeecenter.id</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <div className="size-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                                            <HiOutlinePhone className="size-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Hotline Lab & Cupping</span>
                                            <span className="font-semibold text-slate-800">+62 21-5556-7890</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MICRO FAQ KEMITRAAN */}
                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-display">FAQ Singkat Kemitraan</h3>
                                <div className="space-y-3 text-xs font-sans text-slate-600 leading-relaxed">
                                    <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-950 mb-0.5">Berapa lama proses skor cupping?</p>
                                        <p>Evaluasi laboratorium organoleptik membutuhkan waktu 3 sampai 5 hari kerja setelah sampel green beans terdata di hub kami.</p>
                                    </div>
                                    <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-950 mb-0.5">Apakah petani mandiri bisa mengajukan?</p>
                                        <p>Bisa. Sistem kami terbuka inklusif baik untuk perorangan, kelompok tani lokal, koperasi, maupun perseroan terbatas ekspor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: INTERACTIVE FORM CONTAINER */}
                        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm relative overflow-hidden">
                            
                            {/* Alert Notification Success */}
                            {isSubmitted && (
                                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                                    <div className="size-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100 shadow-md">
                                        <HiCheckCircle className="size-10" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-slate-950 tracking-tight">Permohonan Terkirim</h3>
                                    <p className="text-sm text-slate-500 font-sans max-w-sm mt-1 leading-relaxed">
                                        Terima kasih. Formulir Anda berhasil di-sinkronisasi. Tim operasional ICC akan menghubungi Anda dalam waktu kurang dari 24 jam.
                                    </p>
                                </div>
                            )}

                            <h2 className="text-xl font-bold font-display text-slate-950 tracking-tight mb-6 flex items-center gap-2">
                                <HiOutlineAnnotation className="size-5 text-teal-600" />
                                <span>Formulir Layanan Elektronik</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4 text-sm font-sans">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="font-semibold text-slate-700">Nama Lengkap</label>
                                        <input 
                                            type="text" required 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            placeholder="contoh: Rizky Chandra"
                                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="font-semibold text-slate-700">Nama Lembaga / Kebun</label>
                                        <input 
                                            type="text" required
                                            value={formData.organization}
                                            onChange={(e) => setFormData({...formData, organization: e.target.value})}
                                            placeholder="contoh: Poktan Gayo Lestari"
                                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="font-semibold text-slate-700">Alamat Surat Elektronik (Email)</label>
                                    <input 
                                        type="email" required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="nama@emailanda.com"
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="font-semibold text-slate-700">Tujuan Kepentingan</label>
                                    <select 
                                        value={formData.interest}
                                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 cursor-pointer"
                                    >
                                        <option value="Uji Mutu Laboratorium">Uji Mutu & Skor Cupping Laboratorium</option>
                                        <option value="Sertifikasi Traceability">Sertifikasi Ketelusuran (Traceability QR)</option>
                                        <option value="Kontrak Roasting Hub">Maklon / Sewa Roasting Hub Modern</option>
                                        <option value="Pembelian Partai Besar">Permintaan Pasokan Komoditas Grosir</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="font-semibold text-slate-700">Pesan Tambahan / Deskripsi Sampel</label>
                                    <textarea 
                                        rows="4" required
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        placeholder="Tuliskan detail varietas kopi, proses pasca-panen, berat lot, atau pertanyaan spesifik Anda..."
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button 
                                        type="submit"
                                        className="w-full py-3.5 bg-brand-gradient hover:bg-brand-gradient-hover text-white text-sm font-bold tracking-wide rounded-2xl shadow-lg shadow-teal-600/10 transition-all duration-300"
                                    >
                                        Kirim Formulir Permohonan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}