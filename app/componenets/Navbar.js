'use client'

import { Code, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' }
    ];

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg flex items-center justify-center shadow-lg">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-slate-800">
                            AmaTechBD
                        </span>
                    </Link>

                    <nav className="hidden md:flex space-x-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    isActive(item.href)
                                        ? 'text-slate-800 bg-slate-100 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
                    <nav className="px-4 py-2 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    isActive(item.href)
                                        ? 'text-slate-800 bg-slate-100 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;