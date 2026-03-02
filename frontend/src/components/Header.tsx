"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: "Trang chủ", href: "/" },
        { label: "Bất động sản", href: "/properties" },
        { label: "Tính tài chính", href: "/calculator" },
        { label: "Về chúng tôi", href: "/about" },
    ];

    return (
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
                                className="px-4 py-2 text-sm font-medium text-navy-200 rounded-lg transition-all hover:text-white hover:bg-white/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/calculator"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-lg shadow-gold-500/25 transition-all hover:shadow-gold-500/40 hover:scale-105"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Tính ngân sách
                        </Link>
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
                                    className="px-4 py-3 text-sm font-medium text-navy-200 rounded-lg transition-all hover:text-white hover:bg-white/10"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/calculator"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-3 text-sm font-semibold text-navy-900"
                            >
                                Tính ngân sách
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
