import { Metadata } from "next";

export default function useLocalizedMetadata(
  metadataTranslations: Record<string, Metadata>,
  locale: "en" | "uz" | "ru" | "kr" = "en",
): Metadata {
  const localizedMetadata = metadataTranslations[locale || "en"];

  if (!localizedMetadata) {
    return metadataTranslations["en"];
  }

  return {
    title: localizedMetadata.title,
    description: localizedMetadata.description,
    openGraph: {
      title:
        localizedMetadata.openGraph?.title ??
        localizedMetadata.title ??
        undefined,
      description:
        localizedMetadata.openGraph?.description ??
        localizedMetadata.description ??
        undefined,
      images: [
        {
          url: Array.isArray(localizedMetadata.openGraph?.images)
            ? typeof localizedMetadata.openGraph?.images[0] === "string"
              ? localizedMetadata.openGraph?.images[0]
              : (localizedMetadata.openGraph?.images[0] as any)?.url
            : typeof localizedMetadata.openGraph?.images === "string"
              ? localizedMetadata.openGraph?.images
              : (localizedMetadata.openGraph?.images as any)?.url,
          width: 1200,
          height: 630,
          alt: localizedMetadata.title
            ? String(localizedMetadata.title)
            : undefined,
        },
      ],
      siteName: localizedMetadata.title
        ? String(localizedMetadata.title)
        : undefined,
    },
  };
}
