'use client';

import { Leaf, Heart, Users, TrendingUp } from 'lucide-react';

export default function About() {
    const values = [
        { icon: Leaf, title: 'Eco-Friendly', description: 'Reducing waste, protecting nature' },
        { icon: Heart, title: 'Purposeful', description: 'Creating meaningful impact' },
        { icon: Users, title: 'Community', description: 'Building together' },
        { icon: TrendingUp, title: 'Innovative', description: 'Rethinking sustainability' },
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mb-4">
                                Who We Are
                            </h2>
                            <div className="w-20 h-1 bg-eco-600 rounded-full mb-6"></div>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            <strong className="text-eco-700">Flex to Next</strong> is a sustainability-driven startup
                            focused on <span className="text-eco-600 font-semibold">reusability and circular design</span>.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            We reduce PVC waste by converting discarded flex banners—often used for
                            events, campaigns, and hoardings—into functional, everyday products like
                            tote bags, aprons, and utility accessories.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our mission is to promote a <strong>circular economy</strong> where materials
                            are kept in use for as long as possible, reducing environmental impact and
                            creating value from what would otherwise be waste.
                        </p>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-eco-50 transition-colors duration-300"
                                >
                                    <div className="bg-eco-100 p-2 rounded-lg">
                                        <value.icon className="w-5 h-5 text-eco-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-eco-dark text-sm">{value.title}</h3>
                                        <p className="text-xs text-gray-600 mt-1">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Illustration Placeholder */}
                    <div className="relative">
                        <div className="glass-dark rounded-3xl p-8 lg:p-12 aspect-square flex items-center justify-center">
                            <div className="text-center space-y-6">
                                {/* Circular Economy Visual */}
                                <div className="relative w-64 h-64 mx-auto">
                                    <div className="absolute inset-0 border-8 border-eco-300 rounded-full animate-pulse-slow"></div>
                                    <div className="absolute inset-4 border-8 border-eco-400 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="absolute inset-8 border-8 border-eco-500 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

                                    {/* Center Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-eco-600 p-6 rounded-full shadow-2xl">
                                            <Leaf className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-eco-700">Circular Economy</h3>
                                    <p className="text-gray-600">From Waste to Worth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
