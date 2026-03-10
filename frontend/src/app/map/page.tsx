"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { properties, formatVND, formatUSD, type Property } from "@/data/properties";

// Map regions with coordinates for CSS-positioned markers
const REGIONS = [
    { name: "Hà Nội", top: "18%", left: "48%", count: 0 },
    { name: "Hưng Yên", top: "22%", left: "52%", count: 0 },
    { name: "Bắc Ninh", top: "16%", left: "52%", count: 0 },
    { name: "Hải Dương", top: "21%", left: "55%", count: 0 },
    { name: "Đà Nẵng", top: "50%", left: "46%", count: 0 },
    { name: "Bình Dương", top: "72%", left: "48%", count: 0 },
    { name: "Đồng Nai", top: "73%", left: "52%", count: 0 },
    { name: "TP. Hồ Chí Minh", top: "75%", left: "46%", count: 0 },
    { name: "Bình Thuận", top: "68%", left: "54%", count: 0 },
];

// Count properties per region
REGIONS.forEach((r) => {
    r.count = properties.filter((p) => p.location.includes(r.name.replace("TP. ", ""))).length;
});

export default function MapPage() {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [priceFilter, setPriceFilter] = useState("all");

    const regionProperties = selectedRegion
        ? properties.filter((p: Property) => p.location.includes(selectedRegion.replace("TP. ", "")))
        : properties;

    const filtered = priceFilter === "all"
        ? regionProperties
        : priceFilter === "under1"
            ? regionProperties.filter((p: Property) => p.price < 1_000_000_000)
            : priceFilter === "1to2"
                ? regionProperties.filter((p: Property) => p.price >= 1_000_000_000 && p.price <= 2_000_000_000)
                : priceFilter === "2to5"
                    ? regionProperties.filter((p: Property) => p.price > 2_000_000_000 && p.price <= 5_000_000_000)
                    : regionProperties.filter((p: Property) => p.price > 5_000_000_000);

    return (
        <>
            {/* Header */}
            <section className="bg-navy-900 pt-12 pb-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 mb-4">
                        <span className="text-sm font-medium text-gold-300">
                            🗺️ Bản đồ BĐS thông minh
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        Tìm kiếm BĐS trên <span className="gradient-text">bản đồ</span>
                    </h1>
                    <p className="mt-3 text-navy-200 max-w-2xl mx-auto">
                        Click vào khu vực trên bản đồ để xem BĐS tại vùng đó. Lọc theo mức giá phù hợp ngân sách.
                    </p>
                </div>
            </section>

            <section className="py-8 bg-section-alt">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Map Panel (3 cols) */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl bg-white border border-border shadow-sm overflow-hidden">
                                {/* Price filter bar */}
                                <div className="p-4 border-b border-border flex flex-wrap gap-2">
                                    {[
                                        { value: "all", label: "Tất cả" },
                                        { value: "under1", label: "< 1 tỷ" },
                                        { value: "1to2", label: "1-2 tỷ 🔥" },
                                        { value: "2to5", label: "2-5 tỷ" },
                                        { value: "over5", label: "> 5 tỷ" },
                                    ].map((f) => (
                                        <button
                                            key={f.value}
                                            onClick={() => setPriceFilter(f.value)}
                                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${priceFilter === f.value
                                                ? "bg-gold-500 text-navy-900 shadow"
                                                : "bg-navy-50 text-navy-600 hover:bg-navy-100"
                                                }`}
                                        >
                                            {f.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Vietnam Map (CSS-based) */}
                                <div className="relative bg-gradient-to-b from-navy-50 to-blue-50" style={{ aspectRatio: "3/4" }}>
                                    {/* Map shape — stylized Vietnam */}
                                    <svg viewBox="0 0 400 600" className="w-full h-full absolute inset-0" fill="none">
                                        <path
                                            d="M180 20 Q200 10 220 20 L240 50 Q260 70 250 100 L260 130 Q270 150 260 170 L250 200 Q240 220 250 240 L260 260 Q280 280 270 310 L260 340 Q250 360 240 380 L230 400 Q220 420 210 440 L200 460 Q190 480 180 500 L170 520 Q160 540 180 550 L200 560 Q220 570 210 580 L190 590 Q170 600 160 580 L150 560 Q140 540 130 520 L120 500 Q110 480 120 460 L130 440 Q140 420 130 400 L120 380 Q110 360 120 340 L130 320 Q140 300 130 280 L120 260 Q110 240 120 220 L130 200 Q140 180 130 160 L140 130 Q150 110 160 90 L170 60 Q175 40 180 20Z"
                                            fill="#e2e8f0"
                                            stroke="#94a3b8"
                                            strokeWidth="1"
                                            className="opacity-60"
                                        />
                                    </svg>

                                    {/* Region markers */}
                                    {REGIONS.filter((r) => r.count > 0).map((region) => (
                                        <button
                                            key={region.name}
                                            onClick={() => setSelectedRegion(selectedRegion === region.name ? null : region.name)}
                                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all hover:scale-125 ${selectedRegion === region.name ? "scale-125" : ""
                                                }`}
                                            style={{ top: region.top, left: region.left }}
                                        >
                                            <div className={`flex flex-col items-center`}>
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-all ${selectedRegion === region.name
                                                    ? "bg-gold-500 text-navy-900 ring-4 ring-gold-200"
                                                    : "bg-navy-800 text-white hover:bg-gold-500 hover:text-navy-900"
                                                    }`}>
                                                    {region.count}
                                                </div>
                                                <span className={`mt-1 text-[10px] font-semibold whitespace-nowrap px-1.5 py-0.5 rounded ${selectedRegion === region.name
                                                    ? "bg-gold-500 text-navy-900"
                                                    : "bg-white/90 text-navy-700 shadow-sm"
                                                    }`}>
                                                    {region.name}
                                                </span>
                                            </div>
                                        </button>
                                    ))}

                                    {/* Legend */}
                                    <div className="absolute bottom-4 left-4 bg-white/90 rounded-xl p-3 shadow-sm text-xs">
                                        <div className="font-semibold text-navy-900 mb-2">Chú thích</div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-4 h-4 rounded-full bg-navy-800" />
                                            <span className="text-muted">Click để xem BĐS</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-gold-500" />
                                            <span className="text-muted">Đang xem</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Property List (2 cols) */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-navy-900">
                                        {selectedRegion ? `BĐS tại ${selectedRegion}` : "Tất cả BĐS"}
                                    </h2>
                                    <span className="text-sm text-muted">{filtered.length} kết quả</span>
                                </div>

                                {selectedRegion && (
                                    <button
                                        onClick={() => setSelectedRegion(null)}
                                        className="mb-4 text-sm text-gold-500 hover:text-gold-600 transition-colors"
                                    >
                                        ← Xem tất cả khu vực
                                    </button>
                                )}

                                <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                                    {filtered.map((property: Property) => (
                                        <Link
                                            key={property.id}
                                            href={`/properties/${property.id}`}
                                            className="group flex gap-4 rounded-xl bg-white border border-border p-3 transition-all hover:shadow-lg hover:-translate-y-0.5"
                                        >
                                            <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                                                <Image
                                                    src={property.images[0]}
                                                    alt={property.title}
                                                    fill
                                                    className="object-cover transition-transform group-hover:scale-110"
                                                />
                                                <span className="absolute bottom-1 left-1 rounded bg-navy-900/80 px-1.5 py-0.5 text-[10px] text-white">
                                                    {property.type}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-semibold text-navy-900 group-hover:text-gold-500 transition-colors line-clamp-1">
                                                    {property.title}
                                                </h3>
                                                <div className="flex items-center gap-1 mt-1 text-xs text-muted">
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    {property.location}
                                                </div>
                                                <div className="mt-2">
                                                    <span className="text-sm font-bold text-navy-900">{formatVND(property.price)}</span>
                                                    <span className="text-xs text-muted ml-1">≈ {formatUSD(property.price)}</span>
                                                </div>
                                                <div className="mt-1 flex gap-2">
                                                    <span className="text-[10px] bg-navy-50 text-navy-600 px-2 py-0.5 rounded-full">{property.legalStatus}</span>
                                                    {property.expectedRoi && (
                                                        <span className="text-[10px] bg-green-50 text-safe px-2 py-0.5 rounded-full">
                                                            ROI {property.expectedRoi}%
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}

                                    {filtered.length === 0 && (
                                        <div className="text-center py-12 text-muted">
                                            <span className="text-3xl mb-3 block">🔍</span>
                                            Không tìm thấy BĐS phù hợp
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
