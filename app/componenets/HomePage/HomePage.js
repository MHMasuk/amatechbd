'use client'

import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Building the
                                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Future of Software
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    We create innovative software solutions that transform businesses and drive digital excellence. From web applications to mobile apps, we bring your vision to life.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                                >
                                    View Our Work
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-white text-center">
                                    <Code className="w-24 h-24 mx-auto mb-4 opacity-80" />
                                    <p className="text-lg font-medium">Innovation in Every Line of Code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600">Comprehensive solutions for all your software needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Globe, title: 'Web Development', desc: 'Modern, responsive websites and web applications' },
                            { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions' },
                            { icon: Database, title: 'Backend Systems', desc: 'Scalable APIs and database architecture' },
                            { icon: Shield, title: 'Security', desc: 'Robust security implementations and audits' },
                            { icon: Code, title: 'Custom Software', desc: 'Tailored solutions for unique business needs' },
                            { icon: Users, title: 'Consulting', desc: 'Expert guidance and technical consulting' }
                        ].map((service, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '500+', label: 'Projects Completed' },
                            { number: '100+', label: 'Happy Clients' },
                            { number: '50+', label: 'Team Members' },
                            { number: '5+', label: 'Years Experience' }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AmaTechBD?</h2>
                        <p className="text-xl text-gray-600">We combine technical expertise with creative innovation to deliver exceptional results</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🚀',
                                title: 'Cutting-Edge Technology',
                                description: 'We use the latest frameworks and tools to build future-ready applications that scale with your business growth.'
                            },
                            {
                                icon: '⚡',
                                title: 'Lightning Fast Delivery',
                                description: 'Our agile development process ensures rapid prototyping and quick iterations without compromising quality.'
                            },
                            {
                                icon: '🎯',
                                title: 'Results-Driven Approach',
                                description: 'Every project is tailored to achieve your specific business goals and deliver measurable outcomes.'
                            },
                            {
                                icon: '🔒',
                                title: 'Security First',
                                description: 'We implement robust security measures and follow industry best practices to protect your data and users.'
                            },
                            {
                                icon: '🤝',
                                title: 'Collaborative Partnership',
                                description: 'We work closely with you throughout the entire development process, ensuring transparency and alignment.'
                            },
                            {
                                icon: '🛠️',
                                title: 'Ongoing Support',
                                description: 'Our relationship doesn\'t end at launch. We provide continuous maintenance and support for your applications.'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
                        <p className="text-xl text-gray-600">Building with the most powerful and modern technology stack</p>
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
                                color: 'from-green-500 to-emerald-500'
                            },
                            {
                                category: 'Mobile',
                                technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
                                color: 'from-purple-500 to-pink-500'
                            },
                            {
                                category: 'Cloud & DevOps',
                                technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
                                color: 'from-orange-500 to-red-500'
                            }
                        ].map((tech, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.category}</h3>
                                <ul className="space-y-2">
                                    {tech.technologies.map((technology, techIndex) => (
                                        <li key={techIndex} className="text-gray-600 flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Projects Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Success Stories</h2>
                        <p className="text-xl text-gray-600">Discover how we&apos;ve helped businesses transform digitally</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'FinanceFlow Banking Platform',
                                client: 'MetroBank Solutions',
                                category: 'Fintech',
                                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                                results: '500K+ active users',
                                description: 'Comprehensive digital banking platform with real-time transactions and AI-powered fraud detection.'
                            },
                            {
                                title: 'HealthConnect Telemedicine',
                                client: 'MediCare Plus',
                                category: 'Healthcare',
                                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
                                results: '100K+ downloads',
                                description: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers.'
                            },
                            {
                                title: 'RetailMax E-commerce',
                                client: 'RetailMax Corp',
                                category: 'E-commerce',
                                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                                results: '$50M+ transactions',
                                description: 'Multi-vendor e-commerce platform with AI recommendations and inventory management.'
                            }
                        ].map((project, index) => (
                            <div key={index} className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="text-white text-sm font-medium">{project.results}</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-blue-600 font-medium mb-3">{project.client}</p>
                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/projects"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <span>View All Projects</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600">Don&apos;t just take our word for it - hear from our satisfied clients</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "TechCraft delivered beyond our expectations. The platform is robust, secure, and our customers love the user experience.",
                                author: "Sarah Johnson",
                                role: "CTO, MetroBank Solutions",
                                avatar: "🏦"
                            },
                            {
                                quote: "The app has revolutionized how we connect with our patients. It's intuitive, secure, and has significantly improved our service delivery.",
                                author: "Dr. Michael Chen",
                                role: "Medical Director, MediCare Plus",
                                avatar: "🏥"
                            },
                            {
                                quote: "The platform has exceeded all our expectations. It's robust, scalable, and has significantly boosted our online sales.",
                                author: "David Kim",
                                role: "CEO, RetailMax Corporation",
                                avatar: "🛍️"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                                <blockquote className="text-gray-600 italic">
                                    {testimonial.quote}
                                </blockquote>
                                <div className="flex text-yellow-400 mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-lg">★</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
                        <p className="text-xl text-gray-600">A proven methodology that delivers exceptional results every time</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Discovery',
                                description: 'We understand your business goals, target audience, and technical requirements.',
                                icon: '🔍'
                            },
                            {
                                step: '02',
                                title: 'Design',
                                description: 'Creating user-centered designs and interactive prototypes for optimal user experience.',
                                icon: '🎨'
                            },
                            {
                                step: '03',
                                title: 'Development',
                                description: 'Building robust, scalable applications using cutting-edge technologies and best practices.',
                                icon: '⚙️'
                            },
                            {
                                step: '04',
                                title: 'Launch',
                                description: 'Thorough testing, deployment, and ongoing support to ensure your success.',
                                icon: '🚀'
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl">{process.icon}</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                                        {process.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                                <p className="text-gray-600">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Let&apos;s discuss how we can help you achieve your digital goals with innovative software solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;