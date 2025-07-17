'use client'
import {Users} from "lucide-react";
import React from "react";

const TeamPage = () => {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Talented professionals dedicated to bringing your vision to life
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Sarah Johnson',
                                role: 'CEO & Founder',
                                description: 'Visionary leader with 10+ years in tech industry',
                                skills: ['Leadership', 'Strategy', 'Business Development']
                            },
                            {
                                name: 'Michael Chen',
                                role: 'CTO',
                                description: 'Full-stack architect passionate about scalable solutions',
                                skills: ['Architecture', 'Cloud', 'DevOps']
                            },
                            {
                                name: 'Emily Rodriguez',
                                role: 'Lead Designer',
                                description: 'Creative designer focused on user experience',
                                skills: ['UI/UX', 'Design Systems', 'Prototyping']
                            },
                            {
                                name: 'David Kim',
                                role: 'Senior Developer',
                                description: 'Expert in modern web technologies and frameworks',
                                skills: ['React', 'Node.js', 'TypeScript']
                            },
                            {
                                name: 'Lisa Thompson',
                                role: 'Mobile Developer',
                                description: 'Specialist in cross-platform mobile development',
                                skills: ['React Native', 'Flutter', 'iOS/Android']
                            },
                            {
                                name: 'Alex Wilson',
                                role: 'DevOps Engineer',
                                description: 'Infrastructure and deployment automation expert',
                                skills: ['AWS', 'Docker', 'CI/CD']
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Users className="w-16 h-16 text-white opacity-80" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 mb-4">{member.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {member.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {skill}
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
};

export default TeamPage;