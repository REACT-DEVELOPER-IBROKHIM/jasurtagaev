import { NextRequest } from "next/server";
import { SERVICES_TYPES_MOCK } from "@/mocks/services";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;

  const service = SERVICES_TYPES_MOCK.find((service) => service.slug === slug);

  if (!service) {
    return new Response("Service not found", { status: 404 });
  }

  return new Response(JSON.stringify(service), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
