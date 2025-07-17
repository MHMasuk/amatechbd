// 'use client'
//
// import React from 'react';
// import { Code, Smartphone, Globe, Database, Shield, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
// import Link from 'next/link';
//
// const HomePage = () => {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-8">
//                             <div className="space-y-4">
//                                 <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-700 font-medium">
//                                     <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
//                                     Trusted by 500+ Companies
//                                 </div>
//                                 <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
//                                     Enterprise-Grade
//                                     <span className="block text-slate-700">
//                                         Software Solutions
//                                     </span>
//                                 </h1>
//                                 <p className="text-xl text-slate-600 leading-relaxed">
//                                     Transform your business with cutting-edge technology. We deliver scalable, secure, and innovative software solutions that drive digital transformation and business growth.
//                                 </p>
//                             </div>
//
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <Link
//                                     href="/contact"
//                                     className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
//                                 >
//                                     <span>Start Your Project</span>
//                                     <ArrowRight className="w-5 h-5" />
//                                 </Link>
//                                 <Link
//                                     href="/portfolio"
//                                     className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300"
//                                 >
//                                     View Our Work
//                                 </Link>
//                             </div>
//
//                             <div className="flex items-center space-x-6 pt-4">
//                                 <div className="flex -space-x-2">
//                                     {[...Array(4)].map((_, i) => (
//                                         <div key={i} className="w-10 h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full border-2 border-white flex items-center justify-center">
//                                             <span className="text-slate-700 font-medium text-sm">{i + 1}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="text-sm text-slate-600">
//                                     <div className="flex items-center space-x-1">
//                                         <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                                         <span className="font-semibold">4.9/5</span>
//                                     </div>
//                                     <div>from 200+ reviews</div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="relative">
//                             <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm"></div>
//                                 <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
//                                 <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-500 rounded-full"></div>
//                                 <div className="absolute top-4 left-16 w-3 h-3 bg-green-500 rounded-full"></div>
//                                 <div className="relative z-10 text-white text-center">
//                                     <Code className="w-24 h-24 mx-auto mb-4 opacity-90" />
//                                     <p className="text-lg font-medium">Clean, Scalable Code</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Services Preview */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
//                         <p className="text-xl text-slate-600">Comprehensive solutions for modern businesses</p>
//                     </div>
//
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {[
//                             { icon: Globe, title: 'Web Development', desc: 'Enterprise-grade web applications and platforms', color: 'from-blue-500 to-blue-600' },
//                             { icon: Smartphone, title: 'Mobile Solutions', desc: 'Native and cross-platform mobile applications', color: 'from-emerald-500 to-emerald-600' },
//                             { icon: Database, title: 'Backend Systems', desc: 'Scalable APIs and microservices architecture', color: 'from-purple-500 to-purple-600' },
//                             { icon: Shield, title: 'Security & DevOps', desc: 'Robust security and automated deployment', color: 'from-red-500 to-red-600' },
//                             { icon: Code, title: 'Custom Software', desc: 'Tailored solutions for unique business needs', color: 'from-indigo-500 to-indigo-600' },
//                             { icon: Users, title: 'Digital Transformation', desc: 'End-to-end modernization strategies', color: 'from-orange-500 to-orange-600' }
//                         ].map((service, index) => (
//                             <div key={index} className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
//                                 <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
//                                     <service.icon className="w-7 h-7 text-white" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
//                                 <p className="text-slate-600 leading-relaxed">{service.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Stats Section */}
//             <section className="py-20 bg-slate-900">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-4 gap-8 text-center">
//                         {[
//                             { number: '500+', label: 'Projects Delivered', icon: '🚀' },
//                             { number: '200+', label: 'Happy Clients', icon: '🤝' },
//                             { number: '50+', label: 'Expert Team', icon: '👥' },
//                             { number: '5+', label: 'Years Excellence', icon: '🏆' }
//                         ].map((stat, index) => (
//                             <div key={index} className="space-y-3">
//                                 <div className="text-3xl">{stat.icon}</div>
//                                 <div className="text-4xl font-bold text-white">{stat.number}</div>
//                                 <div className="text-slate-300">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Why Choose Us Section */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose AmaTechBD?</h2>
//                         <p className="text-xl text-slate-600">Industry-leading expertise with a proven track record</p>
//                     </div>
//
//                     <div className="grid lg:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 icon: '🎯',
//                                 title: 'Strategic Approach',
//                                 description: 'We align technology solutions with your business objectives to deliver measurable results and sustainable growth.'
//                             },
//                             {
//                                 icon: '⚡',
//                                 title: 'Agile Delivery',
//                                 description: 'Our proven agile methodology ensures rapid development cycles with continuous feedback and quality assurance.'
//                             },
//                             {
//                                 icon: '🔧',
//                                 title: 'Modern Technology Stack',
//                                 description: 'We leverage cutting-edge technologies and frameworks to build future-ready applications that scale.'
//                             },
//                             {
//                                 icon: '🛡️',
//                                 title: 'Enterprise Security',
//                                 description: 'Bank-grade security measures and compliance standards to protect your data and user privacy.'
//                             },
//                             {
//                                 icon: '🤝',
//                                 title: 'Partnership Approach',
//                                 description: 'We work as an extension of your team, providing transparent communication and collaborative development.'
//                             },
//                             {
//                                 icon: '🔄',
//                                 title: '24/7 Support',
//                                 description: 'Comprehensive maintenance and support services to ensure your applications run smoothly around the clock.'
//                             }
//                         ].map((feature, index) => (
//                             <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
//                                 <div className="text-4xl mb-6">{feature.icon}</div>
//                                 <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
//                                 <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Technologies Section */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Stack</h2>
//                         <p className="text-xl text-slate-600">Building with industry-leading technologies</p>
//                     </div>
//
//                     <div className="grid md:grid-cols-4 gap-8">
//                         {[
//                             {
//                                 category: 'Frontend',
//                                 technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
//                                 color: 'from-blue-500 to-cyan-500'
//                             },
//                             {
//                                 category: 'Backend',
//                                 technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
//                                 color: 'from-emerald-500 to-teal-500'
//                             },
//                             {
//                                 category: 'Mobile',
//                                 technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
//                                 color: 'from-purple-500 to-indigo-500'
//                             },
//                             {
//                                 category: 'DevOps & Cloud',
//                                 technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
//                                 color: 'from-orange-500 to-red-500'
//                             }
//                         ].map((tech, index) => (
//                             <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//                                 <div className={`w-14 h-14 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-6`}>
//                                     <Code className="w-7 h-7 text-white" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-slate-900 mb-6">{tech.category}</h3>
//                                 <ul className="space-y-3">
//                                     {tech.technologies.map((technology, techIndex) => (
//                                         <li key={techIndex} className="text-slate-600 flex items-center">
//                                             <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
//                                             {technology}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Client Testimonials */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
//                         <p className="text-xl text-slate-600">Trusted by industry leaders worldwide</p>
//                     </div>
//
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 quote: "AmaTechBD delivered an exceptional platform that transformed our financial operations. The team's expertise and dedication were outstanding.",
//                                 author: "Sarah Johnson",
//                                 role: "CTO, MetroBank Solutions",
//                                 rating: 5
//                             },
//                             {
//                                 quote: "The healthcare app exceeded all expectations. It's secure, user-friendly, and has significantly improved our patient engagement.",
//                                 author: "Dr. Michael Chen",
//                                 role: "Medical Director, MediCare Plus",
//                                 rating: 5
//                             },
//                             {
//                                 quote: "Outstanding e-commerce solution that increased our sales by 40%. The platform is robust, scalable, and perfectly aligned with our needs.",
//                                 author: "David Kim",
//                                 role: "CEO, RetailMax Corporation",
//                                 rating: 5
//                             }
//                         ].map((testimonial, index) => (
//                             <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
//                                 <div className="flex text-yellow-500 mb-4">
//                                     {[...Array(testimonial.rating)].map((_, i) => (
//                                         <Star key={i} className="w-5 h-5 fill-current" />
//                                     ))}
//                                 </div>
//                                 <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
//                                     {testimonial.quote}
//                                 </blockquote>
//                                 <div className="flex items-center">
//                                     <div className="w-12 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full flex items-center justify-center mr-4">
//                                         <span className="text-slate-700 font-medium">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
//                                     </div>
//                                     <div>
//                                         <div className="font-semibold text-slate-900">{testimonial.author}</div>
//                                         <div className="text-sm text-slate-600">{testimonial.role}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* CTA Section */}
//             <section className="py-20 bg-slate-900">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <div className="max-w-3xl mx-auto">
//                         <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
//                         <p className="text-xl text-slate-300 mb-8">
//                             Let s discuss how we can help accelerate your digital transformation with cutting-edge software solutions.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Link
//                                 href="/contact"
//                                 className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
//                             >
//                                 <span>Get Started Today</span>
//                                 <ArrowRight className="w-5 h-5" />
//                             </Link>
//                             <Link
//                                 href="/portfolio"
//                                 className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
//                             >
//                                 View Our Portfolio
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };
//
// export default HomePage;

'use client'

import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Globe, Database, Shield, Users, ArrowRight, CheckCircle, Star, Play, Award, Zap, Target } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
    const [currentStat, setCurrentStat] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const stats = [
        { number: '500+', label: 'Projects Delivered', icon: '🚀' },
        { number: '200+', label: 'Happy Clients', icon: '🤝' },
        { number: '99%', label: 'Success Rate', icon: '⭐' },
        { number: '24/7', label: 'Support', icon: '🛠️' }
    ];

    const technologies = ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'TypeScript'];
    const [currentTech, setCurrentTech] = useState(0);

    useEffect(() => {
        const statInterval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length);
        }, 3000);

        const techInterval = setInterval(() => {
            setCurrentTech((prev) => (prev + 1) % technologies.length);
        }, 2000);

        return () => {
            clearInterval(statInterval);
            clearInterval(techInterval);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Enhanced Hero Section - Lighter Version */}
            <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzk0YTNiODA4IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 font-medium border border-slate-200 shadow-sm">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                                <span className="text-sm">Trusted by Fortune 500 Companies</span>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                    Building
                                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                                        Digital Excellence
                                    </span>
                                    <span className="block text-4xl lg:text-5xl text-slate-700">
                                        One Code at a Time
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                    We are not just developers we are digital architects crafting enterprise-grade solutions that transform businesses and create lasting impact in the digital economy.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                                >
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={() => setIsVideoPlaying(true)}
                                    className="group px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Watch Our Story</span>
                                </button>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-3 gap-4 pt-8">
                                {[
                                    { icon: Target, label: 'Strategic Focus', desc: '100% aligned with your goals' },
                                    { icon: Zap, label: 'Rapid Delivery', desc: 'Agile development cycles' },
                                    { icon: Award, label: 'Quality Assured', desc: 'Enterprise-grade standards' }
                                ].map((feature, index) => (
                                    <div key={index} className="group">
                                        <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 group-hover:bg-white border border-slate-200 shadow-sm transition-colors">
                                            <feature.icon className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <h3 className="text-slate-900 font-medium text-sm mb-1">{feature.label}</h3>
                                        <p className="text-slate-600 text-xs">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Interactive Dashboard */}
                        <div className="relative">
                            {/* Main Dashboard */}
                            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 shadow-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                            <Code className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-slate-900 font-semibold">AmaTechBD Dashboard</h3>
                                            <p className="text-slate-600 text-sm">Live Development Stats</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Animated Stats */}
                                <div className="space-y-4">
                                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-slate-900 font-medium">Active Projects</span>
                                            <span className="text-emerald-600 font-bold">24</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '78%'}}></div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-slate-900 font-medium">Current Technology</span>
                                            <span className="text-blue-600 font-bold">{technologies[currentTech]}</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            {technologies.map((tech, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                        index === currentTech ? 'bg-blue-600' : 'bg-slate-300'
                                                    }`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-slate-900 font-medium">Team Performance</span>
                                            <span className="text-purple-600 font-bold">98%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '98%'}}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Stat */}
                                <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-slate-200">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="text-2xl">{stats[currentStat].icon}</div>
                                            <div>
                                                <div className="text-slate-900 font-bold text-lg">{stats[currentStat].number}</div>
                                                <div className="text-slate-600 text-sm">{stats[currentStat].label}</div>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-700 rounded-full animate-spin"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-slate-900 font-medium text-sm">Project Delivered</div>
                                        <div className="text-slate-600 text-xs">2 minutes ago</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-slate-900 font-medium text-sm">New Client Onboarded</div>
                                        <div className="text-slate-600 text-xs">5 minutes ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client Logos */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <div className="text-center mb-8">
                            <p className="text-slate-600 text-sm">Trusted by leading companies worldwide</p>
                        </div>
                        <div className="flex items-center justify-center space-x-12 opacity-60">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-24 h-12 bg-white/80 border border-slate-200 rounded-lg flex items-center justify-center">
                                    <span className="text-slate-600 font-bold text-sm">LOGO</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Video Modal */}
                {isVideoPlaying && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsVideoPlaying(false)}>
                        <div className="bg-white rounded-2xl p-8 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-slate-900">Our Story</h3>
                                <button
                                    onClick={() => setIsVideoPlaying(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                                <div className="text-white text-center">
                                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p className="text-slate-300">Video content would be embedded here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                        <p className="text-xl text-slate-600">Comprehensive solutions for modern businesses</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Globe, title: 'Web Development', desc: 'Enterprise-grade web applications and platforms', color: 'from-blue-500 to-blue-600' },
                            { icon: Smartphone, title: 'Mobile Solutions', desc: 'Native and cross-platform mobile applications', color: 'from-emerald-500 to-emerald-600' },
                            { icon: Database, title: 'Backend Systems', desc: 'Scalable APIs and microservices architecture', color: 'from-purple-500 to-purple-600' },
                            { icon: Shield, title: 'Security & DevOps', desc: 'Robust security and automated deployment', color: 'from-red-500 to-red-600' },
                            { icon: Code, title: 'Custom Software', desc: 'Tailored solutions for unique business needs', color: 'from-indigo-500 to-indigo-600' },
                            { icon: Users, title: 'Digital Transformation', desc: 'End-to-end modernization strategies', color: 'from-orange-500 to-orange-600' }
                        ].map((service, index) => (
                            <div key={index} className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
                                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '500+', label: 'Projects Delivered', icon: '🚀' },
                            { number: '200+', label: 'Happy Clients', icon: '🤝' },
                            { number: '50+', label: 'Expert Team', icon: '👥' },
                            { number: '5+', label: 'Years Excellence', icon: '🏆' }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-3">
                                <div className="text-3xl">{stat.icon}</div>
                                <div className="text-4xl font-bold text-white">{stat.number}</div>
                                <div className="text-slate-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose AmaTechBD?</h2>
                        <p className="text-xl text-slate-600">Industry-leading expertise with a proven track record</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🎯',
                                title: 'Strategic Approach',
                                description: 'We align technology solutions with your business objectives to deliver measurable results and sustainable growth.'
                            },
                            {
                                icon: '⚡',
                                title: 'Agile Delivery',
                                description: 'Our proven agile methodology ensures rapid development cycles with continuous feedback and quality assurance.'
                            },
                            {
                                icon: '🔧',
                                title: 'Modern Technology Stack',
                                description: 'We leverage cutting-edge technologies and frameworks to build future-ready applications that scale.'
                            },
                            {
                                icon: '🛡️',
                                title: 'Enterprise Security',
                                description: 'Bank-grade security measures and compliance standards to protect your data and user privacy.'
                            },
                            {
                                icon: '🤝',
                                title: 'Partnership Approach',
                                description: 'We work as an extension of your team, providing transparent communication and collaborative development.'
                            },
                            {
                                icon: '🔄',
                                title: '24/7 Support',
                                description: 'Comprehensive maintenance and support services to ensure your applications run smoothly around the clock.'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="text-4xl mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Stack</h2>
                        <p className="text-xl text-slate-600">Building with industry-leading technologies</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                category: 'Frontend',
                                technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
                                color: 'from-blue-500 to-cyan-500'
                            },
                            {
                                category: 'Backend',
                                technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
                                color: 'from-emerald-500 to-teal-500'
                            },
                            {
                                category: 'Mobile',
                                technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
                                color: 'from-purple-500 to-indigo-500'
                            },
                            {
                                category: 'DevOps & Cloud',
                                technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
                                color: 'from-orange-500 to-red-500'
                            }
                        ].map((tech, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className={`w-14 h-14 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-6`}>
                                    <Code className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-6">{tech.category}</h3>
                                <ul className="space-y-3">
                                    {tech.technologies.map((technology, techIndex) => (
                                        <li key={techIndex} className="text-slate-600 flex items-center">
                                            <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
                        <p className="text-xl text-slate-600">Trusted by industry leaders worldwide</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "AmaTechBD delivered an exceptional platform that transformed our financial operations. The team's expertise and dedication were outstanding.",
                                author: "Sarah Johnson",
                                role: "CTO, MetroBank Solutions",
                                rating: 5
                            },
                            {
                                quote: "The healthcare app exceeded all expectations. It's secure, user-friendly, and has significantly improved our patient engagement.",
                                author: "Dr. Michael Chen",
                                role: "Medical Director, MediCare Plus",
                                rating: 5
                            },
                            {
                                quote: "Outstanding e-commerce solution that increased our sales by 40%. The platform is robust, scalable, and perfectly aligned with our needs.",
                                author: "David Kim",
                                role: "CEO, RetailMax Corporation",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="flex text-yellow-500 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
                                    {testimonial.quote}
                                </blockquote>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-slate-700 font-medium">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">{testimonial.author}</div>
                                        <div className="text-sm text-slate-600">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Let s discuss how we can help accelerate your digital transformation with cutting-edge software solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Get Started Today</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                            >
                                View Our Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;