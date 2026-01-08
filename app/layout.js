import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata = {
    title: 'Flex to Next | Upcycling PVC Banners into Sustainable Products',
    description: 'We transform discarded PVC flex banners into reusable, sustainable products like tote bags and aprons. Join us in creating a circular economy.',
    keywords: 'sustainability, upcycling, PVC banners, eco-friendly, circular economy, reusable products, Nepal',
    authors: [{ name: 'Flex to Next' }],
    openGraph: {
        title: 'Flex to Next | Sustainable Upcycling',
        description: 'Turning waste banners into everyday essentials',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
