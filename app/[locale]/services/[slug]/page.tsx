import Banner from "@/components/banner";
import ContactCard from "@/components/contact-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ServicesWrapper from "@/components/services-wrapper";
import {
  fetchServiceBySlug,
  fetchSubservicesByType,
} from "@/helpers/api/services.request";
import React from "react";

const ServiceType = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const serviceTypeData = await fetchServiceBySlug((await params).slug);
  const subservicesData = await fetchSubservicesByType(serviceTypeData.type.en);

  return (
    <>
      <Header />
      <main className="container mx-auto py-4 px-6">
        <Banner
          image={
            serviceTypeData.image || "/banner-images/banner-image-services.PNG"
          }
          title={serviceTypeData.title}
          opacity={0.6}
          description={serviceTypeData.description}
        />
        <ServicesWrapper
          type={serviceTypeData.type.en}
          subservicesData={subservicesData}
        />
        <ContactCard />
      </main>
      <Footer />
    </>
  );
};

export default ServiceType;
