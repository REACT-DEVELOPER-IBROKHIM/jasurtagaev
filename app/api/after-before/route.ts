import { AFTER_BEFORE_MOCK } from "@/mocks/media";

export async function GET() {
  return new Response(JSON.stringify(AFTER_BEFORE_MOCK), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
