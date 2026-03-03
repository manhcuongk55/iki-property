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
  title: "IKI Property — Đầu tư BĐS Việt Nam cho người Việt ở nước ngoài",
  description:
    "Nền tảng giúp người lao động Việt Nam ở nước ngoài đầu tư bất động sản về Việt Nam an toàn, minh bạch và hiệu quả. Công cụ tài chính thông minh, dự án uy tín, hỗ trợ 24/7.",
  keywords: [
    "đầu tư bất động sản",
    "người Việt ở nước ngoài",
    "kiều hối",
    "bất động sản Việt Nam",
    "IKI Property",
  ],
  openGraph: {
    title: "IKI Property — Đầu tư BĐS Việt Nam cho người Việt ở nước ngoài",
    description:
      "Nền tảng giúp người lao động Việt Nam ở nước ngoài đầu tư bất động sản về Việt Nam an toàn, minh bạch và hiệu quả.",
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
