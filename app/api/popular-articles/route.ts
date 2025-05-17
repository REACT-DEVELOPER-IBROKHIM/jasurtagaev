import { ARTICLES_MOCK } from "@/mocks/article";

export async function GET() {
  const popularArticles = ARTICLES_MOCK.filter((article) => article.isPopular);
  return new Response(JSON.stringify(popularArticles), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
