'use client'

import { Users, Linkedin, Github, Twitter, Mail, Award, Code, Briefcase, GraduationCap } from "lucide-react";
import React, { useState } from "react";

const TeamPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');

    const departments = ['All', 'Leadership', 'Development', 'Design', 'DevOps', 'QA'];

    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            department: 'Leadership',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b2e3b0e7?w=400&h=400&fit=crop',
            description: 'Visionary leader with 15+ years in technology and business strategy. Driving digital transformation across Bangladesh.',
            skills: ['Strategic Leadership', 'Business Development', 'Digital Transformation', 'Team Building'],
            experience: '15+ years',
            education: 'MBA, Harvard Business School',
            achievements: ['Built 3 successful startups', 'Named Top 40 Under 40', 'TEDx Speaker'],
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'sarah@amatechbd.com'
            },
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Chief Technology Officer',
            department: 'Leadership',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
            description: 'Full-stack architect passionate about scalable solutions and emerging technologies. Expert in cloud architecture.',
            skills: ['System Architecture', 'Cloud Computing', 'Microservices', 'Team Leadership'],
            experience: '12+ years',
            education: 'MS Computer Science, MIT',
            achievements: ['AWS Certified Solutions Architect', 'Published 20+ research papers', 'Open source contributor'],
            social: {
                linkedin: '#',
                github: '#',
                email: 'michael@amatechbd.com'
            },
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Lead UI/UX Designer',
            department: 'Design',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
            description: 'Creative designer focused on user-centered design and creating intuitive digital experiences that delight users.',
            skills: ['UI/UX Design', 'Design Systems', 'User Research', 'Prototyping'],
            experience: '8+ years',
            education: 'BFA Design, Parsons School of Design',
            achievements: ['Awwwards recognition', 'Design systems expert', 'UX certification'],
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'emily@amatechbd.com'
            },
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Senior Full-Stack Developer',
            department: 'Development',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            description: 'Expert in modern web technologies and frameworks. Specializes in building scalable applications with clean architecture.',
            skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
            experience: '10+ years',
            education: 'BS Computer Science, Stanford',
            achievements: ['React core contributor', '50+ projects delivered', 'Tech mentor'],
            social: {
                linkedin: '#',
                github: '#',
                email: 'david@amatechbd.com'
            },
            color: 'from-orange-500 to-orange-600'
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            role: 'Senior Mobile Developer',
            department: 'Development',
            image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
            description: 'Specialist in cross-platform mobile development with expertise in React Native and Flutter frameworks.',
            skills: ['React Native', 'Flutter', 'iOS/Android', 'Mobile UI/UX', 'App Store Optimization'],
            experience: '7+ years',
            education: 'MS Software Engineering, UC Berkeley',
            achievements: ['30+ mobile apps published', 'Google Developer Expert', 'Conference speaker'],
            social: {
                linkedin: '#',
                github: '#',
                email: 'lisa@amatechbd.com'
            },
            color: 'from-red-500 to-red-600'
        },
        {
            id: 6,
            name: 'Alex Wilson',
            role: 'DevOps Engineer',
            department: 'DevOps',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
            description: 'Infrastructure and deployment automation expert. Ensures reliable, scalable, and secure deployment pipelines.',
            skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
            experience: '9+ years',
            education: 'BS Computer Engineering, Carnegie Mellon',
            achievements: ['AWS certified', 'Kubernetes expert', 'DevOps transformation leader'],
            social: {
                linkedin: '#',
                github: '#',
                email: 'alex@amatechbd.com'
            },
            color: 'from-indigo-500 to-indigo-600'
        },
        {
            id: 7,
            name: 'Maria Santos',
            role: 'QA Engineer',
            department: 'QA',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
            description: 'Quality assurance specialist ensuring robust testing processes and maintaining high code quality standards.',
            skills: ['Test Automation', 'Quality Assurance', 'Selenium', 'API Testing', 'Performance Testing'],
            experience: '6+ years',
            education: 'BS Computer Science, University of Texas',
            achievements: ['Test automation expert', 'Quality processes architect', 'ISTQB certified'],
            social: {
                linkedin: '#',
                email: 'maria@amatechbd.com'
            },
            color: 'from-pink-500 to-pink-600'
        },
        {
            id: 8,
            name: 'James Brown',
            role: 'Backend Developer',
            department: 'Development',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
            description: 'Backend systems specialist with expertise in API development, database design, and server-side architecture.',
            skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'API Design', 'Database Optimization'],
            experience: '8+ years',
            education: 'MS Computer Science, Georgia Tech',
            achievements: ['API design expert', 'Database optimization specialist', 'Microservices architect'],
            social: {
                linkedin: '#',
                github: '#',
                email: 'james@amatechbd.com'
            },
            color: 'from-teal-500 to-teal-600'
        }
    ];

    const filteredTeam = selectedDepartment === 'All'
        ? teamMembers
        : teamMembers.filter(member => member.department === selectedDepartment);

    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Meet Our Team</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Talented professionals dedicated to delivering exceptional software solutions and driving your business success forward
                        </p>
                    </div>

                    {/* Team Stats */}
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: '50+', label: 'Team Members', icon: '👥' },
                            { number: '15+', label: 'Years Combined Experience', icon: '🏆' },
                            { number: '30+', label: 'Certifications', icon: '📜' },
                            { number: '5+', label: 'Departments', icon: '🏢' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                                <div className="text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Department Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    selectedDepartment === dept
                                        ? 'bg-slate-900 text-white shadow-lg'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                                }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredTeam.map((member) => (
                            <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                {/* Profile Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10`}></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex space-x-2">
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                                    <Linkedin className="w-4 h-4 text-white" />
                                                </a>
                                            )}
                                            {member.social.github && (
                                                <a href={member.social.github} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                                    <Github className="w-4 h-4 text-white" />
                                                </a>
                                            )}
                                            {member.social.twitter && (
                                                <a href={member.social.twitter} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                                    <Twitter className="w-4 h-4 text-white" />
                                                </a>
                                            )}
                                            <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                                <Mail className="w-4 h-4 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Member Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                    <p className="text-slate-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.description}</p>

                                    {/* Experience & Education */}
                                    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                                        <div className="text-center">
                                            <div className="flex items-center justify-center mb-1">
                                                <Briefcase className="w-4 h-4 text-slate-600" />
                                            </div>
                                            <div className="text-sm font-medium text-slate-900">{member.experience}</div>
                                            <div className="text-xs text-slate-600">Experience</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="flex items-center justify-center mb-1">
                                                <GraduationCap className="w-4 h-4 text-slate-600" />
                                            </div>
                                            <div className="text-sm font-medium text-slate-900">Expert</div>
                                            <div className="text-xs text-slate-600">Education</div>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-slate-900 mb-2">Core Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.slice(0, 3).map((skill, index) => (
                                                <span key={index} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                                    {skill}
                                                </span>
                                            ))}
                                            {member.skills.length > 3 && (
                                                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                                    +{member.skills.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Key Achievement */}
                                    <div className="flex items-start space-x-2 p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg">
                                        <Award className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-xs text-slate-600">Key Achievement</div>
                                            <div className="text-sm font-medium text-slate-900">{member.achievements[0]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Were always looking for talented individuals who share our passion for technology and innovation. Join us in building the future of software.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            View Open Positions
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                            Send Your Resume
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;