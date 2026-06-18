import { Clock, MapPin, Phone } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import PageHero from '../../Components/Shared/PageHero';

const outlets = [
    { name: 'ICC Jakarta Pusat', city: 'Jakarta', address: 'Jl. Kopi Nusantara No. 10, Menteng', phone: '021-0000-0001', hours: '07:00 - 22:00' },
    { name: 'ICC Bandung Dago', city: 'Bandung', address: 'Jl. Ir. H. Juanda No. 88, Coblong', phone: '022-0000-0002', hours: '08:00 - 23:00' },
    { name: 'ICC Yogyakarta', city: 'Yogyakarta', address: 'Jl. Prawirotaman No. 15, Mergangsan', phone: '0274-000-003', hours: '07:00 - 24:00' },
    { name: 'ICC Surabaya Utara', city: 'Surabaya', address: 'Jl. Tunjungan No. 42, Genteng', phone: '031-0000-0004', hours: '08:00 - 22:00' },
    { name: 'ICC Bali Canggu', city: 'Bali', address: 'Jl. Pantai Batu Bolong No. 27', phone: '0361-000-005', hours: '06:00 - 23:00' },
    { name: 'ICC Medan Polonia', city: 'Medan', address: 'Jl. S. Parman No. 18, Medan Baru', phone: '061-0000-0006', hours: '08:00 - 22:00' },
];

export default function Outlet() {
    return (
        <AppLayout title="Outlet - Indonesia Coffee Center" description="Temukan outlet dan roastery mitra Indonesia Coffee Center di berbagai kota di Indonesia.">
            <PageHero eyebrow="Outlet Kami" title="42 outlet dan roastery mitra di seluruh Indonesia" description="Kunjungi outlet ICC dan mitra roastery kami di kota terdekat dengan standar kualitas Indonesia Coffee Center." />
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {outlets.map((outlet) => (
                        <article key={outlet.name} className="group flex flex-col gap-4 rounded-3xl border border-border p-6 transition hover:border-primary hover:shadow-lg">
                            <div className="flex items-start justify-between">
                                <div><p className="text-xs uppercase tracking-widest text-primary">{outlet.city}</p><h3 className="mt-1 text-lg font-semibold text-foreground">{outlet.name}</h3></div>
                                <div className="rounded-full bg-primary/10 p-2 text-primary"><MapPin className="h-4 w-4" /></div>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground">{outlet.address}</p>
                            <div className="mt-auto space-y-2 border-t border-border pt-4 text-sm text-foreground/80">
                                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {outlet.phone}</p>
                                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {outlet.hours}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}