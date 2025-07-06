export const transformTextToStrong = (str: string) => {
  const match = str.match(/^(.*?:)(.*)$/);
  if (!match) {
    return [str];
  }

  const [_, strongPart, restPart] = match;
  return [<strong key="strong">{strongPart}</strong>, restPart];
};
