import { Head } from '@inertiajs/react';

export default function PageMeta({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
}
