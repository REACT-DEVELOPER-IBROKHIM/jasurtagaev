"use client";

import { IMedia, Locale } from "@/types/article";
import { useLocale, useTranslations } from "next-intl";

const VideosTable = ({ media }: { media: IMedia[] }) => {
  const locale = useLocale() as Locale;
  const t = useTranslations("video_table");

  return (
    <table className="w-full border border-gray-300 rounded-lg">
      <thead className="bg-[#232C39] text-white text-left">
        <tr>
          <th className="p-4 border-b border-gray-300 w-[50px]">{t("no")}</th>
          <th className="p-4 border-b border-gray-300">{t("title")}</th>
          <th className="p-4 border-b border-gray-300 w-[120px]">
            {t("thumbnail")}
          </th>
          <th className="p-4 border-b border-gray-300">{t("link")}</th>
          <th className="p-4 border-b border-gray-300">{t("tag")}</th>
          <th className="p-4 border-b border-gray-300 w-[180px]">
            {t("actions")}
          </th>
        </tr>
      </thead>
      <tbody className="text-left">
        {media.map((media, index) => (
          <tr key={media.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-2 border-b border-gray-200">{index + 1}</td>
            <td className="px-4 py-2 border-b border-gray-200">
              {media.title?.[locale]}
            </td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-nowrap">
              <img
                src={media.thumbnail}
                alt={media.title?.[locale]}
                className="w-20 h-14 object-cover rounded"
              />
            </td>
            <td className="px-4 py-2 border-b border-gray-200">
              <a
                href={media.link}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Watch
              </a>
            </td>
            <td className="px-4 py-2 border-b border-gray-200">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                {media.tag?.[locale]}
              </span>
            </td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-nowrap">
              <div className="flex gap-3">
                <button className="px-3 py-1 cursor-pointer bg-orange-600 text-white rounded hover:bg-orange-700">
                  {t("edit")}
                </button>
                <button className="px-3 py-1 cursor-pointer bg-red-600 text-white rounded hover:bg-red-700">
                  {t("delete")}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VideosTable;
