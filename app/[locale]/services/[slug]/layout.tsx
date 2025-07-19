import { ORIGIN } from "@/contants/api";
import { fetchServiceBySlug } from "@/helpers/api/services.request";
import useLocalizedMetadata from "@/helpers/generator";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceType = await fetchServiceBySlug((await params).slug);
  const locale = resolvedParams.locale as "en" | "uz" | "ru" | "kr";
  const baseUrl = new URL(ORIGIN || "http://localhost:3000");

  const modifiedPostMetadata = {
    en: {
      metadataBase: baseUrl,
      title: serviceType.title.en,
      description: serviceType.description.en,
      openGraph: {
        title: serviceType.title.en,
        description: serviceType.description.en,
        images: serviceType.image ? [{ url: serviceType.image }] : [],
        siteName: serviceType.title.en,
      },
    },
    uz: {
      metadataBase: baseUrl,
      title: serviceType.title.uz,
      description: serviceType.description.uz,
      openGraph: {
        title: serviceType.title.uz,
        description: serviceType.description.uz,
        images: serviceType.image ? [{ url: serviceType.image }] : [],
        siteName: serviceType.title.uz,
      },
    },
    ru: {
      metadataBase: baseUrl,
      title: serviceType.title.ru,
      description: serviceType.description.ru,
      openGraph: {
        title: serviceType.title.ru,
        description: serviceType.description.ru,
        images: serviceType.image ? [{ url: serviceType.image }] : [],
        siteName: serviceType.title.ru,
      },
    },
    kr: {
      metadataBase: baseUrl,
      title: serviceType.title.kr,
      description: serviceType.description.kr,
      openGraph: {
        title: serviceType.title.kr,
        description: serviceType.description.kr,
        images: serviceType.image ? [{ url: serviceType.image }] : [],
        siteName: serviceType.title.kr,
      },
    },
  };

  return useLocalizedMetadata(modifiedPostMetadata, locale);
}

const ServiceTypeLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ServiceTypeLayout;
