'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Frontend only - show confirmation
        alert(`Thank you, ${formData.name}! We'll get back to you soon at ${formData.email}.`);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'hello@flextonext.com',
            link: 'mailto:hello@flextonext.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+977 98XX-XXXXXX',
            link: 'tel:+97798XXXXXXXX',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Kathmandu, Nepal',
            link: '#',
        },
    ];

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-20 h-1 bg-eco-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions or want to collaborate? We'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-eco-dark mb-6">
                                Let&apos;s Start a Conversation
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Whether you&apos;re interested in our products, want to partner with us,
                                or just want to learn more about our mission, we&apos;re here to help.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-eco-50 transition-all duration-300 group"
                                >
                                    <div className="bg-eco-100 p-3 rounded-lg group-hover:bg-eco-600 transition-colors duration-300">
                                        <info.icon className="w-6 h-6 text-eco-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">{info.title}</p>
                                        <p className="text-eco-dark font-semibold">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Decorative element */}
                        <div className="hidden lg:block mt-12">
                            <div className="glass-dark rounded-2xl p-8">
                                <p className="text-eco-700 font-semibold mb-2">
                                    🌱 Sustainability Tip
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Every small action counts. By choosing upcycled products, you&apos;re helping
                                    reduce waste and supporting a circular economy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-dark rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-eco-dark mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-eco-200 focus:border-eco-600 focus:ring-2 focus:ring-eco-200 outline-none transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-eco-dark mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-eco-200 focus:border-eco-600 focus:ring-2 focus:ring-eco-200 outline-none transition-all duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-eco-dark mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-eco-200 focus:border-eco-600 focus:ring-2 focus:ring-eco-200 outline-none transition-all duration-300 resize-none"
                                    placeholder="Tell us about your inquiry..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
