import { useTranslations } from "next-intl";
import React from "react";

const AddVideo = () => {
  const t = useTranslations("admin.add_vedio");

  return (
    <div className="w-full p-6">
      <div className="bg-white rounded-xl p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          {t("add_title")}
        </h2>
        <form className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                {t("title")}
              </label>
              <input
                placeholder={t("title_ph")}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                {t("link")}
              </label>
              <input
                placeholder={t("vedio_ph")}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                {t("thumbnail")}
              </label>
              <input
                placeholder={t("thumbnail_ph")}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                {t("tag")}
              </label>
              <input
                placeholder={t("tag_ph")}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              {t("search")}
            </label>
            <input
              placeholder="Search videos"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium rounded-md py-2 hover:bg-blue-600 transition-colors duration-200 w-full"
          >
            {t("add_button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
