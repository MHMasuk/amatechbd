import {Github, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react";

const ContactPage = () => {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to start your next project? Wed love to hear from you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-blue-600"/>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Email</p>
                                            <p className="text-gray-600">hello@techcraft.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-blue-600"/>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Phone</p>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-blue-600"/>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Address</p>
                                            <p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <div
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                                        <Github className="w-5 h-5"/>
                                    </div>
                                    <div
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                                        <Linkedin className="w-5 h-5"/>
                                    </div>
                                    <div
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                                        <Twitter className="w-5 h-5"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last
                                            Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ContactPage;