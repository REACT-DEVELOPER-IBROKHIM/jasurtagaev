import React from "react";
import type { Metadata } from "next";
import { Props } from "./type";
import { fetchArticleById } from "@/helpers/api/articles.request";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchArticleById((await params).id);

  return {
    title: post.title,
    description: post.description,
  };
}

const page = async ({ params }: Props) => {
  const post = await fetchArticleById((await params).id);

  return <div></div>;
};

export default page;
