import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/semantic/Header";
import { Footer } from "@/components/semantic/Footer";
import { SchemaMarkup } from "@/components/semantic/SchemaMarkup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enver Nagiyev - Digital Marketing Specialist",
  description: "Digital marketing specialist helping brands grow through strategic campaigns, engaging content, and analytics-driven insights.",
  keywords: ["digital marketing", "SEO", "content creation", "social media marketing", "analytics", "email marketing"],
  authors: [{ name: "Enver Nagiyev" }],
  creator: "Enver Nagiyev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enver-nagiyev.vercel.app",
    title: "Enver Nagiyev - Digital Marketing Specialist",
    description: "Digital marketing specialist helping brands grow through strategic campaigns, engaging content, and analytics-driven insights.",
    siteName: "Enver Nagiyev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enver Nagiyev - Digital Marketing Specialist",
    description: "Digital marketing specialist helping brands grow through strategic campaigns, engaging content, and analytics-driven insights.",
    creator: "@envernagiyev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <SchemaMarkup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
