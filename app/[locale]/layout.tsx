import { Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import useLocalizedMetadata from "@/helpers/generator";
import { homePageMetaData } from "@/mocks/metadata";
import { Metadata } from "next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as "en" | "uz" | "ru" | "kr";

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
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
