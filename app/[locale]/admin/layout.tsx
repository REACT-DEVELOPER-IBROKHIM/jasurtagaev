import { DASHBOARD_LIST_MOCK } from "@/mocks/component";
import Image from "next/image";
import React from "react";
import { INavigationItem, Locale } from "@/types/article";
import { useLocale, useTranslations } from "next-intl";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";
import "./style.css";
import LanguageSelector from "@/components/language-selector";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale() as Locale;
  const t = useTranslations("footer");

  return (
    <div className="flex h-screen">
      <aside className="min-w-[250px] bg-[#232C39] flex flex-col justify-between h-screen">
        <div>
          <div className="px-[31px] py-[29px] mb-[11px]">
            <Image
              src="/logo.png"
              alt="Logo Jasur Tagaev Portfolio - Oncologist"
              width={190}
              height={60}
              className="w-[190px] h-[60px]"
              loading="lazy"
            />
          </div>
          <ul>
            {DASHBOARD_LIST_MOCK.map((menu: INavigationItem) => (
              <div key={menu.id} className="list-item">
                <li className="text-[#fff] flex items-center text-xl uppercase justify-center p-[14px] border-y border-y-[#898989]">
                  {menu.label[locale]}
                  {menu.children && (
                    <>
                      <MdKeyboardArrowDown className="inline text-3xl ml-2 mt-[-5px] to-bottom" />
                      <MdKeyboardArrowUp className="hidden text-3xl ml-2 mt-[-5px] to-top" />
                    </>
                  )}
                </li>
                {menu.children && (
                  <div className="sub-list">
                    <ul>
                      {menu.children.map((child) => (
                        <li
                          key={child.id}
                          className="text-white bg-sub-nav text-lg border-b-[1px] border-b-gray-600 text-center uppercase"
                        >
                          <Link
                            href={`/${locale}${child.url}`}
                            title={`Go to ${child.label[locale]}`}
                            aria-label={`Go to ${child.label[locale]}`}
                            prefetch={true}
                            className="block p-[14px] hover:bg-primary/50 transition-colors duration-300 ease-in-out"
                          >
                            {child.label[locale]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <LanguageSelector />
          <div className="py-4 text-white  text-center">
            <p className="text-[14px]">
              © {new Date().getFullYear()} jasurtagaev.com. <br />
              {t("rights")}
            </p>
          </div>
        </div>
      </aside>
      <main className="py-8 p-[16px] flex-1">{children}</main>
    </div>
  );
}
