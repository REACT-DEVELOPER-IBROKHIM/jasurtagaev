import useLocalizedMetadata from "@/helpers/generator";
import { aboutPageMetaData } from "@/mocks/metadata";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as "en" | "uz" | "ru" | "kr";

  return useLocalizedMetadata(aboutPageMetaData, locale);
}

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AboutLayout;
