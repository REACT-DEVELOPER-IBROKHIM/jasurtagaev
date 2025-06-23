import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "uz", "kr"],

  defaultLocale: "uz",
});
