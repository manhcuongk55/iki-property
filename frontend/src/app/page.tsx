import Link from "next/link";
import Image from "next/image";
import { properties, formatVND, formatUSD } from "@/data/properties";

export default function Home() {
  const featured = properties.slice(0, 3);

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-900 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-sm font-medium text-gold-300">
                  Nền tảng đầu tư BĐS #1 cho Kiều bào
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Đầu tư bất động sản{" "}
                <span className="gradient-text">Việt Nam</span>
                <br />
                từ bất kỳ đâu
              </h1>

              <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-xl">
                Bạn đang làm việc tại Nhật, Hàn, Đài Loan? Tiền tiết kiệm của bạn xứng đáng được đầu tư thông minh. IKI Property giúp bạn tìm, đánh giá và sở hữu BĐS Việt Nam — an toàn, minh bạch.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/25 transition-all hover:shadow-gold-500/40 hover:scale-105"
                >
                  Xem dự án ngay
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Tính khả năng tài chính
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: "500+", label: "Dự án BĐS" },
                  { value: "2,000+", label: "Kiều bào tin tưởng" },
                  { value: "98%", label: "Hài lòng" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-gold-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-navy-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:block relative animate-fade-in-up stagger-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/50 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2670&auto=format&fit=crop"
                  alt="Vietnamese cityscape"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-xl animate-fade-in-up stagger-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-safe/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-safe" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">An toàn tài chính</div>
                    <div className="text-xs text-navy-300">Được kiểm duyệt bởi chuyên gia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why IKI? ─── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
              Tại sao chọn IKI?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
              Đầu tư thông minh, an tâm tuyệt đối
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Chúng tôi hiểu nỗi lo của bạn khi đầu tư từ xa. IKI Property xây dựng giải pháp toàn diện.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "An toàn & Minh bạch",
                desc: "Mọi dự án được kiểm duyệt pháp lý. Sổ hồng rõ ràng. Hợp đồng song ngữ để bạn hiểu từng điều khoản.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Công cụ tài chính thông minh",
                desc: "Tính khả năng vay, kiểm tra an toàn tài chính trước khi mua. Biết chính xác bạn có đủ khả năng hay không.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Mạng lưới Broker uy tín",
                desc: "Đội ngũ môi giới được xác minh, hiểu thị trường địa phương. Hỗ trợ tiếng Việt, Nhật, Hàn.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-xl hover:shadow-navy-100/50 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-50 text-navy-600 mb-5 group-hover:bg-gold-100 group-hover:text-gold-500 transition-colors">
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

      {/* ─── Featured Properties ─── */}
      <section className="py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
                Nổi bật
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
                Dự án đáng chú ý
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-navy-600 font-semibold hover:text-gold-500 transition-colors"
            >
              Xem tất cả
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property) => (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-border transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="rounded-full bg-navy-900/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                      {property.type}
                    </span>
                    {property.expectedRoi && (
                      <span className="rounded-full bg-safe/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                        ROI {property.expectedRoi}%
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy-900 text-lg group-hover:text-gold-500 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-sm text-muted">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-xl font-bold text-navy-900">
                        {formatVND(property.price)}
                      </div>
                      <div className="text-sm text-muted">
                        ≈ {formatUSD(property.price)}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-navy-400 bg-navy-50 px-3 py-1 rounded-full">
                      {property.legalStatus}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Sẵn sàng bắt đầu hành trình đầu tư?
          </h2>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
            Chỉ cần 5 phút để kiểm tra khả năng tài chính của bạn. Hoàn toàn miễn phí.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/25 transition-all hover:shadow-gold-500/40 hover:scale-105"
            >
              Tính ngân sách miễn phí
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
