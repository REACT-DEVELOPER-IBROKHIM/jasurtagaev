export const translateContent = (
  content: { [key: string]: string },
  locale: string
) => {
  return content[locale] || content["en"] || "";
};
