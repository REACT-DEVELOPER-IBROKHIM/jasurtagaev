import { NextRequest } from "next/server";
import { ARTICLES_MOCK } from "@/mocks/article";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;

  const article = ARTICLES_MOCK.find((article) => article.slug === slug);

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  return new Response(JSON.stringify(article), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
