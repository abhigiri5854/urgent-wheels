import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  BRAND,
  EMAIL,
  EMERGENCY_PHONE_PRIMARY_E164,
  EMERGENCY_PHONE_SECONDARY_E164,
} from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEmergencyBar from "@/components/StickyEmergencyBar";
import TopInfoStrip from "@/components/TopInfoStrip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | 24/7 Ambulance Services in Delhi`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "24/7 emergency ambulance services in Delhi. Fast ICU, ventilator & cardiac ambulance with trained paramedics and advanced equipment.",
  metadataBase: new URL("https://urgentwheels.example.com"),
  keywords: [
    "ambulance services in Delhi",
    "emergency ambulance Delhi",
    "ICU ambulance Delhi",
    "ventilator ambulance",
    "cardiac ambulance",
    "ambulance near me Delhi NCR",
    "Janakpuri ambulance",
    "Dwarka ambulance",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: BRAND.name,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    telephone: [EMERGENCY_PHONE_PRIMARY_E164, EMERGENCY_PHONE_SECONDARY_E164],
    areaServed: BRAND.tagline.includes("Delhi")
      ? ["Delhi NCR"]
      : ["Delhi NCR"],
    url: "https://urgentwheels.example.com/",
    makesOffer: [
      { "@type": "Offer", name: "24/7 Emergency Ambulance" },
      { "@type": "Offer", name: "ICU Ambulance" },
      { "@type": "Offer", name: "Ventilator Ambulance" },
      { "@type": "Offer", name: "Cardiac Ambulance" },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[999] focus:top-2 focus:left-2 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-brand-dark"
        >
          Skip to content
        </a>
        <TopInfoStrip />
        <Navbar />
        <StickyEmergencyBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
