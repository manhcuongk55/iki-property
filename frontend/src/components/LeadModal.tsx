"use client";

import { useState } from "react";
import { saveLead } from "@/data/leads";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

export default function LeadModal({ isOpen, onClose, source = "Website CTA" }: LeadModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        zaloPhone: "",
        location: "",
        budget: "1-2 tỷ",
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock network delay
        setTimeout(() => {
            saveLead({
                name: formData.name,
                zaloPhone: formData.zaloPhone,
                location: formData.location,
                budget: formData.budget,
                source: source
            });

            setIsSubmitting(false);
            setIsSuccess(true);

            // Redirect to Zalo config group after 2 seconds
            setTimeout(() => {
                window.open("https://zalo.me/g/campaign-xkld", "_blank");
                onClose();
                setIsSuccess(false);
            }, 2000);

        }, 800);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-6 py-5 text-white flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold">Nhận Cố vấn Đầu tư Miễn phí</h3>
                        <p className="text-navy-200 text-xs mt-1">Đội ngũ chuyên gia IKI Property trực tiếp hỗ trợ (Cam kết bảo mật)</p>
                    </div>
                    <button onClick={onClose} className="text-navy-200 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    {isSuccess ? (
                        <div className="text-center py-6 animate-fade-in">
                            <div className="w-16 h-16 bg-safe/10 text-safe rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-navy-900">Gửi thông tin thành công!</h4>
                            <p className="text-muted text-sm mt-2">
                                IKI sẽ liên hệ Zalo cho bạn sớm nhất.<br />
                                Đang chuyển hướng tới Zalo Group Cộng đồng...
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-navy-900 mb-1.5">Tên hiển thị / Danh xưng <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    placeholder="VD: Anh Quân (Osaka)"
                                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 focus:bg-white focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-navy-900 mb-1.5">Số điện thoại / Zalo <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Nhập SĐT để chuyên gia ADD Zalo"
                                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 focus:bg-white focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all"
                                    value={formData.zaloPhone}
                                    onChange={(e) => setFormData({ ...formData, zaloPhone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-navy-900 mb-1.5">Hiện đang sống/làm việc tại</label>
                                <input
                                    type="text"
                                    placeholder="VD: Tokyo, Nhật Bản / Hàn Quốc"
                                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 focus:bg-white focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-navy-900 mb-1.5">Mức tài chính dự kiến</label>
                                <select
                                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 focus:bg-white focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="Dưới 1 tỷ">Dưới 1 tỷ (Đất vùng ven sinh lời)</option>
                                    <option value="1-2 tỷ">1-2 tỷ (BĐS Thanh khoản cao 🔥)</option>
                                    <option value="2-5 tỷ">2-5 tỷ (Đất Trung tâm, Shophouse)</option>
                                    <option value="Trên 5 tỷ">Trên 5 tỷ (Đầu tư chiến lược)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-2 rounded-xl bg-gradient-to-r from-safe to-green-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-safe/25 transition-all hover:shadow-safe/40 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Gắn kết Chuyên gia & Nhận tư vấn
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
