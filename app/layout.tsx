import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { cookies } from "next/headers";
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

// SEO content (EN / AR)
const seo = {
  en: {
    title: "Software Company & Smart Digital Solutions | Web, Mobile & AI",
    description:
      "We build scalable web applications, mobile apps, dashboards, CRM systems, and AI-powered solutions that help businesses grow faster and smarter.",
    keywords:
      "software company, web development, mobile apps, AI solutions, CRM, dashboards, Next.js, React",
    siteName: "Smart Software Company",
  },
  ar: {
    title: "شركة برمجيات وحلول رقمية ذكية | مواقع وتطبيقات وذكاء اصطناعي",
    description:
      "نقوم بتطوير تطبيقات ويب وتطبيقات موبايل ولوحات تحكم وأنظمة CRM وحلول ذكاء اصطناعي تساعد الشركات على النمو بشكل أسرع وأكثر ذكاءً.",
    keywords:
      "شركة برمجيات, تطوير مواقع, تطبيقات موبايل, ذكاء اصطناعي, أنظمة CRM, داشبورد, نكست جي اس",
    siteName: "شركة البرمجيات الذكية",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "en";
  const isArabic = locale === "ar";

  const data = seo[locale as "en" | "ar"] || seo.en;

  return {
    title: {
      default: data.title,
      template: `%s | ${data.siteName}`,
    },
    description: data.description,
    keywords: data.keywords,

    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      siteName: data.siteName,
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },

    metadataBase: new URL("https://your-domain.com"),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "en";

  let messages = {};

  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Missing messages for locale: ${locale}`, error);
    messages = (await import(`../messages/en.json`)).default;
  }

  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
