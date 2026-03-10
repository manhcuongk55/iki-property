// Mock AI valuation data & engine for VIVA integration

export interface ValuationInput {
    address: string;
    district: string;
    city: string;
    propertyType: string;
    area: number;       // m²
    floors?: number;
    bedrooms?: number;
    frontWidth?: number; // m
}

export interface ValuationResult {
    id: string;
    input: ValuationInput;
    priceMin: number;
    priceMax: number;
    priceEstimate: number;
    pricePerM2: number;
    confidence: number;        // 0-100
    timestamp: string;
    factors: ValuationFactor[];
    comparables: ComparableProperty[];
    trend: PriceTrend;
}

export interface ValuationFactor {
    name: string;
    impact: "positive" | "negative" | "neutral";
    description: string;
    weight: number; // percentage contribution
}

export interface ComparableProperty {
    address: string;
    price: number;
    area: number;
    soldDate: string;
    distance: string;
}

export interface PriceTrend {
    direction: "up" | "down" | "stable";
    changePercent: number;
    period: string;
}

// ─── District price data (VND / m²) ───
const DISTRICT_PRICES: Record<string, Record<string, { min: number; max: number; trend: number }>> = {
    "Hà Nội": {
        "Ba Đình": { min: 180_000_000, max: 350_000_000, trend: 8 },
        "Hoàn Kiếm": { min: 250_000_000, max: 500_000_000, trend: 5 },
        "Tây Hồ": { min: 150_000_000, max: 280_000_000, trend: 12 },
        "Cầu Giấy": { min: 120_000_000, max: 220_000_000, trend: 10 },
        "Hà Đông": { min: 50_000_000, max: 120_000_000, trend: 18 },
        "Long Biên": { min: 60_000_000, max: 130_000_000, trend: 15 },
        "Nam Từ Liêm": { min: 80_000_000, max: 180_000_000, trend: 14 },
        "Thanh Xuân": { min: 100_000_000, max: 200_000_000, trend: 9 },
        "Đống Đa": { min: 130_000_000, max: 280_000_000, trend: 7 },
        "Hoàng Mai": { min: 55_000_000, max: 110_000_000, trend: 16 },
    },
    "TP. Hồ Chí Minh": {
        "Quận 1": { min: 300_000_000, max: 600_000_000, trend: 6 },
        "Quận 2 (Thủ Đức)": { min: 80_000_000, max: 180_000_000, trend: 20 },
        "Quận 7": { min: 100_000_000, max: 200_000_000, trend: 12 },
        "Quận 9 (Thủ Đức)": { min: 40_000_000, max: 90_000_000, trend: 22 },
        "Bình Thạnh": { min: 90_000_000, max: 180_000_000, trend: 11 },
        "Gò Vấp": { min: 60_000_000, max: 120_000_000, trend: 13 },
        "Tân Bình": { min: 80_000_000, max: 150_000_000, trend: 10 },
        "Nhà Bè": { min: 30_000_000, max: 70_000_000, trend: 25 },
    },
    "Đà Nẵng": {
        "Hải Châu": { min: 80_000_000, max: 180_000_000, trend: 10 },
        "Sơn Trà": { min: 50_000_000, max: 120_000_000, trend: 14 },
        "Ngũ Hành Sơn": { min: 40_000_000, max: 100_000_000, trend: 16 },
        "Hòa Vang": { min: 8_000_000, max: 25_000_000, trend: 20 },
        "Liên Chiểu": { min: 20_000_000, max: 50_000_000, trend: 18 },
    },
    "Bình Dương": {
        "Thủ Dầu Một": { min: 30_000_000, max: 70_000_000, trend: 15 },
        "Dĩ An": { min: 25_000_000, max: 55_000_000, trend: 18 },
        "Thuận An": { min: 20_000_000, max: 50_000_000, trend: 20 },
        "Bến Cát": { min: 5_000_000, max: 15_000_000, trend: 25 },
    },
    "Đồng Nai": {
        "Biên Hòa": { min: 25_000_000, max: 60_000_000, trend: 14 },
        "Long Thành": { min: 10_000_000, max: 30_000_000, trend: 30 },
        "Nhơn Trạch": { min: 8_000_000, max: 25_000_000, trend: 28 },
    },
    "Hải Dương": {
        "TP Hải Dương": { min: 15_000_000, max: 35_000_000, trend: 12 },
        "Kinh Môn": { min: 3_000_000, max: 10_000_000, trend: 20 },
    },
    "Bắc Ninh": {
        "Từ Sơn": { min: 20_000_000, max: 50_000_000, trend: 18 },
        "Yên Phong": { min: 8_000_000, max: 20_000_000, trend: 22 },
    },
    "Hưng Yên": {
        "Văn Giang": { min: 30_000_000, max: 80_000_000, trend: 20 },
        "Văn Lâm": { min: 10_000_000, max: 25_000_000, trend: 15 },
    },
};

export const CITIES = Object.keys(DISTRICT_PRICES);

export function getDistricts(city: string): string[] {
    return Object.keys(DISTRICT_PRICES[city] || {});
}

