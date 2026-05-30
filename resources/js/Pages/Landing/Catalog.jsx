import { useState } from 'react';
import AppLayout from '../../Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineSearch, HiOutlineAdjustments, HiOutlineArrowSmRight } from 'react-icons/hi';

export default function Catalog() {
    // State untuk filter pencarian lokal (Client-side mockup)
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOrigin, setSelectedOrigin] = useState('All');
    const [selectedProcess, setSelectedProcess] = useState('All');

    // Data Mockup Kopi Nusantara 
    const coffeeProducts = [
        {
            id: 1,
            name: 'Aceh Gayo Avatara',
            origin: 'Sumatera',
            process: 'Full Wash',
            elevation: '1,500 - 1,600 masl',
            cupping_score: '84.50',
            flavor_notes: 'Brown Sugar, Green Apple, Black Tea',
            price: 'Rp 145,000',
            weight: '250g'
        },
        {
            id: 2,
            name: 'Flores Bajawa Organic',
            origin: 'Nusa Tenggara',
            process: 'Semi Wash',
            elevation: '1,300 - 1,400 masl',
            cupping_score: '83.75',
            flavor_notes: 'Milk Chocolate, Nutty, Caramel',
            price: 'Rp 130,000',
            weight: '250g'
        },
        {
            id: 3,
            name: 'Bali Kintamani Honey',
            origin: 'Bali',
            process: 'Honey Process',
            elevation: '1,200 - 1,350 masl',
            cupping_score: '85.25',
            flavor_notes: 'Orange Citrus, Honey Sweetness, Jasmine',
            price: 'Rp 160,000',
            weight: '250g'
        },
        {
            id: 4,
            name: 'Toraja Sapan Natural',
            origin: 'Sulawesi',
            process: 'Natural',
            elevation: '1,600 - 1,800 masl',
            cupping_score: '86.00',
            flavor_notes: 'Dark Cherry, Winey, Molasses',
            price: 'Rp 175,000',
            weight: '250g'
        },
        {
            id: 5,
            name: 'Java Preanger Anaerob',
            origin: 'Jawa',
            process: 'Natural',
            elevation: '1,400 - 1,500 masl',
            cupping_score: '85.50',
            flavor_notes: 'Banana Flambé, Jackfruit, Cinnamon',
            price: 'Rp 165,000',
            weight: '250g'
        },
        {
            id: 6,
            name: 'Papua Wamena Specialty',
            origin: 'Papua',
            process: 'Full Wash',
            elevation: '1,600 masl',
            cupping_score: '84.00',
            flavor_notes: 'Herbal, Earthy, Dark Chocolate',
            price: 'Rp 140,000',
            weight: '250g'
        }
    ];

    // Logika Filter Produk
    const filteredProducts = coffeeProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             product.flavor_notes.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesOrigin = selectedOrigin === 'All' || product.origin === selectedOrigin;
        const matchesProcess = selectedProcess === 'All' || product.process === selectedProcess;
        
        return matchesSearch && matchesOrigin && matchesProcess;
    });

    return (
        <AppLayout>
            <Head>
                <title>Katalog Komoditas Kopi - Indonesia Coffee Center</title>
                <meta name="description" content="E-Catalog resmi biji kopi pilihan (green beans & roasted beans) dari berbagai pegunungan di Indonesia." />
            </Head>

            {/* TOP BAR / BANNER */}
            <section className="bg-white border-b border-slate-200/60 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black font-display tracking-tight text-slate-950">E-Catalog Nusantara</h1>
                        <p className="text-sm text-slate-600 font-sans">Eksplorasi lot kopi terbaik dengan jaminan standarisasi mutu dan ketelusuran asal hulu.</p>
                    </div>

                    {/* Search Input Box */}
                    <div className="relative max-w-md w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                            <HiOutlineSearch className="size-5" />
                        </span>
                        <input 
                            type="text"
                            placeholder="Cari varietas atau notes rasa (misal: Citrus)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm rounded-2xl transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* MAIN CATALOG LAYOUT */}
            <section className="py-12 bg-slate-100/60 border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* LEFT: SIDEBAR FILTER */}
                        <div className="lg:col-span-3 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm space-y-6 sticky top-28">
                            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 text-slate-950 font-bold font-display">
                                <HiOutlineAdjustments className="size-5 text-teal-600" />
                                <span>Filter Komoditas</span>
                            </div>

                            {/* Filter Asal Pulau */}
                            <div className="space-y-2.5">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Asal Wilayah</label>
                                <select 
                                    value={selectedOrigin} 
                                    onChange={(e) => setSelectedOrigin(e.target.value)}
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                                >
                                    <option value="All">Semua Pulau</option>
                                    <option value="Sumatera">Sumatera</option>
                                    <option value="Jawa">Jawa</option>
                                    <option value="Bali">Bali</option>
                                    <option value="Nusa Tenggara">Nusa Tenggara</option>
                                    <option value="Sulawesi">Sulawesi</option>
                                    <option value="Papua">Papua</option>
                                </select>
                            </div>

                            {/* Filter Proses */}
                            <div className="space-y-2.5">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Proses Pasca Panen</label>
                                <select 
                                    value={selectedProcess} 
                                    onChange={(e) => setSelectedProcess(e.target.value)}
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                                >
                                    <option value="All">Semua Proses</option>
                                    <option value="Full Wash">Full Wash</option>
                                    <option value="Semi Wash">Semi Wash</option>
                                    <option value="Honey Process">Honey Process</option>
                                    <option value="Natural">Natural</option>
                                </select>
                            </div>
                        </div>

                        {/* RIGHT: PRODUCTS GRID */}
                        <div className="lg:col-span-9">
                            {filteredProducts.length === 0 ? (
                                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/60 shadow-sm space-y-2">
                                    <p className="text-slate-800 font-bold font-display text-lg">Produk Kopi Tidak Ditemukan</p>
                                    <p className="text-slate-500 text-sm font-sans">Coba ubah kombinasi kata kunci pencarian atau pengaturan opsi filter Anda.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => (
                                        <div 
                                            key={product.id} 
                                            className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="space-y-4">
                                                {/* Header Card: Asal & Score */}
                                                <div className="flex justify-between items-center text-xs font-semibold">
                                                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-sans">
                                                        {product.origin}
                                                    </span>
                                                    <span className="text-teal-600 font-mono font-bold bg-teal-50 px-2 py-1 rounded-md border border-teal-100">
                                                        Score: {product.cupping_score}
                                                    </span>
                                                </div>

                                                {/* Nama & Proses */}
                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-bold font-display text-slate-950 tracking-tight leading-snug">
                                                        {product.name}
                                                    </h3>
                                                    <span className="text-xs font-medium text-slate-400 block font-sans">
                                                        Process: <strong className="text-slate-600">{product.process}</strong>
                                                    </span>
                                                </div>

                                                {/* Spesifikasi Kopi */}
                                                <div className="bg-slate-50 p-3 rounded-xl space-y-1.5 border border-slate-100/60 text-xs font-sans">
                                                    <div className="flex justify-between text-slate-500">
                                                        <span>Elevasi:</span>
                                                        <span className="font-medium text-slate-800">{product.elevation}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-0.5 pt-1 border-t border-slate-200/40">
                                                        <span className="text-slate-500">Notes Rasa:</span>
                                                        <span className="font-semibold text-teal-700 truncate">{product.flavor_notes}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Footer Card: Harga & CTA Button */}
                                            <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-100">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-slate-400 font-sans">Harga / {product.weight}</span>
                                                    <span className="text-base font-black font-display text-slate-950">{product.price}</span>
                                                </div>

                                                {/* Button detail */}
                                                <button className="size-10 bg-slate-50 text-slate-800 rounded-xl flex items-center justify-center border border-slate-200 hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all group">
                                                    <HiOutlineArrowSmRight className="size-5 transform group-hover:translate-x-0.5 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}