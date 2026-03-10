export interface TokenInfo {
    tokenPrice: number;      // VND per token
    totalTokens: number;
    soldTokens: number;
    yieldPercent: number;    // Annual yield %
    blockchain: string;
}

export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    location: string;
    type: string;
    images: string[];
    legalStatus: string;
    expectedRoi: number | null;
    area?: string;           // m² or land area
    isTokenized?: boolean;
    tokenInfo?: TokenInfo;
    tags?: string[];
}

export const properties: Property[] = [
    // ─── New: Đất nền 1-2 tỷ (Campaign segment) ───
    {
        id: "101",
        title: "Đất nền Hòa Vang — Vùng ven Đà Nẵng",
        description:
            "Lô đất nền 120m² tại Hòa Vang, cách trung tâm Đà Nẵng 15km. Đường nhựa 6m, điện nước đầy đủ. Khu dân cư hiện hữu, gần trường học và chợ. Sổ đỏ chính chủ, pháp lý rõ ràng. Phù hợp xây nhà ở hoặc đầu tư dài hạn.",
        price: 850_000_000,
        currency: "VND",
        location: "Hòa Vang, Đà Nẵng",
        type: "Đất nền",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2670&auto=format&fit=crop",
        ],
        legalStatus: "Sổ đỏ",
        expectedRoi: 15,
        area: "120m²",
        isTokenized: true,
        tokenInfo: {
            tokenPrice: 10_000_000,
            totalTokens: 85,
            soldTokens: 23,
            yieldPercent: 12,
            blockchain: "Polygon",
        },
        tags: ["hot", "xklđ", "1-2ty"],
    },
    {
        id: "102",
        title: "Đất nền Hà Đông — Cổng vào Hà Nội",
        description:
            "Lô đất 100m² tại khu phát triển mới Hà Đông. Gần trạm Metro Line 2A, 10 phút đến Vincom Hà Đông. Hạ tầng hoàn thiện, đường rộng 12m. Khu vực tăng giá mạnh nhất 2025 (+18%). Cơ hội vàng cho người trẻ muốn an cư lạc nghiệp.",
        price: 1_500_000_000,
        currency: "VND",
        location: "Hà Đông, Hà Nội",
        type: "Đất nền",
        images: [
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2670&auto=format&fit=crop",
        ],
        legalStatus: "Sổ đỏ",
        expectedRoi: 18,
        area: "100m²",
        isTokenized: true,
        tokenInfo: {
            tokenPrice: 10_000_000,
            totalTokens: 150,
            soldTokens: 45,
            yieldPercent: 10,
            blockchain: "Polygon",
        },
        tags: ["hot", "1-2ty"],
    },
    {
        id: "103",
        title: "Đất nền Bình Dương — Khu CN Mỹ Phước",
        description:
            "Lô đất 150m² gần KCN Mỹ Phước 3, Bình Dương. Vị trí đắc địa cho thuê phòng trọ công nhân (yield 10-15%/năm). Đường nhựa 8m, gần bến xe, siêu thị. Giá gốc CĐT, không qua trung gian. Sổ riêng từng lô.",
        price: 750_000_000,
        currency: "VND",
        location: "Bến Cát, Bình Dương",
        type: "Đất nền",
        images: [
            "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2667&auto=format&fit=crop",
        ],
        legalStatus: "Sổ đỏ",
        expectedRoi: 14,
        area: "150m²",
        isTokenized: true,
        tokenInfo: {
            tokenPrice: 10_000_000,
            totalTokens: 75,
            soldTokens: 30,
            yieldPercent: 14,
            blockchain: "Polygon",
        },
        tags: ["yield-cao", "xklđ", "1-2ty"],
    },
    {
        id: "104",
        title: "Đất nền Phú Thụ — Kinh Môn",
        description:
            "Lô đất 200m² tại khu dân cư mới Phú Thụ, Kinh Môn. Đã test bán 3 lô thành công cho XKLĐ Nhật (proof-of-concept). Giá tốt nhất khu vực, pháp lý 7 lớp xác minh bởi Basao AI. Không cần xem đất, hỗ trợ video drone 360°.",
        price: 600_000_000,
        currency: "VND",
        location: "Kinh Môn, Hải Dương",
        type: "Đất nền",
        images: [
            "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2670&auto=format&fit=crop",
        ],
        legalStatus: "Sổ đỏ",
        expectedRoi: 12,
        area: "200m²",
        isTokenized: true,
        tokenInfo: {
            tokenPrice: 10_000_000,
            totalTokens: 60,
            soldTokens: 18,
            yieldPercent: 12,
            blockchain: "Polygon",
        },
        tags: ["proof-of-concept", "xklđ", "1-2ty"],
    },
    {
        id: "105",
        title: "Đất nền Long Thành — Cạnh sân bay mới",
        description:
            "Lô đất 120m² tại Long Thành, Đồng Nai. Cách sân bay quốc tế Long Thành 5km (dự kiến khai thác 2026). Tiềm năng tăng giá cực lớn khi sân bay hoạt động. Đường vào 10m, đã có sổ riêng. Phù hợp đầu tư trung-dài hạn.",
        price: 1_200_000_000,
        currency: "VND",
        location: "Long Thành, Đồng Nai",
        type: "Đất nền",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2670&auto=format&fit=crop",
        ],
        legalStatus: "Sổ đỏ",
        expectedRoi: 22,
        area: "120m²",
        isTokenized: true,
        tokenInfo: {
            tokenPrice: 10_000_000,
            totalTokens: 120,
            soldTokens: 52,
            yieldPercent: 8,
            blockchain: "Polygon",
        },
        tags: ["tiềm-năng", "1-2ty"],
    },
    {
        id: "106",
        title: "Đất nền Từ Sơn — Trung tâm Bắc Ninh",
        description:
            "Lô đất 80m² tại TP Từ Sơn, Bắc Ninh. Gần KCN Samsung, VSIP. Nhu cầu thuê phòng trọ cực cao từ công nhân và kỹ sư. Yield thuê 15-18%/năm. Đã quy hoạch khu dân cư, hạ tầng PCCC đạt chuẩn. Giá entry-level cho nhà đầu tư mới.",
        price: 980_000_000,
        currency: "VND",
        location: "Từ Sơn, Bắc Ninh",
        type: "Đất nền",
        images: [
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
        ],
        legalStatus: "Sổ đỏ",
        expectedRoi: 17,
        area: "80m²",
        isTokenized: true,
        tokenInfo: {
            tokenPrice: 10_000_000,
            totalTokens: 98,
            soldTokens: 35,
            yieldPercent: 16,
            blockchain: "Polygon",
        },
        tags: ["yield-cao", "xklđ", "1-2ty"],
    },

    // ─── Existing properties ───
    {
        id: "1",
        title: "Vinhomes Grand Park - The Beverly",
        description:
            "Căn hộ cao cấp với view công viên tại Quận 9, TP.HCM. Khu phức hợp tiện ích đẳng cấp với hồ bơi, gym, trường quốc tế. Vị trí kết nối Metro Line 1, chỉ 20 phút đến trung tâm. Phù hợp cho gia đình trẻ hoặc đầu tư cho thuê dài hạn.",
        price: 3_500_000_000,
        currency: "VND",
        location: "Quận 9, TP. Hồ Chí Minh",
        type: "Căn hộ",
        images: [
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2670&auto=format&fit=crop",
        ],
        legalStatus: "Sổ hồng",
        expectedRoi: 6.5,
    },
    {
        id: "2",
        title: "Aqua City - Elite Villa",
        description:
            "Biệt thự ven sông tại Đồng Nai, hoàn hảo cho nghỉ dưỡng hoặc đầu tư. Thiết kế phong cách Địa Trung Hải, sân vườn rộng, bể bơi riêng. Nằm trong khu đô thị sinh thái với clubhouse, bến du thuyền, trường song ngữ. Tiềm năng tăng giá cao khi hạ tầng hoàn thiện.",
        price: 12_000_000_000,
        currency: "VND",
        location: "Biên Hòa, Đồng Nai",
        type: "Biệt thự",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
        ],
        legalStatus: "Sở hữu 50 năm",
        expectedRoi: 8.2,
    },
    {
        id: "3",
        title: "Ocean Park 2 - Shophouse",
        description:
            "Shophouse thương mại tại Mega City Hưng Yên. Mặt tiền đường lớn, khu vực sầm uất với hàng chục nghìn cư dân. Thiết kế 4 tầng, phù hợp vừa kinh doanh vừa ở. Cam kết dòng tiền cho thuê ổn định. ROI cao nhất phân khúc.",
        price: 8_500_000_000,
        currency: "VND",
        location: "Văn Giang, Hưng Yên",
        type: "Shophouse",
        images: [
            "https://images.unsplash.com/photo-1542314831-c6a4d14b162f?q=80&w=2690&auto=format&fit=crop",
        ],
        legalStatus: "Sổ hồng",
        expectedRoi: 10.5,
    },
    {
        id: "4",
        title: "Ecopark - Sky Residence",
        description:
            "Căn hộ thông minh tại khu đô thị xanh Ecopark. Tích hợp smart home, thiết kế Nhật Bản tinh tế. Tầm nhìn sân golf và hồ cảnh quan. Gần trường quốc tế, bệnh viện, TTTM. Phù hợp cho người Việt tại Nhật muốn có tổ ấm khi về nước.",
        price: 2_800_000_000,
        currency: "VND",
        location: "Văn Giang, Hưng Yên",
        type: "Căn hộ",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
        ],
        legalStatus: "Sổ hồng",
        expectedRoi: 7.0,
    },
    {
        id: "5",
        title: "Sun Grand City Thuy Khue",
        description:
            "Penthouse sang trọng phong cách châu Âu tại trung tâm Hà Nội. View trực diện Hồ Tây, nội thất full imported. Hệ thống concierge 24/7, sky garden riêng. Dành cho nhà đầu tư cao cấp hoặc kiều bào muốn sở hữu BĐS prime location.",
        price: 18_500_000_000,
        currency: "VND",
        location: "Tây Hồ, Hà Nội",
        type: "Căn hộ áp mái",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2680&auto=format&fit=crop",
        ],
        legalStatus: "Sổ hồng",
        expectedRoi: 5.8,
    },
    {
        id: "6",
        title: "NovaWorld Phan Thiet - Beach Villa",
        description:
            "Biệt thự biển nghỉ dưỡng tại Phan Thiết. Thiết kế tropical, bể bơi riêng, cách biển 50m. Nằm trong quần thể resort 5 sao với sân golf 36 lỗ, công viên nước. Chương trình cho thuê lại cam kết 8%/năm trong 5 năm đầu.",
        price: 7_200_000_000,
        currency: "VND",
        location: "Phan Thiết, Bình Thuận",
        type: "Biệt thự",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
        ],
        legalStatus: "Sở hữu 50 năm",
        expectedRoi: 9.0,
    },
];

