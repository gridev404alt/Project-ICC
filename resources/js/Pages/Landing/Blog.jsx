import { ArrowRight } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import PageHero from '../../Components/Shared/PageHero';

const articles = [
    { tag: 'Riset', title: 'Anaerobic Natural: Fermentasi yang Mengubah Profil Cup', date: '12 Jun 2026', read: '6 min', excerpt: 'Bagaimana fermentasi tanpa oksigen menghasilkan profil rasa yang lebih kompleks pada kopi Sumatera.' },
    { tag: 'Pasar', title: 'Harga Kopi Arabika Global Tembus USD 4.20/lb', date: '08 Jun 2026', read: '4 min', excerpt: 'Analisis kondisi panen Brazil dan dampaknya terhadap eksportir kopi Indonesia tahun ini.' },
    { tag: 'Petani', title: 'Pruning yang Tepat: Meningkatkan Yield Hingga 30%', date: '02 Jun 2026', read: '8 min', excerpt: 'Panduan teknis pemangkasan tanaman kopi arabika untuk petani di dataran tinggi.' },
    { tag: 'Edukasi', title: 'Cupping 101: Mengenal Bahasa Rasa Kopi', date: '28 Mei 2026', read: '5 min', excerpt: 'Pengantar untuk pemula tentang protokol cupping SCA dan istilah penilaian rasa.' },
    { tag: 'Industri', title: 'Roastery Mitra ICC Bertambah 12 Titik di Q2 2026', date: '20 Mei 2026', read: '3 min', excerpt: 'Ekspansi roastery mitra ICC mencakup Lombok, Manado, dan Pontianak.' },
];

export default function Blog() {
    const [feature, ...rest] = articles;

    return (
        <AppLayout title="Blog - Indonesia Coffee Center" description="Artikel dan jurnal seputar tren pasar kopi dunia, riset metode fermentasi, dan tips produktivitas bagi petani lokal.">
            <PageHero eyebrow="Blog dan Jurnal" title="Artikel dan jurnal hari ini" description="Publikasi reguler seputar tren pasar kopi dunia, riset metode fermentasi terbaru, hingga tips produktivitas bagi petani lokal." />
            <section className="mx-auto max-w-7xl px-6 py-12">
                <article className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-border md:grid-cols-2">
                    <div className="bg-primary p-10 text-primary-foreground">
                        <p className="text-xs uppercase tracking-widest opacity-80">Featured - {feature.tag}</p>
                        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{feature.title}</h2>
                        <p className="mt-4 text-sm leading-relaxed opacity-90">{feature.excerpt}</p>
                        <p className="mt-8 text-xs opacity-80">{feature.date} - {feature.read} read</p>
                    </div>
                    <div className="flex items-center justify-center bg-secondary p-10 text-secondary-foreground">
                        <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground">Baca artikel <ArrowRight className="h-4 w-4" /></a>
                    </div>
                </article>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {rest.map((article) => (
                        <article key={article.title} className="group flex flex-col gap-3 rounded-3xl border border-border p-6 transition hover:border-primary">
                            <p className="text-xs uppercase tracking-widest text-primary">{article.tag}</p>
                            <h3 className="text-xl font-semibold leading-snug text-foreground">{article.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                            <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground"><span>{article.date} - {article.read} read</span><ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" /></div>
                        </article>
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}