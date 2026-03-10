"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getLeads, updateLeadStatus, deleteLead, Lead } from "@/data/leads";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

export default function LeadsDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load leads on mount
        setLeads(getLeads());
        setIsLoading(false);
    }, []);

    const handleStatusChange = (id: string, newStatus: Lead["status"]) => {
        updateLeadStatus(id, newStatus);
        setLeads(getLeads()); // Refresh
    };

    const handleDelete = (id: string) => {
        if (confirm("Bạn có chắc chắn muốn xóa lead này?")) {
            deleteLead(id);
            setLeads(getLeads());
        }
    };

    const stats = {
        total: leads.length,
        new: leads.filter(l => l.status === "new").length,
        contacted: leads.filter(l => l.status === "contacted").length,
        converted: leads.filter(l => l.status === "converted").length,
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Profile / Breadcrumbs */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-navy-500 mb-2">
                            <Link href="/admin" className="hover:text-navy-900 transition-colors">Admin</Link>
                            <span>/</span>
                            <span className="font-semibold text-navy-900">Leads CRM</span>
                        </div>
                        <h1 className="text-3xl font-bold text-navy-900">Sales Dashboard</h1>
                        <p className="text-navy-600 mt-1">Quản lý khách hàng tiềm năng chiến dịch XKLĐ</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-2 pr-4 rounded-full shadow-sm border border-border">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-white font-bold text-lg">
                            H
                        </div>
                        <div className="text-sm">
                            <div className="font-bold text-navy-900">Anh Hoà</div>
                            <div className="text-navy-500 text-xs">Director / Sales Agent</div>
                        </div>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                        <div className="text-navy-500 text-sm font-semibold mb-1">Tổng Leads</div>
                        <div className="text-3xl font-bold text-navy-900">{stats.total}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                            <div className="text-blue-600 text-sm font-semibold">Leads Mới</div>
                        </div>
                        <div className="text-3xl font-bold text-navy-900">{stats.new}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                            <div className="text-orange-500 text-sm font-semibold">Đang tư vấn</div>
                        </div>
                        <div className="text-3xl font-bold text-navy-900">{stats.contacted}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-safe"></span>
                            <div className="text-safe text-sm font-semibold">Đã chốt (Converted)</div>
                        </div>
                        <div className="text-3xl font-bold text-navy-900">{stats.converted}</div>
                    </div>
                </div>

                {/* Leads Table */}
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border flex justify-between items-center">
                        <h2 className="text-xl font-bold text-navy-900">Danh sách Khách hàng</h2>
                        <button
                            onClick={() => setLeads(getLeads())}
                            className="text-sm text-navy-600 hover:text-navy-900 font-medium flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Mới nhất
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-navy-50/50 text-navy-600 text-sm font-semibold border-b border-border">
                                    <th className="p-4 pl-6">Khách hàng</th>
                                    <th className="p-4">Khu vực / Nhu cầu</th>
                                    <th className="p-4">Nguồn</th>
                                    <th className="p-4">Thời gian</th>
                                    <th className="p-4">Trạng thái</th>
                                    <th className="p-4 pr-6">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={6} className="p-8 text-center text-navy-400">Đang tải data...</td>
                                    </tr>
                                ) : leads.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="p-8 text-center text-navy-400">Chưa có khách hàng nào đăng ký.</td>
                                    </tr>
                                ) : (
                                    leads.map(lead => (
                                        <tr key={lead.id} className="border-b border-border hover:bg-slate-50 transition-colors">
                                            <td className="p-4 pl-6">
                                                <div className="font-bold text-navy-900">{lead.name}</div>
                                                <div className="text-sm text-navy-500 font-mono mt-0.5 flex items-center gap-1">
                                                    📞 {lead.zaloPhone}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="text-sm font-medium text-navy-900 flex items-center gap-1">
                                                    📍 {lead.location || "Chưa rõ"}
                                                </div>
                                                <div className="text-sm text-safe font-semibold mt-0.5 inline-block bg-safe/10 px-2 py-0.5 rounded">
                                                    💰 {lead.budget}
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm text-navy-600">
                                                {lead.source}
                                            </td>
                                            <td className="p-4 text-sm text-navy-600">
                                                {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true, locale: vi })}
                                            </td>
                                            <td className="p-4">
                                                <select
                                                    value={lead.status}
                                                    onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead["status"])}
                                                    className={`text-xs font-bold px-3 py-1.5 rounded-full border outline-none appearance-none cursor-pointer transition-colors ${lead.status === "new" ? "bg-blue-50 text-blue-600 border-blue-200" :
                                                            lead.status === "contacted" ? "bg-orange-50 text-orange-600 border-orange-200" :
                                                                lead.status === "converted" ? "bg-safe/10 text-safe border-safe/20" :
                                                                    "bg-red-50 text-red-600 border-red-200"
                                                        }`}
                                                >
                                                    <option value="new">🆕 Mới (Cần tư vấn)</option>
                                                    <option value="contacted">🔄 Đã liên hệ Zalo</option>
                                                    <option value="converted">✅ Chốt cọc / Mua</option>
                                                    <option value="failed">❌ Rớt / Hủy</option>
                                                </select>
                                            </td>
                                            <td className="p-4 pr-6">
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href={`https://zalo.me/${lead.zaloPhone}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1.5 text-blue-500 hover:bg-blue-50 rounded transition-colors"
                                                        title="Nhắn tin Zalo"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                        </svg>
                                                    </a>
                                                    {lead.notes && (
                                                        <button
                                                            className="p-1.5 text-navy-400 hover:bg-navy-50 rounded transition-colors"
                                                            title={`Ghi chú: ${lead.notes}`}
                                                            onClick={() => alert(`Ghi chú của ${lead.name}:\n\n${lead.notes}`)}
                                                        >
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => handleDelete(lead.id)}
                                                        className="p-1.5 text-red-400 hover:bg-red-50 rounded transition-colors"
                                                        title="Xóa lead"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
