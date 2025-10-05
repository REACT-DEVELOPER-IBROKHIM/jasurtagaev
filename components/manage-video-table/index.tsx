"use client";

import { IMedia, Locale } from "@/types/article";
import { useLocale, useTranslations } from "next-intl";
import { FiTrash } from "react-icons/fi";

const VideosTable = ({ media }: { media: IMedia[] }) => {
  const locale = useLocale() as Locale;
  const t = useTranslations("admin");

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    try {
      const response = await fetch(`/api/video`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        alert("Video deleted successfully!");
      } else {
        alert("Failed to delete the video.");
      }
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("An error occurred while deleting the video.");
    } finally {
      location.reload();
    }
  };

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
            <tr key={media._id} className="hover:bg-gray-50 transition-colors">
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
                  <button
                    onClick={() => handleDelete(media._id)}
                    className="px-3 py-1 cursor-pointer bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    <FiTrash />
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