export function getPropertyById(id: string): Property | undefined {
    return properties.find((p) => p.id === id);
}

export function getTokenizedProperties(): Property[] {
    return properties.filter((p) => p.isTokenized);
}

export function getCampaignProperties(): Property[] {
    return properties.filter((p) => p.tags?.includes("1-2ty"));
}

// --- Currency formatting ---
const VND_TO_USD_RATE = 0.00004; // ~25,000 VND = 1 USD
const VND_TO_JPY_RATE = 0.006;  // ~166 VND = 1 JPY

export function formatVND(amount: number): string {
    if (amount >= 1_000_000_000) {
        const billions = amount / 1_000_000_000;
        return `${billions.toFixed(1)} tỷ VNĐ`;
    }
    if (amount >= 1_000_000) {
        const millions = amount / 1_000_000;
        return `${millions.toFixed(0)} triệu VNĐ`;
    }
    return new Intl.NumberFormat("vi-VN").format(amount) + " VNĐ";
}

export function formatUSD(vndAmount: number): string {
    const usd = vndAmount * VND_TO_USD_RATE;
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(usd);
}

export function formatJPY(vndAmount: number): string {
    const jpy = vndAmount * VND_TO_JPY_RATE;
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
        maximumFractionDigits: 0,
    }).format(jpy);
}

