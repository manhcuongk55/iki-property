"use client";

import { useState } from "react";
import Link from "next/link";
import {
    calculateLoanCapability,
    calculateDTIForProperty,
    formatVND,
    formatUSD,
    formatJPY,
    properties,
    type BudgetResult,
    type PropertySafetyResult,
} from "@/data/properties";

export default function CalculatorPage() {
    const [income, setIncome] = useState("");
    const [savings, setSavings] = useState("");
    const [rate, setRate] = useState("8.5");
    const [budgetResult, setBudgetResult] = useState<BudgetResult | null>(null);
    const [selectedProperty, setSelectedProperty] = useState("");
    const [safetyResult, setSafetyResult] = useState<PropertySafetyResult | null>(null);

    const handleBudget = () => {
        if (!income || !savings) return;
        const res = calculateLoanCapability(
            Number(income),
            Number(savings),
            Number(rate)
        );
        setBudgetResult(res);
    };

    const handlePropertyCheck = () => {
        if (!income || !savings || !selectedProperty) return;
        const property = properties.find((p) => p.id === selectedProperty);
        if (!property) return;
        const res = calculateDTIForProperty(
            Number(income),
            Number(savings),
            property.price,
            Number(rate)
        );
        setSafetyResult(res);
    };

    return (
        <>
            {/* Header */}
            <section className="bg-navy-900 pt-12 pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 mb-4">
                        <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-gold-300">
                            Công cụ tài chính
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        Tính khả năng đầu tư
                    </h1>
                    <p className="mt-3 text-lg text-navy-200 max-w-2xl mx-auto">
                        Kiểm tra ngân sách an toàn và khả năng mua BĐS dựa trên thu nhập thực tế của bạn
                    </p>
                </div>
            </section>

            <section className="py-12 bg-section-alt">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Input Panel */}
                        <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-navy-900 mb-1">
                                Thông tin tài chính
                            </h2>
                            <p className="text-sm text-muted mb-6">
                                Nhập thu nhập và tiết kiệm của bạn
                            </p>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                        Thu nhập hàng tháng (VNĐ)
                                    </label>
                                    <input
                                        type="number"
                                        value={income}
                                        onChange={(e) => setIncome(e.target.value)}
                                        placeholder="VD: 50,000,000 (50 triệu)"
                                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                                    />
                                    <p className="mt-1 text-xs text-muted">
                                        💡 Lương ở Nhật ~180,000 JPY ≈ 30 triệu VNĐ/tháng
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                        Tổng tiền tiết kiệm (VNĐ)
                                    </label>
                                    <input
                                        type="number"
                                        value={savings}
                                        onChange={(e) => setSavings(e.target.value)}
                                        placeholder="VD: 1,000,000,000 (1 tỷ)"
                                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                        Lãi suất vay (%/năm)
                                    </label>
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(e.target.value)}
                                        step="0.1"
                                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                                    />
                                </div>

                                <button
                                    onClick={handleBudget}
                                    disabled={!income || !savings}
                                    className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:shadow-gold-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Tính ngân sách an toàn
                                </button>
                            </div>

                            {/* Property Check */}
                            <div className="mt-8 pt-6 border-t border-border">
                                <h3 className="text-base font-semibold text-navy-900 mb-3">
                                    Kiểm tra dự án cụ thể
                                </h3>
                                <div className="space-y-4">
                                    <select
                                        value={selectedProperty}
                                        onChange={(e) => setSelectedProperty(e.target.value)}
                                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white"
                                    >
                                        <option value="">Chọn dự án...</option>
                                        {properties.map((p) => (
                                            <option key={p.id} value={p.id}>
                                                {p.title} — {formatVND(p.price)}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        onClick={handlePropertyCheck}
                                        disabled={!income || !savings || !selectedProperty}
                                        className="w-full rounded-xl bg-navy-800 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Kiểm tra an toàn tài chính
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Results Panel */}
                        <div className="space-y-6">
                            {/* Budget Results */}
                            {budgetResult && (
                                <div className="rounded-2xl bg-white border border-border p-6 shadow-sm animate-fade-in-up">
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-navy-900">
                                            Ngân sách an toàn
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-gradient-to-r from-navy-800 to-navy-700 p-5 text-center">
                                            <div className="text-sm text-navy-200 mb-1">
                                                Tổng ngân sách an toàn
                                            </div>
                                            <div className="text-3xl font-bold text-gold-400">
                                                {formatVND(budgetResult.totalSafeBudget)}
                                            </div>
                                            <div className="text-sm text-navy-300 mt-1">
                                                ≈ {formatUSD(budgetResult.totalSafeBudget)} ·{" "}
                                                {formatJPY(budgetResult.totalSafeBudget)}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-xl bg-navy-50 p-4">
                                                <div className="text-xs font-medium text-muted uppercase tracking-wider">
                                                    Khả năng vay tối đa
                                                </div>
                                                <div className="mt-1 text-lg font-bold text-navy-900">
                                                    {formatVND(budgetResult.maxLoanAmount)}
                                                </div>
                                            </div>
                                            <div className="rounded-xl bg-navy-50 p-4">
                                                <div className="text-xs font-medium text-muted uppercase tracking-wider">
                                                    Trả góp/tháng tối đa
                                                </div>
                                                <div className="mt-1 text-lg font-bold text-navy-900">
                                                    {formatVND(budgetResult.maxMonthlyPayment)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-sm text-muted bg-navy-50 rounded-xl p-3">
                                            <span className="font-medium">📊 Tỷ lệ DTI ngưỡng an toàn:</span> Dưới 50% thu nhập dành cho trả nợ. Dựa trên kỳ hạn vay 20 năm.
                                        </div>
                                    </div>

                                    {/* Quick match */}
                                    <div className="mt-5 pt-5 border-t border-border">
                                        <h4 className="text-sm font-semibold text-navy-900 mb-3">
                                            Dự án phù hợp ngân sách:
                                        </h4>
                                        <div className="space-y-2">
                                            {properties
                                                .filter((p) => p.price <= budgetResult.totalSafeBudget)
                                                .map((p) => (
                                                    <Link
                                                        key={p.id}
                                                        href={`/properties/${p.id}`}
                                                        className="flex items-center justify-between p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                                                    >
                                                        <span className="text-sm font-medium text-green-800">
                                                            ✅ {p.title}
                                                        </span>
                                                        <span className="text-sm font-semibold text-green-900">
                                                            {formatVND(p.price)}
                                                        </span>
                                                    </Link>
                                                ))}
                                            {properties
                                                .filter((p) => p.price > budgetResult.totalSafeBudget)
                                                .map((p) => (
                                                    <div
                                                        key={p.id}
                                                        className="flex items-center justify-between p-3 rounded-lg bg-red-50"
                                                    >
                                                        <span className="text-sm font-medium text-red-700">
                                                            ❌ {p.title}
                                                        </span>
                                                        <span className="text-sm font-semibold text-red-800">
                                                            {formatVND(p.price)}
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Property Safety Results */}
                            {safetyResult && (
                                <div className="rounded-2xl bg-white border border-border p-6 shadow-sm animate-fade-in-up">
                                    <h3 className="text-lg font-semibold text-navy-900 mb-4">
                                        Kết quả kiểm tra dự án
                                    </h3>

                                    <div
                                        className={`rounded-xl p-5 mb-4 ${safetyResult.isSafe
                                                ? "bg-green-50 border border-green-200"
                                                : "bg-red-50 border border-red-200"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {safetyResult.isSafe ? (
                                                <span className="text-2xl">✅</span>
                                            ) : (
                                                <span className="text-2xl">⚠️</span>
                                            )}
                                            <span
                                                className={`text-lg font-bold ${safetyResult.isSafe ? "text-green-800" : "text-red-800"
                                                    }`}
                                            >
                                                {safetyResult.isSafe ? "AN TOÀN" : "RỦI RO CAO"}
                                            </span>
                                        </div>
                                        <p
                                            className={`text-sm ${safetyResult.isSafe ? "text-green-700" : "text-red-700"
                                                }`}
                                        >
                                            {safetyResult.message}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted">Cần vay</span>
                                            <span className="font-semibold">{formatVND(safetyResult.loanAmount)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted">Trả hàng tháng</span>
                                            <span className="font-semibold">{formatVND(safetyResult.monthlyPayment)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted">Tỷ lệ DTI</span>
                                            <span className={`font-bold text-lg ${safetyResult.dti <= 50 ? "text-safe" : "text-danger"}`}>
                                                {safetyResult.dti.toFixed(1)}%
                                            </span>
                                        </div>

                                        {/* DTI bar */}
                                        <div className="mt-2">
                                            <div className="h-4 rounded-full bg-gray-100 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${safetyResult.dti <= 30
                                                            ? "bg-safe"
                                                            : safetyResult.dti <= 50
                                                                ? "bg-warning"
                                                                : "bg-danger"
                                                        }`}
                                                    style={{ width: `${Math.min(safetyResult.dti, 100)}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between mt-1.5 text-xs text-muted">
                                                <span>0% — An toàn</span>
                                                <span className="text-warning font-medium">50%</span>
                                                <span className="text-danger">100% — Nguy hiểm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Empty state */}
                            {!budgetResult && !safetyResult && (
                                <div className="rounded-2xl bg-white border border-dashed border-navy-200 p-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-navy-900 mb-2">
                                        Nhập thông tin để bắt đầu
                                    </h3>
                                    <p className="text-sm text-muted max-w-md mx-auto">
                                        Điền thu nhập và tiết kiệm để tính ngân sách an toàn, hoặc chọn dự án cụ thể để kiểm tra khả năng mua.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
