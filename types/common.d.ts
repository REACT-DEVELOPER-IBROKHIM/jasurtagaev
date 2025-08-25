export interface LocalizedString {
  uz: string;
  ru: string;
  en: string;
  kr: string;
}

export interface VideoItem {
  id: number;
  tag: LocalizedString;
  title: LocalizedString;
  thumbnail: string;
  link: string;
  isFeatured: boolean;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  verifyToken: string;
  verifyTokenExpiry: string;
}
