'use client';

import { ShoppingBag, UtensilsCrossed, PackageOpen, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Products() {
    const products = [
        {
            id: 1,
            name: 'Tote Bags',
            description: 'Spacious and durable bags perfect for daily use, shopping, and carrying essentials',
            icon: ShoppingBag,
            comingSoon: false,
            features: ['Waterproof', 'Durable', 'Unique designs'],
        },
        {
            id: 2,
            name: 'Aprons',
            description: 'Kitchen and workspace protection with style and sustainability',
            icon: UtensilsCrossed,
            comingSoon: false,
            features: ['Easy to clean', 'Adjustable', 'Long-lasting'],
        },
        {
            id: 3,
            name: 'Utility Accessories',
            description: 'Pouches, organizers, and more—expanding our sustainable product line',
            icon: PackageOpen,
            comingSoon: true,
            features: ['Compact', 'Versatile', 'Eco-friendly'],
        },
    ];

    return (
        <section id="products" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mb-4">
                        Our Products
                    </h2>
                    <div className="w-20 h-1 bg-eco-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Every product tells a story of transformation—from billboard to bag, waste to worth
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
                        >
                            {/* Image Placeholder with Icon */}
                            <div className="relative h-64 bg-gradient-to-br from-eco-100 to-eco-200 flex items-center justify-center overflow-hidden">
                                {product.comingSoon && (
                                    <div className="absolute top-4 right-4 bg-eco-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                        Coming Soon
                                    </div>
                                )}

                                <div className="relative z-0">
                                    <div className="absolute inset-0 bg-eco-300 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                                    <product.icon className="relative w-32 h-32 text-eco-600 group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-eco-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-eco-dark mb-3 group-hover:text-eco-600 transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-eco-50 text-eco-700 px-3 py-1 rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Eco Badge */}
                                <div className="eco-badge">
                                    <Sparkles className="w-3 h-3" />
                                    Made from upcycled PVC banners
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-6">
                        Each product is unique, carrying colors and patterns from its previous life
                    </p>
                    <button className="btn-primary">
                        Explore More Products
                    </button>
                </div>
            </div>
        </section>
    );
}
