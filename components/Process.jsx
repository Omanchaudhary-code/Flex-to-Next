'use client';

import { Boxes, Droplet, Scissors, Hammer, Repeat } from 'lucide-react';

export default function Process() {
    const steps = [
        {
            number: 1,
            icon: Boxes,
            title: 'Collection',
            description: 'PVC banners collected after events, campaigns, and hoardings',
        },
        {
            number: 2,
            icon: Droplet,
            title: 'Sorting & Cleaning',
            description: 'Banners sorted, cleaned, and prepared for transformation',
        },
        {
            number: 3,
            icon: Scissors,
            title: 'Design & Cutting',
            description: 'Creative reuse planning and precision cutting',
        },
        {
            number: 4,
            icon: Hammer,
            title: 'Upcycling',
            description: 'Expert craftsmanship converts banners into products',
        },
        {
            number: 5,
            icon: Repeat,
            title: 'Reuse',
            description: 'Products re-enter daily life, completing the cycle',
        },
    ];

    return (
        <section id="process" className="section-padding bg-gradient-to-br from-eco-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mb-4">
                        Our Process
                    </h2>
                    <div className="w-20 h-1 bg-eco-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From discarded banners to everyday essentials—discover how we transform waste into value
                    </p>
                </div>

                {/* Steps - Desktop View */}
                <div className="hidden md:grid md:grid-cols-5 gap-6 relative">
                    {/* Connection Line */}
                    <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-eco-300 via-eco-500 to-eco-600 z-0"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative z-10 group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                {/* Step Number */}
                                <div className="absolute -top-4 -right-4 w-10 h-10 bg-eco-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="bg-eco-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-eco-600 transition-colors duration-300">
                                    <step.icon className="w-8 h-8 text-eco-600 group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-eco-dark mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Steps - Mobile View */}
                <div className="md:hidden space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-8 top-20 w-0.5 h-12 bg-eco-300"></div>
                            )}

                            <div className="flex gap-4">
                                {/* Icon Box */}
                                <div className="flex-shrink-0">
                                    <div className="bg-eco-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-eco-600 font-bold text-sm">Step {step.number}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-eco-dark mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-eco-100 px-6 py-3 rounded-full">
                        <Repeat className="w-5 h-5 text-eco-700 animate-spin" style={{ animationDuration: '3s' }} />
                        <span className="text-eco-800 font-semibold">Closing the loop on waste</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
