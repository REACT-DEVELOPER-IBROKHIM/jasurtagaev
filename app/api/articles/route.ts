import { ARTICLES_MOCK } from "@/mocks/article";

export async function GET() {
  return new Response(JSON.stringify(ARTICLES_MOCK), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
