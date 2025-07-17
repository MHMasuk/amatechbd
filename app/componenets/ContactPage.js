'use client'

import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Clock, MessageCircle, Calendar, Send, CheckCircle } from "lucide-react";
import React, { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Thank you for your message! We\'ll get back to you soon.');
        }, 2000);
    };

    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Ready to transform your business with cutting-edge software solutions? Lets discuss your project and explore how we can help you achieve your goals.
                        </p>
                    </div>

                    {/* Contact Options */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: MessageCircle,
                                title: 'Start a Conversation',
                                description: 'Get immediate answers to your questions',
                                action: 'Chat with us',
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                icon: Calendar,
                                title: 'Schedule a Meeting',
                                description: 'Book a consultation with our experts',
                                action: 'Schedule call',
                                color: 'from-emerald-500 to-emerald-600'
                            },
                            {
                                icon: Send,
                                title: 'Send a Message',
                                description: 'Tell us about your project requirements',
                                action: 'Send message',
                                color: 'from-purple-500 to-purple-600'
                            }
                        ].map((option, index) => (
                            <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <option.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{option.title}</h3>
                                <p className="text-slate-600 mb-4">{option.description}</p>
                                <button className="text-slate-900 font-medium hover:text-slate-700 transition-colors">
                                    {option.action} →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                                <p className="text-slate-600 mb-8">
                                    We are here to help you succeed. Reach out to us through any of these channels, and well get back to you promptly.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">Our Office</h3>
                                            <p className="text-slate-600">Banani, Dhaka 1213, Bangladesh</p>
                                            <p className="text-slate-600">House #123, Road #456</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">Phone</h3>
                                            <p className="text-slate-600">+880 1XXX-XXXXXX</p>
                                            <p className="text-slate-600 text-sm">Available 24/7 for urgent matters</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">Email</h3>
                                            <p className="text-slate-600">hello@amatechbd.com</p>
                                            <p className="text-slate-600 text-sm">Well respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">Business Hours</h3>
                                            <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM (GMT+6)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors group">
                                        <Github className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors group">
                                        <Linkedin className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors group">
                                        <Twitter className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Why Choose Us?</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">24h</div>
                                        <div className="text-sm text-slate-600">Response Time</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">500+</div>
                                        <div className="text-sm text-slate-600">Projects Delivered</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">99%</div>
                                        <div className="text-sm text-slate-600">Client Satisfaction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">5+</div>
                                        <div className="text-sm text-slate-600">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                            placeholder="+880 1XXX-XXXXXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Type *</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="mobile-app">Mobile App Development</option>
                                            <option value="backend-systems">Backend Systems</option>
                                            <option value="devops-security">DevOps & Security</option>
                                            <option value="consulting">Technical Consulting</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                        >
                                            <option value="">Select budget</option>
                                            <option value="under-5k">Under $5,000</option>
                                            <option value="5k-15k">$5,000 - $15,000</option>
                                            <option value="15k-50k">$15,000 - $50,000</option>
                                            <option value="50k-100k">$50,000 - $100,000</option>
                                            <option value="over-100k">$100,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
                                    <select
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select timeline</option>
                                        <option value="asap">ASAP</option>
                                        <option value="1-3-months">1-3 months</option>
                                        <option value="3-6-months">3-6 months</option>
                                        <option value="6-12-months">6-12 months</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Description *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-500"
                                        required
                                    />
                                    <label htmlFor="terms" className="text-sm text-slate-600">
                                        I agree to the <a href="#" className="text-slate-900 hover:underline">Terms of Service</a> and <a href="#" className="text-slate-900 hover:underline">Privacy Policy</a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Quick answers to common questions about our services</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "How long does a typical project take?",
                                answer: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our consultation."
                            },
                            {
                                question: "What's included in your development process?",
                                answer: "Our process includes discovery, design, development, testing, deployment, and post-launch support. We also provide documentation, training, and ongoing maintenance."
                            },
                            {
                                question: "Do you offer ongoing support and maintenance?",
                                answer: "Yes, we provide 24/7 support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements."
                            },
                            {
                                question: "Can you work with our existing team?",
                                answer: "Absolutely! We can integrate with your existing team as an extension, provide consulting services, or handle the entire project independently based on your needs."
                            },
                            {
                                question: "What technologies do you specialize in?",
                                answer: "We specialize in modern web technologies (React, Node.js), mobile development (React Native, Flutter), cloud platforms (AWS, Azure), and enterprise solutions."
                            },
                            {
                                question: "How do you ensure project security?",
                                answer: "We implement security best practices throughout development, including secure coding standards, regular security audits, encryption, and compliance with industry regulations."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">?</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
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
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Lets turn your vision into reality. Contact us today for a free consultation and project estimate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Schedule Free Consultation
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                            Download Our Brochure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;