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
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
