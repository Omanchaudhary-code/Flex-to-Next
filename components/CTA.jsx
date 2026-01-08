'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative overflow-hidden">
            {/* Background with pattern */}
            <div className="gradient-eco-radial py-20 md:py-32">
                {/* Decorative circles */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute -top-20 -left-20 w-64 h-64 border-8 border-white rounded-full"></div>
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 border-8 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-8 border-white rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Let&apos;s Turn Waste into Something Useful
                    </h2>

                    <p className="text-xl md:text-2xl text-eco-100 mb-10 max-w-2xl mx-auto">
                        Ready to be part of the circular economy? Get in touch with us today.
                    </p>

                    <button
                        onClick={scrollToContact}
                        className="bg-white text-eco-700 font-bold py-4 px-10 rounded-lg hover:bg-eco-50 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 group"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
