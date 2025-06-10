import { DISEASES_MOCK } from "@/mocks/article";

export async function GET() {
  return new Response(JSON.stringify(DISEASES_MOCK), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
