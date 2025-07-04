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
          <ul key={index} className="py-[50px]  pl-[30px]">
            {content[locale] &&
              Array.isArray(content[locale]) &&
              content[locale].map((item: any, index: number) => (
                <li key={index} className="py-[10px] list-decimal">
                  {item.text || item}
                  <div className="pl-[30px]">
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
              ))}
          </ul>
        );
      case "paragraph":
        return (
          <p className="py-[50px] text-xl" key={index}>
            {translateContent(content, locale)}
          </p>
        );
      case "heading":
        switch (item.level) {
          case 1:
            return (
              <h1 className="text-4xl font-bold" key={index}>
                {translateContent(content, locale)}
              </h1>
            );
          case 2:
            return (
              <h2 className="text-3xl font-bold" key={index}>
                {translateContent(content, locale)}
              </h2>
            );
          case 3:
            return (
              <h3 className="text-2xl font-bold" key={index}>
                {translateContent(content, locale)}
              </h3>
            );
          case 4:
            return (
              <h4 className="text-xl font-bold" key={index}>
                {translateContent(content, locale)}
              </h4>
            );
          case 5:
            return (
              <h5 className="text-lg font-bold" key={index}>
                {translateContent(content, locale)}
              </h5>
            );
          default:
            return (
              <h6 className="text-base font-bold" key={index}>
                {translateContent(content, locale)}
              </h6>
            );
        }
      case "image":
        return (
          <Image
            className="!max-w-[700px] flex-1 h-auto object-cover"
            width={600}
            height={300}
            key={index}
            src={content}
            alt="Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        );
      case "wrapper":
        return (
          <div
            key={index}
            className="flex justify-center flex-wrap gap-y-4 py-[50px]"
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
      <div className="container mx-auto py-[100px]">
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
