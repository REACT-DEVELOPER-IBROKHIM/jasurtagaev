import VideosTable from "@/components/manage-vedio-table";
import { useTranslations } from "next-intl";
import React from "react";

const Manage = () => {
  const t = useTranslations("admin");

  return (
    <div>
      <h3>{t("manageVideos")}</h3>
      <VideosTable />
    </div>
  );
};

export default Manage;
