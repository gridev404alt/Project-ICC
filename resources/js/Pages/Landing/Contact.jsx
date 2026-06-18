import { Mail, MapPin, Phone, Send } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import PageHero from '../../Components/Shared/PageHero';

export default function Contact() {
    return (
        <AppLayout title="Contact - Indonesia Coffee Center" description="Hubungi tim Indonesia Coffee Center untuk kemitraan, konsultasi, atau pertanyaan seputar layanan kami.">
            <PageHero eyebrow="Contact" title="Mari bicara tentang kopi" description="Punya pertanyaan tentang katalog, kemitraan, atau layanan kami? Tim Indonesia Coffee Center siap merespons dalam 1x24 jam." />
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-8 lg:grid-cols-5">
                    <aside className="space-y-5 lg:col-span-2">
                        <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
                            <h2 className="text-2xl font-semibold">Informasi kontak</h2>
                            <p className="mt-2 text-sm opacity-90">Tim kami tersedia Senin sampai Jumat, pukul 09.00 sampai 18.00 WIB.</p>
                            <div className="mt-8 space-y-5 text-sm">
                                <div className="flex items-start gap-3"><div className="rounded-full bg-secondary p-2"><Mail className="h-4 w-4" /></div><div><p className="opacity-80">Email</p><p className="font-medium">hello@icc.co.id</p></div></div>
                                <div className="flex items-start gap-3"><div className="rounded-full bg-secondary p-2"><Phone className="h-4 w-4" /></div><div><p className="opacity-80">Phone</p><p className="font-medium">+62 21 0000 0000</p></div></div>
                                <div className="flex items-start gap-3"><div className="rounded-full bg-secondary p-2"><MapPin className="h-4 w-4" /></div><div><p className="opacity-80">Workshop</p><p className="font-medium">Gedung Pusat Agrikultur Modern, Lantai 1 dan 2<br />Jl. Kopi Nusantara No. 10, Jakarta</p></div></div>
                            </div>
                        </div>
                    </aside>
                    <form className="rounded-3xl border border-border p-8 lg:col-span-3" onSubmit={(event) => event.preventDefault()}>
                        <h2 className="text-2xl font-semibold text-foreground">Kirim pesan</h2>
                        <p className="mt-1 text-sm text-muted-foreground">Isi formulir di bawah dan tim kami akan menghubungi Anda kembali.</p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <Field label="Nama lengkap" placeholder="Nama Anda" />
                            <Field label="Email" type="email" placeholder="email@domain.com" />
                            <Field label="Perusahaan" placeholder="Opsional" />
                            <Field label="Topik" placeholder="Kemitraan, katalog, dll." />
                        </div>
                        <div className="mt-4">
                            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Pesan</label>
                            <textarea rows={5} placeholder="Ceritakan kebutuhan Anda..." className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                        </div>
                        <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/90"><Send className="h-4 w-4" /> Kirim pesan</button>
                    </form>
                </div>
            </section>
        </AppLayout>
    );
}

function Field({ label, type = 'text', placeholder }) {
    return (
        <div>
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</label>
            <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </div>
    );
}