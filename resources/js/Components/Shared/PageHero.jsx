export default function PageHero({ eyebrow, title, description }) {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-8 pt-4">
            <div className="rounded-3xl bg-secondary px-8 py-16 text-secondary-foreground md:px-14 md:py-20">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
                <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h1>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-secondary-foreground/80 md:text-base">{description}</p>
            </div>
        </section>
    );
}
