import { ORIGIN } from "@/contants/api";
import useLocalizedMetadata from "@/helpers/generator";
import { routing } from "@/i18n/routing";
import { aboutPageMetaData } from "@/mocks/metadata";
import { Metadata } from "next";
import { hasLocale } from "next-intl";
import Head from "next/head";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale as "en" | "uz" | "ru" | "kr";

  return useLocalizedMetadata(aboutPageMetaData, locale);
}

const AboutLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = (await params) as { locale: string };
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const asPath = "/about";
  const defaultLocale = routing.locales[2];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${ORIGIN}${locale === defaultLocale ? "" : `/${locale}`}${asPath}`}
        />
      </Head>
      {children}
    </>
  );
};

export default AboutLayout;
