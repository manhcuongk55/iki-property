// Mock news data for real estate market

export interface NewsArticle {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
}

export const NEWS_CATEGORIES = ["Tất cả", "Thị trường", "Đầu tư", "Pháp lý", "Tokenized", "XKLĐ"];

export const newsArticles: NewsArticle[] = [
    {
        slug: "thi-truong-dat-nen-2026-bung-no",
        title: "Thị trường đất nền 2026: Bùng nổ phân khúc 1-2 tỷ VNĐ",
        excerpt: "Giao dịch đất nền tăng gấp đôi trong quý 1/2026, đặc biệt phân khúc 600 triệu - 1.5 tỷ tại các tỉnh vệ tinh.",
        content: `
## Tổng quan thị trường

Theo báo cáo từ Savills và CBRE, thị trường đất nền Việt Nam đang trải qua giai đoạn phục hồi mạnh mẽ trong quý 1/2026, với giao dịch tăng 105% so với cùng kỳ năm trước.

### Phân khúc nóng nhất

Phân khúc 600 triệu - 1.5 tỷ VNĐ chiếm 62% tổng giao dịch, chủ yếu tập trung tại:
- **Long Thành, Đồng Nai** — gần sân bay quốc tế mới
- **Hòa Vang, Đà Nẵng** — quy hoạch mở rộng đô thị
- **Từ Sơn, Bắc Ninh** — khu công nghiệp lớn

### Động lực tăng trưởng

1. Hạ tầng giao thông phát triển (cao tốc, metro)
2. Dòng kiều hối tăng 18% (chủ yếu từ Nhật, Hàn)
3. Lãi suất vay mua nhà giảm xuống 7-8%/năm
4. Xu hướng tokenized BĐS giúp giảm rào cản vốn
        `,
        category: "Thị trường",
        author: "Nguyễn Văn A",
        date: "2026-03-08",
        readTime: "5 phút",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2673&auto=format&fit=crop",
        tags: ["đất nền", "thị trường 2026", "phân khúc 1-2 tỷ"],
    },
    {
        slug: "tokenized-bds-tuong-lai-dau-tu",
        title: "Token hóa bất động sản: Tương lai đầu tư từ 10 triệu VNĐ",
        excerpt: "Blockchain đang thay đổi cách người Việt đầu tư BĐS — sở hữu một phần đất nền chỉ từ 10 triệu/token.",
        content: `
## Token hóa là gì?

Token hóa bất động sản (Real Estate Tokenization) là quá trình chuyển đổi quyền sở hữu một tài sản bất động sản thành các token số trên blockchain.

### Lợi ích cho nhà đầu tư

1. **Sở hữu phân mảnh** — Đầu tư từ 10 triệu VNĐ thay vì cần cả tỷ
2. **Thanh khoản cao** — Mua bán token 24/7
3. **Minh bạch** — Mọi giao dịch ghi nhận trên blockchain
4. **Yield hấp dẫn** — 8-16%/năm từ cho thuê

### Tại sao phù hợp cho XKLĐ?

Người lao động Việt Nam ở Nhật, Hàn có thể:
- Đầu tư từ xa mà không cần về nước
- Chia nhỏ vốn đầu tư nhiều lô
- Theo dõi và quản lý trên app
- Nhận cổ tức hàng tháng
        `,
        category: "Tokenized",
        author: "Trần Minh B",
        date: "2026-03-07",
        readTime: "7 phút",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
        tags: ["tokenized", "blockchain", "đầu tư"],
    },
    {
        slug: "huong-dan-phap-ly-mua-dat-tu-xa",
        title: "Hướng dẫn pháp lý mua đất từ nước ngoài cho kiều bào",
        excerpt: "Quy trình ủy quyền, hồ sơ cần chuẩn bị, và 5 bước an toàn khi mua BĐS từ Nhật/Hàn về Việt Nam.",
        content: `
## 5 bước mua BĐS từ nước ngoài

### Bước 1: Ủy quyền hợp pháp
Lập văn bản ủy quyền tại Đại sứ quán/Lãnh sự quán Việt Nam tại nước sở tại.

### Bước 2: Xác minh pháp lý
Kiểm tra sổ đỏ/sổ hồng, quy hoạch, giấy phép xây dựng qua hệ thống AI 7 lớp.

### Bước 3: Đặt cọc an toàn
Sử dụng hợp đồng cọc chuẩn, chuyển tiền qua kênh chính thức.

### Bước 4: Ký hợp đồng mua bán
Hợp đồng song ngữ, có công chứng.

### Bước 5: Nhận sổ
Theo dõi tiến độ qua app, nhận sổ đỏ/sổ hồng.
        `,
        category: "Pháp lý",
        author: "Lê Thị C",
        date: "2026-03-06",
        readTime: "8 phút",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
        tags: ["pháp lý", "kiều bào", "ủy quyền"],
    },
    {
        slug: "xkld-nhat-han-dau-tu-dat-nen",
        title: "XKLĐ Nhật - Hàn: Chiến lược đầu tư đất nền sinh lời cao",
        excerpt: "Với thu nhập 30-50 triệu/tháng tại Nhật/Hàn, đây là cách tối ưu lợi nhuận khi đầu tư đất nền về Việt Nam.",
        content: `
## Bức tranh XKLĐ 2026

Hơn 500,000 lao động Việt Nam tại Nhật Bản và Hàn Quốc. Thu nhập trung bình:
- **Nhật Bản**: 180,000-300,000 JPY/tháng (≈ 30-50 triệu VNĐ)
- **Hàn Quốc**: 2-3 triệu KRW/tháng (≈ 35-55 triệu VNĐ)

### Chiến lược đầu tư

1. **Tích lũy 3 năm** → 600 triệu - 1.2 tỷ VNĐ
2. **Mua đất nền vùng ven** → Hòa Vang, Long Thành, Từ Sơn
3. **Tokenized** → Chia nhỏ vốn, đa dạng danh mục
4. **Yield 8-16%** → Thu nhập thụ động khi con ở xa

### Rủi ro cần tránh
- Không mua đất không có sổ
- Tránh môi giới không xác minh  
- Kiểm tra quy hoạch trước khi mua
        `,
        category: "XKLĐ",
        author: "Phạm Đức D",
        date: "2026-03-05",
        readTime: "6 phút",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2670&auto=format&fit=crop",
        tags: ["XKLĐ", "Nhật Bản", "Hàn Quốc", "đất nền"],
    },
    {
        slug: "ai-dinh-gia-chinh-xac-den-dau",
        title: "AI định giá BĐS: Chính xác đến đâu và tương lai ra sao?",
        excerpt: "VIVA AI đạt độ chính xác 85-92% trong thử nghiệm. So sánh với Zillow Zestimate và cách AI Việt Nam khác biệt.",
        content: `
## AI định giá hoạt động thế nào?

AI sử dụng hàng triệu điểm dữ liệu:
- Giá giao dịch thực tế
- Vị trí, hạ tầng, tiện ích xung quanh
- Xu hướng thị trường khu vực
- Yếu tố pháp lý, quy hoạch

### So sánh với Zillow

| Tiêu chí | Zillow Zestimate | VIVA AI |
|---|---|---|
| Độ chính xác | 87% | 85-92% |
| Thị trường | Mỹ | Việt Nam |
| Dữ liệu | Công khai | Thu thập + AI |
| Feedback | Có | Có — cải thiện liên tục |

### Lộ trình phát triển

- **Q1 2026**: MVP với 8 tỉnh thành
- **Q2 2026**: Mở rộng 20 tỉnh + heatmap giá
- **Q3 2026**: Dự đoán tăng giá 6-12 tháng
        `,
        category: "Đầu tư",
        author: "Hoàng Anh E",
        date: "2026-03-04",
        readTime: "6 phút",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
        tags: ["AI", "VIVA", "Zillow", "định giá"],
    },
    {
        slug: "5-khu-vuc-dat-nen-tang-gia-manh-2026",
        title: "5 khu vực đất nền tăng giá mạnh nhất 2026",
        excerpt: "Phân tích dữ liệu AI cho thấy 5 khu vực có tốc độ tăng giá 20-30% trong 12 tháng tới.",
        content: `
## Top 5 khu vực đất nền tiềm năng

### 1. Long Thành, Đồng Nai (+30%)
Sân bay quốc tế sắp hoàn thành, hạ tầng kết nối TP.HCM qua cao tốc.

### 2. Nhơn Trạch, Đồng Nai (+28%)
Cầu Nhơn Trạch - Quận 9 sắp thông xe, giá còn thấp.

### 3. Nhà Bè, TP.HCM (+25%)
Quy hoạch đô thị mới, giá đất nền vẫn dưới 30 triệu/m².

### 4. Bến Cát, Bình Dương (+25%)
Khu công nghiệp lớn, nhu cầu nhà ở tăng mạnh.

### 5. Hòa Vang, Đà Nẵng (+20%)
Mở rộng đô thị, dự án resort và khu dân cư mới.

### Lưu ý đầu tư
Dữ liệu chỉ mang tính tham khảo. Luôn kiểm tra pháp lý và quy hoạch trước khi quyết định.
        `,
        category: "Thị trường",
        author: "Nguyễn Văn A",
        date: "2026-03-03",
        readTime: "5 phút",
        image: "https://images.unsplash.com/photo-1582407947092-636b0f5ee7fe?q=80&w=2664&auto=format&fit=crop",
        tags: ["đất nền", "tăng giá", "phân tích AI"],
    },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
    return newsArticles.find((a) => a.slug === slug);
}

export function getNewsByCategory(category: string): NewsArticle[] {
    if (category === "Tất cả") return newsArticles;
    return newsArticles.filter((a) => a.category === category);
}
