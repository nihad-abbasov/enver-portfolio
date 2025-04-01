import { Header } from "@/components/semantic/Header";
import { Footer } from "@/components/semantic/Footer";
import { Main } from "@/components/semantic/Main";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ənvar Nağıyev – Digital Marketing Specialist",
  description: "Explore the portfolio of Ənvar Nağıyev, a digital marketing specialist focused on strategy, content, and performance.",
  openGraph: {
    title: "Ənvar Nağıyev – Digital Marketing Specialist",
    description: "Explore the portfolio of Ənvar Nağıyev, a digital marketing specialist focused on strategy, content, and performance.",
    url: "https://enver-digital.vercel.app",
    siteName: "Enver Digital",
    images: [
      {
        url: "https://enver-digital.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Ənvar Nağıyev – Digital Marketing Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
