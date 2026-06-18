import { Globe2, Leaf, Target, Users } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import PageHero from '../../Components/Shared/PageHero';

const values = [
    { icon: Leaf, title: 'Keberlanjutan', desc: 'Mendukung praktik pertanian kopi yang berkelanjutan dan ramah lingkungan.' },
    { icon: Globe2, title: 'Jangkauan Global', desc: 'Menghubungkan kopi nusantara dengan pasar dunia melalui ekosistem digital.' },
    { icon: Users, title: 'Pemberdayaan Petani', desc: 'Memberi akses, edukasi, dan harga yang adil bagi petani kopi Indonesia.' },
    { icon: Target, title: 'Kualitas Terbaik', desc: 'Kurasi katalog dengan standar cupping internasional di setiap kepingannya.' },
];

export default function About() {
    return (
        <AppLayout
            title="About - Indonesia Coffee Center"
            description="Mengenal Indonesia Coffee Center: visi, misi, dan komitmen menghubungkan ekosistem kopi nusantara dari hulu ke hilir."
        >
            <PageHero eyebrow="About ICC" title="Gerbang digital komoditas kopi nusantara" description="Indonesia Coffee Center hadir sebagai jembatan antara petani, roastery, outlet, dan penikmat kopi di seluruh Indonesia." />
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
                        <h2 className="text-xs uppercase tracking-[0.3em] opacity-80">Visi</h2>
                        <p className="mt-4 text-2xl font-semibold leading-snug">Menjadi ekosistem kopi terintegrasi nomor satu di Asia Tenggara, mengangkat citra kopi Indonesia ke panggung dunia.</p>
                    </div>
                    <div className="rounded-3xl border border-border p-10">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-primary">Misi</h2>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
                            <li>- Mengkurasi katalog green beans berstandar internasional.</li>
                            <li>- Memberdayakan petani dengan teknologi agronomi modern.</li>
                            <li>- Membangun jaringan outlet dan roastery mitra di seluruh Indonesia.</li>
                            <li>- Menerbitkan riset dan artikel edukatif seputar industri kopi.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-6 py-12">
                <h2 className="text-2xl font-semibold text-foreground">Nilai yang kami pegang</h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value) => (
                        <div key={value.title} className="rounded-3xl border border-border p-6 transition hover:border-primary">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><value.icon className="h-5 w-5" /></div>
                            <h3 className="mt-5 text-lg font-semibold text-foreground">{value.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-6 rounded-3xl bg-secondary p-10 text-secondary-foreground md:grid-cols-4">
                    {[
                        ['824', 'Ton green beans/tahun'],
                        ['42', 'Outlet dan roastery mitra'],
                        ['120+', 'Petani binaan'],
                        ['8', 'Provinsi penghasil'],
                    ].map(([value, label]) => (
                        <div key={label}>
                            <p className="text-5xl font-bold text-primary">{value}</p>
                            <p className="mt-2 text-sm opacity-80">{label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}