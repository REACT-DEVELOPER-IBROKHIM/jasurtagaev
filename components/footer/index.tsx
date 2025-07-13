import { NAVBAR_LIST_MOCK } from "@/mocks/component";
import { INavigationItem } from "@/types/article";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("footer");
  type Locale = "uz" | "ru" | "en" | "kr";
  const locale = useLocale() as Locale;
  return (
    <>
      <footer id="footer" className="bg-primary text-white py-[40px]">
        <div className="container mx-auto py-4 px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex-1">
              <div className="mb-[20px]">
                <p className="text-[16px] md:text-xl mb-[20px]">
                  {t("contact")}
                </p>
                <a
                  href="tel:+998991662220"
                  className="text-[14px] md:text-[16px]"
                >
                  +998 (99) 166 22 20
                </a>
              </div>
              <div>
                <p className="text-[16px] md:text-xl mb-[20px]">{t("email")}</p>
                <a
                  href="mailto:jasurtagaev@gmail.com"
                  className="text-[14px] md:text-[16px]"
                >
                  jasurtagaev@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[16px] md:text-xl my-[20px]">
                  {t("socials")}
                </p>
                <div className="flex gap-x-[20px]">
                  <a
                    href="https://t.me/jasur_tagaev"
                    title="Go to Telegram"
                    aria-label="Go to Telegram"
                    className="text-2xl"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href="https://www.youtube.com/@drjasurtagaev"
                    title="Go to YouTube"
                    aria-label="Go to YouTube"
                    className="text-2xl"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.instagram.com/jasur_tagaev/"
                    title="Go to Instagram"
                    aria-label="Go to Instagram"
                    className="text-2xl"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.facebook.com/DoctorJasurTagaev/"
                    title="Go to Facebook"
                    aria-label="Go to Facebook"
                    className="text-2xl"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[16px] md:text-xl mb-[20px]">{t("links")}</p>
              <ul className="flex flex-col gap-y-[10px]">
                {NAVBAR_LIST_MOCK.map((item: INavigationItem) => (
                  <li key={item.id} className="text-[14px] md:text-[16px]">
                    <Link
                      title={`Go to ${item.label[locale]}`}
                      aria-label={`Go to ${item.label[locale]}`}
                      href={item.url}
                    >
                      {item.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-full mt-[30px]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <a
                  href="https://yandex.uz/maps/org/amir_temur_square_tashkent_uzbekistan/10583736196/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px",
                  }}
                >
                  {t("address")}
                </a>
                <a
                  href="https://yandex.uz/maps/10335/tashkent/category/garden_center/184106480/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px",
                  }}
                >
                  Садовый центр в Ташкенте
                </a>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <a
                    href="https://yandex.uz/maps/org/128530246647/?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "0px",
                    }}
                  >
                    Centromed
                  </a>
                  <a
                    href="https://yandex.uz/maps/10335/tashkent/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "14px",
                    }}
                  >
                    Медцентр, клиника в Ташкенте
                  </a>
                  <a
                    href="https://yandex.uz/maps/10335/tashkent/category/diagnostic_center/184106106/?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "28px",
                    }}
                  >
                    Диагностический центр в Ташкенте
                  </a>
                  <iframe
                    src="https://yandex.uz/map-widget/v1/org/128530246647/?ll=69.320600%2C41.368028&z=16"
                    className="w-full"
                    width="560"
                    height="300"
                    frameBorder="1"
                    allowFullScreen
                    style={{ position: "relative" }}
                    title="Yandex Map"
                  ></iframe>
                </div>
                <br />
                <address>{t("address")}</address>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <div className="text-center py-4 border-t border-gray-300 bg-primary text-white">
          <p className="text-sm">
            © {new Date().getFullYear()} jasurtagaev.com. {t("rights")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
