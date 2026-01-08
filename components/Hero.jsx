'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-50 via-white to-eco-100">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-eco-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-eco-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-eco-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
                <div className="animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-8">
                        <Sparkles className="w-4 h-4 text-eco-600" />
                        <span className="text-sm font-semibold text-eco-700">Sustainability in Action</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-eco-dark mb-6 leading-tight">
                        Turning Waste Banners into{' '}
                        <span className="text-gradient">Everyday Essentials</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        We upcycle discarded PVC flex banners into reusable, sustainable products.
                        Join us in creating a circular economy, one banner at a time.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => scrollToSection('#process')}
                            className="btn-primary flex items-center gap-2 group"
                        >
                            Our Process
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollToSection('#products')}
                            className="btn-secondary"
                        >
                            Explore Products
                        </button>
                    </div>

                    {/* Stats Preview */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="glass-dark rounded-2xl p-6">
                            <div className="text-3xl font-bold text-eco-700 mb-2">500+</div>
                            <div className="text-sm text-gray-600">Kilograms Recycled</div>
                        </div>
                        <div className="glass-dark rounded-2xl p-6">
                            <div className="text-3xl font-bold text-eco-700 mb-2">200+</div>
                            <div className="text-sm text-gray-600">Banners Reused</div>
                        </div>
                        <div className="glass-dark rounded-2xl p-6">
                            <div className="text-3xl font-bold text-eco-700 mb-2">150+</div>
                            <div className="text-sm text-gray-600">Products Created</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-eco-600 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-eco-600 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
