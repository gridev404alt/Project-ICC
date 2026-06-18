export default function SiteFooter() {
    return (
        <footer className="mx-auto mt-16 max-w-7xl px-6 pb-10">
            <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-3">
                <div className="flex flex-col items-start text-left">
                    <h4 className="text-base font-semibold text-foreground">
                        Indonesia Coffee Center
                    </h4>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        Gerbang digital komoditas kopi nusantara, mengintegrasikan hulu ke hilir untuk ekosistem kopi yang berkelanjutan.
                    </p>
                </div>
                <div className="flex flex-col items-start text-left md:items-center md:text-center">
                    <h4 className="text-base font-semibold text-foreground">Workshop</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Gedung Pusat Agrikultur Modern, Lantai 1 dan 2
                        <br />
                        Jl. Kopi Nusantara No. 10, Jakarta, Indonesia
                    </p>
                </div>
                <div className="flex flex-col items-start text-left md:items-end md:text-right">
                    <h4 className="text-base font-semibold text-foreground">
                        Contact Information
                    </h4>
                    <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <p>Email  : hello@icc.co.id</p>
                        <p>Phone  : +62 21 0000 0000</p>
                        <p>Fax    : 0000-0000</p>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-center text-xs text-muted-foreground">
                @2026 Indonesia Coffee Center (ICC)
            </p>
        </footer>
    );
}
