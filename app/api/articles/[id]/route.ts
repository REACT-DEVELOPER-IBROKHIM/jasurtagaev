import { NextRequest } from "next/server";
import { ARTICLES_MOCK } from "@/mocks/article";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const article = ARTICLES_MOCK.find((article) => article.id === Number(id));

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  return new Response(JSON.stringify(article), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
