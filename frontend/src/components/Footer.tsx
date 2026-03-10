import Link from "next/link";
import { VERSION_LABEL } from "@/config/version";

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-navy-200 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-300 text-navy-900 font-bold text-sm">
                                IK
                            </div>
                            <span className="text-base font-semibold text-white">
                                IKI <span className="text-gold-400">Property</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-navy-300">
                            Nền tảng đầu tư bất động sản Việt Nam dành cho XKLĐ Nhật-Hàn & người trẻ. An toàn, minh bạch, tokenized.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                            Khám phá
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: "🔥 Đất nền 1-2 Tỷ", href: "/campaign" },
                                { label: "🤖 Định giá AI", href: "/valuation" },
                                { label: "Bản đồ BĐS", href: "/map" },
                                { label: "Bất động sản", href: "/properties" },
                                { label: "Tin tức", href: "/news" },
                                { label: "💬 Chat", href: "/chat" },
                                { label: "Tính tài chính", href: "/calculator" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                            Loại BĐS
                        </h4>
                        <ul className="space-y-2">
                            {["Đất nền", "Căn hộ", "Biệt thự", "Shophouse", "Căn hộ áp mái"].map((type) => (
                                <li key={type}>
                                    <span className="text-sm text-navy-300">{type}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                            Liên hệ
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-navy-300">
                                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                contact@ikiproperty.com
                            </li>
                            <li className="flex items-center gap-2 text-sm text-navy-300">
                                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +84 901 234 567
                            </li>
                            <li>
                                <a
                                    href="https://zalo.me/g/campaign-xkld"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-safe hover:text-green-300 transition-colors font-medium"
                                >
                                    💬 Zalo: Tư vấn đất nền XKLĐ
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-navy-300">
                                <svg className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Tầng 12, Tòa nhà Landmark, Quận 1, TP.HCM
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-navy-400">
                        © 2026 IKI Property. All rights reserved. · <span className="text-navy-500">{VERSION_LABEL}</span>
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-navy-400">
                            Hỗ trợ: 🇻🇳 🇯🇵 🇰🇷 🇹🇼
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
