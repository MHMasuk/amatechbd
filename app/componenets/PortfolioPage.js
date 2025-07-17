'use client'

import { Code, ExternalLink, Github, Calendar, Users, Award, TrendingUp, Globe, Smartphone, Database, Shield } from "lucide-react";
import React, { useState } from "react";

const PortfolioPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState(null);

    const categories = ['All', 'Web Development', 'Mobile Apps', 'Backend Systems', 'E-commerce', 'Healthcare', 'Fintech'];

    const projects = [
        {
            id: 1,
            title: 'FinanceFlow Banking Platform',
            category: 'Fintech',
            type: 'Web Development',
            client: 'MetroBank Solutions',
            description: 'Enterprise-grade digital banking platform with real-time transactions, advanced analytics, and AI-powered fraud detection systems.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis', 'Docker'],
            features: ['Real-time Transactions', 'AI Fraud Detection', 'Advanced Analytics', 'Mobile Banking'],
            results: {
                users: '500K+',
                transactions: '$50M+',
                uptime: '99.9%'
            },
            duration: '8 months',
            team: '6 developers',
            status: 'Live',
            icon: TrendingUp,
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 2,
            title: 'HealthConnect Telemedicine',
            category: 'Healthcare',
            type: 'Mobile Apps',
            client: 'MediCare Plus',
            description: 'HIPAA-compliant telemedicine platform enabling secure video consultations, prescription management, and health monitoring.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js', 'MongoDB'],
            features: ['Video Consultations', 'Prescription Management', 'Health Records', 'Appointment Scheduling'],
            results: {
                downloads: '100K+',
                rating: '4.9/5',
                consultations: '50K+'
            },
            duration: '10 months',
            team: '8 developers',
            status: 'Live',
            icon: Users,
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            id: 3,
            title: 'RetailMax E-commerce',
            category: 'E-commerce',
            type: 'Web Development',
            client: 'RetailMax Corporation',
            description: 'Multi-vendor e-commerce platform with AI recommendations, inventory management, and omnichannel integration.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            technologies: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
            features: ['Multi-vendor Support', 'AI Recommendations', 'Inventory Management', 'Payment Processing'],
            results: {
                revenue: '$10M+',
                vendors: '1000+',
                orders: '100K+'
            },
            duration: '12 months',
            team: '10 developers',
            status: 'Live',
            icon: Globe,
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 4,
            title: 'EduLearn Learning Platform',
            category: 'Education',
            type: 'Web Development',
            client: 'Global Education Institute',
            description: 'Comprehensive e-learning platform with interactive courses, live streaming, and AI-powered personalization.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'TensorFlow', 'Docker'],
            features: ['Interactive Courses', 'Live Streaming', 'AI Personalization', 'Progress Tracking'],
            results: {
                students: '2M+',
                courses: '10K+',
                completion: '85%'
            },
            duration: '14 months',
            team: '12 developers',
            status: 'Live',
            icon: Award,
            color: 'from-orange-500 to-orange-600'
        },
        {
            id: 5,
            title: 'LogiTrack Supply Chain',
            category: 'Logistics',
            type: 'Backend Systems',
            client: 'Global Logistics Inc',
            description: 'End-to-end supply chain management with real-time tracking, predictive analytics, and automated workflows.',
            image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
            technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Apache Kafka', 'Docker', 'AWS'],
            features: ['Real-time Tracking', 'Predictive Analytics', 'Automated Workflows', 'IoT Integration'],
            results: {
                shipments: '1M+',
                efficiency: '+25%',
                cost_reduction: '30%'
            },
            duration: '16 months',
            team: '15 developers',
            status: 'Live',
            icon: Database,
            color: 'from-red-500 to-red-600'
        },
        {
            id: 6,
            title: 'SmartHome IoT Platform',
            category: 'IoT',
            type: 'Mobile Apps',
            client: 'TechHome Solutions',
            description: 'Comprehensive IoT platform for smart home automation with voice control and energy monitoring.',
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
            technologies: ['React Native', 'Node.js', 'MQTT', 'MongoDB', 'AWS IoT', 'Alexa Skills'],
            features: ['Device Control', 'Voice Commands', 'Energy Monitoring', 'Security Integration'],
            results: {
                devices: '500+',
                users: '200K+',
                energy_savings: '30%'
            },
            duration: '9 months',
            team: '7 developers',
            status: 'Live',
            icon: Smartphone,
            color: 'from-indigo-500 to-indigo-600'
        }
    ];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory || project.type === selectedCategory);

    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Portfolio</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Showcasing our most impactful projects and the innovative solutions weve delivered for clients across various industries
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: '500+', label: 'Projects Completed', icon: '🚀' },
                            { number: '200+', label: 'Happy Clients', icon: '🤝' },
                            { number: '99%', label: 'Success Rate', icon: '⭐' },
                            { number: '24/7', label: 'Support Available', icon: '🔧' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                                <div className="text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-slate-900 text-white shadow-lg'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <project.icon className="w-16 h-16 text-white opacity-80" />
                                    </div>
                                    <div className="absolute top-4 left-4 flex space-x-2">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm text-white text-xs rounded-full">
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex space-x-2">
                                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <ExternalLink className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <Github className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 font-medium text-sm mb-3">{project.client}</p>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span key={index} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Key Results */}
                                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                                        {Object.entries(project.results).map(([key, value]) => (
                                            <div key={key} className="text-center">
                                                <div className="text-sm font-bold text-slate-900">{value}</div>
                                                <div className="text-xs text-slate-600 capitalize">{key.replace('_', ' ')}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Project Meta */}
                                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{project.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="w-3 h-3" />
                                            <span>{project.team}</span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                            Load More Projects
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Lets create something amazing together. Our team is ready to bring your vision to life with cutting-edge technology and exceptional craftsmanship.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                            Start Your Project
                        </button>
                        <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all duration-300">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;