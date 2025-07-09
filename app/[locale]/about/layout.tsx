import useLocalizedMetadata from "@/helpers/generator";
import { aboutPageMetaData } from "@/mocks/metadata";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale as "en" | "uz" | "ru" | "kr";

  return useLocalizedMetadata(aboutPageMetaData, locale);
}

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AboutLayout;
