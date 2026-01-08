'use client';

import { TrendingDown, Recycle, Package, Globe } from 'lucide-react';

export default function Impact() {
    const stats = [
        {
            icon: TrendingDown,
            value: '500+',
            unit: 'kg',
            label: 'PVC waste diverted from landfill',
            color: 'from-eco-400 to-eco-600',
        },
        {
            icon: Recycle,
            value: '200+',
            unit: '',
            label: 'Banners reused and transformed',
            color: 'from-eco-500 to-eco-700',
        },
        {
            icon: Package,
            value: '150+',
            unit: '',
            label: 'Reusable products created',
            color: 'from-eco-600 to-eco-800',
        },
    ];

    return (
        <section id="impact" className="section-padding gradient-eco relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <Globe className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold">Our Environmental Impact</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Making a Difference
                    </h2>
                    <p className="text-xl text-eco-50 max-w-2xl mx-auto">
                        Every banner saved, every product created—together we're building a sustainable future
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                                {/* Icon */}
                                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Value */}
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl md:text-6xl font-bold text-white pulse-number">
                                            {stat.value}
                                        </span>
                                        {stat.unit && (
                                            <span className="text-2xl font-semibold text-eco-100">{stat.unit}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Label */}
                                <p className="text-eco-50 text-lg leading-relaxed">
                                    {stat.label}
                                </p>

                                {/* Decorative element */}
                                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white border-opacity-20">
                        <p className="text-white text-lg font-semibold mb-2">
                            🌱 Growing Impact, Growing Community
                        </p>
                        <p className="text-eco-100">
                            These numbers grow with every banner we save and every product you choose
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
