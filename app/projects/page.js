'use client'

import React, {useState} from "react";
import {ArrowRight, CheckCircle, Code, Star} from "lucide-react";

export const metadata = {
    title: 'Software Development Projects & Portfolio | AmaTechBD Bangladesh',
    description: 'Explore AmaTechBD\'s successful software development projects including fintech, healthcare, e-commerce, and enterprise solutions in Bangladesh.',
    keywords: ['software projects', 'portfolio Bangladesh', 'fintech projects', 'healthcare apps', 'e-commerce development', 'enterprise solutions'],
    openGraph: {
        title: 'Software Development Projects & Portfolio | AmaTechBD Bangladesh',
        description: 'Explore our successful software development projects and portfolio showcasing innovative solutions across various industries.',
        url: 'https://amatechbd.com/projects',
        images: ['/og-projects.jpg'],
    },
    alternates: {
        canonical: 'https://amatechbd.com/projects',
    },
};

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Fintech', 'Healthcare', 'Education', 'E-commerce', 'Logistics', 'IoT'];

    const projectsData = [
        {
            id: 1,
            title: "FinanceFlow - Banking Platform",
            category: "Fintech",
            type: "Web Application",
            client: "MetroBank Solutions",
            duration: "8 months",
            team: "6 developers",
            status: "Live",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
            description: "A comprehensive digital banking platform with real-time transactions, advanced analytics, and AI-powered fraud detection.",
            challenge: "Creating a secure, scalable banking platform that could handle millions of transactions while maintaining sub-second response times.",
            solution: "Implemented microservices architecture with Redis caching, implemented OAuth 2.0 security, and created real-time dashboards using WebSocket connections.",
            technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "Microservices", "WebSocket"],
            features: [
                "Real-time transaction processing",
                "AI-powered fraud detection",
                "Multi-factor authentication",
                "Advanced analytics dashboard",
                "Mobile-responsive design",
                "API integrations with third-party services"
            ],
            results: [
                "50% reduction in transaction processing time",
                "99.9% uptime achieved",
                "500K+ active users within 6 months",
                "40% increase in customer satisfaction"
            ],
            testimonial: {
                text: "TechCraft delivered beyond our expectations. The platform is robust, secure, and our customers love the user experience.",
                author: "Sarah Johnson, CTO at MetroBank Solutions"
            }
        },
        {
            id: 2,
            title: "HealthConnect - Telemedicine App",
            category: "Healthcare",
            type: "Mobile Application",
            client: "MediCare Plus",
            duration: "10 months",
            team: "8 developers",
            status: "Live",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500",
            description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers through secure video calls and health monitoring.",
            challenge: "Building a HIPAA-compliant platform with real-time video capabilities while ensuring data security and seamless user experience.",
            solution: "Developed using React Native with end-to-end encryption, integrated with healthcare APIs, and implemented real-time video using WebRTC.",
            technologies: ["React Native", "WebRTC", "Firebase", "Node.js", "MongoDB", "Socket.io", "Stripe", "AWS S3"],
            features: [
                "Secure video consultations",
                "Prescription management",
                "Health records integration",
                "Appointment scheduling",
                "Payment processing",
                "Push notifications for reminders"
            ],
            results: [
                "100K+ downloads in first 3 months",
                "95% user satisfaction rating",
                "HIPAA compliance certification",
                "60% reduction in missed appointments"
            ],
            testimonial: {
                text: "The app has revolutionized how we connect with our patients. It's intuitive, secure, and has significantly improved our service delivery.",
                author: "Dr. Michael Chen, Medical Director at MediCare Plus"
            }
        },
        {
            id: 3,
            title: "EduLearn - Online Learning Platform",
            category: "Education",
            type: "Web Platform",
            client: "Global Education Institute",
            duration: "12 months",
            team: "10 developers",
            status: "Live",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500",
            description: "Comprehensive e-learning platform with interactive courses, live streaming, AI-powered personalization, and progress tracking.",
            challenge: "Creating an engaging learning experience that could scale to millions of students while providing personalized learning paths.",
            solution: "Built with Next.js and implemented AI algorithms for personalized recommendations, real-time video streaming, and adaptive learning paths.",
            technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "AWS", "Kubernetes", "Docker"],
            features: [
                "Interactive video courses",
                "AI-powered personalized learning",
                "Live streaming capabilities",
                "Progress tracking and analytics",
                "Discussion forums and collaboration",
                "Certificate generation and verification"
            ],
            results: [
                "2M+ registered students",
                "85% course completion rate",
                "45% improvement in learning outcomes",
                "Available in 15+ languages"
            ],
            testimonial: {
                text: "TechCraft created an exceptional learning platform that has transformed education delivery. The AI personalization is game-changing.",
                author: "Prof. Emily Rodriguez, Dean at Global Education Institute"
            }
        },
        {
            id: 4,
            title: "RetailMax - E-commerce Ecosystem",
            category: "E-commerce",
            type: "Full-Stack Platform",
            client: "RetailMax Corporation",
            duration: "14 months",
            team: "12 developers",
            status: "Live",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
            description: "Multi-vendor e-commerce platform with inventory management, AI recommendations, and omnichannel integration.",
            challenge: "Building a scalable e-commerce ecosystem that could handle high traffic, multiple vendors, and complex inventory management.",
            solution: "Implemented microservices architecture with event-driven design, integrated AI for recommendations, and created real-time inventory tracking.",
            technologies: ["Vue.js", "Laravel", "MySQL", "Elasticsearch", "RabbitMQ", "Docker", "AWS", "Stripe"],
            features: [
                "Multi-vendor marketplace",
                "AI-powered product recommendations",
                "Real-time inventory management",
                "Advanced search and filtering",
                "Mobile app integration",
                "Analytics and reporting dashboard"
            ],
            results: [
                "$50M+ in annual transactions",
                "1000+ active vendors",
                "99.8% uptime maintained",
                "35% increase in average order value"
            ],
            testimonial: {
                text: "The platform has exceeded all our expectations. It's robust, scalable, and has significantly boosted our online sales.",
                author: "David Kim, CEO at RetailMax Corporation"
            }
        },
        {
            id: 5,
            title: "LogiTrack - Supply Chain Management",
            category: "Logistics",
            type: "Enterprise Software",
            client: "Global Logistics Inc",
            duration: "16 months",
            team: "15 developers",
            status: "Live",
            image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500",
            description: "End-to-end supply chain management system with real-time tracking, predictive analytics, and automated workflows.",
            challenge: "Creating a comprehensive system to manage complex global supply chains with real-time visibility and predictive capabilities.",
            solution: "Developed microservices-based architecture with IoT integration, machine learning for demand forecasting, and real-time tracking.",
            technologies: ["Angular", "Spring Boot", "PostgreSQL", "Apache Kafka", "Machine Learning", "IoT", "AWS", "Docker"],
            features: [
                "Real-time shipment tracking",
                "Predictive demand forecasting",
                "Automated workflow management",
                "IoT sensor integration",
                "Advanced analytics and reporting",
                "Multi-location inventory management"
            ],
            results: [
                "30% reduction in logistics costs",
                "95% improvement in delivery accuracy",
                "Real-time tracking of 100K+ shipments",
                "25% increase in operational efficiency"
            ],
            testimonial: {
                text: "LogiTrack has transformed our supply chain operations. The predictive analytics have significantly improved our planning accuracy.",
                author: "Lisa Thompson, Operations Director at Global Logistics Inc"
            }
        },
        {
            id: 6,
            title: "SmartHome Hub - IoT Platform",
            category: "IoT",
            type: "Mobile & Web Platform",
            client: "TechHome Solutions",
            duration: "9 months",
            team: "7 developers",
            status: "Live",
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
            description: "Comprehensive IoT platform for smart home automation with voice control, energy monitoring, and security features.",
            challenge: "Creating a unified platform that could seamlessly integrate with hundreds of different IoT devices while maintaining security.",
            solution: "Built with React Native and Node.js, implemented MQTT for device communication, and created a secure API gateway for device integration.",
            technologies: ["React Native", "Node.js", "MQTT", "MongoDB", "AWS IoT", "Alexa Skills", "Google Assistant", "Docker"],
            features: [
                "Multi-device integration",
                "Voice control (Alexa, Google)",
                "Energy consumption monitoring",
                "Security system integration",
                "Automated scheduling and scenes",
                "Remote access and control"
            ],
            results: [
                "500+ compatible devices supported",
                "200K+ active installations",
                "30% average energy savings for users",
                "4.8/5 app store rating"
            ],
            testimonial: {
                text: "The SmartHome Hub has made home automation accessible to everyone. The integration capabilities are impressive.",
                author: "Alex Wilson, Product Manager at TechHome Solutions"
            }
        }
    ];

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    if (selectedProject) {
        const project = projectsData.find(p => p.id === selectedProject);
        return (
            <div className="min-h-screen pt-20">
                {/* Project Detail Hero */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
                            >
                                <ArrowRight className="w-4 h-4 rotate-180" />
                                <span>Back to Projects</span>
                            </button>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                                    </div>
                                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{project.title}</h1>
                                    <p className="text-xl text-gray-600">{project.description}</p>

                                    <div className="grid sm:grid-cols-3 gap-4 py-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">{project.duration}</div>
                                            <div className="text-sm text-gray-600">Duration</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">{project.team}</div>
                                            <div className="text-sm text-gray-600">Team Size</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">{project.type}</div>
                                            <div className="text-sm text-gray-600">Type</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Client</h3>
                                    <p className="text-xl mb-6">{project.client}</p>
                                    <div className="bg-white/20 rounded-lg p-4">
                                        <p className="italic mb-2">{project.testimonial.text}</p>
                                        <p className="text-sm font-medium">— {project.testimonial.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
                                <p className="text-lg text-gray-600">{project.challenge}</p>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
                                <p className="text-lg text-gray-600">{project.solution}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies Used</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-300 transition-colors">
                    {tech}
                  </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features & Results */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                                <div className="space-y-4">
                                    {project.features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Results Achieved</h2>
                                <div className="space-y-4">
                                    {project.results.map((result, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our comprehensive portfolio of successful projects across various industries and technologies
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code className="w-12 h-12 text-white opacity-80" />
                                    </div>
                                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.category}
                      </span>
                                        <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.status}
                      </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-500">{project.client}</span>
                                        <span className="text-sm text-gray-500">{project.duration}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setSelectedProject(project.id)}
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    >
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can bring your vision to life with our proven expertise and cutting-edge technologies.
                    </p>
                    <button
                        onClick={() => setCurrentPage('contact')}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;