import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lươn Xứ Nghệ – Đặc Sản Miền Trung",
  description:
    "Thưởng thức các món lươn đặc sản xứ Nghệ: cháo lươn, miến lươn, lươn xào sả ớt và nhiều hơn nữa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-amber-50 text-stone-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
