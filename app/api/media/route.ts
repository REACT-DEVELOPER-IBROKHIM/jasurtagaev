import { MEDIA_MOCK } from "@/mocks/media";

export async function GET() {
  return new Response(JSON.stringify(MEDIA_MOCK), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}