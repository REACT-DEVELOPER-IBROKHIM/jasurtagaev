"use client";

import { IMedia, Locale } from "@/types/article";
import { useLocale, useTranslations } from "next-intl";

const VideosTable = ({ media }: { media: IMedia[] }) => {
  const locale = useLocale() as Locale;
  const t = useTranslations("admin");

  return (
    <div>
      <h1 className="text-2xl mb-8">{t("manage_videos")}</h1>
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-[#232C39] text-white text-left">
          <tr>
            <th className="p-4 border-b border-gray-300 w-[50px]">
              {t("manage_table.no")}
            </th>
            <th className="p-4 border-b border-gray-300">
              {t("manage_table.title")}
            </th>
            <th className="p-4 border-b border-gray-300 w-[120px]">
              {t("manage_table.thumbnail")}
            </th>
            <th className="p-4 border-b border-gray-300">
              {t("manage_table.link")}
            </th>
            <th className="p-4 border-b border-gray-300">
              {t("manage_table.tag")}
            </th>
            <th className="p-4 border-b border-gray-300 w-[180px]">
              {t("manage_table.actions")}
            </th>
          </tr>
        </thead>
        <tbody className="text-left">
          {media.map((media, index) => (
            <tr key={media.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 border-b border-gray-200">
                {index + 1}
              </td>
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
                  {t("manage_table.watch")}
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
                    {t("manage_table.edit")}
                  </button>
                  <button className="px-3 py-1 cursor-pointer bg-red-600 text-white rounded hover:bg-red-700">
                    {t("manage_table.delete")}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideosTable;
