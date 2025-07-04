import React from "react";
import type { Metadata } from "next";
import { Props } from "./type";
import { fetchArticleById } from "@/helpers/api/articles.request";
import Parser from "@/utils/components/parser";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactCard from "@/components/contact-card";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchArticleById((await params).id);

  return {
    title: post.title,
    description: post.description,
  };
}

const page = async ({ params }: Props) => {
  const post = await fetchArticleById((await params).id);

  return (
    <div>
      <Header />
      <Parser structure={post.structure} />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default page;
