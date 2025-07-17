import {Code} from "lucide-react";
import React from "react";

const PortfolioPage = () => {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our recent projects and success stories
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'E-commerce Platform',
                                category: 'Web Development',
                                description: 'A modern e-commerce solution with advanced features and seamless user experience.',
                                tech: ['React', 'Node.js', 'MongoDB']
                            },
                            {
                                title: 'Healthcare App',
                                category: 'Mobile Development',
                                description: 'HIPAA-compliant mobile app connecting patients with healthcare providers.',
                                tech: ['React Native', 'Firebase', 'TypeScript']
                            },
                            {
                                title: 'Financial Dashboard',
                                category: 'Web Application',
                                description: 'Real-time financial analytics dashboard for investment management.',
                                tech: ['Next.js', 'PostgreSQL', 'Chart.js']
                            },
                            {
                                title: 'Food Delivery App',
                                category: 'Mobile Development',
                                description: 'Full-stack food delivery application with real-time tracking.',
                                tech: ['Flutter', 'Express.js', 'Redis']
                            },
                            {
                                title: 'CRM System',
                                category: 'Enterprise Software',
                                description: 'Comprehensive customer relationship management system.',
                                tech: ['Vue.js', 'Django', 'PostgreSQL']
                            },
                            {
                                title: 'Learning Platform',
                                category: 'EdTech',
                                description: 'Interactive online learning platform with video streaming.',
                                tech: ['React', 'AWS', 'Socket.io']
                            }
                        ].map((project, index) => (
                            <div key={index}
                                 className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                <div
                                    className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code className="w-12 h-12 text-white opacity-80"/>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex}
                                                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioPage;