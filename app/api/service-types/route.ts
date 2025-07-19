import { SERVICES_TYPES_MOCK } from "@/mocks/services";

export async function GET() {
  return new Response(JSON.stringify(SERVICES_TYPES_MOCK), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
