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
}

export const properties: Property[] = [
    {
        id: "1",
        title: "Vinhomes Grand Park - The Beverly",
        description:
            "Căn hộ cao cấp với view công viên tại Quận 9, TP.HCM. Khu phức hợp tiện ích đẳng cấp với hồ bơi, gym, trường quốc tế. Vị trí kết nối Metro Line 1, chỉ 20 phút đến trung tâm. Phù hợp cho gia đình trẻ hoặc đầu tư cho thuê dài hạn.",
        price: 3_500_000_000,
        currency: "VND",
        location: "Quận 9, TP. Hồ Chí Minh",
        type: "Apartment",
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
        type: "Villa",
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
        type: "Apartment",
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
        type: "Penthouse",
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
        type: "Villa",
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
