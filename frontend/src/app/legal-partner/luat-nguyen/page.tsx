import Link from "next/link";
import Image from "next/image";
import LeadCTA from "@/components/LeadCTA";

export const metadata = {
    title: "Luật Nguyễn Group — Đối tác Pháp lý & Tài chính V.I.P | IKI Property",
    description: "Tư vấn tài chính, vay vốn trong/ngoài nước, thừa kế, dự án, tài trợ vốn, tái cấu trúc doanh nghiệp và tư vấn BĐS chuyên sâu.",
};

export default function LuatNguyenPartnerPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* ─── Premium Hero Section ─── */}
            <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

                {/* Accent lights for a premium law firm feel */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 mb-6">
                                <span className="text-xl">⚖️</span>
                                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                                    Đối tác Chiến lược IKI Property
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Đoạn tuyệt rủi ro, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-200">
                                    Bảo chứng tài chính.
                                </span>
                            </h1>

                            <p className="text-lg text-navy-200 leading-relaxed max-w-xl mb-8">
                                <strong className="text-white">Luật Nguyễn Group</strong> — Top công ty luật uy tín xử lý hồ sơ vay vốn dạng khó, tranh chấp phức tạp và cung cấp hệ sinh thái tài chính, tái cấu trúc doanh nghiệp toàn diện.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://app.mycard.asia/u/18"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-sm font-bold text-navy-900 transition-all hover:scale-105 shadow-lg shadow-gold-500/20"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                    </svg>
                                    Lưu Profile Doanh nghiệp (MyCard)
                                </a>
                                <LeadCTA
                                    text="Nhận Tự vấn Miễn phí"
                                    source="Luật Nguyễn Partner Page"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-600 bg-navy-800/50 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-navy-700 hover:border-navy-500"
                                />
                            </div>
                        </div>

                        {/* Interactive Law Ecosystem Diagram */}
                        <div className="relative lg:h-[500px] flex items-center justify-center animate-fade-in">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-[3rem] transform rotate-3 blur-2xl"></div>
                            <div className="relative w-full max-w-md aspect-square bg-navy-800/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center justify-center overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>

                                <div className="text-center z-10">
                                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl shadow-gold-500/30 transform rotate-12 transition-transform hover:rotate-0">
                                        ⚖️
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">Luật Nguyễn Group</h3>
                                    <p className="text-gold-400 text-sm font-semibold tracking-widest mb-6">"Tâm Giao - Vươn Tầm Thế Giới"</p>

                                    <div className="grid grid-cols-2 gap-3 text-left w-full mt-4">
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                                            <div className="text-gold-300 text-xs font-bold mb-1">🏦 Tài chính</div>
                                            <div className="text-white text-xs opacity-80">Tài trợ vốn & Vay khó</div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                                            <div className="text-gold-300 text-xs font-bold mb-1">🏢 Doanh nghiệp</div>
                                            <div className="text-white text-xs opacity-80">Thành lập & Tái cấu trúc</div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                                            <div className="text-gold-300 text-xs font-bold mb-1">🏡 Bất động sản</div>
                                            <div className="text-white text-xs opacity-80">Pháp lý dự án, Thừa kế</div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                                            <div className="text-gold-300 text-xs font-bold mb-1">👩‍⚖️ Tố tụng</div>
                                            <div className="text-white text-xs opacity-80">Đại diện ủy quyền tranh chấp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Expert Profile Section ─── */}
            <section className="py-16 bg-white border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-gradient-to-br from-gold-100 to-gold-50 border-4 border-white shadow-xl flex items-center justify-center text-4xl overflow-hidden relative">
                            {/* Placeholder for real image */}
                            <span className="opacity-50 text-gold-500 absolute font-bold text-6xl">O</span>
                            <div className="absolute inset-0 bg-navy-900/10 mix-blend-overlay"></div>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="inline-block bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                Trưởng VPLS / CEO
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
                                LS. Nguyễn Thị Kim Oanh
                            </h2>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-navy-600 mb-6">
                                <a href="tel:0986865967" className="flex items-center gap-1.5 hover:text-navy-900 font-semibold transition-colors">
                                    <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    0986 865 967
                                </a>
                                <a href="https://luatnguyen.vn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-navy-900 font-semibold transition-colors">
                                    <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                    </svg>
                                    luatnguyen.vn
                                </a>
                            </div>
                            <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                                Chuyên gia pháp lý hàng đầu với nhiều năm kinh nghiệm bám sát thực tiễn doanh nghiệp.
                                Sở hữu năng lực đặc biệt trong việc <strong className="text-navy-900">tháo gỡ các hồ sơ vay vốn dạng khó, giải quyết tranh chấp phức tạp</strong> và tư vấn pháp lý chuyên sâu cho các dự án bất động sản lớn tại Việt Nam. Đồng hành cùng hệ sinh thái Doanh nhân Tâm Giao, vươn tầm thế giới.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Core Services Grid ─── */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-gold-500 uppercase tracking-widest">
                            Dịch vụ Toàn diện
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
                            Hệ Sinh Thái Luật Nguyễn
                        </h2>
                        <p className="mt-4 text-navy-600 max-w-2xl mx-auto">
                            Từ gỡ băng vốn vay, tối ưu hóa thuế đến pháp lý dự án Bất Động Sản. Chúng tôi cung cấp giải pháp triệt để chứ không chỉ lời khuyên.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "💰",
                                title: "Tài chính & Vay vốn",
                                items: ["Tư vấn vay vốn trong & ngoài nước", "Tài trợ vốn doanh nghiệp", "Đặc biệt: Xử lý hồ sơ vay dạng KHÓ"]
                            },
                            {
                                icon: "🏢",
                                title: "Thuê VP & Đại diện Tố Tụng",
                                items: ["Luật sư tố tụng, ủy quyền tranh chấp", "Giải quyết tranh chấp phức tạp", "Thuê văn phòng 600k/tháng có CSKH CSKH/Thư ký"]
                            },
                            {
                                icon: "🏡",
                                title: "Pháp lý Bất động sản",
                                items: ["Pháp lý nhà đất, sổ đỏ", "Tư vấn dự án BĐS", "Xử lý thừa kế, sang tên"]
                            },
                            {
                                icon: "⚙️",
                                title: "Tái cấu trúc Doanh nghiệp",
                                items: ["Thiết lập cơ cấu tài chính tối ưu", "Giải thể, sát nhập (M&A)", "Khai phóng tư duy lãnh đạo"]
                            },
                            {
                                icon: "📄",
                                title: "Thành lập & Giấy phép",
                                items: ["Thành lập Công ty / Hộ kinh doanh", "Đăng ký bảo hộ nhãn hiệu, logo", "Xin tất cả các loại giấy phép con"]
                            },
                            {
                                icon: "🚀",
                                title: "Chuyển đổi số Doanh nghiệp",
                                items: ["Thiết kế website doanh nghiệp", "Marketing & Branding", "Định vị thương hiệu Tam Giao"]
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-2xl mb-6 group-hover:bg-gold-50 group-hover:scale-110 transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-navy-600">
                                            <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Links & Networking ─── */}
            <section className="py-20 bg-navy-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
                        <div className="mb-8 md:mb-0 max-w-lg">
                            <h2 className="text-3xl font-bold mb-4">Mạng lưới Liên kết Giao thương</h2>
                            <p className="text-navy-200 mb-6">
                                Luật Nguyễn đồng hành ký kết chiến lược vùng pháp lý, bứt phá kinh doanh 2026. Mở lối vươn tầm thế giới (Singapore Gateway).
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://doanhnhantamgiao.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors">
                                    doanhnhantamgiao.com
                                </a>
                                <a href="https://luatnguyen.vn" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors">
                                    luatnguyen.vn
                                </a>
                            </div>
                        </div>

                        <div className="w-full md:w-auto text-center md:text-right">
                            <div className="inline-block bg-white p-3 rounded-2xl mb-4">
                                {/* Simulated QR Code */}
                                <div className="w-32 h-32 bg-slate-100 flex items-center justify-center rounded-xl border border-slate-200">
                                    <div className="grid grid-cols-3 gap-1 w-24 h-24">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className={`bg-navy-900 ${i % 2 === 0 ? 'rounded-tl-md rounded-br-md' : 'rounded-tr-md rounded-bl-md'}`}></div>
                                        ))}
                                        <div className="absolute inset-0 m-auto w-8 h-8 bg-gold-500 rounded-lg border-2 border-white flex items-center justify-center text-[10px] font-bold text-navy-900">
                                            MyCard
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="https://app.mycard.asia/u/18"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold-400 font-bold hover:text-gold-300 hover:underline transition-colors block"
                                >
                                    🔗 Link App MyCard
                                </a>
                                <span className="text-xs text-navy-300">Quét để lưu danh thiếp điện tử</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
