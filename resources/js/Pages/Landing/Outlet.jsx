import { useState } from 'react';
import AppLayout from '../../Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock, HiOutlineMap } from 'react-icons/hi';

export default function Outlet() {
    // State untuk memilih kota secara dinamis
    const [selectedRegion, setSelectedRegion] = useState('All');

    // Data Titik Hub & Fasilitas ICC Nusantara
    const outletLocations = [
        {
            id: 1,
            name: 'ICC Jakarta Headquarter',
            type: 'Pusat Edukasi & Cupping Lab',
            city: 'Jakarta',
            address: 'Gedung Pusat Agrikultur Modern, Lantai 1 & 2, Jl. Kopi Nusantara No. 10',
            phone: '+62 21-5556-7890',
            hours: '08:00 - 17:00 WIB',
            coordinates: 'Lat: -6.2088, Lng: 106.8456'
        },
        {
            id: 2,
            name: 'ICC Sumatra Processing Hub',
            type: 'Gudang Utama & Sortasi',
            city: 'Medan',
            address: 'Kawasan Industri Medan (KIM) Blok C-12, Jl. Gunung Gayo, Deli Serdang',
            phone: '+62 61-4443-2109',
            hours: '08:00 - 16:00 WIB',
            coordinates: 'Lat: 3.5952, Lng: 98.6722'
        },
        {
            id: 3,
            name: 'ICC Bali & Nusa Tenggara Hub',
            type: 'Laboratorium & Distribusi',
            city: 'Denpasar',
            address: 'Jl. Raya Kintamani No. 45X, Banjar Dinas, Bangli, Bali',
            phone: '+62 361-9988-776',
            hours: '09:00 - 17:00 WITA',
            coordinates: 'Lat: -8.6500, Lng: 115.2167'
        },
        {
            id: 4,
            name: 'ICC Central Java Roastery Hub',
            type: 'Fasilitas Roasting Komersial',
            city: 'Semarang',
            address: 'Kawasan Industri Candi Blok A-4, Jl. Gatot Subroto, Semarang',
            phone: '+62 24-7654-3210',
            hours: '08:00 - 17:00 WIB',
            coordinates: 'Lat: -6.9667, Lng: 110.4167'
        }
    ];

    // Logika Filter Berdasarkan Wilayah Kota
    const filteredOutlets = selectedRegion === 'All' 
        ? outletLocations 
        : outletLocations.filter(item => item.city === selectedRegion);

    return (
        <AppLayout>
            <Head>
                <title>Jaringan Hub & Outlet - Indonesia Coffee Center</title>
                <meta name="description" content="Temukan lokasi laboratorium cupping, gudang distribusi, dan pusat roasting resmi Indonesia Coffee Center." />
            </Head>

            {/* BANNER UTAMA */}
            <section className="bg-white border-b border-slate-200/60 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black font-display tracking-tight text-slate-950">Infrastruktur & Hub</h1>
                        <p className="text-sm text-slate-600 font-sans">Jaringan laboratorium uji fisik, pusat pemrosesan pasca-panen, dan titik distribusi logistik ICC.</p>
                    </div>

                    {/* Filter Dropdown Kota */}
                    <div className="relative max-w-xs w-full">
                        <select 
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 appearance-none shadow-sm cursor-pointer"
                        >
                            <option value="All">Semua Wilayah Operasional</option>
                            <option value="Jakarta">DKI Jakarta</option>
                            <option value="Medan">Sumatera Utara (Medan)</option>
                            <option value="Semarang">Jawa Tengah (Semarang)</option>
                            <option value="Denpasar">Bali (Denpasar)</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* LAYOUT DUA KOLOM: LIST VS MAP MOCKUP */}
            <section className="py-12 bg-slate-100/60 border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* KOLOM KIRI: DAFTAR KARTU OUTLET */}
                        <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                            {filteredOutlets.map((outlet) => (
                                <div 
                                    key={outlet.id} 
                                    className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors"></div>
                                    
                                    <div className="space-y-4">
                                        {/* Judul & Badge Tipe */}
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md inline-block">
                                                {outlet.type}
                                            </span>
                                            <h3 className="text-lg font-bold font-display text-slate-950 tracking-tight">
                                                {outlet.name}
                                            </h3>
                                        </div>

                                        {/* Detail Info Kontak & Alamat */}
                                        <div className="space-y-2 text-xs text-slate-600 font-sans">
                                            <div className="flex gap-3 items-start">
                                                <HiOutlineLocationMarker className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                                <p className="leading-relaxed">{outlet.address}</p>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                                                <div className="flex gap-2.5 items-center">
                                                    <HiOutlinePhone className="size-4 text-slate-400" />
                                                    <span>{outlet.phone}</span>
                                                </div>
                                                <div className="flex gap-2.5 items-center">
                                                    <HiOutlineClock className="size-4 text-slate-400" />
                                                    <span>{outlet.hours}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* KOLOM KANAN: PRE-BUILT GEOSPATIAL MAP MOCKUP */}
                        <div className="lg:col-span-6 order-1 lg:order-2 sticky top-28">
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-[460px] flex flex-col justify-between shadow-xl relative overflow-hidden">
                                
                                {/* Background Grid Peta Tiruan */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                
                                {/* Header Map Mockup */}
                                <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-emerald-500 animate-ping"></div>
                                        <span className="text-xs font-mono text-slate-400">GEOSPATIAL-TRACKING.SYS</span>
                                    </div>
                                    <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                                        Active Nodes: {filteredOutlets.length}
                                    </span>
                                </div>

                                {/* Body Center Graphic (Satelit Radar Ring) */}
                                <div className="flex flex-col items-center justify-center grow py-8 relative z-10 space-y-4">
                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute size-40 rounded-full border border-teal-500/10 animate-pulse"></div>
                                        <div className="absolute size-28 rounded-full border border-dashed border-emerald-500/20"></div>
                                        <div className="size-16 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-teal-500/20">
                                            <HiOutlineMap className="size-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-center space-y-1">
                                        <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                            {selectedRegion === 'All' ? 'Peta Distribusi Nasional' : `Fokus Node: ${selectedRegion}`}
                                        </p>
                                        <p className="text-[11px] text-slate-500 font-mono">
                                            {selectedRegion === 'All' ? '-6.2088, 106.8456 (ID-JKT)' : filteredOutlets[0]?.coordinates}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Map Data Summary */}
                                <div className="border-t border-slate-800 pt-4 relative z-10 bg-slate-900/60 backdrop-blur-sm rounded-b-2xl">
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        <div className="p-2 bg-slate-800/40 rounded-xl border border-slate-800">
                                            <span className="text-[9px] text-slate-500 block font-mono uppercase">Uptime</span>
                                            <span className="text-xs font-bold text-emerald-400 font-mono">100%</span>
                                        </div>
                                        <div className="p-2 bg-slate-800/40 rounded-xl border border-slate-800">
                                            <span className="text-[9px] text-slate-500 block font-mono uppercase">Sync</span>
                                            <span className="text-xs font-bold text-white font-mono">Realtime</span>
                                        </div>
                                        <div className="p-2 bg-slate-800/40 rounded-xl border border-slate-800">
                                            <span className="text-[9px] text-slate-500 block font-mono uppercase">SLA</span>
                                            <span className="text-xs font-bold text-teal-400 font-mono">24/7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}