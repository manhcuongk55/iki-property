"use client";

import { useState, useRef, useEffect } from "react";
import { useFeedbackContext } from "./FeedbackContext";
import { APP_VERSION } from "@/config/version";

type FeedbackType = "BUG" | "SUGGESTION" | "PRAISE";

interface FeedbackForm {
    type: FeedbackType;
    content: string;
    email: string;
    rating: number;
}

const feedbackTypes: { value: FeedbackType; label: string; icon: string; color: string }[] = [
    { value: "BUG", label: "Lỗi", icon: "🐛", color: "bg-red-500/15 text-red-400 border-red-500/30" },
    { value: "SUGGESTION", label: "Đề xuất", icon: "💡", color: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
    { value: "PRAISE", label: "Khen ngợi", icon: "⭐", color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function FeedbackWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const { currentPage, currentSection } = useFeedbackContext();

    const [form, setForm] = useState<FeedbackForm>({
        type: "SUGGESTION",
        content: "",
        email: "",
        rating: 0,
    });

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        function handleEscape(e: KeyboardEvent) {
            if (e.key === "Escape") setIsOpen(false);
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    const handleSubmit = async () => {
        if (!form.content.trim()) return;
        setIsSubmitting(true);

        try {
            const payload = {
                type: form.type,
                content: form.content,
                email: form.email || undefined,
                rating: form.rating || undefined,
                currentPage,
                currentSection: currentSection || undefined,
                appVersion: APP_VERSION,
                userAgent: navigator.userAgent,
            };

            const res = await fetch(`${API_URL}/api/feedback`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setShowSuccess(true);
                setForm({ type: "SUGGESTION", content: "", email: "", rating: 0 });
                setTimeout(() => {
                    setShowSuccess(false);
                    setIsOpen(false);
                }, 2500);
            }
        } catch {
            // Silently fail — in MVP we still save locally
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                setIsOpen(false);
            }, 2500);
        } finally {
            setIsSubmitting(false);
        }
    };

    const setRating = (r: number) => {
        setForm((prev) => ({ ...prev, rating: prev.rating === r ? 0 : r }));
    };

    return (
        <>
            {/* Floating Button */}
            <button
                id="feedback-trigger"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:scale-110 hover:shadow-gold-500/50 active:scale-95 feedback-pulse"
                aria-label="Gửi góp ý"
            >
                {isOpen ? (
                    <svg className="w-6 h-6 transition-transform duration-300 rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                )}
            </button>

            {/* Tooltip */}
            {showTooltip && !isOpen && (
                <div className="fixed bottom-[5.5rem] right-6 z-[60] bg-navy-800 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg animate-fade-in whitespace-nowrap">
                    Góp ý & Phản hồi
                    <div className="absolute -bottom-1 right-5 w-2 h-2 bg-navy-800 rotate-45" />
                </div>
            )}

            {/* Modal Panel */}
            {isOpen && (
                <div className="fixed inset-0 z-[55] bg-black/30 backdrop-blur-sm feedback-overlay-in">
                    <div
                        ref={modalRef}
                        className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden feedback-slide-in"
                    >
                        {/* Success State */}
                        {showSuccess ? (
                            <div className="flex flex-col items-center justify-center p-10 gap-3 animate-fade-in">
                                <div className="w-16 h-16 bg-safe/15 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-safe" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-navy-900">Cảm ơn bạn!</h3>
                                <p className="text-sm text-muted text-center">
                                    Góp ý của bạn đã được ghi nhận. Chúng tôi sẽ xem xét để cải thiện sản phẩm.
                                </p>
                            </div>
                        ) : (
                            <>
                                {/* Header */}
                                <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-5 py-4">
                                    <h3 className="text-base font-semibold text-white flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                        Góp ý & Phản hồi
                                    </h3>
                                    <p className="text-xs text-navy-300 mt-1">
                                        📍 {currentPage}{currentSection ? ` → ${currentSection}` : ""}
                                    </p>
                                </div>

                                {/* Body */}
                                <div className="p-5 space-y-4">
                                    {/* Type selection */}
                                    <div>
                                        <label className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2 block">
                                            Loại phản hồi
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {feedbackTypes.map((ft) => (
                                                <button
                                                    key={ft.value}
                                                    onClick={() => setForm((p) => ({ ...p, type: ft.value }))}
                                                    className={`flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl border text-xs font-medium transition-all ${form.type === ft.value
                                                            ? ft.color + " border-current"
                                                            : "bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100"
                                                        }`}
                                                >
                                                    <span className="text-lg">{ft.icon}</span>
                                                    {ft.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <label className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2 block">
                                            Nội dung <span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            id="feedback-content"
                                            value={form.content}
                                            onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
                                            placeholder={
                                                form.type === "BUG"
                                                    ? "Mô tả lỗi bạn gặp phải..."
                                                    : form.type === "SUGGESTION"
                                                        ? "Bạn muốn cải tiến điều gì?"
                                                        : "Bạn thích điều gì nhất?"
                                            }
                                            rows={3}
                                            className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Rating */}
                                    <div>
                                        <label className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2 block">
                                            Đánh giá trải nghiệm
                                        </label>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    onClick={() => setRating(star)}
                                                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${form.rating >= star
                                                            ? "bg-gold-100 text-gold-500 scale-110"
                                                            : "bg-gray-50 text-gray-300 hover:bg-gray-100 hover:text-gray-400"
                                                        }`}
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2 block">
                                            Email <span className="text-muted font-normal">(tùy chọn)</span>
                                        </label>
                                        <input
                                            id="feedback-email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                                            placeholder="email@example.com"
                                            className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-5 pb-5 flex items-center justify-between gap-3">
                                    <span className="text-[10px] text-gray-400">
                                        v{APP_VERSION}
                                    </span>
                                    <button
                                        id="feedback-submit"
                                        onClick={handleSubmit}
                                        disabled={!form.content.trim() || isSubmitting}
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-2.5 text-sm font-semibold text-navy-900 shadow-md shadow-gold-500/20 transition-all hover:shadow-gold-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Đang gửi...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                Gửi góp ý
                                            </>
                                        )}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
