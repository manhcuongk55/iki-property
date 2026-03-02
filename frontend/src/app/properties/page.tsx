"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { properties, formatVND, formatUSD, formatJPY } from "@/data/properties";

const propertyTypes = ["Tất cả", "Apartment", "Villa", "Shophouse", "Penthouse"];

export default function PropertiesPage() {
    const [filter, setFilter] = useState("Tất cả");

    const filtered =
        filter === "Tất cả"
            ? properties
            : properties.filter((p) => p.type === filter);

    return (
        <>
            {/* Page Header */}
            <section className="bg-navy-900 pt-12 pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">
                            Dự án bất động sản
                        </h1>
                        <p className="mt-3 text-lg text-navy-200 max-w-2xl mx-auto">
                            Khám phá các dự án BĐS uy tín tại Việt Nam, đã được kiểm duyệt pháp lý
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                        {propertyTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === type
                                        ? "bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/25"
                                        : "bg-white/10 text-navy-200 hover:bg-white/20"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Grid */}
            <section className="py-12 bg-section-alt">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-sm text-muted">
                        Hiển thị {filtered.length} dự án
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((property) => (
                            <Link
                                key={property.id}
                                href={`/properties/${property.id}`}
                                className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-border transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={property.images[0]}
                                        alt={property.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="rounded-full bg-navy-900/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                                            {property.type}
                                        </span>
                                        {property.expectedRoi && (
                                            <span className="rounded-full bg-safe/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                                                ROI {property.expectedRoi}%
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-semibold text-navy-900 text-lg group-hover:text-gold-500 transition-colors">
                                        {property.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted line-clamp-2">
                                        {property.description}
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-3 text-sm text-muted">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {property.location}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-border flex items-end justify-between">
                                        <div>
                                            <div className="text-xl font-bold text-navy-900">
                                                {formatVND(property.price)}
                                            </div>
                                            <div className="text-sm text-muted">
                                                ≈ {formatUSD(property.price)} · {formatJPY(property.price)}
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-navy-400 bg-navy-50 px-3 py-1 rounded-full">
                                            {property.legalStatus}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
