"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { use } from "react";
import {
    getPropertyById,
    properties,
    formatVND,
    formatUSD,
    formatJPY,
    calculateDTIForProperty,
} from "@/data/properties";

export default function PropertyDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const property = getPropertyById(id);

    const [income, setIncome] = useState("");
    const [savings, setSavings] = useState("");
    const [result, setResult] = useState<ReturnType<typeof calculateDTIForProperty> | null>(null);

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-navy-900 mb-2">Không tìm thấy dự án</h1>
                    <Link href="/properties" className="text-gold-500 hover:underline">
                        ← Quay lại danh sách
                    </Link>
                </div>
            </div>
        );
    }

    const handleCheck = () => {
        if (!income || !savings) return;
        const res = calculateDTIForProperty(
            Number(income),
            Number(savings),
            property.price
        );
        setResult(res);
    };

    // Recommend similar properties
    const similar = properties
        .filter((p) => p.id !== property.id && p.type === property.type)
        .slice(0, 2);

    return (
        <>
            {/* Hero Image */}
            <section className="relative h-[50vh] min-h-[400px]">
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
                        <Link
                            href="/properties"
                            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white mb-4 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Quay lại
                        </Link>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                                {property.type}
                            </span>
                            <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                                {property.legalStatus}
                            </span>
                            {property.expectedRoi && (
                                <span className="rounded-full bg-safe/90 px-3 py-1 text-xs font-medium text-white">
                                    ROI {property.expectedRoi}%
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">
                            {property.title}
                        </h1>
                        <div className="flex items-center gap-1.5 mt-2 text-white/80">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {property.location}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Main info */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Price */}
                            <div className="rounded-2xl bg-navy-50 p-6">
                                <div className="text-sm font-medium text-muted uppercase tracking-wider mb-2">
                                    Giá bán
                                </div>
                                <div className="text-3xl font-bold text-navy-900">
                                    {formatVND(property.price)}
                                </div>
                                <div className="mt-1 flex items-center gap-3 text-muted">
                                    <span>≈ {formatUSD(property.price)}</span>
                                    <span className="text-border">|</span>
                                    <span>≈ {formatJPY(property.price)}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-xl font-semibold text-navy-900 mb-3">
                                    Mô tả dự án
                                </h2>
                                <p className="text-muted leading-relaxed">{property.description}</p>
                            </div>

                            {/* Key info grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: "Loại BĐS", value: property.type },
                                    { label: "Pháp lý", value: property.legalStatus },
                                    { label: "Vị trí", value: property.location.split(",")[0] },
                                    {
                                        label: "ROI kỳ vọng",
                                        value: property.expectedRoi
                                            ? `${property.expectedRoi}%/năm`
                                            : "N/A",
                                    },
                                ].map((info) => (
                                    <div
                                        key={info.label}
                                        className="rounded-xl border border-border p-4"
                                    >
                                        <div className="text-xs font-medium text-muted uppercase tracking-wider">
                                            {info.label}
                                        </div>
                                        <div className="mt-1 text-base font-semibold text-navy-900">
                                            {info.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Similar Properties */}
                            {similar.length > 0 && (
                                <div>
                                    <h2 className="text-xl font-semibold text-navy-900 mb-4">
                                        Dự án tương tự
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {similar.map((p) => (
                                            <Link
                                                key={p.id}
                                                href={`/properties/${p.id}`}
                                                className="group rounded-xl overflow-hidden bg-white shadow-sm border border-border transition-all hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                <div className="relative aspect-[16/10] overflow-hidden">
                                                    <Image
                                                        src={p.images[0]}
                                                        alt={p.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-semibold text-navy-900 group-hover:text-gold-500 transition-colors">
                                                        {p.title}
                                                    </h3>
                                                    <div className="mt-1 text-lg font-bold text-navy-900">
                                                        {formatVND(p.price)}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar: Financial Check */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-navy-900 mb-1">
                                    Kiểm tra tài chính
                                </h3>
                                <p className="text-sm text-muted mb-5">
                                    Nhập thu nhập để kiểm tra khả năng mua BĐS này
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Thu nhập hàng tháng (VNĐ)
                                        </label>
                                        <input
                                            type="number"
                                            value={income}
                                            onChange={(e) => setIncome(e.target.value)}
                                            placeholder="VD: 50000000"
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Tiền tiết kiệm (VNĐ)
                                        </label>
                                        <input
                                            type="number"
                                            value={savings}
                                            onChange={(e) => setSavings(e.target.value)}
                                            placeholder="VD: 1000000000"
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                                        />
                                    </div>

                                    <button
                                        onClick={handleCheck}
                                        disabled={!income || !savings}
                                        className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:shadow-gold-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Kiểm tra ngay
                                    </button>
                                </div>

                                {/* Result */}
                                {result && (
                                    <div className="mt-6 animate-fade-in-up">
                                        <div
                                            className={`rounded-xl p-4 ${result.isSafe
                                                    ? "bg-green-50 border border-green-200"
                                                    : "bg-red-50 border border-red-200"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${result.isSafe ? "bg-safe/20" : "bg-danger/20"
                                                        }`}
                                                >
                                                    {result.isSafe ? (
                                                        <svg className="w-5 h-5 text-safe" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span
                                                    className={`text-sm font-semibold ${result.isSafe ? "text-green-800" : "text-red-800"
                                                        }`}
                                                >
                                                    {result.isSafe ? "An toàn" : "Rủi ro cao"}
                                                </span>
                                            </div>
                                            <p
                                                className={`text-sm ${result.isSafe ? "text-green-700" : "text-red-700"
                                                    }`}
                                            >
                                                {result.message}
                                            </p>
                                        </div>

                                        <div className="mt-4 space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted">Cần vay</span>
                                                <span className="font-semibold text-navy-900">
                                                    {formatVND(result.loanAmount)}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted">Trả hàng tháng</span>
                                                <span className="font-semibold text-navy-900">
                                                    {formatVND(result.monthlyPayment)}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted">Tỷ lệ DTI</span>
                                                <span
                                                    className={`font-semibold ${result.dti <= 50 ? "text-safe" : "text-danger"
                                                        }`}
                                                >
                                                    {result.dti.toFixed(1)}%
                                                </span>
                                            </div>

                                            {/* DTI visual bar */}
                                            <div>
                                                <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-700 ${result.dti <= 30
                                                                ? "bg-safe"
                                                                : result.dti <= 50
                                                                    ? "bg-warning"
                                                                    : "bg-danger"
                                                            }`}
                                                        style={{ width: `${Math.min(result.dti, 100)}%` }}
                                                    />
                                                </div>
                                                <div className="flex justify-between mt-1 text-xs text-muted">
                                                    <span>0%</span>
                                                    <span className="text-warning">50% (ngưỡng an toàn)</span>
                                                    <span>100%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-6 pt-6 border-t border-border">
                                    <Link
                                        href="/calculator"
                                        className="block text-center text-sm text-gold-500 font-medium hover:underline"
                                    >
                                        Dùng công cụ tính toán đầy đủ →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
