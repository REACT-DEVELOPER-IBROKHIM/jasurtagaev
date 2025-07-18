"use client";
import Banner from "@/components/banner";
import ContactCard from "@/components/contact-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { useTranslations } from "use-intl";

const About = () => {
  const t = useTranslations("about");
  return (
    <>
      <Header />
      <main className="container mx-auto py-4 px-6">
        <div className="container">
          <Banner
            image={"/banner-images/banner-image-about.png"}
            title={{
              uz: "Dr. Jasur Tagaev",
              ru: "Доктор Жасур Тагаев",
              en: "Dr. Jasur Tagaev",
              kr: "Доктор Жасур Тагаев",
            }}
            opacity={0.6}
            height={700}
          />

          <section className="flex flex-col 2xl:flex-row items-center justify-between  gap-8">
            <Image
              src="/jasur-tagaev.jpg"
              alt="Jasur Tagaev"
              width={700}
              height={700}
              className="lg:!w-full"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">{t("person")}</h2>
              <strong className="text-gray-700">{t("title")}</strong>
              <p className="text-gray-600">{t("text1")}</p>
              <p className="text-gray-600">{t("text2")}</p>
              <p className="text-gray-600">{t("text3")}</p>
            </div>
          </section>
          <section
            aria-label="University and Professional Experience"
            className="my-[100px]"
          >
            <ul className="grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <li className="flex justify-center">
                <Image
                  src="/university-logos/uis.png"
                  alt="University Logo"
                  width={150}
                  height={150}
                />
              </li>
              <li className="flex justify-center">
                <Image
                  src="/university-logos/hui-ghent.png"
                  alt="University Logo"
                  width={150}
                  height={150}
                />
              </li>
              <li className="flex justify-center">
                <Image
                  src="/university-logos/ghent.jpg"
                  alt="University Logo"
                  width={120}
                  height={120}
                />
              </li>
              <li className="flex justify-center">
                <Image
                  src="/university-logos/uov.png"
                  alt="University Logo"
                  width={150}
                  height={150}
                />
              </li>
              <li className="flex justify-center">
                <Image
                  src="/university-logos/children.png"
                  alt="University Logo"
                  width={150}
                  height={150}
                />
              </li>
              <li className="flex justify-center">
                <Image
                  src="/university-logos/south.png"
                  alt="University Logo"
                  width={150}
                  height={150}
                />
              </li>
              <li className="flex justify-center">
                <Image
                  src="/university-logos/hui.webp"
                  alt="University Logo"
                  width={150}
                  height={150}
                />
              </li>
            </ul>
          </section>
          <ContactCard />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
