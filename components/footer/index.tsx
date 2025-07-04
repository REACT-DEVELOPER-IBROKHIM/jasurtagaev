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
        <div className="container mx-auto py-4">
          <div className="flex">
            <div className="flex-1">
              <div className="mb-[20px]">
                <p className="text-xl mb-[20px]">{t("contact")}</p>
                <a href="tel:+998991234567">+998991234567</a>
                <br />
                <a href="tel:+998991234567">+998991234567</a>
              </div>
              <div>
                <p className="text-xl mb-[20px]">{t("email")}</p>
                <a href="mailto:jasurtagaev@gmail.com">jasurtagaev@gmail.com</a>
              </div>
              <div>
                <p className="text-xl my-[20px]">{t("socials")}</p>
                <div className="flex gap-x-[20px]">
                  <a href="https://t.me/jasurtagaev" className="text-2xl">
                    <FaTelegram />
                  </a>
                  <a
                    href="https://www.youtube.com/@drjasurtagaev"
                    className="text-2xl"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.instagram.com/jasur_tagaev/"
                    className="text-2xl"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.facebook.com/DoctorJasurTagaev/"
                    className="text-2xl"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl  mb-[20px]">{t("links")}</p>
              <ul className="flex flex-col gap-y-[10px]">
                {NAVBAR_LIST_MOCK.map((item: INavigationItem) => (
                  <li key={item.id}>
                    <Link href={item.url}>{item.label[locale]}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
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
                <iframe
                  width={"100%"}
                  height={260}
                  src="https://yandex.uz/map-widget/v1/?ll=69.255366%2C41.315367&mode=search&oid=10583736196&ol=biz&z=16.44"
                  style={{
                    position: "relative",
                    flex: 1,
                  }}
                ></iframe>
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
