import Link from "next/link";
import Image from "next/image";
import { newsArticles, getNewsBySlug } from "@/data/news";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return newsArticles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = getNewsBySlug(slug);

    if (!article) {
        notFound();
    }

    // Find related articles
    const related = newsArticles
        .filter((a) => a.slug !== slug && a.category === article.category)
        .slice(0, 2);

    return (
        <>
            {/* Hero */}
            <section className="bg-navy-900 pt-12 pb-0 relative overflow-hidden">
                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-1 text-sm text-navy-300 hover:text-gold-400 transition-colors mb-6"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Quay lại tin tức
                    </Link>

                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium text-white mb-4 ${article.category === "Thị trường" ? "bg-blue-500" :
                            article.category === "Tokenized" ? "bg-purple-500" :
                                article.category === "Pháp lý" ? "bg-yellow-600" :
                                    article.category === "XKLĐ" ? "bg-safe" :
                                        "bg-navy-700"
                        }`}>
                        {article.category}
                    </span>

                    <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                        {article.title}
                    </h1>
                    <p className="mt-4 text-lg text-navy-200">{article.excerpt}</p>

                    <div className="mt-6 flex items-center gap-4 text-sm text-navy-300 pb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-bold text-xs">
                                {article.author.charAt(article.author.length - 1)}
                            </div>
                            <span>{article.author}</span>
                        </div>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>⏱ {article.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Featured image */}
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-0">
                <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-p:text-gray-700 prose-strong:text-navy-900 prose-a:text-gold-500 whitespace-pre-line">
                        {article.content}
                    </div>

                    {/* Tags */}
                    <div className="mt-10 pt-6 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Share */}
                    <div className="mt-6 flex items-center gap-4">
                        <span className="text-sm font-medium text-navy-700">Chia sẻ:</span>
                        <div className="flex gap-2">
                            {["Facebook", "Zalo", "X"].map((social) => (
                                <button
                                    key={social}
                                    className="rounded-full bg-navy-50 px-4 py-2 text-xs font-medium text-navy-600 hover:bg-navy-100 transition-colors"
                                >
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
                <section className="py-12 bg-section-alt">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-6">Bài viết liên quan</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/news/${r.slug}`}
                                    className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-border transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-navy-900 group-hover:text-gold-500 transition-colors line-clamp-2">{r.title}</h3>
                                        <p className="mt-1 text-sm text-muted">{r.date} • {r.readTime}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-12 bg-navy-900">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <p className="text-navy-200 mb-4">Muốn định giá BĐS bằng AI?</p>
                    <Link
                        href="/valuation"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:scale-105"
                    >
                        🤖 Định giá AI miễn phí
                    </Link>
                </div>
            </section>
        </>
    );
}
