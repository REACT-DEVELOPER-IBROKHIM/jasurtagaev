import { useTranslations } from "next-intl";
import React from "react";

const Admin = () => {
  const t = useTranslations('admin');
  return (
    <div>
      <h3>{t('addNewVideo')}</h3>
    </div>
  );
};

export default Admin;
