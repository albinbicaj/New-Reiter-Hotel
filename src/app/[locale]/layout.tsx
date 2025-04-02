// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Public_Sans, Sorts_Mill_Goudy, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';


// Font configurations
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-raleway", 
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"], 
  variable: "--font-public-sans",
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-sorts-mill-goudy",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-montserrat",
});

// Metadata
export const metadata: Metadata = {
  title: "New Reiter Hotel",
  description: "Luxury hotel in Venice",
  icons: {
    icon: "/favicon.ico",
  },
};

// Supported locales
const locales = ['en', 'it'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  // Validate locale first
  unstable_setRequestLocale(locale);
  if (!locales.includes(locale)) {
    notFound();
  }

  // Load messages
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`
        ${raleway.variable} 
        ${publicSans.variable} 
        ${sortsMillGoudy.variable} 
        ${montserrat.variable} 
        antialiased overflow-x-hidden w-full
      `}>
        <NextIntlClientProvider 
          locale={locale} 
          messages={messages}
          timeZone="Europe/Rome"
          now={new Date()}
        >
          {children}
          <Toaster position="top-right" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}