// --- Financial calculator (ported from backend) ---
export interface BudgetResult {
    maxMonthlyPayment: number;
    maxLoanAmount: number;
    totalSafeBudget: number;
    dti: number;
    isSafe: boolean;
}

export function calculateLoanCapability(
    monthlyIncome: number,
    savings: number,
    interestRate: number = 8.5
): BudgetResult {
    const maxMonthlyPayment = monthlyIncome * 0.5;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numPeriods = 240; // 20 years

    const maxLoanAmount =
        (maxMonthlyPayment *
            (1 - Math.pow(1 + monthlyInterestRate, -numPeriods))) /
        monthlyInterestRate;

    const totalSafeBudget = maxLoanAmount + savings;

    return {
        maxMonthlyPayment,
        maxLoanAmount,
        totalSafeBudget,
        dti: 50,
        isSafe: true,
    };
}

export interface PropertySafetyResult {
    monthlyPayment: number;
    dti: number;
    isSafe: boolean;
    message: string;
    loanAmount: number;
}

export function calculateDTIForProperty(
    monthlyIncome: number,
    savings: number,
    propertyPrice: number,
    interestRate: number = 8.5
): PropertySafetyResult {
    const loanNeeded = Math.max(0, propertyPrice - savings);

    if (loanNeeded === 0) {
        return {
            monthlyPayment: 0,
            dti: 0,
            isSafe: true,
            message: "Không cần vay! Hoàn toàn an toàn tài chính.",
            loanAmount: 0,
        };
    }

    const monthlyInterestRate = interestRate / 100 / 12;
    const numPeriods = 240;

    const monthlyPayment =
        loanNeeded *
        (monthlyInterestRate /
            (1 - Math.pow(1 + monthlyInterestRate, -numPeriods)));
    const dti = (monthlyPayment / monthlyIncome) * 100;

    return {
        monthlyPayment,
        dti,
        isSafe: dti <= 50,
        message:
            dti > 50
                ? "⚠️ Cảnh báo: Tỷ lệ DTI vượt 50%. Việc mua BĐS này được đánh giá là rủi ro tài chính."
                : "✅ An toàn: Khoản vay nằm trong ngưỡng 50% thu nhập.",
        loanAmount: loanNeeded,
    };
}
