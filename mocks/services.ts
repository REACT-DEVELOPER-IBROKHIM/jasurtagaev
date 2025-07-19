export const SERVICES_TYPES_MOCK = [
  {
    id: 1,
    title: {
      uz: "Tashxis xizmatlari",
      ru: "Услуги диагностики",
      en: "Diagnosis services",
      kr: "Ташхис хизматлари",
    },
    type: {
      uz: "tashxis",
      ru: "диагностика",
      en: "diagnosis",
      kr: "ташхис",
    },
    slug: "diagnosis-диагностика-tashxis-ташхис",
    description: {
      uz: "Biz to‘liq teri tekshiruvi (TBSE), dermatoskop yordamida tekshirish, FotoFinder texnologiyasi orqali skrining va turli biopsiya turlarini (kesma, panch, insizion, ekssizion, signal limfa tuguni biopsiyasi) taklif etamiz. Ushbu usullar teri saratonini erta va aniq aniqlashni ta'minlaydi, ilg‘or texnologiyalar va professional yondashuvdan foydalanadi.",
      ru: "Мы предлагаем полный осмотр кожи (TBSE), осмотр с помощью дерматоскопа, скрининг с использованием технологии FotoFinder и различные виды биопсий (срезная, панч, инцизионная, эксцизионная, биопсия сигнального лимфоузла). Эти методы обеспечивают точное и раннее выявление рака кожи, используя передовые технологии и профессиональный подход.",
      en: "Our diagnosis services include Total Body Skin Exam (TBSE), dermatoscope inspection, FotoFinder mole mapping, and biopsies (shave, punch, incisional, excisional, sentinel lymph node). These methods ensure thorough skin cancer detection, leveraging advanced technology and precise techniques for early diagnosis and treatment.",
      kr: "Биз тўлиқ тери текшируви (TBSE), дерматоскоп ёрдамида текшириш, FotoFinder технологияси орқали скрининг ва турли биопсия турларини (кесма, панч, инсизион, экссизион, сигнал лимфа тугуни биопсияси) таклиф этамиз. Ушбу усуллар тери саратонини эрта ва аниқ аниқлашни таъминлайди, илғор технологиялар ва профессионал ёндашувдан фойдаланади.",
    },
    image: "/service-images/service-type-diagnosis.jpg",
  },
  {
    id: 2,
    title: {
      uz: "Davolash xizmatlari",
      ru: "Услуги лечения",
      en: "Treatment services",
      kr: "Даволаш хизматлари",
    },
    type: {
      uz: "davolash",
      ru: "лечение",
      en: "treatment",
      kr: "даволаш",
    },
    slug: "treatment-лечение-davolash-даволаш",
    description: {
      uz: "Biz CO2 lazeri bilan ablyasiya qilish, krioxirurgiya, Surgitron apparati yordamida jarrohlik, elektrodesikatsiya, elektrodesikatsiya va kyuretaj, fotodinamik terapiya, mahalliy va o‘choq ichi kimyoterapiya, immunomodulyatorlar, nur terapiyasi, yuzaki nur terapiyasi, jarrohlik yo‘li bilan kesib olish va Moos jarrohligini taklif etamiz. Ushbu zamonaviy usullar teri kasalliklarini samarali davolashni ta'minlaydi.",
      ru: "Мы предлагаем CO2-лазерную абляцию, криохирургию, радиоволновую хирургию (Сургитрон), электродесикацию, ED&C, фотодинамическую терапию, топическую и внутриочаговую химиотерапию, иммуномодуляторы, лучевую терапию, хирургическое иссечение и метод Мооса для эффективного лечения кожных заболеваний.",
      en: "Our treatment services include CO2 laser ablation, cryosurgery, Surgitron surgery, electrodesiccation, ED&C, photodynamic therapy, topical and intralesional chemotherapy, immunomodulator drugs, superficial and standard radiation therapy, surgical excision, and Mohs surgery, offering advanced, precise, and effective skin cancer treatments.",
      kr: "Биз CО2 лазери билан абляция қилиш, криохирургия, Сургитрон аппарати ёрдамида жарроҳлик, электродесикатсия, электродесикатсия ва кюретаж, фотодинамик терапия, маҳаллий ва ўчоқ ичи кимётерапия, иммуномодуляторлар, нур терапияси, юзаки нур терапияси, жарроҳлик йўли билан кесиб олиш ва Моос жарроҳлигини таклиф этамиз. Ушбу замонавий усуллар тери касалликларини самарали даволашни таъминлайди.",
    },
    image: "/service-images/service-type-treatment.jpg",
  },
];

