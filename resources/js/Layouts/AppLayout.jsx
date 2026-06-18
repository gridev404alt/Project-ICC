import PageMeta from '../Components/Layouts/PageMeta';
import SiteFooter from '../Components/Layouts/SiteFooter';
import SiteHeader from '../Components/Layouts/SiteHeader';

export default function AppLayout({ title, description, children }) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageMeta title={title} description={description} />
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
        </div>
    );
}