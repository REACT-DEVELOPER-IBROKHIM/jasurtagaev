import { transformTextToStrong } from "@/helpers/transform";
import { translateContent } from "@/helpers/translation/translate-content";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const Parser = ({ structure }: any) => {
  const locale = useLocale();
  function renderElement(item: any, type: any, content: any, index: number) {
    switch (type) {
      case "list":
        return (
          <ul key={index} className="py-0 md:py-[20px] lg:py-[50px] pl-[30px]">
            {content[locale] &&
              Array.isArray(content[locale]) &&
              content[locale].map((item: any, index: number) => {
                if (item.debug) {
                  console.log("List item:", item);
                }
                return (
                  <li
                    key={index}
                    className="text-16px py-[10px] md:py-[20px] list-decimal"
                  >
                    {transformTextToStrong(item.text || item)}
                    <div className="pl-0 md:pl-[20px] lg:pl-[30px]">
                      {item.elements &&
                        Array.isArray(item.elements) &&
                        item.elements.map((element: any, idx: number) => {
                          return renderElement(
                            element,
                            element.elementType,
                            element.content,
                            idx,
                          );
                        })}
                    </div>
                  </li>
                );
              })}
          </ul>
        );
      case "paragraph":
        return (
          <p
            className="py-[20px] text-[16px] md:py-[30px] md:text-[18px] lg:py-[50px] text-xl"
            key={index}
          >
            {translateContent(content, locale)}
          </p>
        );
      case "heading":
        switch (item.level) {
          case 1:
            return (
              <h1
                className="text-3xl font-bold md:text-3xl lg:text-4xl"
                key={index}
              >
                {transformTextToStrong(translateContent(content, locale))}
              </h1>
            );
          case 2:
            return (
              <h2
                className="text-2xl font-bold md:text-2xl lg:text-3xl"
                key={index}
              >
                {transformTextToStrong(translateContent(content, locale))}
              </h2>
            );
          case 3:
            return (
              <h3
                className="text-[18px] font-bold md:text-xl lg:text-3xl"
                key={index}
              >
                {transformTextToStrong(translateContent(content, locale))}
              </h3>
            );
          case 4:
            return (
              <h4 className="text-xl font-bold" key={index}>
                {transformTextToStrong(translateContent(content, locale))}
              </h4>
            );
          case 5:
            return (
              <h5 className="text-lg font-bold" key={index}>
                {transformTextToStrong(translateContent(content, locale))}
              </h5>
            );
          default:
            return (
              <h6 className="text-base font-bold" key={index}>
                {transformTextToStrong(translateContent(content, locale))}
              </h6>
            );
        }
      case "image":
        return (
          <Image
            className="w-full max-w-[800px] h-[300px] object-cover sm:h-[400px] md:h-[500px] lg:h-[600px]"
            width={700}
            height={300}
            key={index}
            src={content}
            alt="Image"
          />
        );
      case "wrapper":
        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[50px]"
          >
            {item.elements &&
              Array.isArray(item.elements) &&
              item.elements.map((structureInner: any, idx: number) => {
                return renderElement(
                  structureInner,
                  structureInner.elementType,
                  structureInner.content,
                  idx,
                );
              })}
          </div>
        );
      default:
        break;
    }
  }

  return (
    <>
      <div className="container mx-auto py-[40px] md:py-[50px] px-6">
        {structure &&
          Array.isArray(structure) &&
          structure.map((item: any, index) => {
            const { elementType, content } = item;
            return renderElement(item, elementType, content, index);
          })}
      </div>
    </>
  );
};

export default Parser;
