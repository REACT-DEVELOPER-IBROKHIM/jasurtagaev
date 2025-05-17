import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { Props } from "./type";
import { API_URL } from "@/contants/api";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).id;

  const post = await fetch(`${API_URL}/${slug}`).then((res) =>
    res.json(),
  );

  return {
    title: post.title,
    description: post.description,
  };
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);
  return <div>page</div>;
};

export default page;
