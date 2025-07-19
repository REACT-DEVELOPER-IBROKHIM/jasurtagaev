import { API_URL } from "@/contants/api";
import { notFound } from "next/navigation";

export async function fetchServices() {
  const res = await fetch(`${API_URL}/service-types`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchServiceBySlug(slug: string) {
  const res = await fetch(`${API_URL}/service-types/${slug}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export async function fetchSubservicesByType(type: string) {
  const res = await fetch(`${API_URL}/services?type=${type}`);
  console.log(res, "response");
  if (!res.ok) {
    throw new Error("Failed to fetch subservices");
  }
  return res.json();
}
