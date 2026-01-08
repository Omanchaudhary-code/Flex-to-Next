'use client';

import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Process', href: '#process' },
        { name: 'Products', href: '#products' },
    ];

    const resources = [
        { name: 'Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' },
        { name: 'Blog', href: '#' },
        { name: 'FAQs', href: '#' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-eco-dark text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-eco-600 p-2 rounded-lg">
                                <Recycle className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">
                                Flex <span className="text-eco-400">to Next</span>
                            </span>
                        </div>
                        <p className="text-eco-100 leading-relaxed mb-6 max-w-md">
                            Transforming discarded PVC flex banners into sustainable, reusable products.
                            Join us in building a circular economy and creating a greener future.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-eco-100">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">hello@flextonext.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-eco-100">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+977 98XX-XXXXXX</span>
                            </div>
                            <div className="flex items-center gap-3 text-eco-100">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Kathmandu, Nepal</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-eco-100 hover:text-eco-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-eco-100 hover:text-eco-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-eco-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="bg-eco-800 p-3 rounded-lg hover:bg-eco-600 transition-colors duration-300 group"
                                >
                                    <social.icon className="w-5 h-5 text-eco-100 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-eco-100 text-sm">
                                © {currentYear} Flex to Next. All rights reserved.
                            </p>
                            <p className="text-eco-200 text-xs mt-1">
                                Made with 💚 for a sustainable future
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
