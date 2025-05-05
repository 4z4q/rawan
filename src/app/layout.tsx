import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "روان علي | مصممة جرافيك محترفة",
  description:
    "اكتشف أعمال المصممة روان علي، المتخصصة في التصميم باستخدام Adobe والذكاء الاصطناعي، مع لمسة إبداعية تركز على التفاصيل والجودة.",
  keywords:
    "روان علي, تصميم جرافيك, تصميم حسب الطلب, Adobe, ذكاء اصطناعي, فوتوشوب, إليستريتور, تصميم عصري, أعمال تصميم",
  authors: [{ name: "روان علي" }],
  robots: "index, follow",
  openGraph: {
    title: "روان علي | مصممة جرافيك محترفة",
    description:
      "معرض أعمال المصممة روان علي في مجال التصميم الإبداعي باستخدام أدوات Adobe وتقنيات الذكاء الاصطناعي.",
    // url: "https://rawan-design.com", // ضع رابطك الفعلي هنا إن وُجد
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className}   antialiased`}>{children}</body>
    </html>
  );
}
