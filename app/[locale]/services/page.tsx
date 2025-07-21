import Banner from "@/components/banner";
import ContactCard from "@/components/contact-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ServicesWrapper from "@/components/services-wrapper";
import { fetchSubservicesByType } from "@/helpers/api/services.request";

const Services = async () => {
  const subservicesDiagnosisData = await fetchSubservicesByType("diagnosis");
  const subservicesTreatmentData = await fetchSubservicesByType("treatment");

  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        <Banner
          image={"/banner-images/banner-image-services.PNG"}
          title={{
            uz: "Xizmat turlari",
            ru: "Виды услуг",
            en: "Service types",
            kr: "Хизмат турлари",
          }}
          opacity={0.75}
          description={{
            en: "Explore the various services offered by Jasur Tagaev, including diagnosis, treatment, and more.",
            uz: "Jasur Tagaev tomonidan taklif etiladigan turli xizmatlarni, jumladan, diagnostika, davolash va boshqalarni o'rganing.",
            ru: "Изучите различные услуги, предлагаемые Жасуром Тагеевым, включая диагностику, лечение и многое другое.",
            kr: "Жасур Тагаев томонидан таклиф этилган турли хизматларни, жумладан, диагностика, даволаш ва бошқаларни ўрганинг.",
          }}
        />
        <ServicesWrapper
          type="diagnosis"
          subservicesData={subservicesDiagnosisData}
        />
        <ServicesWrapper
          type="treatment"
          subservicesData={subservicesTreatmentData}
        />
        <ContactCard />
      </main>
      <Footer />
    </>
  );
};

export default Services;
