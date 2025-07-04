import { ARTICLES_MOCK } from "@/mocks/article";

export async function GET() {
  const diseases = ARTICLES_MOCK.filter(
    (article) => article.type === "disease",
  );
  return new Response(JSON.stringify(diseases), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
