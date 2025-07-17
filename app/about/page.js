'use client'

import {CheckCircle, Lightbulb, Target, Zap, Users, Award, TrendingUp} from "lucide-react";
import React from "react";

const AboutPage = () => {
    return(
        <div className="min-h-screen pt-20 bg-gray-50">
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About AmaTechBD</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            We are a team of passionate technologists, designers, and strategists dedicated to delivering world-class software solutions that transform businesses and create lasting impact.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                To empower businesses across Bangladesh and beyond with cutting-edge technology solutions that drive digital transformation, enhance operational efficiency, and unlock new growth opportunities in the digital economy.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Target,
                                        title: 'Strategic Focus',
                                        desc: 'Aligned with your business objectives and market needs',
                                        color: 'from-blue-500 to-blue-600'
                                    },
                                    {
                                        icon: Lightbulb,
                                        title: 'Innovation First',
                                        desc: 'Leveraging emerging technologies and best practices',
                                        color: 'from-emerald-500 to-emerald-600'
                                    },
                                    {
                                        icon: CheckCircle,
                                        title: 'Quality Assurance',
                                        desc: 'Rigorous testing and enterprise-grade standards',
                                        color: 'from-purple-500 to-purple-600'
                                    },
                                    {
                                        icon: Zap,
                                        title: 'Agile Delivery',
                                        desc: 'Rapid development with continuous iteration',
                                        color: 'from-orange-500 to-orange-600'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Why Choose AmaTechBD?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span>5+ years of proven expertise in software development</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span>Full-stack development capabilities across all platforms</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span>Agile methodology with rapid prototyping</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span>24/7 support and comprehensive maintenance</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span>Transparent communication and project management</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span>Cost-effective solutions without compromising quality</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Company Stats */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-20">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {[
                                { icon: '🚀', number: '500+', label: 'Projects Completed', desc: 'Successfully delivered across various industries' },
                                { icon: '🤝', number: '200+', label: 'Happy Clients', desc: 'Long-term partnerships built on trust' },
                                { icon: '👥', number: '50+', label: 'Expert Team', desc: 'Skilled professionals and growing' },
                                { icon: '🏆', number: '99%', label: 'Success Rate', desc: 'Client satisfaction and project success' }
                            ].map((stat, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="text-4xl">{stat.icon}</div>
                                    <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                                    <div className="text-slate-800 font-medium">{stat.label}</div>
                                    <div className="text-sm text-slate-600">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Users,
                                    title: 'Client-Centric Approach',
                                    desc: 'We put our clients at the center of everything we do, ensuring their success is our primary goal through collaborative partnerships and dedicated support.',
                                    color: 'from-blue-500 to-cyan-500'
                                },
                                {
                                    icon: Award,
                                    title: 'Excellence & Quality',
                                    desc: 'We maintain the highest standards in code quality, security, and performance, delivering solutions that stand the test of time and scale.',
                                    color: 'from-emerald-500 to-teal-500'
                                },
                                {
                                    icon: TrendingUp,
                                    title: 'Continuous Innovation',
                                    desc: 'We stay ahead of technology trends, continuously learning and adapting to provide cutting-edge solutions that give our clients competitive advantages.',
                                    color: 'from-purple-500 to-indigo-500'
                                }
                            ].map((value, index) => (
                                <div key={index} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Story */}
                    <div className="bg-white rounded-2xl p-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Our Story</h2>
                            <div className="prose prose-lg max-w-none text-slate-600">
                                <p className="text-lg leading-relaxed mb-6">
                                    Founded in 2020, AmaTechBD emerged from a simple yet powerful vision: to bridge the gap between innovative technology and business success in Bangladeshs rapidly evolving digital landscape. What started as a small team of passionate developers has grown into a comprehensive technology partner for businesses across various industries.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    Our journey began with a commitment to excellence and a deep understanding of local market needs. We recognized that businesses in Bangladesh required not just software solutions, but strategic technology partners who could understand their unique challenges and opportunities.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Today, we are proud to have delivered over 500 successful projects, built lasting partnerships with 200+ clients, and established ourselves as a trusted name in Bangladeshs technology sector. Our team has grown to include experts in web development, mobile applications, cloud architecture, and digital transformation strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )};

export default AboutPage;