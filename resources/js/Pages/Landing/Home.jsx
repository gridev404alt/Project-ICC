import { Link } from '@inertiajs/react';
import { 
    ArrowRight, BadgeCheck, ChevronLeft, ChevronRight 
} from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import coffeeBeans from '../../Components/Assets/coffee-beans.jpg';
import coffeeShop from '../../Components/Assets/coffee-shop.jpg';
import heroCoffee from '../../Components/Assets/hero-coffee.jpg';

const partners = [
    'PERTAMINA',
    'MIND ID',
    'Telkom Indonesia',
    'Garuda Indonesia',
    'BTN',
    'DJARUM',
    'gojek',
    'BNI',
    'bulog',
    'ID FOOD',
];

export default function Home() {
    return (
        <AppLayout
            title="Indonesia Coffee Center - Menghubungkan Rasa Kopi Nusantara"
            description="Ekosistem digital untuk eksplorasi katalog kopi, layanan agronomi, outlet mitra, dan riset industri kopi Indonesia."
        >
            <section className="mx-auto max-w-7xl px-6 pt-4">
                <div className="relative overflow-hidden rounded-3xl">
                    <img src={heroCoffee} alt="Indonesia Coffee Center" className="h-[460px] w-full object-cover md:h-[560px]" width={1920} height={1080} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

                    <button type="button" aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur hover:bg-white/50">
                        <ChevronLeft className="h-5 w-5 text-white" />
                    </button>
                    <button type="button" aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur hover:bg-white/50">
                        <ChevronRight className="h-5 w-5 text-white" />
                    </button>

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                            Menghubungkan Rasa Kopi Nusantara
                            <br />
                            Dengan Satu Genggaman
                        </h1>
                        <p className="mt-5 max-w-xl text-sm text-white/85 md:text-base">
                            Selamat datang di Indonesia Coffee Center (ICC). Ekosistem digital untuk mengeksplorasi katalog kopi pilihan, layanan agronomi, sebaran outlet mitra, serta riset industri kopi terbaik dari hulu ke hilir.
                        </p>
                        <Link href="/catalog" className="mt-6 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
                            Jelajahi Katalog Kopi
                        </Link>
                    </div>

                    <div className="absolute bottom-5 left-6 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-amber-200 to-amber-600" />
                            ))}
                        </div>
                        <div className="text-[10px] leading-tight text-white/90">
                            <div>Hub Kopi Digital Global</div>
                            <div>Yang Terintegrasi</div>
                        </div>
                    </div>

                    <div className="absolute bottom-5 right-6 hidden items-center gap-6 text-sm text-white md:flex">
                        <Link href="/service" className="flex items-center gap-1 hover:text-primary">Service <ArrowRight className="h-3.5 w-3.5" /></Link>
                        <Link href="/outlet" className="flex items-center gap-1 hover:text-primary">Outlet Kami <ArrowRight className="h-3.5 w-3.5" /></Link>
                        <Link href="/contact" className="flex items-center gap-1 hover:text-primary">Hubungi Kami <ArrowRight className="h-3.5 w-3.5" /></Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
                    <p className="text-sm text-foreground">ICC @2026</p>
                    <div className="h-px w-full bg-foreground/40" />
                    <p className="text-sm leading-relaxed text-foreground/80">
                        Perjalanan panjang kami untuk senantiasa berbakti bagi negeri, memberikan kontribusi terbaik di setiap kepingan kopi yang Anda terima hari ini.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="flex flex-col gap-5">
                        <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] uppercase opacity-80">Volume Katalog<br />Green Beans Terdata</p>
                                    <p className="mt-3 text-4xl font-bold">824<span className="ml-1 text-xs font-normal opacity-80">Ton/Tahun</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase opacity-80">Outlet dan Roastery<br />Semua Mitra</p>
                                    <p className="mt-3 text-4xl font-bold">42<span className="ml-1 text-xs font-normal opacity-80">Titik</span></p>
                                </div>
                            </div>
                            <p className="mt-6 text-[10px] opacity-70">ICC @2026</p>
                        </div>
                        <Link href="/service" className="flex items-center justify-between rounded-3xl bg-secondary p-6 text-secondary-foreground transition hover:opacity-95">
                            <h3 className="text-2xl font-semibold leading-tight">Service<br />Pelayanan Kami</h3>
                            <div className="rounded-full bg-primary p-3"><BadgeCheck className="h-7 w-7 text-secondary" strokeWidth={2.5} /></div>
                        </Link>
                    </div>

                    <Link href="/catalog" className="relative block overflow-hidden rounded-3xl">
                        <img src={coffeeBeans} alt="Katalog Kopi" className="h-full min-h-[380px] w-full object-cover" loading="lazy" width={800} height={800} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                            <h3 className="text-2xl font-semibold leading-tight">Semua<br />Katalog Kami</h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/85">Eksplorasi beragam jenis kopi Indonesia lengkap dengan skor cupping, profil proses, dan elevasi lahan.</p>
                        </div>
                    </Link>

                    <Link href="/blog" className="relative block overflow-hidden rounded-3xl">
                        <img src={coffeeShop} alt="Artikel dan Jurnal" className="h-full min-h-[380px] w-full object-cover" loading="lazy" width={800} height={800} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                            <h3 className="text-2xl font-semibold leading-tight">Artikel dan<br />Jurnal Hari Ini</h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/85">Publikasi artikel edukatif reguler seputar tren pasar kopi dunia, riset fermentasi terbaru, hingga tips produktivitas petani lokal.</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-14">
                <p className="mb-6 text-center text-sm text-foreground/80">Semua mitra dalam pelayanan kami</p>
                <div className="rounded-3xl bg-primary px-8 py-10">
                    <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
                        {partners.map((partner) => (
                            <div key={partner} className="text-center text-base font-semibold tracking-wide text-primary-foreground/95">{partner}</div>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}