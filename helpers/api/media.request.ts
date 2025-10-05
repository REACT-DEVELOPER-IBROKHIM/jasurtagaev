import { API_URL } from "@/contants/api";

export async function fetchMediaData() {
  const res = await fetch(`${API_URL}/video`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchAfterBeforeData() {
  const res = await fetch(`${API_URL}/after-before`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
