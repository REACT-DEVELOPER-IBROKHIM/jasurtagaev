"use client";
import { IArticle } from "@/types/article";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const AddVideo = () => {
  const t = useTranslations("admin.add_video");
  const [videos, setVideos] = useState<IArticle[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<
    "uz" | "ru" | "en" | "kr"
  >("uz"); // Track selected language
  const [video, setVideo] = useState({
    tag: {
      uz: "",
      ru: "",
      en: "",
      kr: "",
    },
    title: {
      uz: "",
      ru: "",
      en: "",
      kr: "",
    },
    thumbnail: "",
    link: "",
    isFeatured: false,
  });

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value as "uz" | "ru" | "en" | "kr";
    setSelectedLanguage(language);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "tag" | "title",
  ) => {
    const value = e.target.value;
    setVideo((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [selectedLanguage]: value,
      },
    }));
  };

  const handleCreateVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(video);
      if (
        video.title.uz &&
        video.title.ru &&
        video.title.en &&
        video.title.kr &&
        video.tag.uz &&
        video.tag.ru &&
        video.tag.en &&
        video.tag.kr
      ) {
        const response = await fetch("/api/video", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...video,
            thumbnail: `https://img.youtube.com/vi/${video.link}/maxresdefault.jpg`,
            link: `https://www.youtube.com/embed/${video.link}`,
          }),
        });
        if (response.ok) {
          alert("Video created successfully!");
          setVideo({
            tag: { uz: "", ru: "", en: "", kr: "" },
            title: { uz: "", ru: "", en: "", kr: "" },
            thumbnail: "",
            link: "",
            isFeatured: false,
          });
        } else {
          const errorData = await response.json();
          alert("Error creating video: " + errorData.message);
        }
      } else {
        alert("Please fill in all fields with all languages.");
      }
    } catch (error) {
      console.error("Error creating video:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="w-full p-6">
      <div className="bg-white rounded-xl p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          {t("add_title")}
        </h2>
        <select
          className="mb-4 border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option selected value="uz">
            Uzbek
          </option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
          <option value="kr">Cyrillic</option>
        </select>
        <form
          onSubmit={handleCreateVideo}
          className="flex flex-col gap-4 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                {t("title")}
              </label>
              <input
                placeholder={t("title_ph")}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={video.title[selectedLanguage] || ""}
                onChange={(e) => handleInputChange(e, "title")}
                disabled={!selectedLanguage} // Disable if no language is selected
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Video id
              </label>
              <input
                placeholder={"Video id"}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={video.link}
                onChange={(e) =>
                  setVideo((prev) => ({ ...prev, link: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                {t("tag")}
              </label>
              <input
                placeholder={t("tag_ph")}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={video.tag[selectedLanguage] || ""}
                onChange={(e) => handleInputChange(e, "tag")}
                disabled={!selectedLanguage} // Disable if no language is selected
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                {t("search")}
              </label>
              <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="" disabled>
                  Select an article to attach
                </option>
                {videos.map((video: IArticle) => (
                  <option key={video.id} value={video.id}>
                    {video.title?.uz}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={video.isFeatured}
                onChange={(e) =>
                  setVideo((prev) => ({
                    ...prev,
                    isFeatured: e.target.checked,
                  }))
                }
              />
              <label className="text-sm font-medium text-gray-600">
                Featured Video
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium rounded-md py-2 hover:bg-blue-600 transition-colors duration-200 w-[200px]"
          >
            {t("add_button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
