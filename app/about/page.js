'use client'

import {CheckCircle, Lightbulb, Target, Zap} from "lucide-react";
import React from "react";

export const metadata = {
    title: 'About AmaTechBD - Software Development Company in Bangladesh',
    description: 'Learn about AmaTechBD, a leading software development company in Bangladesh. Our mission, team, and commitment to delivering innovative digital solutions.',
    keywords: ['about AmaTechBD', 'software company Bangladesh', 'technology team', 'company mission', 'Bangladesh tech company'],
    openGraph: {
        title: 'About AmaTechBD - Software Development Company in Bangladesh',
        description: 'Learn about AmaTechBD, a leading software development company in Bangladesh with expert team and innovative solutions.',
        url: 'https://amatechbd.com/about',
        images: ['/og-about.jpg'],
    },
    alternates: {
        canonical: 'https://amatechbd.com/about',
    },
};

const AboutPage = () => {
    return(
    <div className="min-h-screen pt-20">
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About TechCraft</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We&apos;re a passionate team of developers, designers, and innovators dedicated to creating exceptional software solutions that drive business success.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To empower businesses through innovative technology solutions that not only meet today&apos;s challenges but anticipate tomorrow&apos;s opportunities. We believe in the transformative power of well-crafted software.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { icon: Target, title: 'Focused Approach', desc: 'Strategic solutions aligned with your goals' },
                                { icon: Lightbulb, title: 'Innovation First', desc: 'Cutting-edge technologies and methodologies' },
                                { icon: CheckCircle, title: 'Quality Assured', desc: 'Rigorous testing and quality control' },
                                { icon: Zap, title: 'Fast Delivery', desc: 'Agile development with quick turnarounds' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <item.icon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>5+ years of industry experience</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>Full-stack development expertise</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>Agile development methodology</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>24/7 support and maintenance</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>Transparent communication</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Innovation', desc: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.' },
                            { title: 'Quality', desc: 'Every line of code is crafted with precision and tested thoroughly to ensure excellence.' },
                            { title: 'Collaboration', desc: 'We work closely with our clients as partners to achieve shared success.' }
                        ].map((value, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
)};

export default AboutPage;