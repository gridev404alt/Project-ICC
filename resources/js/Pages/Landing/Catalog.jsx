import { Droplets, Mountain, Star } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import PageHero from '../../Components/Shared/PageHero';

const beans = [
    { name: 'Gayo Wine', origin: 'Aceh', process: 'Natural', elevation: '1.400 mdpl', score: 86.5, notes: 'Wine, blackberry, dark chocolate' },
    { name: 'Mandheling Lintong', origin: 'Sumatera Utara', process: 'Full Wash', elevation: '1.200 mdpl', score: 85.0, notes: 'Earthy, cedar, tobacco, brown sugar' },
    { name: 'Kintamani Honey', origin: 'Bali', process: 'Honey', elevation: '1.300 mdpl', score: 85.75, notes: 'Citrus, jasmine, honey sweetness' },
    { name: 'Toraja Sapan', origin: 'Sulawesi Selatan', process: 'Full Wash', elevation: '1.500 mdpl', score: 86.0, notes: 'Cocoa, spice, bright acidity' },
    { name: 'Java Preanger', origin: 'Jawa Barat', process: 'Natural', elevation: '1.250 mdpl', score: 84.5, notes: 'Caramel, nutty, mellow' },
    { name: 'Flores Bajawa', origin: 'Nusa Tenggara Timur', process: 'Full Wash', elevation: '1.350 mdpl', score: 85.25, notes: 'Floral, vanilla, citrus' },
];

export default function Catalog() {
    return (
        <AppLayout title="Catalog - Indonesia Coffee Center" description="Jelajahi katalog green beans kopi Indonesia lengkap dengan skor cupping dan profil proses.">
            <PageHero eyebrow="Catalog Kopi" title="Eksplorasi green beans nusantara" description="Dari Gayo hingga Bajawa, setiap kopi dalam katalog ICC dikurasi dengan standar cupping internasional." />
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {beans.map((bean) => (
                        <article key={bean.name} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary hover:shadow-lg">
                            <div className="bg-secondary p-6 text-secondary-foreground">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-primary">{bean.origin}</p>
                                        <h3 className="mt-1 text-2xl font-semibold">{bean.name}</h3>
                                    </div>
                                    <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground"><Star className="h-3.5 w-3.5 fill-current" /> {bean.score}</div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 p-6">
                                <p className="text-sm leading-relaxed text-foreground/80"><span className="text-xs uppercase tracking-widest text-muted-foreground">Tasting notes</span><br />{bean.notes}</p>
                                <div className="mt-auto grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
                                    <div className="flex items-center gap-2 text-foreground/80"><Droplets className="h-4 w-4 text-primary" /> {bean.process}</div>
                                    <div className="flex items-center gap-2 text-foreground/80"><Mountain className="h-4 w-4 text-primary" /> {bean.elevation}</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}