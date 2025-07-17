import {CheckCircle, Database, Globe, Shield, Smartphone} from "lucide-react";
import React from "react";

const serviceDetails = {
    'web-development': {
        title: 'Web Development',
        icon: Globe,
        hero: 'Modern Web Applications That Drive Results',
        description: 'We create stunning, responsive websites and powerful web applications using cutting-edge technologies. From simple landing pages to complex enterprise solutions, we deliver digital experiences that engage users and drive business growth.',
        features: [
            {
                title: 'Frontend Development',
                description: 'Interactive user interfaces built with React, Vue.js, and modern JavaScript frameworks',
                technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
            },
            {
                title: 'Backend Development',
                description: 'Robust server-side solutions with scalable APIs and database integration',
                technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
            },
            {
                title: 'E-commerce Solutions',
                description: 'Complete online stores with payment processing and inventory management',
                technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Custom Carts']
            },
            {
                title: 'Progressive Web Apps',
                description: 'App-like experiences that work offline and install on devices',
                technologies: ['Service Workers', 'Web App Manifest', 'Push Notifications']
            }
        ],
        process: [
            { step: 1, title: 'Discovery & Planning', description: 'Understanding your requirements and creating a detailed project roadmap' },
            { step: 2, title: 'Design & Wireframing', description: 'Creating user-centered designs and interactive prototypes' },
            { step: 3, title: 'Development', description: 'Building your application with clean, scalable code' },
            { step: 4, title: 'Testing & QA', description: 'Rigorous testing across devices and browsers' },
            { step: 5, title: 'Launch & Support', description: 'Deployment and ongoing maintenance support' }
        ],
        benefits: [
            'Responsive design that works on all devices',
            'SEO-optimized for better search rankings',
            'Fast loading times and performance',
            'Secure and scalable architecture',
            'Easy content management systems',
            'Analytics and tracking integration'
        ],
        pricing: {
            basic: { name: 'Basic Website', price: '$2,999', features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', '30 days support'] },
            professional: { name: 'Professional Web App', price: '$7,999', features: ['Custom functionality', 'Database integration', 'Admin panel', '90 days support'] },
            enterprise: { name: 'Enterprise Solution', price: 'Custom', features: ['Complex integrations', 'Custom APIs', 'Scalable architecture', '1 year support'] }
        }
    },
    'mobile-development': {
        title: 'Mobile App Development',
        icon: Smartphone,
        hero: 'Native & Cross-Platform Mobile Solutions',
        description: 'Transform your ideas into powerful mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions that deliver exceptional user experiences across all devices.',
        features: [
            {
                title: 'Native iOS Development',
                description: 'High-performance apps built specifically for iPhone and iPad users',
                technologies: ['Swift', 'SwiftUI', 'Objective-C', 'Xcode', 'Core Data']
            },
            {
                title: 'Native Android Development',
                description: 'Feature-rich Android applications optimized for Google Play Store',
                technologies: ['Kotlin', 'Java', 'Android Studio', 'Room Database', 'Jetpack Compose']
            },
            {
                title: 'Cross-Platform Development',
                description: 'Write once, run everywhere with React Native and Flutter',
                technologies: ['React Native', 'Flutter', 'Expo', 'Dart', 'JavaScript']
            },
            {
                title: 'App Store Optimization',
                description: 'Complete app store presence with marketing and optimization',
                technologies: ['ASO', 'App Analytics', 'A/B Testing', 'User Acquisition']
            }
        ],
        process: [
            { step: 1, title: 'Concept & Strategy', description: 'Defining app concept, target audience, and platform strategy' },
            { step: 2, title: 'UI/UX Design', description: 'Creating intuitive interfaces following platform guidelines' },
            { step: 3, title: 'Development', description: 'Building robust, scalable mobile applications' },
            { step: 4, title: 'Testing', description: 'Comprehensive testing on real devices and simulators' },
            { step: 5, title: 'App Store Launch', description: 'Publishing and marketing your app for maximum visibility' }
        ],
        benefits: [
            'Native performance and user experience',
            'Offline functionality capabilities',
            'Push notifications and engagement',
            'Device hardware integration',
            'App store optimization included',
            'Post-launch analytics and insights'
        ],
        pricing: {
            basic: { name: 'Simple Mobile App', price: '$12,999', features: ['Single platform', 'Basic features', 'App store submission', '60 days support'] },
            professional: { name: 'Advanced Mobile App', price: '$24,999', features: ['Cross-platform', 'Backend integration', 'Push notifications', '6 months support'] },
            enterprise: { name: 'Enterprise Mobile Solution', price: 'Custom', features: ['Complex integrations', 'Custom APIs', 'Advanced security', '1 year support'] }
        }
    },
    'backend-systems': {
        title: 'Backend & Database Systems',
        icon: Database,
        hero: 'Scalable Backend Infrastructure',
        description: 'Build the foundation of your digital products with robust backend systems. We create APIs, databases, and server infrastructure that scale with your business and handle millions of requests.',
        features: [
            {
                title: 'API Development',
                description: 'RESTful and GraphQL APIs for seamless data exchange',
                technologies: ['REST APIs', 'GraphQL', 'OpenAPI', 'API Gateway', 'Rate Limiting']
            },
            {
                title: 'Database Design',
                description: 'Optimized database architecture for performance and scalability',
                technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Data Modeling']
            },
            {
                title: 'Cloud Infrastructure',
                description: 'Scalable cloud solutions for high availability and performance',
                technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
            },
            {
                title: 'Microservices Architecture',
                description: 'Modular systems that scale independently and improve maintainability',
                technologies: ['Microservices', 'Service Mesh', 'Event Streaming', 'Load Balancing']
            }
        ],
        process: [
            { step: 1, title: 'Architecture Planning', description: 'Designing scalable system architecture and data flow' },
            { step: 2, title: 'Database Design', description: 'Creating optimized database schemas and relationships' },
            { step: 3, title: 'API Development', description: 'Building secure and performant APIs' },
            { step: 4, title: 'Infrastructure Setup', description: 'Deploying on cloud platforms with auto-scaling' },
            { step: 5, title: 'Monitoring & Optimization', description: 'Continuous monitoring and performance tuning' }
        ],
        benefits: [
            'High availability and uptime',
            'Automatic scaling capabilities',
            'Comprehensive API documentation',
            'Real-time monitoring and alerts',
            'Backup and disaster recovery',
            'Security best practices implemented'
        ],
        pricing: {
            basic: { name: 'Starter Backend', price: '$4,999', features: ['Basic API', 'Database setup', 'Cloud deployment', '30 days support'] },
            professional: { name: 'Professional Backend', price: '$12,999', features: ['Complex APIs', 'Multiple databases', 'Auto-scaling', '6 months support'] },
            enterprise: { name: 'Enterprise Backend', price: 'Custom', features: ['Microservices', 'High availability', 'Custom integrations', '1 year support'] }
        }
    },
    'security-devops': {
        title: 'Security & DevOps',
        icon: Shield,
        hero: 'Secure & Automated Development Operations',
        description: 'Protect your applications and streamline your development process with our comprehensive security and DevOps services. We implement best practices for secure, automated, and scalable deployments.',
        features: [
            {
                title: 'Security Audits',
                description: 'Comprehensive security assessments and vulnerability testing',
                technologies: ['Penetration Testing', 'OWASP', 'Security Scanning', 'Compliance']
            },
            {
                title: 'CI/CD Pipelines',
                description: 'Automated testing, building, and deployment workflows',
                technologies: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Azure DevOps']
            },
            {
                title: 'Infrastructure as Code',
                description: 'Version-controlled infrastructure management and automation',
                technologies: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi']
            },
            {
                title: 'Monitoring & Logging',
                description: 'Real-time application and infrastructure monitoring',
                technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog']
            }
        ],
        process: [
            { step: 1, title: 'Security Assessment', description: 'Evaluating current security posture and identifying risks' },
            { step: 2, title: 'Pipeline Design', description: 'Creating automated deployment and testing workflows' },
            { step: 3, title: 'Implementation', description: 'Setting up secure infrastructure and monitoring' },
            { step: 4, title: 'Testing & Validation', description: 'Verifying security measures and pipeline functionality' },
            { step: 5, title: 'Ongoing Support', description: 'Continuous monitoring and security updates' }
        ],
        benefits: [
            'Automated security scanning',
            'Faster and safer deployments',
            'Real-time threat detection',
            'Compliance with industry standards',
            'Reduced downtime and incidents',
            '24/7 monitoring and alerting'
        ],
        pricing: {
            basic: { name: 'Basic Security Setup', price: '$3,999', features: ['Security audit', 'Basic CI/CD', 'Monitoring setup', '30 days support'] },
            professional: { name: 'Advanced DevOps', price: '$9,999', features: ['Full CI/CD pipeline', 'Advanced monitoring', 'Security automation', '6 months support'] },
            enterprise: { name: 'Enterprise Security', price: 'Custom', features: ['Custom security solutions', 'Compliance auditing', '24/7 monitoring', '1 year support'] }
        }
    }
};

const ServiceDetailPage = () => {
    const service = serviceDetails[selectedService];
    if (!service) return <div>Service not found</div>;

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center">
                                <service.icon className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
                        <p className="text-2xl text-blue-600 font-semibold mb-6">{service.hero}</p>
                        <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => setCurrentPage('services')}
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                            >
                                Back to Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
                        <p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {service.features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {feature.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
                        <p className="text-xl text-gray-600">How we bring your project to life</p>
                    </div>
                    <div className="space-y-8">
                        {service.process.map((step, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {step.step}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our {service.title}?</h2>
                            <div className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                            <p className="mb-6">Let's discuss your project and create something amazing together.</p>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Start Your Project
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
                        <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {Object.entries(service.pricing).map(([key, plan], index) => (
                            <div key={key} className={`bg-white rounded-2xl p-8 ${index === 1 ? 'border-2 border-blue-600 shadow-lg transform scale-105' : 'border border-gray-200'}`}>
                                {index === 1 && (
                                    <div className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-blue-600 mb-6">
                                    {plan.price}
                                    {plan.price !== 'Custom' && <span className="text-lg text-gray-500">/project</span>}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setCurrentPage('contact')}
                                    className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                                        index === 1
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                                            : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                                    }`}
                                >
                                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;