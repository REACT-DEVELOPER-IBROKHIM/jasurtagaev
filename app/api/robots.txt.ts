import { NextApiRequest, NextApiResponse } from "next";

interface RobotsTxtRequest extends NextApiRequest {}
interface RobotsTxtResponse extends NextApiResponse {}

export default function handler(
  req: RobotsTxtRequest,
  res: RobotsTxtResponse,
): void {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(`
    User-agent: *
    Disallow: /_next/
    Disallow: /api/
    Disallow: /404
    Disallow: /500
    Allow: /
    Sitemap: https://jasurtagaev.com/sitemap-en.xml
    Sitemap: https://jasurtagaev.com/sitemap-ru.xml
    Sitemap: https://jasurtagaev.com/sitemap-uz.xml
    Sitemap: https://jasurtagaev.com/sitemap-kr.xml
  `);
}
