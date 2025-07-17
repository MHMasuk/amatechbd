'use client'

import { Code, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center shadow-lg">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">AmaTechBD</span>
                        </Link>
                        <p className="text-slate-300 leading-relaxed">
                            Leading software development company in Bangladesh, delivering enterprise-grade solutions that drive digital transformation and business growth.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer group">
                                <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer group">
                                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer group">
                                <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Mobile Applications</Link></li>
                            <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Backend Systems</Link></li>
                            <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">DevOps & Security</Link></li>
                            <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Digital Transformation</Link></li>
                            <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Technical Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/team" className="text-slate-300 hover:text-white transition-colors">Our Team</Link></li>
                            <li><Link href="/projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="text-slate-300 hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-300 text-sm">
                                        Dhaka, Bangladesh<br />
                                        Banani, Dhaka 1213
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                <p className="text-slate-300 text-sm">hello@amatechbd.com</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                <p className="text-slate-300 text-sm">+880 1XXX-XXXXXX</p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Ready to get started?</h4>
                            <p className="text-slate-300 text-sm mb-3">Lets discuss your project today.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center text-sm text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                            >
                                Get Quote
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">
                            &copy; 2025 AmaTechBD. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;