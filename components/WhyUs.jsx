'use client';

import { Leaf, Repeat2, MapPin, TrendingDown } from 'lucide-react';

export default function WhyUs() {
    const features = [
        {
            icon: Leaf,
            title: 'Sustainable Materials',
            description: 'We give new life to PVC banners that would otherwise end up in landfills, reducing environmental waste.',
            gradient: 'from-eco-400 to-eco-600',
        },
        {
            icon: Repeat2,
            title: 'Circular Economy',
            description: 'Keeping materials in use for longer, creating a closed-loop system that benefits everyone.',
            gradient: 'from-eco-500 to-eco-700',
        },
        {
            icon: MapPin,
            title: 'Local Production',
            description: 'Supporting local communities and artisans while reducing transportation emissions.',
            gradient: 'from-eco-600 to-eco-800',
        },
        {
            icon: TrendingDown,
            title: 'Reduced Carbon Footprint',
            description: 'Lower environmental impact through upcycling instead of manufacturing from scratch.',
            gradient: 'from-eco-500 to-eco-700',
        },
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-white via-eco-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mb-4">
                        Why Choose Flex to Next
                    </h2>
                    <div className="w-20 h-1 bg-eco-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're not just creating products—we're creating a movement towards sustainable living
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="glass-dark rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                {/* Icon with gradient background */}
                                <div className={`inline-flex bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-eco-dark mb-4 group-hover:text-eco-600 transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative corner */}
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-eco-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-block glass rounded-2xl px-8 py-6">
                        <p className="text-eco-dark font-semibold text-lg mb-2">
                            Join us in creating a sustainable future
                        </p>
                        <p className="text-gray-600">
                            Every purchase supports environmental conservation and local communities
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
