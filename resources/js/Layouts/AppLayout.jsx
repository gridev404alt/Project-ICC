import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
// 1. Import icon minimalis dari react-icons/hi
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

export default function AppLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Service', href: '/service' },
        { name: 'Catalog', href: '/catalog' },
        { name: 'Outlet', href: '/outlet' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col justify-between selection:bg-teal-500/20 selection:text-teal-800">
            {/* NAVBAR */}
            <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo ICC */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-black tracking-tight font-display">
                                <span className="text-transparent bg-clip-text bg-brand-gradient">ICC</span>
                                <span className="text-slate-800">.</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navigation.map((item) => {
                                const isActive = url === item.href || (item.href !== '/' && url.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${
                                            isActive
                                                ? 'text-teal-600 bg-teal-50/60 font-semibold'
                                                : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button - REFACTOR DENGAN REACT-ICONS */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-600 hover:text-slate-950 focus:outline-none p-2 rounded-xl hover:bg-slate-100 transition-all duration-300 size-10 flex items-center justify-center relative"
                                aria-label="Toggle navigation"
                            >
                                <div className="relative size-6 flex items-center justify-center">
                                    {/* Icon Close / HiX */}
                                    <HiX 
                                        className={`size-6 absolute transition-all duration-300 transform ${
                                            isOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'
                                        } text-teal-600`} 
                                    />
                                    {/* Icon Hamburger / HiOutlineMenuAlt3 */}
                                    <HiOutlineMenuAlt3 
                                        className={`size-6 absolute transition-all duration-300 transform ${
                                            isOpen ? '-rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
                                        }`} 
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Panel */}
                {isOpen && (
                    <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1.5 shadow-xl transition-all">
                        {navigation.map((item) => {
                            const isActive = url === item.href || (item.href !== '/' && url.startsWith(item.href));
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                                        isActive
                                            ? 'text-teal-600 bg-teal-50 font-semibold'
                                            : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </nav>

            {/* MAIN CONTENT */}
            <main className="flex-grow">
                {children}
            </main>

            {/* FOOTER PREMIUM */}
            <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-900">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold font-display text-white">Indonesia Coffee Center<span className="text-teal-400">.</span></h3>
                            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                                Gerbang digital komoditas kopi nusantara, mengintegrasikan hulu ke hilir untuk ekosistem kopi yang berkelanjutan.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Navigasi</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className="hover:text-teal-400 transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Sekretariat</h4>
                            <p className="text-sm leading-relaxed">
                                Gedung Pusat Agrikultur Modern, Lantai 1 & 2 <br />
                                Jl. Kopi Nusantara No. 10, Jakarta, Indonesia
                            </p>
                        </div>
                    </div>
                    <div className="pt-8 text-center text-xs text-slate-500 font-medium">
                        <p>&copy; 2026 Indonesia Coffee Center (ICC) Platform. Showcase Portfolio Web Dev.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}