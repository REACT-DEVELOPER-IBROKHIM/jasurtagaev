import { ORIGIN } from "@/contants/api";
import useLocalizedMetadata from "@/helpers/generator";
import { routing } from "@/i18n/routing";
import { galleryPageMetaData } from "@/mocks/metadata";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale as "en" | "uz" | "ru" | "kr";

  return useLocalizedMetadata(galleryPageMetaData, locale);
}

const MediaLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const asPath = "/media";
  const defaultLocale = routing.locales[2];
  const { locale } = (await params) as { locale: string };

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

export default MediaLayout;
