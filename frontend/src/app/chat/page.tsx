"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
    chatRooms,
    getMessagesForRoom,
    type ChatRoom,
    type ChatMessage,
} from "@/data/chatData";

export default function ChatPage() {
    const [activeRoom, setActiveRoom] = useState<ChatRoom>(chatRooms[0]);
    const [messages, setMessages] = useState<ChatMessage[]>(getMessagesForRoom(chatRooms[0].id));
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const [showNameModal, setShowNameModal] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        const saved = localStorage.getItem("iki-chat-username");
        if (saved) {
            setUsername(saved);
            setShowNameModal(false);
        }
    }, []);

    const switchRoom = (room: ChatRoom) => {
        setActiveRoom(room);
        setMessages(getMessagesForRoom(room.id));
        setSidebarOpen(false);
    };

    const sendMessage = () => {
        if (!input.trim() || !username) return;

        const now = new Date();
        const newMsg: ChatMessage = {
            id: `user-${Date.now()}`,
            roomId: activeRoom.id,
            sender: username,
            avatar: username.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase(),
            avatarColor: "bg-gold-500 text-navy-900",
            content: input.trim(),
            timestamp: `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`,
        };

        setMessages((prev) => [...prev, newMsg]);
        setInput("");
    };

    const handleSetUsername = (name: string) => {
        if (!name.trim()) return;
        setUsername(name.trim());
        localStorage.setItem("iki-chat-username", name.trim());
        setShowNameModal(false);
    };

    const getCategoryLabel = (cat: string) => {
        switch (cat) {
            case "property": return "BĐS";
            case "community": return "Cộng đồng";
            case "support": return "Hỗ trợ";
            default: return cat;
        }
    };

    const getCategoryColor = (cat: string) => {
        switch (cat) {
            case "property": return "bg-gold-500/15 text-gold-500";
            case "community": return "bg-blue-500/15 text-blue-500";
            case "support": return "bg-green-500/15 text-safe";
            default: return "bg-navy-100 text-navy-600";
        }
    };

    return (
        <>
            {/* Username Modal */}
            {showNameModal && (
                <div className="fixed inset-0 z-[100] bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💬</span>
                            </div>
                            <h2 className="text-2xl font-bold text-navy-900">IKI Chat</h2>
                            <p className="text-muted mt-2">
                                Nhập tên hiển thị để tham gia trò chuyện
                            </p>
                        </div>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Tên hiển thị (VD: Nguyễn Hoàng)"
                                className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSetUsername((e.target as HTMLInputElement).value);
                                }}
                                autoFocus
                            />
                            <button
                                onClick={() => {
                                    const input = document.querySelector("input[placeholder*='Tên hiển thị']") as HTMLInputElement;
                                    handleSetUsername(input?.value || "");
                                }}
                                className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3 text-sm font-bold text-navy-900 shadow-lg transition-all hover:scale-[1.02]"
                            >
                                Vào chat
                            </button>
                        </div>

                        <div className="mt-6 flex items-center gap-2 justify-center text-xs text-muted">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Tin nhắn mã hóa end-to-end • Powered by Berty Protocol
                        </div>
                    </div>
                </div>
            )}

            <div className="flex h-[calc(100vh-64px)]">
                {/* ─── Sidebar ─── */}
                <div className={`
                    fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-border pt-16 transform transition-transform duration-300
                    lg:relative lg:translate-x-0 lg:pt-0 lg:z-0
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                `}>
                    {/* Sidebar header */}
                    <div className="p-4 border-b border-border">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-900 font-bold text-xs">
                                    💬
                                </div>
                                <div>
                                    <h2 className="font-bold text-navy-900 text-sm">IKI Chat</h2>
                                    <span className="text-[10px] text-muted">Berty Encrypted</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden p-1 text-navy-400 hover:text-navy-700"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Berty banner */}
                        <a
                            href="https://github.com/manhcuongk55/berty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center gap-2 rounded-xl bg-navy-50 p-2.5 hover:bg-navy-100 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                B
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-navy-900">Tải Berty Mobile</div>
                                <div className="text-[10px] text-muted">Chat P2P bảo mật tuyệt đối</div>
                            </div>
                            <svg className="w-4 h-4 text-navy-400 shrink-0 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    {/* Room list */}
                    <div className="overflow-y-auto h-[calc(100%-140px)]">
                        {["property", "community", "support"].map((category) => {
                            const rooms = chatRooms.filter((r) => r.category === category);
                            if (rooms.length === 0) return null;
                            return (
                                <div key={category} className="py-2">
                                    <div className="px-4 py-1.5">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getCategoryColor(category)}`}>
                                            {getCategoryLabel(category)}
                                        </span>
                                    </div>
                                    {rooms.map((room) => (
                                        <button
                                            key={room.id}
                                            onClick={() => switchRoom(room)}
                                            className={`w-full px-4 py-3 text-left transition-all hover:bg-navy-50 ${activeRoom.id === room.id ? "bg-gold-50 border-r-2 border-gold-500" : ""
                                                }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-xl shrink-0 mt-0.5">{room.emoji}</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <span className={`text-sm font-semibold truncate ${activeRoom.id === room.id ? "text-gold-600" : "text-navy-900"}`}>
                                                            {room.name}
                                                        </span>
                                                        {room.pinned && <span className="text-[10px]">📌</span>}
                                                    </div>
                                                    <p className="text-xs text-muted truncate mt-0.5">{room.lastMessage}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="flex items-center gap-1 text-[10px] text-muted">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-safe" />
                                                            {room.online} đang hoạt động
                                                        </span>
                                                        <span className="text-[10px] text-muted">• {room.lastMessageTime}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* ─── Chat Area ─── */}
                <div className="flex-1 flex flex-col bg-white min-w-0">
                    {/* Chat header */}
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-1.5 text-navy-600 hover:bg-navy-50 rounded-lg"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <span className="text-2xl">{activeRoom.emoji}</span>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-navy-900 text-sm truncate">{activeRoom.name}</h3>
                            <p className="text-xs text-muted truncate">{activeRoom.description}</p>
                        </div>

                        <div className="hidden sm:flex items-center gap-3 text-xs text-muted shrink-0">
                            <span className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {activeRoom.memberCount}
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-safe" />
                                {activeRoom.online}
                            </span>
                            <span className="flex items-center gap-1 text-safe">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                E2E
                            </span>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-gradient-to-b from-navy-50/50 to-white">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-3 animate-fade-in ${msg.isSystem ? "justify-center" : msg.sender === username ? "flex-row-reverse" : ""}`}
                            >
                                {msg.isSystem ? (
                                    <div className="rounded-full bg-navy-100 px-4 py-2 text-xs text-muted text-center max-w-md">
                                        {msg.content}
                                    </div>
                                ) : (
                                    <>
                                        <div className={`w-9 h-9 rounded-full ${msg.avatarColor} flex items-center justify-center text-xs font-bold shrink-0`}>
                                            {msg.avatar}
                                        </div>
                                        <div className={`max-w-[70%] ${msg.sender === username ? "items-end" : ""}`}>
                                            <div className={`flex items-baseline gap-2 mb-1 ${msg.sender === username ? "flex-row-reverse" : ""}`}>
                                                <span className="text-xs font-semibold text-navy-900">{msg.sender}</span>
                                                <span className="text-[10px] text-muted">{msg.timestamp}</span>
                                            </div>
                                            <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.sender === username
                                                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 rounded-br-md"
                                                    : "bg-white border border-border text-navy-800 rounded-bl-md shadow-sm"
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="px-4 py-3 border-t border-border bg-white">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
                                    placeholder={`Nhắn tin tại ${activeRoom.name}...`}
                                    className="w-full rounded-xl border border-border bg-navy-50 px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-colors"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted">
                                    🔒
                                </span>
                            </div>
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim()}
                                className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 p-3 text-navy-900 shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shrink-0"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[10px] text-muted">
                            <span>Đang trò chuyện với tên <strong className="text-navy-700">{username}</strong></span>
                            <Link href="https://github.com/manhcuongk55/berty" target="_blank" className="hover:text-gold-500 transition-colors">
                                Powered by Berty Protocol 🔒
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
