import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreeRoom | Find a free classroom",
  description: "Quickly find classrooms that are currently free or will be free during a selected future period.",
  verification: {
    google: "udAx7g7BP10ISaN9d2hbEsyra9HfxaBULnOvcTEkUME",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
        {children}
        <Footer />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6TSFSM183B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6TSFSM183B');
          `}
        </Script>
      </body>
    </html>
  );
}
