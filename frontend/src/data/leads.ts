export interface Lead {
    id: string;
    createdAt: string;
    name: string;
    zaloPhone: string;
    location: string;
    budget: string;
    source: string;
    status: "new" | "contacted" | "converted" | "failed";
    notes?: string;
}

const STORAGE_KEY = "iki_leads_db";

export const getLeads = (): Lead[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        // Seed initial data for demo
        const seedData: Lead[] = [
            {
                id: "lead-001",
                createdAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
                name: "Nguyễn Văn A",
                zaloPhone: "0901234567",
                location: "Tokyo, Nhật Bản",
                budget: "1-2 tỷ",
                source: "Campaign: Đất nền 1-2 Tỷ",
                status: "converted",
                notes: "Đã chốt lô C3 Long Thành (Không cần xem đất)",
            },
            {
                id: "lead-002",
                createdAt: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
                name: "Trần Thị B",
                zaloPhone: "0987654321",
                location: "Seoul, Hàn Quốc",
                budget: "Dưới 1 tỷ",
                source: "Header CTA",
                status: "contacted",
                notes: "Hẹn sang tháng gửi tiền về",
            },
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
        return seedData;
    }
    return JSON.parse(data);
};

export const saveLead = (leadData: Omit<Lead, "id" | "createdAt" | "status">): Lead => {
    const leads = getLeads();
    const newLead: Lead = {
        ...leadData,
        id: `lead-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: "new",
    };
    leads.unshift(newLead); // Add to top
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    return newLead;
};

export const updateLeadStatus = (id: string, status: Lead["status"]) => {
    const leads = getLeads();
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
        leads[index].status = status;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    }
};

export const deleteLead = (id: string) => {
    const leads = getLeads();
    const filtered = leads.filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
