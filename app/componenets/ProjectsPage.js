'use client'

import React, { useState } from 'react';
import { Code, Smartphone, Globe, Database, Shield, Users, ArrowRight, CheckCircle, Star, Clock, Calendar, Award, TrendingUp, ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Fintech', 'Healthcare', 'E-commerce', 'Education', 'Logistics', 'IoT'];

    const projectsData = [
        {
            id: 1,
            title: "FinanceFlow Banking Platform",
            category: "Fintech",
            type: "Web Application",
            client: "MetroBank Solutions",
            duration: "8 months",
            team: "6 developers",
            status: "Live",
            featured: true,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            description: "A comprehensive digital banking platform with real-time transactions, advanced analytics, and AI-powered fraud detection systems serving over 500,000 active users.",
            challenge: "Creating a secure, scalable banking platform that could handle millions of transactions while maintaining sub-second response times and meeting strict regulatory compliance requirements.",
            solution: "Implemented microservices architecture with Redis caching, OAuth 2.0 security, real-time dashboards using WebSocket connections, and integrated advanced AI algorithms for fraud detection.",
            technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "Microservices", "WebSocket", "AI/ML"],
            features: [
                "Real-time transaction processing",
                "AI-powered fraud detection",
                "Multi-factor authentication",
                "Advanced analytics dashboard",
                "Mobile-responsive design",
                "API integrations with third-party services",
                "Automated compliance reporting",
                "Customer support chatbot"
            ],
            results: [
                { metric: "Processing Time", value: "50% reduction", icon: "⚡" },
                { metric: "System Uptime", value: "99.9%", icon: "🔧" },
                { metric: "Active Users", value: "500K+", icon: "👥" },
                { metric: "Customer Satisfaction", value: "40% increase", icon: "😊" },
                { metric: "Transaction Volume", value: "$50M+ monthly", icon: "💰" },
                { metric: "Security Incidents", value: "Zero breaches", icon: "🛡️" }
            ],
            testimonial: {
                text: "AmaTechBD delivered beyond our expectations. The platform is robust, secure, and our customers love the user experience. The AI fraud detection has saved us millions.",
                author: "Sarah Johnson",
                role: "CTO, MetroBank Solutions",
                rating: 5
            },
            techStack: {
                frontend: ["React", "TypeScript", "Tailwind CSS"],
                backend: ["Node.js", "Express", "PostgreSQL"],
                cloud: ["AWS", "Docker", "Kubernetes"],
                security: ["OAuth 2.0", "JWT", "SSL/TLS"]
            },
            keyMetrics: {
                users: "500K+",
                transactions: "$50M+",
                uptime: "99.9%",
                performance: "50% faster"
            },
            color: 'from-blue-500 to-blue-600',
            icon: TrendingUp
        },
        {
            id: 2,
            title: "HealthConnect Telemedicine Platform",
            category: "Healthcare",
            type: "Mobile Application",
            client: "MediCare Plus",
            duration: "10 months",
            team: "8 developers",
            status: "Live",
            featured: true,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
            description: "HIPAA-compliant telemedicine platform enabling secure video consultations, prescription management, and comprehensive health monitoring for patients and healthcare providers.",
            challenge: "Building a HIPAA-compliant platform with real-time video capabilities while ensuring data security, seamless user experience, and integration with existing healthcare systems.",
            solution: "Developed using React Native with end-to-end encryption, integrated with healthcare APIs, implemented real-time video using WebRTC, and created secure data storage with comprehensive audit trails.",
            technologies: ["React Native", "WebRTC", "Firebase", "Node.js", "MongoDB", "Socket.io", "Stripe", "AWS S3", "HIPAA Compliance"],
            features: [
                "Secure video consultations",
                "Prescription management system",
                "Electronic health records integration",
                "Appointment scheduling and reminders",
                "Payment processing integration",
                "Push notifications for appointments",
                "Health monitoring dashboard",
                "Multi-language support"
            ],
            results: [
                { metric: "App Downloads", value: "100K+", icon: "📱" },
                { metric: "User Rating", value: "4.9/5", icon: "⭐" },
                { metric: "Consultations", value: "50K+ completed", icon: "💬" },
                { metric: "Patient Satisfaction", value: "95%", icon: "❤️" },
                { metric: "Appointment Adherence", value: "60% improvement", icon: "📅" },
                { metric: "Provider Efficiency", value: "40% increase", icon: "⚡" }
            ],
            testimonial: {
                text: "The telemedicine app has revolutionized how we connect with our patients. It's intuitive, secure, and has significantly improved our service delivery and patient outcomes.",
                author: "Dr. Michael Chen",
                role: "Medical Director, MediCare Plus",
                rating: 5
            },
            techStack: {
                mobile: ["React Native", "Expo", "TypeScript"],
                backend: ["Node.js", "Express", "MongoDB"],
                realtime: ["WebRTC", "Socket.io", "Firebase"],
                security: ["HIPAA Compliance", "End-to-end encryption"]
            },
            keyMetrics: {
                downloads: "100K+",
                rating: "4.9/5",
                consultations: "50K+",
                satisfaction: "95%"
            },
            color: 'from-emerald-500 to-emerald-600',
            icon: Users
        },
        {
            id: 3,
            title: "EduLearn Online Learning Platform",
            category: "Education",
            type: "Web Platform",
            client: "Global Education Institute",
            duration: "12 months",
            team: "10 developers",
            status: "Live",
            featured: false,
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
            description: "Comprehensive e-learning platform with interactive courses, live streaming, AI-powered personalization, and progress tracking serving over 2 million students worldwide.",
            challenge: "Creating an engaging learning experience that could scale to millions of students while providing personalized learning paths and maintaining high performance during peak usage.",
            solution: "Built with Next.js and implemented AI algorithms for personalized recommendations, real-time video streaming infrastructure, adaptive learning paths, and scalable cloud architecture.",
            technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "AWS", "Kubernetes", "Docker", "WebRTC"],
            features: [
                "Interactive video courses",
                "AI-powered personalized learning",
                "Live streaming capabilities",
                "Progress tracking and analytics",
                "Discussion forums and collaboration",
                "Certificate generation and verification",
                "Multi-language support",
                "Offline content access"
            ],
            results: [
                { metric: "Registered Students", value: "2M+", icon: "🎓" },
                { metric: "Course Completion", value: "85%", icon: "✅" },
                { metric: "Learning Outcomes", value: "45% improvement", icon: "📊" },
                { metric: "Languages Supported", value: "15+", icon: "🌍" },
                { metric: "Content Hours", value: "10K+", icon: "🎥" },
                { metric: "Instructor Satisfaction", value: "92%", icon: "👨‍🏫" }
            ],
            testimonial: {
                text: "AmaTechBD created an exceptional learning platform that has transformed education delivery. The AI personalization and scalability are truly game-changing.",
                author: "Prof. Emily Rodriguez",
                role: "Dean, Global Education Institute",
                rating: 5
            },
            techStack: {
                frontend: ["Next.js", "React", "TypeScript"],
                backend: ["Python", "Django", "PostgreSQL"],
                ai: ["TensorFlow", "Machine Learning", "Analytics"],
                cloud: ["AWS", "Kubernetes", "Docker"]
            },
            keyMetrics: {
                students: "2M+",
                completion: "85%",
                improvement: "45%",
                languages: "15+"
            },
            color: 'from-purple-500 to-purple-600',
            icon: Award
        },
        {
            id: 4,
            title: "RetailMax E-commerce Ecosystem",
            category: "E-commerce",
            type: "Full-Stack Platform",
            client: "RetailMax Corporation",
            duration: "14 months",
            team: "12 developers",
            status: "Live",
            featured: true,
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            description: "Multi-vendor e-commerce platform with advanced inventory management, AI-powered recommendations, and omnichannel integration supporting over 1000 vendors.",
            challenge: "Building a scalable e-commerce ecosystem that could handle high traffic, support multiple vendors, manage complex inventory, and provide seamless customer experience across all channels.",
            solution: "Implemented microservices architecture with event-driven design, integrated AI for personalized recommendations, created real-time inventory tracking, and developed comprehensive vendor management system.",
            technologies: ["Vue.js", "Laravel", "MySQL", "Elasticsearch", "RabbitMQ", "Docker", "AWS", "Stripe", "AI/ML"],
            features: [
                "Multi-vendor marketplace",
                "AI-powered product recommendations",
                "Real-time inventory management",
                "Advanced search and filtering",
                "Mobile app integration",
                "Analytics and reporting dashboard",
                "Automated vendor onboarding",
                "Multi-currency support"
            ],
            results: [
                { metric: "Annual Transactions", value: "$50M+", icon: "💳" },
                { metric: "Active Vendors", value: "1000+", icon: "🏪" },
                { metric: "System Uptime", value: "99.8%", icon: "🔧" },
                { metric: "Order Value Increase", value: "35%", icon: "📈" },
                { metric: "Customer Retention", value: "80%", icon: "🔄" },
                { metric: "Mobile Traffic", value: "65%", icon: "📱" }
            ],
            testimonial: {
                text: "The e-commerce platform has exceeded all our expectations. It's robust, scalable, and has significantly boosted our online sales and vendor satisfaction.",
                author: "David Kim",
                role: "CEO, RetailMax Corporation",
                rating: 5
            },
            techStack: {
                frontend: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
                backend: ["Laravel", "MySQL", "Elasticsearch"],
                infrastructure: ["AWS", "Docker", "RabbitMQ"],
                payments: ["Stripe", "PayPal", "Multi-currency"]
            },
            keyMetrics: {
                transactions: "$50M+",
                vendors: "1000+",
                uptime: "99.8%",
                growth: "35%"
            },
            color: 'from-orange-500 to-orange-600',
            icon: Globe
        },
        {
            id: 5,
            title: "LogiTrack Supply Chain Management",
            category: "Logistics",
            type: "Enterprise Software",
            client: "Global Logistics Inc",
            duration: "16 months",
            team: "15 developers",
            status: "Live",
            featured: false,
            image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
            description: "End-to-end supply chain management system with real-time tracking, predictive analytics, and automated workflows managing over 1 million shipments annually.",
            challenge: "Creating a comprehensive system to manage complex global supply chains with real-time visibility, predictive capabilities, and seamless integration with existing enterprise systems.",
            solution: "Developed microservices-based architecture with IoT integration, machine learning for demand forecasting, real-time tracking systems, and automated workflow management.",
            technologies: ["Angular", "Spring Boot", "PostgreSQL", "Apache Kafka", "Machine Learning", "IoT", "AWS", "Docker"],
            features: [
                "Real-time shipment tracking",
                "Predictive demand forecasting",
                "Automated workflow management",
                "IoT sensor integration",
                "Advanced analytics and reporting",
                "Multi-location inventory management",
                "Supplier performance monitoring",
                "Automated alerts and notifications"
            ],
            results: [
                { metric: "Logistics Cost Reduction", value: "30%", icon: "💰" },
                { metric: "Delivery Accuracy", value: "95%", icon: "🎯" },
                { metric: "Shipments Tracked", value: "1M+", icon: "📦" },
                { metric: "Operational Efficiency", value: "25% increase", icon: "⚡" },
                { metric: "Customer Satisfaction", value: "90%", icon: "😊" },
                { metric: "Data Accuracy", value: "98%", icon: "📊" }
            ],
            testimonial: {
                text: "LogiTrack has transformed our supply chain operations. The predictive analytics have significantly improved our planning accuracy and operational efficiency.",
                author: "Lisa Thompson",
                role: "Operations Director, Global Logistics Inc",
                rating: 5
            },
            techStack: {
                frontend: ["Angular", "TypeScript", "Angular Material"],
                backend: ["Spring Boot", "Java", "PostgreSQL"],
                analytics: ["Machine Learning", "Apache Kafka", "Analytics"],
                infrastructure: ["AWS", "Docker", "IoT Integration"]
            },
            keyMetrics: {
                cost_reduction: "30%",
                accuracy: "95%",
                shipments: "1M+",
                efficiency: "25%"
            },
            color: 'from-red-500 to-red-600',
            icon: Database
        },
        {
            id: 6,
            title: "SmartHome IoT Hub Platform",
            category: "IoT",
            type: "Mobile & Web Platform",
            client: "TechHome Solutions",
            duration: "9 months",
            team: "7 developers",
            status: "Live",
            featured: false,
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
            description: "Comprehensive IoT platform for smart home automation with voice control, energy monitoring, and security features supporting over 500 device types.",
            challenge: "Creating a unified platform that could seamlessly integrate with hundreds of different IoT devices while maintaining security, reliability, and user-friendly experience.",
            solution: "Built with React Native and Node.js, implemented MQTT for device communication, created secure API gateway for device integration, and developed voice control capabilities.",
            technologies: ["React Native", "Node.js", "MQTT", "MongoDB", "AWS IoT", "Alexa Skills", "Google Assistant", "Docker"],
            features: [
                "Multi-device integration",
                "Voice control (Alexa, Google)",
                "Energy consumption monitoring",
                "Security system integration",
                "Automated scheduling and scenes",
                "Remote access and control",
                "Real-time notifications",
                "Energy usage analytics"
            ],
            results: [
                { metric: "Compatible Devices", value: "500+", icon: "🔌" },
                { metric: "Active Installations", value: "200K+", icon: "🏠" },
                { metric: "Energy Savings", value: "30% average", icon: "💡" },
                { metric: "App Store Rating", value: "4.8/5", icon: "⭐" },
                { metric: "User Engagement", value: "85% daily", icon: "📱" },
                { metric: "Customer Support", value: "24/7", icon: "🛠️" }
            ],
            testimonial: {
                text: "The SmartHome Hub has made home automation accessible to everyone. The integration capabilities and user experience are truly impressive.",
                author: "Alex Wilson",
                role: "Product Manager, TechHome Solutions",
                rating: 5
            },
            techStack: {
                mobile: ["React Native", "Expo", "TypeScript"],
                backend: ["Node.js", "MongoDB", "MQTT"],
                iot: ["AWS IoT", "Device Integration", "Voice Control"],
                infrastructure: ["Docker", "AWS", "Real-time Systems"]
            },
            keyMetrics: {
                devices: "500+",
                installations: "200K+",
                savings: "30%",
                rating: "4.8/5"
            },
            color: 'from-indigo-500 to-indigo-600',
            icon: Smartphone
        }
    ];

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    if (selectedProject) {
        const project = projectsData.find(p => p.id === selectedProject);
        return (
            <div className="min-h-screen pt-20 bg-gray-50">
                {/* Project Detail Hero */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
                            >
                                <ArrowRight className="w-4 h-4 rotate-180" />
                                <span>Back to Projects</span>
                            </button>

                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                        <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                                            {project.status}
                                        </span>
                                        {project.featured && (
                                            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">{project.title}</h1>
                                    <p className="text-xl text-slate-600 leading-relaxed">{project.description}</p>

                                    <div className="grid sm:grid-cols-3 gap-6 py-6">
                                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center justify-center mb-2">
                                                <Clock className="w-5 h-5 text-slate-600" />
                                            </div>
                                            <div className="text-lg font-bold text-slate-900">{project.duration}</div>
                                            <div className="text-sm text-slate-600">Duration</div>
                                        </div>
                                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center justify-center mb-2">
                                                <Users className="w-5 h-5 text-slate-600" />
                                            </div>
                                            <div className="text-lg font-bold text-slate-900">{project.team}</div>
                                            <div className="text-sm text-slate-600">Team Size</div>
                                        </div>
                                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center justify-center mb-2">
                                                <Globe className="w-5 h-5 text-slate-600" />
                                            </div>
                                            <div className="text-lg font-bold text-slate-900">{project.type}</div>
                                            <div className="text-sm text-slate-600">Platform</div>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <button className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                                            <Eye className="w-5 h-5" />
                                            <span>View Live</span>
                                        </button>
                                        <button className="flex items-center space-x-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all duration-300">
                                            <Github className="w-5 h-5" />
                                            <span>View Code</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                                    <div className="flex items-center mb-6">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mr-4`}>
                                            <project.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Client</h3>
                                            <p className="text-slate-300">{project.client}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="flex">
                                                {[...Array(project.testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="italic mb-4">{project.testimonial.text}</p>
                                        <p className="text-sm font-medium">— {project.testimonial.author}</p>
                                        <p className="text-sm text-slate-300">{project.testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">{project.challenge}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Solution</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">{project.solution}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Results */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Results & Impact</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.results.map((result, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                                    <div className="text-4xl mb-4">{result.icon}</div>
                                    <div className="text-2xl font-bold text-slate-900 mb-2">{result.value}</div>
                                    <div className="text-slate-600">{result.metric}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Used */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Technology Stack</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(project.techStack).map(([category, techs]) => (
                                <div key={category} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-4 capitalize">{category.replace('_', ' ')}</h3>
                                    <div className="space-y-2">
                                        {techs.map((tech, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                                <span className="text-slate-600">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features & Capabilities */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Features & Capabilities</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {project.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            Lets discuss how we can create a similar success story for your business with our proven expertise and innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                Start Your Project
                            </button>
                            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Projects</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Explore our comprehensive portfolio of successful projects across various industries and technologies, showcasing our expertise and innovation
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: '500+', label: 'Projects Completed', icon: '🚀' },
                            { number: '200+', label: 'Happy Clients', icon: '🤝' },
                            { number: '99%', label: 'Success Rate', icon: '⭐' },
                            { number: '24/7', label: 'Support Available', icon: '🛠️' }
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

            {/* Featured Projects */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                        <p className="text-slate-600">Our most impactful and innovative solutions</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {filteredProjects.filter(project => project.featured).map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <project.icon className="w-16 h-16 text-white opacity-80" />
                                    </div>
                                    <div className="absolute top-4 left-4 flex space-x-2">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm text-white text-sm rounded-full">
                                            {project.status}
                                        </span>
                                        <span className="px-3 py-1 bg-yellow-500/20 backdrop-blur-sm text-white text-sm rounded-full">
                                            Featured
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

                                {/* Project Content */}
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 font-medium mb-2">{project.client}</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                                    {/* Key Metrics */}
                                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                        {Object.entries(project.keyMetrics).slice(0, 4).map(([key, value]) => (
                                            <div key={key} className="text-center">
                                                <div className="text-lg font-bold text-slate-900">{value}</div>
                                                <div className="text-xs text-slate-600 capitalize">{key.replace('_', ' ')}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 4).map((tech, index) => (
                                            <span key={index} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                                +{project.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Project Meta */}
                                    <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="w-4 h-4" />
                                            <span>{project.team}</span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        onClick={() => setSelectedProject(project.id)}
                                        className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <span>View Full Case Study</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">All Projects</h2>
                        <p className="text-slate-600">Comprehensive portfolio of our work</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <project.icon className="w-12 h-12 text-white opacity-80" />
                                    </div>
                                    <div className="absolute top-4 left-4 flex space-x-2">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm text-white text-xs rounded-full">
                                            {project.status}
                                        </span>
                                        {project.featured && (
                                            <span className="px-3 py-1 bg-yellow-500/20 backdrop-blur-sm text-white text-xs rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium text-sm mb-2">{project.client}</p>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                                    {/* Key Results */}
                                    <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                                        {Object.entries(project.keyMetrics).slice(0, 2).map(([key, value]) => (
                                            <div key={key} className="text-center">
                                                <div className="text-sm font-bold text-slate-900">{value}</div>
                                                <div className="text-xs text-slate-600 capitalize">{key.replace('_', ' ')}</div>
                                            </div>
                                        ))}
                                    </div>

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
                                    <button
                                        onClick={() => setSelectedProject(project.id)}
                                        className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                                    >
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

            {/* Technologies We Work With */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Technologies We Master</h2>
                        <p className="text-slate-600">Building with the most powerful and modern technology stack</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                category: 'Frontend',
                                technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
                                color: 'from-blue-500 to-cyan-500',
                                icon: Globe
                            },
                            {
                                category: 'Backend',
                                technologies: ['Node.js', 'Python', 'Java', 'PHP', 'C#'],
                                color: 'from-emerald-500 to-teal-500',
                                icon: Database
                            },
                            {
                                category: 'Mobile',
                                technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
                                color: 'from-purple-500 to-indigo-500',
                                icon: Smartphone
                            },
                            {
                                category: 'DevOps & Cloud',
                                technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
                                color: 'from-orange-500 to-red-500',
                                icon: Shield
                            }
                        ].map((tech, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <tech.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">{tech.category}</h3>
                                <ul className="space-y-2">
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

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Proven Process</h2>
                        <p className="text-slate-600">How we deliver exceptional results every time</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Discovery',
                                description: 'Understanding your business goals, requirements, and technical constraints',
                                icon: '🔍'
                            },
                            {
                                step: '02',
                                title: 'Strategy',
                                description: 'Creating comprehensive project roadmap and technical architecture',
                                icon: '📋'
                            },
                            {
                                step: '03',
                                title: 'Design',
                                description: 'User-centered design and interactive prototypes for optimal experience',
                                icon: '🎨'
                            },
                            {
                                step: '04',
                                title: 'Development',
                                description: 'Building robust, scalable solutions using best practices and modern technologies',
                                icon: '⚙️'
                            },
                            {
                                step: '05',
                                title: 'Launch',
                                description: 'Thorough testing, deployment, and ongoing support for your success',
                                icon: '🚀'
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                                        <span className="text-2xl">{process.icon}</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-sm font-bold text-white">
                                        {process.step}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Lets discuss your project and explore how our proven expertise can help you achieve remarkable results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Start Your Project
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;