const PROPERTY_TYPE_MULTIPLIER: Record<string, number> = {
    "Đất nền": 1.0,
    "Căn hộ": 1.2,
    "Nhà ở": 1.3,
    "Biệt thự": 1.8,
    "Shophouse": 1.6,
    "Căn hộ áp mái": 2.0,
};

export const PROPERTY_TYPES_VALUATION = Object.keys(PROPERTY_TYPE_MULTIPLIER);

// ─── Mock AI Valuation Engine ───
export function runValuation(input: ValuationInput): ValuationResult {
    const districtData = DISTRICT_PRICES[input.city]?.[input.district];

    // Fallback nếu không tìm được data
    const baseMin = districtData?.min || 15_000_000;
    const baseMax = districtData?.max || 40_000_000;
    const trendPercent = districtData?.trend || 10;

    const typeMultiplier = PROPERTY_TYPE_MULTIPLIER[input.propertyType] || 1.0;

    // Random variance ±10% để tạo cảm giác AI thực
    const variance = 0.9 + Math.random() * 0.2;

    const pricePerM2Min = Math.round(baseMin * typeMultiplier * variance);
    const pricePerM2Max = Math.round(baseMax * typeMultiplier * variance);
    const pricePerM2Avg = Math.round((pricePerM2Min + pricePerM2Max) / 2);

    const priceMin = pricePerM2Min * input.area;
    const priceMax = pricePerM2Max * input.area;
    const priceEstimate = Math.round((priceMin + priceMax) / 2);

    // Front-width bonus
    let frontBonus = 1.0;
    if (input.frontWidth && input.frontWidth >= 5) frontBonus = 1.05;
    if (input.frontWidth && input.frontWidth >= 8) frontBonus = 1.12;

    const factors: ValuationFactor[] = [
        {
            name: "Vị trí khu vực",
            impact: pricePerM2Avg > 100_000_000 ? "positive" : "neutral",
            description: `${input.district}, ${input.city} — giá trung bình ${(pricePerM2Avg / 1_000_000).toFixed(0)} triệu/m²`,
            weight: 40,
        },
        {
            name: "Loại hình BĐS",
            impact: typeMultiplier > 1.3 ? "positive" : "neutral",
            description: `${input.propertyType} có hệ số giá ×${typeMultiplier.toFixed(1)}`,
            weight: 25,
        },
        {
            name: "Diện tích",
            impact: input.area > 100 ? "positive" : "neutral",
            description: `${input.area}m² — ${input.area > 100 ? "diện tích rộng, tiềm năng phát triển" : "phù hợp an cư"}`,
            weight: 20,
        },
        {
            name: "Xu hướng thị trường",
            impact: trendPercent > 15 ? "positive" : trendPercent < 5 ? "negative" : "neutral",
            description: `Giá khu vực tăng ${trendPercent}% trong 12 tháng qua`,
            weight: 15,
        },
    ];

    if (input.frontWidth) {
        factors.push({
            name: "Mặt tiền",
            impact: frontBonus > 1.0 ? "positive" : "neutral",
            description: `${input.frontWidth}m mặt tiền — ${frontBonus > 1.05 ? "lợi thế kinh doanh" : "đủ sử dụng"}`,
            weight: 10,
        });
    }

    const comparables: ComparableProperty[] = [
        {
            address: `Số ${Math.floor(Math.random() * 200) + 1}, ${input.district}`,
            price: Math.round(priceEstimate * (0.85 + Math.random() * 0.3)),
            area: Math.round(input.area * (0.8 + Math.random() * 0.4)),
            soldDate: "2026-01",
            distance: `${(Math.random() * 2).toFixed(1)}km`,
        },
        {
            address: `Ngõ ${Math.floor(Math.random() * 50) + 1}, ${input.district}`,
            price: Math.round(priceEstimate * (0.9 + Math.random() * 0.2)),
            area: Math.round(input.area * (0.9 + Math.random() * 0.2)),
            soldDate: "2025-12",
            distance: `${(Math.random() * 3).toFixed(1)}km`,
        },
        {
            address: `Đường ${Math.floor(Math.random() * 30) + 1}, ${input.district}`,
            price: Math.round(priceEstimate * (0.95 + Math.random() * 0.15)),
            area: Math.round(input.area * (0.95 + Math.random() * 0.1)),
            soldDate: "2026-02",
            distance: `${(Math.random() * 1.5).toFixed(1)}km`,
        },
    ];

    return {
        id: `val-${Date.now()}`,
        input,
        priceMin: Math.round(priceMin * frontBonus),
        priceMax: Math.round(priceMax * frontBonus),
        priceEstimate: Math.round(priceEstimate * frontBonus),
        pricePerM2: pricePerM2Avg,
        confidence: Math.round(65 + Math.random() * 25),
        timestamp: new Date().toISOString(),
        factors,
        comparables,
        trend: {
            direction: trendPercent > 10 ? "up" : trendPercent < 3 ? "down" : "stable",
            changePercent: trendPercent,
            period: "12 tháng",
        },
    };
}
