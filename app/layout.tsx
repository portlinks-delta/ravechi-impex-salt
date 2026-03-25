import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/all-pages/Footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { EMAIL, PHONE_NUMBER } from "@/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://ravechi-impex-salt-hot4.vercel.app"; // 🔁 replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Shree Ravechi Impex | Premium Salt Exporter from Gujarat, India",
    template: "%s | Shree Ravechi Impex",
  },
  description:
    "Shree Ravechi Impex is a trusted exporter of industrial and food grade salt from Kutch, Gujarat, India. ISO certified, FSSAI approved, serving 50+ countries with bulk and container shipments.",
  keywords: [
    "salt exporter India",
    "industrial salt supplier",
    "food grade salt export",
    "Gujarat salt manufacturer",
    "Kutch salt exporter",
    "bulk salt supplier",
    "sea salt India",
    "refined salt export",
    "sodium chloride supplier",
    "Shree Ravechi Impex",
  ],
  authors: [{ name: "Shree Ravechi Impex", url: BASE_URL }],
  creator: "Shree Ravechi Impex",
  publisher: "Shree Ravechi Impex",
  category: "Export / Manufacturing",

  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Shree Ravechi Impex",
    title: "Shree Ravechi Impex | Premium Salt Exporter from Gujarat, India",
    description:
      "Trusted exporter of industrial and food grade salt from Kutch, Gujarat. ISO certified, FSSAI approved, delivering to 50+ countries worldwide.",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Shree Ravechi Impex — Salt Exporter from Gujarat, India",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shree Ravechi Impex | Premium Salt Exporter from Gujarat, India",
    description:
      "Trusted exporter of industrial and food grade salt from Kutch, Gujarat. ISO certified, FSSAI approved, delivering to 50+ countries worldwide.",
    images: ["/favicon.ico"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shree Ravechi Impex",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              description:
                "Trusted exporter of industrial and food grade salt from Kutch, Gujarat, India.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kutch",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: PHONE_NUMBER,
                contactType: "sales",
                email: EMAIL,
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <Toaster />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
