import Link from "next/link";
import Image from "next/image";
import { getCampaignProperties, formatVND, formatUSD } from "@/data/properties";
import LeadCTA from "@/components/LeadCTA";

export const metadata = {
    title: "Đất nền 1-2 Tỷ Tokenized — Yield thực tế, không cần xem đất | IKI Property",
    description:
        "Đầu tư đất nền từ 600 triệu đến 2 tỷ VNĐ. Token hóa BĐS — sở hữu từ 10 triệu/token. Dành cho XKLĐ Nhật-Hàn & người trẻ Việt Nam. Pháp lý 7 lớp xác minh, yield 8-16%/năm.",
};

export default function CampaignPage() {
    const campaignProperties = getCampaignProperties();

    return (
        <>
            {/* ─── Hero Section ─── */}
            <section className="relative min-h-[85vh] flex items-center bg-navy-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gold-500/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-safe/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400/30 rounded-full animate-float" />
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold-300/20 rounded-full animate-float-delayed" />
                    <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-safe/30 rounded-full animate-float" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-safe/15 px-5 py-2 mb-8">
                            <span className="w-2.5 h-2.5 rounded-full bg-safe animate-pulse" />
                            <span className="text-sm font-semibold text-green-300 tracking-wide">
                                🔥 3 lô bán trong 1 ngày — Không cần xem đất
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                            Có{" "}
                            <span className="gradient-text">1-2 Tỷ?</span>
                            <br />
                            <span className="text-3xl sm:text-4xl lg:text-5xl">
                                Đầu tư đất nền tokenized
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-navy-200 leading-relaxed max-w-2xl mx-auto">
                            Yield thực tế 8-16%/năm • Pháp lý 7 lớp xác minh AI •
                            Sở hữu từ 10 triệu/token • Dành cho XKLĐ Nhật-Hàn & người trẻ Việt Nam
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#listings"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-base font-bold text-navy-900 shadow-lg shadow-gold-500/25 transition-all hover:shadow-gold-500/40 hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                Xem đất nền ngay
                            </Link>
                            <LeadCTA
                                text="Tư vấn FREE qua Zalo"
                                source="Campaign Hero"
                                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-safe/40 px-8 py-4 text-base font-semibold text-safe transition-all hover:bg-safe/10 hover:border-safe/60"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Stats Bar ─── */}
            <section className="bg-navy-800 border-y border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "3 lô/ngày", label: "Tốc độ bán", icon: "🚀" },
                            { value: "92%", label: "Người Việt muốn mua BĐS", icon: "📊" },
                            { value: "7 lớp", label: "Xác minh pháp lý AI", icon: "🛡️" },
                            { value: "8-16%", label: "Yield/năm", icon: "💰" },
                        ].map((stat) => (
                            <div key={stat.label} className="group">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl sm:text-2xl font-bold text-gold-400 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-navy-300 mt-0.5">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 3-Step Process ─── */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
                            Quy trình đơn giản
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
                            3 bước sở hữu đất nền từ xa
                        </h2>
                        <p className="mt-3 text-muted max-w-xl mx-auto">
                            Không cần bay về Việt Nam. Mọi thứ online, minh bạch, an toàn.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Xem listing + Video Drone 360°",
                                desc: "Duyệt đất nền trên app. Xem video drone bay qua lô đất, overlay pháp lý, sổ đỏ scan. AI phân tích ROI tự động.",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                ),
                                color: "from-blue-500 to-blue-400",
                            },
                            {
                                step: "02",
                                title: "AI phân tích 7 lớp pháp lý",
                                desc: "Basao AI xác minh: chủ sở hữu, quy hoạch, tranh chấp, giá thị trường, lịch sử giao dịch. Kết quả trong 30 giây.",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                color: "from-safe to-green-400",
                            },
                            {
                                step: "03",
                                title: "Cọc qua Ví An Toàn — Ký online",
                                desc: "Chuyển cọc qua Ví Cọc An Toàn (escrow 7 lớp). Ký hợp đồng điện tử. Tiền chỉ giải ngân khi mọi điều kiện đạt.",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                ),
                                color: "from-gold-500 to-gold-400",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="relative rounded-2xl bg-white border border-border p-8 text-center transition-all hover:shadow-xl hover:-translate-y-2 group"
                            >
                                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                                    {item.step}
                                </div>
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-50 text-navy-600 mb-5 mt-3 group-hover:bg-gold-100 group-hover:text-gold-600 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-navy-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Featured Đất nền Listings ─── */}
            <section id="listings" className="py-20 bg-section-alt scroll-mt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-sm font-semibold text-safe uppercase tracking-wider">
                                🔥 Hot nhất
                            </span>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
                                Đất nền 1-2 Tỷ — Tokenized
                            </h2>
                            <p className="mt-2 text-muted max-w-lg">
                                Sổ đỏ chính chủ, pháp lý AI 7 lớp, sở hữu từ 10 triệu/token
                            </p>
                        </div>
                        <Link
                            href="/properties"
                            className="inline-flex items-center gap-2 text-navy-600 font-semibold hover:text-gold-500 transition-colors"
                        >
                            Xem tất cả BĐS
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {campaignProperties.map((property) => (
                            <Link
                                key={property.id}
                                href={`/properties/${property.id}`}
                                className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-border transition-all hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={property.images[0]}
                                        alt={property.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-navy-900/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                                            {property.type}
                                        </span>
                                        {property.isTokenized && (
                                            <span className="rounded-full tokenized-badge px-3 py-1 text-xs font-bold text-white">
                                                🪙 Tokenized
                                            </span>
                                        )}
                                        {property.expectedRoi && (
                                            <span className="rounded-full bg-safe/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                                                ROI {property.expectedRoi}%
                                            </span>
                                        )}
                                    </div>
                                    {property.area && (
                                        <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-navy-900">
                                            📐 {property.area}
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-navy-900 text-lg group-hover:text-gold-500 transition-colors">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-center gap-1.5 mt-2 text-sm text-muted">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {property.location}
                                    </div>

                                    {/* Token info */}
                                    {property.tokenInfo && (
                                        <div className="mt-3 rounded-xl bg-navy-50 p-3">
                                            <div className="flex items-center justify-between text-xs text-navy-600 mb-2">
                                                <span>Token: {formatVND(property.tokenInfo.tokenPrice)}/token</span>
                                                <span className="font-bold text-safe">
                                                    Yield {property.tokenInfo.yieldPercent}%/năm
                                                </span>
                                            </div>
                                            <div className="h-2 rounded-full bg-navy-200 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-1000"
                                                    style={{
                                                        width: `${(property.tokenInfo.soldTokens / property.tokenInfo.totalTokens) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                            <div className="flex justify-between mt-1.5 text-xs text-navy-400">
                                                <span>Đã bán: {property.tokenInfo.soldTokens}/{property.tokenInfo.totalTokens}</span>
                                                <span>{Math.round((property.tokenInfo.soldTokens / property.tokenInfo.totalTokens) * 100)}%</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-4 pt-4 border-t border-border flex items-end justify-between">
                                        <div>
                                            <div className="text-xl font-bold text-navy-900">
                                                {formatVND(property.price)}
                                            </div>
                                            <div className="text-sm text-muted">
                                                ≈ {formatUSD(property.price)}
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-safe bg-green-50 px-3 py-1 rounded-full">
                                            ✅ {property.legalStatus}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Tokenized Explainer ─── */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
                                Token hóa BĐS
                            </span>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
                                Sở hữu đất nền từ <span className="gradient-text">10 triệu</span>
                            </h2>
                            <p className="mt-4 text-lg text-muted leading-relaxed">
                                Token hóa bất động sản chia nhỏ lô đất thành các token kỹ thuật số.
                                Mỗi token đại diện quyền sở hữu một phần tài sản thực.
                            </p>

                            <div className="mt-8 space-y-5">
                                {[
                                    {
                                        icon: "🪙",
                                        title: "Sở hữu phần nhỏ",
                                        desc: "Lô đất 1.5 tỷ = 150 token × 10 triệu. Mua 1 token = sở hữu 1/150 lô đất.",
                                    },
                                    {
                                        icon: "💰",
                                        title: "Yield hàng tháng",
                                        desc: "Đất cho thuê → thu nhập chia theo tỷ lệ token. Yield 8-16%/năm trả qua smart contract.",
                                    },
                                    {
                                        icon: "📈",
                                        title: "Tăng giá tài sản",
                                        desc: "Đất nền vùng ven tăng 15-25%/năm. Token tăng giá tương ứng, bán lại trên marketplace.",
                                    },
                                    {
                                        icon: "🔐",
                                        title: "An toàn tuyệt đối",
                                        desc: "Mỗi lô đất tokenized được xác minh 7 lớp bởi Basao AI. Sổ đỏ lưu trữ blockchain.",
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-navy-900">{item.title}</h3>
                                            <p className="text-sm text-muted mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual diagram */}
                        <div className="relative">
                            <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 shadow-2xl">
                                <h3 className="text-lg font-bold text-white mb-6 text-center">
                                    Ví dụ: Lô đất 1.5 tỷ — Hòa Vang
                                </h3>

                                {/* Asset */}
                                <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5 mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-lg">🏗️</div>
                                        <div>
                                            <div className="text-white font-semibold">Tài sản thực</div>
                                            <div className="text-navy-300 text-sm">120m² • Sổ đỏ • Hòa Vang</div>
                                        </div>
                                    </div>
                                    <div className="text-center text-gold-400 font-bold text-2xl">1.5 tỷ VNĐ</div>
                                </div>

                                {/* Arrow */}
                                <div className="text-center text-navy-400 my-2">
                                    <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>

                                {/* Tokens */}
                                <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5 mb-4">
                                    <div className="text-center mb-3">
                                        <span className="text-white font-bold">150 Tokens</span>
                                        <span className="text-navy-300 text-sm ml-2">× 10 triệu/token</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-1.5">
                                        {Array.from({ length: 15 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-6 rounded ${i < 5 ? "bg-gold-400" : i < 8 ? "bg-gold-400/50" : "bg-white/10"}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-navy-300">
                                        <span>Đã bán 53%</span>
                                        <span>Còn 71 tokens</span>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="text-center text-navy-400 my-2">
                                    <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>

                                {/* Yield */}
                                <div className="rounded-2xl bg-safe/15 backdrop-blur-sm border border-safe/20 p-5">
                                    <div className="text-center">
                                        <div className="text-safe font-bold text-xl">
                                            Yield 12%/năm
                                        </div>
                                        <div className="text-navy-300 text-sm mt-1">
                                            = 1.2 triệu/token/năm = 100K/tháng/token
                                        </div>
                                        <div className="mt-3 text-white text-sm font-medium">
                                            Mua 10 tokens (100tr) → Thu 1 triệu/tháng 💰
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Social Proof ─── */}
            <section className="py-20 bg-section-alt">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
                            Proof of Concept
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
                            Kết quả thực tế
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Tôi mua 3 lô đất nền ở Kinh Môn chỉ qua online. Video drone + sổ đỏ scan + AI check pháp lý — đủ tin tưởng để cọc ngay. Về nước kiểm tra thực tế, đúng 100%.",
                                name: "Anh Minh N.",
                                role: "Kỹ sư IT tại Tokyo, Nhật Bản",
                                emoji: "🇯🇵",
                            },
                            {
                                quote: "Lương tháng 35 triệu ở Hàn, gửi bank chỉ 6%/năm. Chuyển sang đất nền tokenized yield 14% — gấp đôi! Quan trọng là pháp lý 7 lớp cho mình yên tâm.",
                                name: "Chị Hương T.",
                                role: "Công nhân điện tử tại Seoul, Hàn Quốc",
                                emoji: "🇰🇷",
                            },
                            {
                                quote: "Mình là CEO startup qua vườn ươm IKIGAI. Dùng Quantara tokenized mua 20 token (200 triệu) — thu 280K/tháng passive income. Vừa khởi nghiệp vừa đầu tư.",
                                name: "Anh Dũng P.",
                                role: "CEO trẻ, 28 tuổi, Hà Nội",
                                emoji: "🇻🇳",
                            },
                        ].map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="rounded-2xl bg-white border border-border p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-muted leading-relaxed text-sm italic">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className="mt-5 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-lg">
                                        {testimonial.emoji}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-navy-900 text-sm">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-xs text-muted">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Target Audience ─── */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
                            Dành cho ai?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                emoji: "🇯🇵🇰🇷",
                                title: "XKLĐ Nhật-Hàn",
                                points: [
                                    "Lương 25-50 triệu/tháng, tích lũy cao",
                                    "Muốn mua đất VN mà không cần về nước",
                                    "Ưu tiên pháp lý rõ, giao dịch online",
                                ],
                                cta: "Vào group XKLĐ",
                            },
                            {
                                emoji: "👨‍💼",
                                title: "CEO trẻ / Startup",
                                points: [
                                    "Thu nhập tăng nhanh, muốn đầu tư sớm",
                                    "Từ vườn ươm IKIGAI, Quantara launchpad",
                                    "Ưu tiên tokenized (entry-level từ 10 triệu)",
                                ],
                                cta: "Tham gia vườn ươm",
                            },
                            {
                                emoji: "🏙️",
                                title: "Người trẻ đô thị",
                                points: [
                                    "20-50 triệu/tháng tại HN, HCM, Đà Nẵng",
                                    "Muốn tích sản, không phụ thuộc ngân hàng",
                                    "Ưu tiên đất nền vùng ven 1-2 tỷ",
                                ],
                                cta: "Tính khả năng mua",
                            },
                        ].map((group) => (
                            <div
                                key={group.title}
                                className="rounded-2xl border-2 border-border p-8 text-center hover:border-gold-300 transition-all hover:shadow-lg group"
                            >
                                <div className="text-4xl mb-4">{group.emoji}</div>
                                <h3 className="text-xl font-bold text-navy-900 mb-4">
                                    {group.title}
                                </h3>
                                <ul className="space-y-2 text-left mb-6">
                                    {group.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-sm text-muted">
                                            <svg className="w-4 h-4 text-safe shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={group.title.includes("CEO") ? "/about" : group.title.includes("đô thị") ? "/calculator" : "#listings"}
                                    className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-5 py-2.5 text-sm font-semibold text-navy-700 group-hover:bg-gold-100 group-hover:text-gold-700 transition-colors"
                                >
                                    {group.cta} →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Zalo + TikTok CTA ─── */}
            <section className="py-16 bg-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-safe/5 rounded-full blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Tham gia cộng đồng đầu tư
                    </h2>
                    <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
                        Cập nhật lô đất mới, AI insight khu vực hot, và cơ hội presale độc quyền
                    </p>

                    <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                        <a
                            href="https://zalo.me/g/campaign-xkld"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 rounded-2xl bg-blue-500 px-6 py-4 text-white font-semibold transition-all hover:bg-blue-400 hover:scale-105 shadow-lg"
                        >
                            <span className="text-2xl">💬</span>
                            <div className="text-left">
                                <div className="text-sm font-bold">Zalo Group</div>
                                <div className="text-xs opacity-80">Đất nền 1-2 Tỷ XKLĐ</div>
                            </div>
                        </a>
                        <a
                            href="https://tiktok.com/@ikiproperty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-4 text-white font-semibold transition-all hover:scale-105 shadow-lg"
                        >
                            <span className="text-2xl">🎵</span>
                            <div className="text-left">
                                <div className="text-sm font-bold">TikTok</div>
                                <div className="text-xs opacity-80">@ikiproperty • Video mua đất</div>
                            </div>
                        </a>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/calculator"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-base font-bold text-navy-900 shadow-lg shadow-gold-500/25 transition-all hover:shadow-gold-500/40 hover:scale-105"
                        >
                            Tính khả năng tài chính miễn phí
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Floating CTA ─── */}
            <div className="fixed bottom-6 right-6 z-50 animate-float">
                <LeadCTA
                    text="Tư vấn FREE"
                    source="Campaign Floating CTA"
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-safe to-green-400 px-5 py-3 text-white font-bold shadow-xl shadow-safe/30 transition-all hover:scale-110 hover:shadow-safe/50"
                />
            </div>
        </>
    );
}
