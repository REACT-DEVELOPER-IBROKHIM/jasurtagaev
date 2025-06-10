import { API_URL } from "@/contants/api";
import { notFound } from "next/navigation";

export async function fetchPopularArticles() {
  const res = await fetch(`${API_URL}/popular-articles`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchArticleById(id: string) {
  const res = await fetch(`${API_URL}/articles/${id}`);
  if (!res.ok) {
    notFound()
  }
  return res.json();
}

export async function fetchDiseases() {
  const res = await fetch(`${API_URL}/diseases`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
