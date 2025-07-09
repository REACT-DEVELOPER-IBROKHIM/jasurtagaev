export const transformTextToStrong = (str: string) => {
  const match = str.match(/^(.*?:)(.*)$/);
  if (!match) {
    return [str];
  }

  const [_, strongPart, restPart] = match;
  return [<strong key="strong">{strongPart}</strong>, restPart];
};

export const truncateText = (str: string, length: number) => {
  return str.slice(0, length) + (str.length > length ? "..." : "");
};
