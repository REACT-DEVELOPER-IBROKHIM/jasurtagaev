import Banner from "@/components/banner";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

//meta tags

export const metadata = {
  title: "About | Jasur Tagaev",
  description:
    "Learn more about Jasur Tagaev, his journey, and his contributions to the tech community.",
  openGraph: {
    title: "About | Jasur Tagaev",
    description:
      "Learn more about Jasur Tagaev, his journey, and his contributions to the tech community.",
    images: [
      {
        url: "/banner-images/banner-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Jasur Tagaev",
      },
    ],
    siteName: "Jasur Tagaev",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Jasur Tagaev",
    description:
      "Learn more about Jasur Tagaev, his journey, and his contributions to the tech community.",
    images: ["/banner-images/banner-image-about.jpg"],
  },
};

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <div className="container">
          <Banner
            image={"/banner-images/banner-image-about.png"}
            title="Dr. Jasur Tagaev"
            description=""
            opacity={0.6}
            height={700}
          />

          <section className="flex items-center justify-between gap-8">
            <Image
              src="/jasur-tagaev.jpg"
              alt="Jasur Tagaev"
              width={700}
              height={700}
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">Dr. Jasur Tagaev</h2>
              <strong className="text-gray-700">Specialist in oncology, skin and soft tissue oncology including oncodermatology, and plastic surgery (reconstructive)</strong>
              <p className="text-gray-600">
                <strong>Dr. Jasur Abdusamatovich</strong> provides effective medical care for patients with diseases of skin cancer and soft tissue oncology, and reconstructive plastic surgery. He also conducts an early detection of skin cancer examinations and analyze subcutaneous benign and malignant formations, diagnoses and screens both altered and unaltered moles, and performs conservative and surgical, offering plastic corrections treatments including MOH’S surgery in accordance with American and European standards.
              </p>
              <p className="text-gray-600">
                He received his higher education at the Tashkent Pediatric Medical Institute (ToshPMI). He has undergone advanced training at the following international institutions of University of Virginia, University of Illinois in Chicago, University of Southwestern Medical Center in Dallas in the USA.
              </p>
              <p className="text-gray-600">
                Additionally, he has completed practical training in the following institutions of Ghent University in Belgium, Institute of Tropical Medicine in Belgium, Belgium Academy of Palliative (Oncology) Medicine, and also Wack post training courses in the Europe.
                Dr. Tagaev has professional experience at Turkish and Indian’s health providing medical facilities. At the moment Dr. Tagaev consultant and surgeon of oncology clinics, hospitals and trainer of skin and soft tissue oncology and dermatoscopy
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
