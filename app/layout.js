// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from "@/app/componenets/Navbar";
import Footer from '@/app/componenets/Footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'AmaTechBD - Building the Future of Software',
    description: 'We create innovative software solutions that transform businesses and drive digital excellence.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}