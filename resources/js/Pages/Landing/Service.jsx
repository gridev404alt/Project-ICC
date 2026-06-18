import { Link } from '@inertiajs/react';
import { 
    BadgeCheck, BookOpen, Coffee, FlaskConical, Sprout, Truck 
} from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import PageHero from '../../Components/Shared/PageHero';

const services = [
    { icon: Sprout, title: 'Layanan Agronomi', desc: 'Konsultasi budidaya, pemilihan varietas, dan pendampingan teknis bagi petani kopi.' },
    { icon: FlaskConical, title: 'Cupping dan Quality Control', desc: 'Penilaian SCA, lab QC, dan sertifikasi mutu green beans sebelum masuk katalog.' },
    { icon: Truck, title: 'Logistik dan Distribusi', desc: 'Jaringan distribusi terintegrasi dari kebun ke roastery mitra di seluruh Indonesia.' },
    { icon: BookOpen, title: 'Edukasi dan Riset', desc: 'Publikasi jurnal, workshop barista, dan kelas Q grader bersertifikasi.' },
    { icon: Coffee, title: 'Roastery Partnership', desc: 'Kemitraan supply green beans premium untuk roastery dengan harga transparan.' },
    { icon: BadgeCheck, title: 'Sertifikasi Mitra', desc: 'Program sertifikasi outlet dan roastery ICC untuk menjaga standar pelayanan.' },
];

export default function Service() {
    return (
        <AppLayout title="Service - Indonesia Coffee Center" description="Layanan ICC meliputi agronomi, quality control, logistik, edukasi, dan kemitraan roastery.">
            <PageHero eyebrow="Service" title="Layanan pelayanan kami" description="Indonesia Coffee Center menyediakan layanan terintegrasi mulai dari hulu hingga hilir untuk petani, roastery, dan outlet." />
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <article key={service.title} className={`group rounded-3xl p-8 transition ${index % 2 === 0 ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'}`}>
                            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${index % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}><service.icon className="h-6 w-6" /></div>
                            <h3 className="mt-6 text-2xl font-semibold leading-tight">{service.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed opacity-90">{service.desc}</p>
                        </article>
                    ))}
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="rounded-3xl border border-border p-10 text-center">
                    <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Tertarik menjadi mitra ICC?</h2>
                    <p className="mt-3 text-sm text-muted-foreground">Tim kami siap membantu merancang skema kemitraan yang sesuai kebutuhan bisnis Anda.</p>
                    <Link href="/contact" className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">Hubungi Tim Kami</Link>
                </div>
            </section>
        </AppLayout>
    );
}