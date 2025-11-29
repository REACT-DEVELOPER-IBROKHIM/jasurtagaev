import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { NextIntlClientProvider, hasLocale, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import useLocalizedMetadata from "@/helpers/generator";
import { homePageMetaData } from "@/mocks/metadata";
import { Metadata } from "next";
import { ORIGIN } from "@/contants/api";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale as "en" | "uz" | "ru" | "kr";

  return useLocalizedMetadata(homePageMetaData, locale);
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const asPath = "/";
  const defaultLocale = routing.locales[2];

  return (
    <html lang="en">
      <Head>
        <link
          rel="canonical"
          href={`${ORIGIN}${locale === defaultLocale ? "" : `/${locale}`}${asPath}`}
        />
        <meta
          name="description"
          content="Лучший онкодерматолог в Ташкенте. Диагностика и лечение кожных заболеваний, включая меланому, базалиому и другие новообразования. Запишитесь на консультацию."
        />
        <meta
          name="keywords"
          content="Лучший онкодерматолог Ташкент, Онкодерматолог Ташкент, Онколог кожи Ташкент, Пластический хирург онколог, Осмотр родинок онколог, Хирург кожных опухолей, Онколог мягких тканей, Онколог дерматолог Ташкент, Консультация онкодерматолога, Энг яхши онкодерматолог Тошкент, Онкодерматолог Тошкент, Тери онкологи Тошкент, Пластик жарроҳ онколог"
        />
        <meta name="author" content="Клиника Онкодерматологии Ташкент" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Лучший онкодерматолог в Ташкенте – Диагностика и лечение"
        />
        <meta
          property="og:description"
          content="Профессиональная диагностика и лечение кожных заболеваний в Ташкенте. Запишитесь на консультацию к лучшему онкодерматологу."
        />
        <meta
          property="og:image"
          content="https://example.com/images/onkodermatolog-tashkent.jpg"
        />
        <meta
          property="og:url"
          content="https://example.com/luchshiy-onkodermatolog-tashkent"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://example.com/luchshiy-onkodermatolog-tashkent"
        ></link>
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Клиника Онкодерматологии Ташкент",
              description:
                "Лучший онкодерматолог в Ташкенте. Диагностика и лечение кожных заболеваний по международным стандартам.",
              url: "https://example.com",
              telephone: "+998901234567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Улица Примерная, 123",
                addressLocality: "Ташкент",
                addressCountry: "UZ",
              },
              image: "https://example.com/images/onkodermatolog-tashkent.jpg",
              openingHours: "Mo-Fr 09:00-18:00",
            }),
          }}
        />
      </body>
    </html>
  );
}
