import { Facebook, Instagram, Menu, Music2, X } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Outlet', href: '/outlet' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'Blog', href: '/blog' },
    { label: 'Service', href: '/service' },
    { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const navLinkClass = (href) =>
        `whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
            url === href || (href !== '/' && url.startsWith(href))
                ? 'bg-primary/10 text-primary'
                : 'text-foreground/70 hover:bg-muted hover:text-primary'
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between gap-6">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-12 items-center justify-center rounded-md border border-secondary/20 bg-white/60">
                            <span className="font-bold tracking-tighter text-secondary">/CC</span>
                        </div>
                        <div className="text-[10px] leading-tight text-muted-foreground">
                            <div className="font-semibold">ID Indonesia</div>
                            <div>Coffee Center</div>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-2 rounded-full bg-secondary px-4 py-2 text-primary-foreground md:flex">
                        <Instagram className="h-4 w-4" />
                        <Music2 className="h-4 w-4" />
                        <Facebook className="h-4 w-4" />
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/70 text-foreground transition hover:bg-muted md:hidden"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="border-t border-border bg-background px-6 pb-6 pt-3 md:hidden">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={navLinkClass(item.href)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-4 flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-primary-foreground">
                        <Instagram className="h-4 w-4" />
                        <Music2 className="h-4 w-4" />
                        <Facebook className="h-4 w-4" />
                    </div>
                </div>
            )}
        </header>
    );
}