export const SERVICES_MOCK = [
  {
    id: 1,
    title: {
      uz: "Terini to‘liq tekshirish",
      ru: "Полный осмотр кожи",
      en: "A total body skin exam (TBSE)",
      kr: "Терини тўлиқ текшириш",
    },
    description: {
      uz: 'Bu bizning mutaxassisimiz tomonidan "Jismoniy ko‘rik va anamnez to‘plash bo‘yicha Beyts qo‘llanmasi" (havola) asosida terini sinchkovlik bilan tekshirish bo‘lib, xavfli bo‘lishi mumkin bo‘lgan g‘ayrioddiy xollar, o‘smalar yoki teri anomaliyalarini aniqlashga qaratilgan. Ko‘rik boshdan oyoq, jumladan, odatda quyosh nuri ta\'sir qilmaydigan joylarni baholashni o‘z ichiga oladi va o‘z vaqtida tashxis qo‘yish va davolash uchun potensial teri saratonini erta aniqlashga qaratilgan.',
      ru: "Это тщательный осмотр кожи нашим специалистом на основе «Руководства Бейтс по физическому осмотру и сбору анамнеза» (ссылка), направленный на выявление необычных родинок, новообразований или аномалий кожи, которые могут быть злокачественными. Осмотр включает оценку с головы до ног, включая участки, которые обычно не бывают под солнечным воздействием, и направлен на раннее выявление потенциального рака кожи для своевременной диагностики и лечения.",
      en: 'Is a thorough inspection of the skin by our healthcare professional based on "Bates\' Guide to Physical Examination and History Taking"(link) to identify any unusual moles, growths, or skin abnormalities that could be cancerous. The exam involves a head-to-toe assessment, including areas not always exposed to the sun, and aims to detect potential skin cancers early for prompt diagnosis and treatment.',
      kr: 'Бу бизнинг мутахассисимиз томонидан "Жисмоний кўрик ва анамнез тўплаш бўйича Бейтс қўлланмаси" (ҳавола) асосида терини синчковлик билан текшириш бўлиб, хавфли бўлиши мумкин бўлган ғайриоддий холлар, ўсмалар ёки тери аномалияларини аниқлашга қаратилган. Кўрик бошдан оёқ, жумладан, одатда қуёш нури таъсир қилмайдиган жойларни баҳолашни ўз ичига олади ва ўз вақтида ташхис қўйиш ва даволаш учун потенциал тери саратонини эрта аниқлашга қаратилган.',
    },
    type: {
      uz: "tashxis",
      ru: "диагностика",
      en: "diagnosis",
      kr: "ташхис",
    },
    image: "/service-images/sub-services/tbse.jpeg",
    isFeatured: false,
  },
  {
    id: 2,
    title: {
      uz: "Dermatoskop yordamida tekshirish (Noinvasive)",
      ru: "Осмотр с помощью дерматоскопа (неинвазивно)",
      en: "Inspection with dermatoscope (Non-invasive)",
      kr: "Дерматоскоп ёрдамида текшириш (ноинвазив)",
    },
    description: {
      uz: "Dermatoskop - bu teri tekshiruvi uchun ishlatiladigan qo‘l asbobi bo‘lib, u teri o‘sma yoki anomaliyalarini kattalashtirish va yoritish imkonini beradi. Bu usul terining yuzasini va uning ostki tuzilmalarini yanada batafsil o‘rganishga yordam beradi, bu esa teri saratonini, ayniqsa melanomani aniqlashda aniqroq bo‘lishga yordam beradi. Dermatoskop yordamida teri saratonining erta belgilarini aniqlash mumkin, bu esa kasallikni davolash imkoniyatlarini oshiradi.",
      ru: "Дерматоскоп — это ручной прибор для эпилюминесцентной микроскопии, используемый при осмотрах кожи для увеличения и подсветки кожных образований. Он позволяет более детально изучить как поверхность кожи, так и её подповерхностные структуры. Это повышает точность выявления рака кожи, особенно меланомы, и помогает отличить доброкачественные образования от злокачественных. Дерматоскоп помогает обнаружить ранние признаки рака кожи, которые могут быть не видны невооружённым глазом.",
      en: "A dermatoscope is a handheld epiluminescence microscopy used during skin exams to magnify and illuminate skin lesions, allowing for a more detailed examination of the skin's surface and subsurface structures. This improves the detection of skin cancer, especially melanoma, and helps differentiate between benign and malignant lesions. By providing a clearer view of the skin, dermatoscopes help detect early signs of skin cancer that might be missed by the naked eye.",
      kr: "Дерматоскоп - бу тери ҳосилаларини катталаштириш ва ёритиш учун тери текширувида қўлланиладиган эпилюминессент микроскопия учун қўл асбобидир. У тери юзасини ҳам, унинг юза ости тузилмаларини ҳам батафсил ўрганиш имконини беради. Бу тери саратонини, айниқса меланомани аниқлаш аниқлигини оширади ва хавфсиз ўсмаларни хавфли ўсмалардан фарқлашга ёрдам беради. Дерматоскоп оддий кўз билан кўринмайдиган тери саратонининг дастлабки аломатларини аниқлашда ёрдам беради.",
    },
    type: {
      uz: "tashxis",
      ru: "диагностика",
      en: "diagnosis",
      kr: "ташхис",
    },
    image: "/service-images/sub-services/dermatoscope.jpg",
    isFeatured: false,
  },
  {
    id: 5,
    title: {
      uz: "CO2 lazeri bilan ablyasiya qilish",
      ru: "Абляция CO2-лазером",
      en: "CO2 laser ablation",
      kr: "CО2 лазери билан абляция қилиш",
    },
    description: {
      uz: "Karbonat angidrid lazeri yordamida terini lazerli silliqlash, terining shikastlangan yoki eski qatlamlarini olib tashlash va kollagen ishlab chiqarishni rag‘batlantirish. Ajinlar, chandiqlar, quyoshdan shikastlanish va ba'zi saraton oldi holatlarida qo‘llaniladi. Muolajadan so‘ng teri yangilanadi va yanada silliq va elastik bo‘ladi.",
      ru: "Лазерная шлифовка кожи с помощью углекислотного лазера, удаляющая повреждённые или старые слои кожи и стимулирующая выработку коллагена. Применяется при морщинах, шрамах, повреждениях от солнца и некоторых предраковых состояниях. После процедуры кожа обновляется и становится более гладкой и упругой.",
      en: "CO2 laser ablation is a skin resurfacing procedure that uses a carbon dioxide laser to remove damaged or aged skin layers, promoting collagen production and new skin growth. It's used to treat various skin conditions, including wrinkles, scars, sun damage, and some precancerous lesions. The procedure involves controlled vaporization of skin tissue using the laser's infrared light, followed by a healing period where the treated area regenerates with smoother, tighter, and more youthful-looking skin.",
      kr: "Карбонат ангидрид лазери ёрдамида терини лазерли силлиқлаш, терининг шикастланган ёки эски қатламларини олиб ташлаш ва коллаген ишлаб чиқаришни рағбатлантириш. Ажинлар, чандиқлар, қуёшдан шикастланиш ва баъзи саратон олди ҳолатларида қўлланилади. Муолажадан сўнг тери янгиланади ва янада силлиқ ва эластик бўлади.",
    },
    type: {
      uz: "davolash",
      ru: "лечение",
      en: "treatment",
      kr: "даволаш",
    },
    image: "/service-images/sub-services/co2.jpg",
    isFeatured: false,
  },
];
