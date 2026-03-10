"use client";

import { useState } from "react";
import Link from "next/link";
import {
    runValuation,
    CITIES,
    getDistricts,
    PROPERTY_TYPES_VALUATION,
    type ValuationInput,
    type ValuationResult,
} from "@/data/valuation";
import { formatVND, formatUSD } from "@/data/properties";

export default function ValuationPage() {
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [area, setArea] = useState("");
    const [frontWidth, setFrontWidth] = useState("");
    const [result, setResult] = useState<ValuationResult | null>(null);
    const [history, setHistory] = useState<ValuationResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const districts = city ? getDistricts(city) : [];

    const handleValuation = async () => {
        if (!city || !district || !propertyType || !area) return;
        setLoading(true);
        setFeedbackSent(false);

        // Simulate AI processing delay
        await new Promise((r) => setTimeout(r, 1500 + Math.random() * 1500));

        const input: ValuationInput = {
            address: address || `${district}, ${city}`,
            district,
            city,
            propertyType,
            area: Number(area),
            frontWidth: frontWidth ? Number(frontWidth) : undefined,
        };

        const val = runValuation(input);
        setResult(val);
        setHistory((prev) => [val, ...prev].slice(0, 10));
        setLoading(false);
    };

    return (
        <>
            {/* Header */}
            <section className="bg-navy-900 pt-12 pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-safe/15 px-4 py-1.5 mb-4">
                        <span className="w-2 h-2 rounded-full bg-safe animate-pulse" />
                        <span className="text-sm font-medium text-green-300">
                            VIVA AI Engine v1.0
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-white">
                        AI Định giá <span className="gradient-text">bất động sản</span>
                    </h1>
                    <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
                        Nhập thông tin BĐS — AI phân tích giá thị trường, xu hướng, và so sánh với các giao dịch gần đây trong 30 giây
                    </p>
                </div>
            </section>

            <section className="py-12 bg-section-alt">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* ─── Input Panel (2 cols) ─── */}
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl bg-white border border-border p-6 shadow-sm sticky top-24">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-bold text-navy-900">Thông tin BĐS</h2>
                                </div>

                                <div className="space-y-4">
                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Tỉnh/Thành phố *
                                        </label>
                                        <select
                                            value={city}
                                            onChange={(e) => { setCity(e.target.value); setDistrict(""); }}
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                                        >
                                            <option value="">Chọn tỉnh/thành...</option>
                                            {CITIES.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* District */}
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Quận/Huyện *
                                        </label>
                                        <select
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)}
                                            disabled={!city}
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white disabled:opacity-50"
                                        >
                                            <option value="">Chọn quận/huyện...</option>
                                            {districts.map((d) => (
                                                <option key={d} value={d}>{d}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Địa chỉ cụ thể
                                        </label>
                                        <input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="VD: Số 10, Ngõ 5, Phố Trần Duy Hưng"
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                                        />
                                    </div>

                                    {/* Property Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Loại hình BĐS *
                                        </label>
                                        <select
                                            value={propertyType}
                                            onChange={(e) => setPropertyType(e.target.value)}
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                                        >
                                            <option value="">Chọn loại...</option>
                                            {PROPERTY_TYPES_VALUATION.map((t) => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Area */}
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Diện tích (m²) *
                                        </label>
                                        <input
                                            type="number"
                                            value={area}
                                            onChange={(e) => setArea(e.target.value)}
                                            placeholder="VD: 100"
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                                        />
                                    </div>

                                    {/* Front width */}
                                    <div>
                                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                                            Mặt tiền (m) <span className="text-muted font-normal">— tùy chọn</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={frontWidth}
                                            onChange={(e) => setFrontWidth(e.target.value)}
                                            placeholder="VD: 5"
                                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        onClick={handleValuation}
                                        disabled={!city || !district || !propertyType || !area || loading}
                                        className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-4 text-sm font-bold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:shadow-gold-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {loading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                AI đang phân tích...
                                            </span>
                                        ) : (
                                            "🤖 Định giá bằng AI"
                                        )}
                                    </button>
                                </div>

                                {/* History toggle */}
                                {history.length > 0 && (
                                    <button
                                        onClick={() => setShowHistory(!showHistory)}
                                        className="mt-4 w-full text-center text-sm text-navy-500 hover:text-gold-500 transition-colors"
                                    >
                                        📋 Lịch sử định giá ({history.length})
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* ─── Results Panel (3 cols) ─── */}
                        <div className="lg:col-span-3 space-y-6">
                            {/* Loading state */}
                            {loading && (
                                <div className="rounded-2xl bg-white border border-border p-12 text-center animate-pulse">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-gold-500 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-900">VIVA AI đang phân tích...</h3>
                                    <p className="mt-2 text-muted">Thu thập dữ liệu thị trường • So sánh giao dịch • Đánh giá xu hướng</p>
                                </div>
                            )}

                            {/* Result */}
                            {result && !loading && (
                                <>
                                    {/* Price Card */}
                                    <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 shadow-xl animate-fade-in-up">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">🤖</span>
                                                <span className="text-sm font-semibold text-navy-200">VIVA AI Định giá</span>
                                            </div>
                                            <div className="flex items-center gap-2 rounded-full bg-safe/15 px-3 py-1">
                                                <span className="w-2 h-2 rounded-full bg-safe" />
                                                <span className="text-sm font-medium text-green-300">
                                                    Độ tin cậy {result.confidence}%
                                                </span>
                                            </div>
                                        </div>

                                        {/* Main price */}
                                        <div className="text-center mb-6">
                                            <div className="text-sm text-navy-300 mb-2">Giá ước tính</div>
                                            <div className="text-4xl sm:text-5xl font-bold text-gold-400">
                                                {formatVND(result.priceEstimate)}
                                            </div>
                                            <div className="text-lg text-navy-300 mt-1">
                                                ≈ {formatUSD(result.priceEstimate)}
                                            </div>
                                        </div>

                                        {/* Price range */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="rounded-xl bg-white/5 p-4 text-center">
                                                <div className="text-xs text-navy-400 mb-1">Thấp nhất</div>
                                                <div className="text-lg font-bold text-white">{formatVND(result.priceMin)}</div>
                                            </div>
                                            <div className="rounded-xl bg-gold-500/15 p-4 text-center border border-gold-500/30">
                                                <div className="text-xs text-gold-300 mb-1">Ước tính</div>
                                                <div className="text-lg font-bold text-gold-400">{formatVND(result.priceEstimate)}</div>
                                            </div>
                                            <div className="rounded-xl bg-white/5 p-4 text-center">
                                                <div className="text-xs text-navy-400 mb-1">Cao nhất</div>
                                                <div className="text-lg font-bold text-white">{formatVND(result.priceMax)}</div>
                                            </div>
                                        </div>

                                        {/* Price per m2 + trend */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-xl bg-white/5 p-4">
                                                <div className="text-xs text-navy-400 mb-1">Giá / m²</div>
                                                <div className="text-lg font-bold text-white">
                                                    {(result.pricePerM2 / 1_000_000).toFixed(1)} tr/m²
                                                </div>
                                            </div>
                                            <div className="rounded-xl bg-white/5 p-4">
                                                <div className="text-xs text-navy-400 mb-1">Xu hướng {result.trend.period}</div>
                                                <div className={`text-lg font-bold flex items-center gap-1 ${result.trend.direction === "up" ? "text-safe" : result.trend.direction === "down" ? "text-danger" : "text-warning"}`}>
                                                    {result.trend.direction === "up" ? "📈" : result.trend.direction === "down" ? "📉" : "➡️"}
                                                    {result.trend.direction === "up" ? "+" : ""}{result.trend.changePercent}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Factors */}
                                    <div className="rounded-2xl bg-white border border-border p-6 shadow-sm animate-fade-in-up">
                                        <h3 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                                            <span className="text-xl">📊</span> Yếu tố ảnh hưởng giá
                                        </h3>
                                        <div className="space-y-3">
                                            {result.factors.map((factor) => (
                                                <div key={factor.name} className="flex items-start gap-3 p-3 rounded-xl bg-navy-50 hover:bg-navy-100 transition-colors">
                                                    <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${factor.impact === "positive" ? "bg-green-100 text-safe" : factor.impact === "negative" ? "bg-red-100 text-danger" : "bg-navy-100 text-navy-500"}`}>
                                                        {factor.impact === "positive" ? "↑" : factor.impact === "negative" ? "↓" : "—"}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-semibold text-navy-900">{factor.name}</span>
                                                            <span className="text-xs text-muted">{factor.weight}%</span>
                                                        </div>
                                                        <p className="text-xs text-muted mt-0.5">{factor.description}</p>
                                                        <div className="mt-1.5 h-1.5 rounded-full bg-navy-200 overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full transition-all duration-1000 ${factor.impact === "positive" ? "bg-safe" : factor.impact === "negative" ? "bg-danger" : "bg-navy-400"}`}
                                                                style={{ width: `${factor.weight}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Comparable */}
                                    <div className="rounded-2xl bg-white border border-border p-6 shadow-sm animate-fade-in-up">
                                        <h3 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                                            <span className="text-xl">🏘️</span> Giao dịch tham chiếu
                                        </h3>
                                        <div className="space-y-3">
                                            {result.comparables.map((comp, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-navy-50">
                                                    <div>
                                                        <div className="text-sm font-medium text-navy-900">{comp.address}</div>
                                                        <div className="text-xs text-muted mt-0.5">
                                                            {comp.area}m² • Cách {comp.distance} • Bán {comp.soldDate}
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-sm font-bold text-navy-900">{formatVND(comp.price)}</div>
                                                        <div className="text-xs text-muted">{(comp.price / comp.area / 1_000_000).toFixed(1)} tr/m²</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Feedback */}
                                    <div className="rounded-2xl bg-white border border-border p-6 shadow-sm animate-fade-in-up">
                                        <h3 className="text-lg font-bold text-navy-900 mb-2 flex items-center gap-2">
                                            <span className="text-xl">💬</span> Phản hồi kết quả
                                        </h3>
                                        <p className="text-sm text-muted mb-4">
                                            Giúp VIVA AI cải thiện độ chính xác bằng cách đánh giá kết quả định giá
                                        </p>
                                        {feedbackSent ? (
                                            <div className="rounded-xl bg-green-50 p-4 text-center">
                                                <span className="text-safe font-semibold">✅ Cảm ơn! Phản hồi của bạn đã được ghi nhận.</span>
                                            </div>
                                        ) : (
                                            <div className="flex gap-3">
                                                {["Chính xác", "Hơi cao", "Hơi thấp", "Sai nhiều"].map((fb) => (
                                                    <button
                                                        key={fb}
                                                        onClick={() => setFeedbackSent(true)}
                                                        className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all hover:scale-105 ${fb === "Chính xác"
                                                                ? "bg-green-50 text-safe hover:bg-green-100 border border-green-200"
                                                                : fb === "Sai nhiều"
                                                                    ? "bg-red-50 text-danger hover:bg-red-100 border border-red-200"
                                                                    : "bg-navy-50 text-navy-600 hover:bg-navy-100 border border-border"
                                                            }`}
                                                    >
                                                        {fb}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <div className="rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 p-6 text-center">
                                        <p className="text-navy-200 mb-4">
                                            Muốn đầu tư BĐS khu vực này? Xem danh sách đất nền 1-2 tỷ tokenized
                                        </p>
                                        <Link
                                            href="/campaign"
                                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3 text-sm font-bold text-navy-900 shadow-lg transition-all hover:scale-105"
                                        >
                                            🔥 Xem đất nền tokenized
                                        </Link>
                                    </div>
                                </>
                            )}

                            {/* History panel */}
                            {showHistory && history.length > 0 && (
                                <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-navy-900 mb-4">📋 Lịch sử định giá</h3>
                                    <div className="space-y-2">
                                        {history.map((h) => (
                                            <button
                                                key={h.id}
                                                onClick={() => { setResult(h); setShowHistory(false); }}
                                                className="w-full flex items-center justify-between p-3 rounded-xl bg-navy-50 hover:bg-navy-100 transition-colors text-left"
                                            >
                                                <div>
                                                    <div className="text-sm font-medium text-navy-900">
                                                        {h.input.district}, {h.input.city}
                                                    </div>
                                                    <div className="text-xs text-muted">
                                                        {h.input.propertyType} • {h.input.area}m² • {new Date(h.timestamp).toLocaleString("vi-VN")}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-sm font-bold text-gold-500">{formatVND(h.priceEstimate)}</div>
                                                    <div className="text-xs text-muted">Tin cậy {h.confidence}%</div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Empty state */}
                            {!result && !loading && (
                                <div className="rounded-2xl bg-white border border-dashed border-navy-200 p-16 text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl">🤖</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                                        VIVA AI sẵn sàng định giá
                                    </h3>
                                    <p className="text-muted max-w-md mx-auto mb-6">
                                        Nhập thông tin bất động sản ở bên trái để AI phân tích giá thị trường, xu hướng tăng giá, và so sánh với các giao dịch tương tự.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {["8 tỉnh thành", "40+ quận huyện", "6 loại BĐS", "AI cập nhật 2026"].map((tag) => (
                                            <span key={tag} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
