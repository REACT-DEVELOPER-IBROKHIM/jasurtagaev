export const translateContent = (content: any, locale: string) => {
  if (content) {
    return content[locale] || content["en"] || "";
  }
  return content["en"] || "";
};
