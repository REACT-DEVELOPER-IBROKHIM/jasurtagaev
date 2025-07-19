import { SERVICES_MOCK } from "@/mocks/services";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  console.log("Type:", type);
  if (!type) {
    return new Response("Type query parameter is required", { status: 400 });
  }

  const services = SERVICES_MOCK.filter((service) => service.type.en === type);
  return new Response(JSON.stringify(services), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
