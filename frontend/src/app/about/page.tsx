import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy-900 pt-12 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
                            Về chúng tôi
                        </span>
                        <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight">
                            Giúp người Việt ở nước ngoài{" "}
                            <span className="gradient-text">đầu tư thông minh</span>
                        </h1>
                        <p className="mt-6 text-lg text-navy-200 leading-relaxed">
                            IKI Property ra đời từ một câu hỏi đơn giản: Tại sao người lao động Việt Nam
                            vất vả kiếm tiền ở nước ngoài lại không có kênh đầu tư bất động sản an toàn khi về nước?
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem & Mission */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold text-danger uppercase tracking-wider">
                                Vấn đề
                            </span>
                            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy-900">
                                Hàng triệu người Việt có tiền, nhưng thiếu kênh đầu tư an toàn
                            </h2>
                            <div className="mt-6 space-y-4">
                                {[
                                    "Hơn 500,000 lao động Việt Nam tại Nhật, Hàn, Đài Loan mỗi năm",
                                    "Thu nhập trung bình 25-50 triệu VNĐ/tháng, tích lũy tốt",
                                    "80% muốn đầu tư BĐS về Việt Nam nhưng không biết bắt đầu từ đâu",
                                    "Rủi ro bị lừa đảo khi mua qua trung gian không uy tín",
                                    "Không có công cụ đánh giá tài chính phù hợp cho kiều bào",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
                                            </svg>
                                        </div>
                                        <p className="text-muted">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-safe uppercase tracking-wider">
                                Giải pháp
                            </span>
                            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy-900">
                                IKI Property — Cầu nối đầu tư đáng tin cậy
                            </h2>
                            <div className="mt-6 space-y-4">
                                {[
                                    "Dự án BĐS được thẩm định pháp lý 100%",
                                    "Công cụ tài chính thông minh, tính toán DTI chuẩn quốc tế",
                                    "Mạng lưới broker xác minh danh tính, được đánh giá bởi cộng đồng",
                                    "Hỗ trợ đa ngôn ngữ: Tiếng Việt, Nhật, Hàn",
                                    "Quy trình minh bạch từ tìm hiểu → ký hợp đồng → nhận sổ",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-safe" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-muted">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 bg-section-alt">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
                            Quy trình
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
                            3 bước đầu tư an toàn
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Kiểm tra tài chính",
                                desc: "Nhập thu nhập và tiết kiệm. Hệ thống tính ngân sách an toàn, đề xuất dự án phù hợp khả năng tài chính của bạn.",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                ),
                            },
                            {
                                step: "02",
                                title: "Chọn dự án",
                                desc: "Duyệt các dự án đã được thẩm định. Xem chi tiết pháp lý, ROI kỳ vọng, và đánh giá từ cộng đồng kiều bào.",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                ),
                            },
                            {
                                step: "03",
                                title: "Kết nối Broker",
                                desc: "Được kết nối với broker uy tín, hỗ trợ toàn bộ quy trình từ thương lượng, ký hợp đồng đến nhận sổ.",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="relative rounded-2xl bg-white border border-border p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-sm font-bold text-navy-900 shadow-lg">
                                    {item.step}
                                </div>
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-50 text-navy-600 mb-5 mt-2">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Markets */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy-900">
                            Phục vụ kiều bào toàn cầu
                        </h2>
                        <p className="mt-3 text-muted">
                            Hỗ trợ đa ngôn ngữ và hiểu văn hóa bản địa
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { flag: "🇯🇵", country: "Nhật Bản", workers: "~250,000", avgSave: "~1.2 tỷ/5 năm" },
                            { flag: "🇰🇷", country: "Hàn Quốc", workers: "~90,000", avgSave: "~800 triệu/5 năm" },
                            { flag: "🇹🇼", country: "Đài Loan", workers: "~70,000", avgSave: "~700 triệu/5 năm" },
                            { flag: "🇩🇪", country: "Châu Âu", workers: "~120,000", avgSave: "~1.5 tỷ/5 năm" },
                        ].map((m) => (
                            <div
                                key={m.country}
                                className="rounded-2xl border border-border p-6 text-center transition-all hover:shadow-lg hover:border-gold-200"
                            >
                                <div className="text-4xl mb-3">{m.flag}</div>
                                <h3 className="text-lg font-semibold text-navy-900">{m.country}</h3>
                                <div className="mt-2 text-sm text-muted">
                                    <div>{m.workers} lao động</div>
                                    <div className="font-medium text-gold-500 mt-1">
                                        Tiết kiệm TB: {m.avgSave}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-navy-900">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        Bắt đầu hành trình đầu tư ngay hôm nay
                    </h2>
                    <p className="mt-4 text-navy-200 text-lg">
                        Hoàn toàn miễn phí. Không cần đăng ký.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/calculator"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/25 transition-all hover:shadow-gold-500/40 hover:scale-105"
                        >
                            Kiểm tra tài chính miễn phí
                        </Link>
                        <Link
                            href="/properties"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
                        >
                            Xem dự án BĐS
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
