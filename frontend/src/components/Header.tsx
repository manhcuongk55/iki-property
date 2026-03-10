"use client";
import Link from "next/link";
import { useState } from "react";
import LeadModal from "@/components/LeadModal";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    const navLinks = [
        { label: "Trang chủ", href: "/" },
        { label: "Đất nền 1-2 Tỷ", href: "/campaign", highlight: true },
        { label: "🤖 Định giá AI", href: "/valuation", highlight: false },
        { label: "Bản đồ", href: "/map" },
        { label: "Bất động sản", href: "/properties" },
        { label: "Tin tức", href: "/news" },
        { label: "💬 Chat", href: "/chat" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-300 text-navy-900 font-bold text-lg transition-transform group-hover:scale-105">
                                IK
                            </div>
                            <span className="text-lg font-semibold text-white tracking-tight">
                                IKI <span className="text-gold-400">Property</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${link.highlight
                                        ? "text-safe bg-safe/10 hover:bg-safe/20 font-semibold"
                                        : "text-navy-200 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.highlight && "🔥 "}{link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <button
                                onClick={() => setIsLeadModalOpen(true)}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-safe to-green-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-safe/25 transition-all hover:shadow-safe/40 hover:scale-105"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Tư vấn FREE
                            </button>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-navy-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    {mobileOpen && (
                        <div className="md:hidden pb-4 animate-fade-in">
                            <nav className="flex flex-col gap-1 mt-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${link.highlight
                                            ? "text-safe bg-safe/10 font-semibold"
                                            : "text-navy-200 hover:text-white hover:bg-white/10"
                                            }`}
                                    >
                                        {link.highlight && "🔥 "}{link.label}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setIsLeadModalOpen(true);
                                    }}
                                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-safe to-green-400 px-5 py-3 text-sm font-bold text-white w-full"
                                >
                                    Tư vấn FREE
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            <LeadModal
                isOpen={isLeadModalOpen}
                onClose={() => setIsLeadModalOpen(false)}
                source="Navigation Header"
            />
        </>
    );
}
