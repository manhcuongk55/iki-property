import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FeedbackProvider } from "@/components/FeedbackContext";
import FeedbackWidget from "@/components/FeedbackWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "IKI Property — Đất nền 1-2 Tỷ Tokenized cho XKLĐ Nhật-Hàn & Người trẻ",
  description:
    "Đầu tư đất nền từ 600 triệu đến 2 tỷ VNĐ. Token hóa BĐS — sở hữu từ 10 triệu/token. Yield 8-16%/năm. Pháp lý 7 lớp xác minh AI. Dành cho XKLĐ Nhật-Hàn, CEO trẻ & người Việt ở nước ngoài.",
  keywords: [
    "đất nền tokenized",
    "đầu tư bất động sản",
    "XKLĐ Nhật Bản",
    "XKLĐ Hàn Quốc",
    "đất nền 1-2 tỷ",
    "token hóa bất động sản",
    "người Việt ở nước ngoài",
    "kiều hối",
    "IKI Property",
  ],
  openGraph: {
    title: "IKI Property — Đất nền 1-2 Tỷ Tokenized | Yield 8-16%/năm",
    description:
      "Đầu tư đất nền từ 10 triệu/token. Pháp lý 7 lớp AI. Dành cho XKLĐ Nhật-Hàn & người trẻ Việt Nam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} antialiased font-sans`}>
        <FeedbackProvider>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <FeedbackWidget />
        </FeedbackProvider>
      </body>
    </html>
  );
}
