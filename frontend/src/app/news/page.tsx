"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { newsArticles, NEWS_CATEGORIES, getNewsByCategory } from "@/data/news";

export default function NewsPage() {
    const [category, setCategory] = useState("Tất cả");
    const filtered = getNewsByCategory(category);

    return (
        <>
            {/* Header */}
            <section className="bg-navy-900 pt-12 pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
                            Tin tức thị trường
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                            Tin tức & Phân tích BĐS
                        </h1>
                        <p className="mt-3 text-lg text-navy-200 max-w-2xl mx-auto">
                            Cập nhật xu hướng thị trường, phân tích AI, và kiến thức đầu tư dành cho kiều bào
                        </p>
                    </div>

                    {/* Category filter */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                        {NEWS_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${category === cat
                                        ? "bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/25"
                                        : "bg-white/10 text-navy-200 hover:bg-white/20"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-12 bg-section-alt">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-sm text-muted">
                        {filtered.length} bài viết
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/news/${article.slug}`}
                                className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-border transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`rounded-full px-3 py-1 text-xs font-medium text-white ${article.category === "Thị trường" ? "bg-blue-500" :
                                                article.category === "Tokenized" ? "bg-purple-500" :
                                                    article.category === "Pháp lý" ? "bg-yellow-600" :
                                                        article.category === "XKLĐ" ? "bg-safe" :
                                                            "bg-navy-700"
                                            }`}>
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-semibold text-navy-900 text-lg leading-snug group-hover:text-gold-500 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 font-bold text-[10px]">
                                                {article.author.charAt(article.author.length - 1)}
                                            </div>
                                            {article.author}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span>{article.date}</span>
                                            <span>• {article.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-navy-900">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        📩 Nhận phân tích AI hàng tuần
                    </h2>
                    <p className="mt-3 text-navy-200">
                        Cập nhật xu hướng giá, cơ hội đầu tư, và phân tích AI mới nhất về thị trường BĐS Việt Nam
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Email của bạn..."
                            className="flex-1 rounded-xl px-4 py-3 text-sm bg-white/10 border border-white/20 text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
                        />
                        <button className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:scale-105">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
