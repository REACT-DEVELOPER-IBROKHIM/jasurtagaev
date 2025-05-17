import { API_URL } from "@/contants/api";

export async function fetchPopularArticles() {
  const res = await fetch(`${API_URL}/popular-articles`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
