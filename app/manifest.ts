import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jasur Tagaev | Skin cancer and melanoma specialist",
    short_name: "Jasur Tagaev",
    description:
      "Skin cancer and melanoma specialist | Teri saratoni va va melanoma mutaxassisi | Специалист по раку кожи и меланоме",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
