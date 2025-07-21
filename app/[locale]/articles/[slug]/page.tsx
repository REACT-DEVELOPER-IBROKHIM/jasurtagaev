import React from "react";
import { Props } from "./type";
import { fetchArticleBySlug } from "@/helpers/api/articles.request";
import Parser from "@/utils/components/parser";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactCard from "@/components/contact-card";
import BackToTop from "@/components/back-to-top";

const page = async ({ params }: Props) => {
  const post = await fetchArticleBySlug((await params).slug);
  return (
    <>
      <Header />
      <Parser structure={post.structure} />
      <ContactCard />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
