import { ORIGIN } from "@/contants/api";
import { fetchArticleBySlug } from "@/helpers/api/articles.request";
import useLocalizedMetadata from "@/helpers/generator";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await fetchArticleBySlug((await params).slug);
  const locale = resolvedParams.locale as "en" | "uz" | "ru" | "kr";
  const baseUrl = new URL(ORIGIN || "http://localhost:3000");

  const modifiedPostMetadata = {
    en: {
      metadataBase: baseUrl,
      title: post.title.en,
      description: post.description.en,
      openGraph: {
        title: post.title.en,
        description: post.description.en,
        images: post.image ? [{ url: post.image }] : [],
        siteName: post.title.en,
      },
    },
    uz: {
      metadataBase: baseUrl,
      title: post.title.uz,
      description: post.description.uz,
      openGraph: {
        title: post.title.uz,
        description: post.description.uz,
        images: post.image ? [{ url: post.image }] : [],
        siteName: post.title.uz,
      },
    },
    ru: {
      metadataBase: baseUrl,
      title: post.title.ru,
      description: post.description.ru,
      openGraph: {
        title: post.title.ru,
        description: post.description.ru,
        images: post.image ? [{ url: post.image }] : [],
        siteName: post.title.ru,
      },
    },
    kr: {
      metadataBase: baseUrl,
      title: post.title.kr,
      description: post.description.kr,
      openGraph: {
        title: post.title.kr,
        description: post.description.kr,
        images: post.image ? [{ url: post.image }] : [],
        siteName: post.title.kr,
      },
    },
  };

  return useLocalizedMetadata(modifiedPostMetadata, locale);
}

const SingleArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SingleArticleLayout;
