import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kazi Conseils",
  description: "Kazi Conseils - Officiel",
};

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const finalSix = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-FinalSix_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/fonnts.com-FinalSix_Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/fonnts.com-FinalSix_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/fonnts.com-FinalSix_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/fonnts.com-FinalSix_ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/fonnts.com-FinalSix_Heavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-finalsix",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${finalSix.variable}`}>
      <body className="bg-[#FFFDFA] text-[#1E1F3F] flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
