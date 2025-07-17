'use client'

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Database, Globe, Shield, Smartphone, Code, Users, Star, Clock, Award } from "lucide-react";

const ServicesPage = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 'web-development',
            icon: Globe,
            title: 'Web Development',
            subtitle: 'Enterprise Web Solutions',
            description: 'Build scalable, secure, and high-performance web applications that drive business growth and enhance user experience.',
            features: [
                'Custom Web Applications',
                'E-commerce Platforms',
                'Progressive Web Apps (PWA)',
                'API Development & Integration',
                'Content Management Systems',
                'Performance Optimization'
            ],
            technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL'],
            benefits: [
                'Responsive across all devices',
                'SEO optimized for better visibility',
                'Fast loading times and performance',
                'Secure and scalable architecture',
                'Easy content management',
                'Analytics and tracking integration'
            ],
            process: [
                'Requirements Analysis',
                'UI/UX Design',
                'Development & Testing',
                'Deployment & Launch',
                'Maintenance & Support'
            ],
            pricing: {
                starter: { price: '$2,999', duration: '4-6 weeks' },
                professional: { price: '$7,999', duration: '8-12 weeks' },
                enterprise: { price: 'Custom', duration: '12+ weeks' }
            },
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 'mobile-development',
            icon: Smartphone,
            title: 'Mobile Development',
            subtitle: 'Native & Cross-Platform Apps',
            description: 'Create powerful mobile applications that engage users and drive business results across iOS and Android platforms.',
            features: [
                'Native iOS & Android Apps',
                'Cross-Platform Development',
                'Mobile UI/UX Design',
                'App Store Optimization',
                'Push Notifications',
                'Offline Functionality'
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
            benefits: [
                'Native performance and feel',
                'Cross-platform compatibility',
                'App store ready deployment',
                'Push notifications and engagement',
                'Offline capabilities',
                'Real-time synchronization'
            ],
            process: [
                'App Strategy & Planning',
                'UI/UX Design',
                'Development & Testing',
                'App Store Submission',
                'Post-Launch Support'
            ],
            pricing: {
                starter: { price: '$12,999', duration: '8-12 weeks' },
                professional: { price: '$24,999', duration: '12-16 weeks' },
                enterprise: { price: 'Custom', duration: '16+ weeks' }
            },
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            id: 'backend-systems',
            icon: Database,
            title: 'Backend Systems',
            subtitle: 'Scalable Infrastructure',
            description: 'Build robust, scalable backend systems and APIs that power your applications and support business growth.',
            features: [
                'RESTful & GraphQL APIs',
                'Database Design & Optimization',
                'Cloud Architecture',
                'Microservices Development',
                'Real-time Systems',
                'Third-party Integrations'
            ],
            technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
            benefits: [
                'High availability and uptime',
                'Automatic scaling capabilities',
                'Comprehensive API documentation',
                'Real-time monitoring',
                'Backup and disaster recovery',
                'Security best practices'
            ],
            process: [
                'Architecture Planning',
                'Database Design',
                'API Development',
                'Infrastructure Setup',
                'Monitoring & Optimization'
            ],
            pricing: {
                starter: { price: '$4,999', duration: '6-8 weeks' },
                professional: { price: '$12,999', duration: '10-14 weeks' },
                enterprise: { price: 'Custom', duration: '14+ weeks' }
            },
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 'devops-security',
            icon: Shield,
            title: 'DevOps & Security',
            subtitle: 'Secure Development Operations',
            description: 'Implement robust security measures and automated deployment pipelines for safe, efficient software delivery.',
            features: [
                'CI/CD Pipeline Setup',
                'Security Audits & Testing',
                'Infrastructure as Code',
                'Monitoring & Logging',
                'Automated Testing',
                'Compliance Management'
            ],
            technologies: ['Jenkins', 'GitHub Actions', 'Terraform', 'Docker', 'Kubernetes', 'AWS Security'],
            benefits: [
                'Automated security scanning',
                'Faster and safer deployments',
                'Real-time threat detection',
                'Compliance with standards',
                'Reduced downtime',
                '24/7 monitoring and alerts'
            ],
            process: [
                'Security Assessment',
                'Pipeline Design',
                'Implementation',
                'Testing & Validation',
                'Ongoing Support'
            ],
            pricing: {
                starter: { price: '$3,999', duration: '4-6 weeks' },
                professional: { price: '$9,999', duration: '8-12 weeks' },
                enterprise: { price: 'Custom', duration: '12+ weeks' }
            },
            color: 'from-red-500 to-red-600'
        }
    ];

    const currentService = services[activeService];

    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Comprehensive software development solutions designed to accelerate your digital transformation and drive business success
                        </p>
                    </div>

                    {/* Service Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    activeService === index
                                        ? 'bg-slate-900 text-white shadow-lg'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                                }`}
                            >
                                <service.icon className="w-5 h-5" />
                                <span>{service.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Detail */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className={`w-16 h-16 bg-gradient-to-r ${currentService.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                    <currentService.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">{currentService.title}</h2>
                                    <p className="text-slate-600 font-medium">{currentService.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">{currentService.description}</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {currentService.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Benefits</h3>
                            <div className="space-y-4">
                                {currentService.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Technologies We Use</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {currentService.technologies.map((tech, index) => (
                                <span key={index} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Our Process</h3>
                        <div className="grid md:grid-cols-5 gap-6">
                            {currentService.process.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>
                                    <h4 className="font-semibold text-slate-900 mb-2">{step}</h4>
                                    <div className="w-full h-1 bg-slate-200 rounded-full">
                                        <div className="w-full h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Investment Levels</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {Object.entries(currentService.pricing).map(([tier, details], index) => (
                                <div key={tier} className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                    index === 1
                                        ? 'border-slate-900 bg-slate-50 shadow-lg'
                                        : 'border-slate-200 hover:border-slate-300'
                                }`}>
                                    <div className="text-center">
                                        <h4 className="text-xl font-semibold text-slate-900 mb-2 capitalize">{tier}</h4>
                                        <div className="text-3xl font-bold text-slate-900 mb-2">{details.price}</div>
                                        <div className="flex items-center justify-center space-x-2 text-slate-600 mb-6">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{details.duration}</span>
                                        </div>
                                        <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                                            index === 1
                                                ? 'bg-slate-900 text-white hover:bg-slate-800'
                                                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                        }`}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Lets discuss your project requirements and create a solution that drives your business forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Schedule Consultation
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;