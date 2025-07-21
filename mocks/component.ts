export const NAVBAR_LIST_MOCK = [
  {
    id: 1,
    label: {
      uz: "Asosiy",
      ru: "Главная",
      en: "Home",
      kr: "Асосий",
    },
    url: "/",
  },
  {
    id: "2",
    label: {
      uz: "Jasur Tagaev haqida",
      ru: "О Жасуре Тагаеве",
      en: "About Jasur Tagaev",
      kr: "Жасур Тагаев ҳақида",
    },
    url: "/about",
  },
  {
    id: "3",
    label: {
      uz: "Galareya",
      ru: "Галерея",
      en: "Gallery",
      kr: "Галерея",
    },
    url: "/media",
    children: [
      {
        id: "3.1",
        label: {
          uz: "Media",
          ru: "Медиа",
          en: "Media",
          kr: "Медиа",
        },
        url: "/media#media",
      },
      {
        id: "3.2",
        label: {
          uz: "Before & After",
          ru: "До и После",
          en: "Before & After",
          kr: "Before & After",
        },
        url: "/media#after-before",
      },
    ],
  },
  {
    id: "4",
    label: {
      uz: "Xizmatlar",
      ru: "Услуги",
      en: "Services",
      kr: "Хизматлар",
    },
    url: "/services",
    children: [
      {
        id: "4.1",
        label: {
          uz: "Diagnostika",
          ru: "Диагностика",
          en: "Diagnosis",
          kr: "Диагностика",
        },
        url: "/services#services-diagnosis",
      },
      {
        id: "4.2",
        label: {
          uz: "Davolash",
          ru: "Лечение",
          en: "Treatment",
          kr: "Даволаш",
        },
        url: "/services#services-treatment",
      },
    ],
  },
  {
    id: "5",
    label: {
      uz: "Maqolalar",
      ru: "Статьи",
      en: "Articles",
      kr: "Мақолалар",
    },
    url: "/articles",
  },
  {
    id: "6",
    label: {
      uz: "Aloqa",
      ru: "Контакты",
      en: "Contact",
      kr: "Алоқа",
    },
    url: "/#footer",
  },
];
