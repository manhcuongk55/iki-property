"use client";

import { useState } from "react";
import LeadModal from "@/components/LeadModal";

interface LeadCTAProps {
    className?: string;
    text?: string;
    source?: string;
    icon?: React.ReactNode;
}

export default function LeadCTA({
    className = "",
    text = "Tư vấn FREE",
    source = "Website CTA",
    icon
}: LeadCTAProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                }}
                className={className || "inline-flex items-center justify-center gap-2 rounded-full border-2 border-safe/40 px-8 py-4 text-base font-semibold text-safe transition-all hover:bg-safe/10 hover:border-safe/60"}
            >
                {icon || (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
                {text}
            </button>

            <LeadModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                source={source}
            />
        </>
    );
}
