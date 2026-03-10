# 🏙️ IKI Property Platform (BPT Land Intelligence MVP)

**IKI Property** là nền tảng Bất động sản Thông minh (PropTech) kết hợp AI, tập trung vào phân khúc "vừa túi tiền" (đất nền 1-2 tỷ, tokenized BĐS) dành cho luồng tiền nhàn rỗi từ chuyên gia, người trẻ đô thị, và đặc biệt là nhóm **Xuất khẩu lao động (XKLĐ) Nhật Bản - Hàn Quốc**. 

Dự án này là minh chứng khái niệm (MVP) cho hệ thống lõi **VIVA AI** và **Chiến dịch bán hàng không cần xem đất** thông qua việc xây dựng niềm tin bằng công nghệ và minh bạch 100%.

---

## 🎯 Tầm nhìn & Mục tiêu (Project Vision)
- **Tập khách hàng cốt lõi:** Kỹ sư, thực tập sinh XKLĐ ở nước ngoài có sẵn nguồn vốn 1-2 tỷ, khao khát mua đất quê hương nhưng vướng rào cản địa lý và niềm tin.
- **Giải pháp:** Chuyển đổi rủi ro thành sự an tâm thông qua [7 Lớp Xác Minh Sự Thật (Basao Framework)](#). Đưa 100% trải nghiệm mua bán BĐS lên online.
- **Business Result:** Đã test thành công chốt 3 lô đất nền tokenized chỉ trong 1 ngày mà khách không cần xem thực địa.

---

## 🧩 Các Module Chính (Core Modules)

Repository này chứa toàn bộ Source Code của Frontend App (Next.js 14). Dưới đây là các tính năng mũi nhọn đã được tích hợp:

### 1. 🤖 VIVA AI Engine (`/valuation`)
- **Định giá tự động:** Người dùng nhập địa chỉ/tọa độ, hệ thống AI trả về khoảng giá (Price Range) dựa trên dữ liệu crawling từ 8 tỉnh thành và 40+ quận huyện.
- **Phân tích Insight:** Hiển thị xu hướng giá, điểm tin cậy (Confidence Score), và liệt kê các tài sản tham chiếu lân cận (Comparable Transactions).

### 2. 🔥 Landing Page Chiến dịch "1-2 Tỷ Tokenized" (`/campaign`)
- Thiết kế hưng phấn, thúc đẩy chuyển đổi (Funnels) mua đất nền phân mảnh (Tokenized).
- **Phễu Hứng Lead (Lead Capture):** Thay vì đẩy khách ra Zalo tự do dễ rớt, hệ thống tích hợp modal thu thập thông tin (Tên, Phone, Quốc gia đang ở, Ngân sách) ngay trên web trước khi đưa khách vào Zalo Group cộng đồng.

### 3. 💼 Sales CRM Dashboard (`/admin/leads`)
- **Control Tower cho Sales:** Trang quản trị nội bộ dành riêng cho đội ngũ Sales (Director/Admin) theo dõi 100% khách hàng đổ về từ trang Campaign.
- Thống kê KPI thời gian thực, quản lý trạng thái Lead (New, Contacted, Converted, Failed). Tích hợp link Zalo 1-click để Sales kết nối lập tức.

### 4. 💬 IKI Chat (Berty Protocol Concept) (`/chat`)
- Giao diện phòng chat cộng đồng real-time được chia theo khu vực (Long Thành, Đà Nẵng) và chủ đề (XKLĐ, Pháp lý).
- Gợi mở việc tích hợp E2E Encryption (Berty Protocol) giúp cộng đồng XKLĐ và chuyên gia thảo luận đầu tư ẩn danh, an toàn 100%.

### 5. 🗺️ Bản đồ Khám phá BĐS (`/map`)
- Trải nghiệm khám phá các lô đất nền trực quan trên bản đồ Việt Nam.
- Dynamic filtering theo khoảng giá và khu vực.

### 6. 📰 News & Insights (`/news`)
- Module cập nhật kiến thức đầu tư, pháp lý mua đất từ xa, và xu hướng thị trường (Tokenized Real estate).

---

## 🛠️ Tech Stack & Kiến trúc

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI/Styling:** [Tailwind CSS](https://tailwindcss.com/) (Premium Dark, Glassmorphism, Gold & Navy theme)
- **Data State:** Hiện hành đang dùng cấu trúc Mock Data file cứng (`src/data/`) và `localStorage` DB để làm MVP test thị trường tốc độ chớp nhoáng.
- **Deployment:** [Vercel](https://vercel.com/) (CI/CD Automated)
- **Localization:** 100% Tiếng Việt (`html lang="vi"`).

---

## 📂 Cấu trúc Thư mục (Project Structure)

```text
frontend/
├── src/
│   ├── app/                    # Next.js 14 App Router Pages
│   │   ├── admin/leads/        # Sales CRM Dashboard (Lead Management)
│   │   ├── campaign/           # Tokenized Real Estate Landing Page
│   │   ├── chat/               # IKI Chat / Community Rooms
│   │   ├── map/                # Interactive Property Map Search
│   │   ├── news/               # Market Insights & News
│   │   ├── valuation/          # VIVA AI Valuation Interface
│   │   └── properties/         # Core Property Listings
│   ├── components/             # Reusable UI Components
│   │   ├── LeadModal.tsx       # Lead Capture Form UI
│   │   ├── LeadCTA.tsx         # Wrapper component for CTAs
│   │   ├── Header.tsx          # Main Navigation
│   │   └── Footer.tsx
│   └── data/                   # MVP Local Data & Logic Services
│       ├── leads.ts            # LocalStorage CRM DB Logic
│       ├── valuation.ts        # Mock VIVA AI Engine Logic
│       ├── chatData.ts         # Mock Chat Rooms & Users
│       └── properties.ts       # Main Property Listings Database
└── package.json
```

---

## 🚀 Hướng dẫn Chạy (Quick Start)

Nếu bạn là dev mới tiếp nhận repo này để phát triển tiếp tính năng (vd: nối Backend thật thay thế localStorage), hãy làm theo các bước sau:

1. **Clone repository:**
   ```bash
   git clone https://github.com/manhcuongk55/iki-property.git
   cd iki-property/frontend
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy Môi trường Dev:**
   ```bash
   npm run dev
   ```
   *Ứng dụng sẽ chạy tại `http://localhost:3000`*

4. **Build Production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🔜 Roadmap (Các bước tiếp theo)

Khi tiếp quản repo này, đây là những ưu tiên kiến trúc cần nâng cấp để biến MVP thành Production-Grade:
1. **Kết nối DB thật:** Replace toàn bộ file trong thư mục `src/data/` bằng Prisma/Supabase server actions.
2. **Real-time Engine:** Cập nhật `chat/page.tsx` để kết nối WebSocket (Socket.io hoặc Supabase Realtime).
3. **Phân quyền (RBAC):** Bảo vệ trang `/admin/leads` bằng NextAuth (chỉ cho phép user có role="sales" hoặc "admin" được xem).
4. **VIVA AI API:** Tích hợp endpoint Python Fast-API của Model AI thực tế vào `/valuation`.

---
*Developed with momentum by the Core Team. Toả sáng sự An toàn và Sự thật.*
