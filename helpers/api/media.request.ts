import { API_URL } from "@/contants/api";

export async function fetchMediaData() {
  const res = await fetch(`${API_URL}/media`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
