import { text } from "stream/consumers";

export const ARTICLES_MOCK = [
  {
    id: 1,
    title: {
      kr: "Актиник кератоз (АК)",
      uz: "Aktinik keratoz (AK)",
      en: "Actinic keratosis (AK)",
      ru: "Актинический кератоз (АК)",
    },
    description: {
      en: "Actinic Keratosis (AK), also known as solar keratosis or senile keratosis, is a precancerous condition that occurs when skin cells become damaged by ultraviolet (UV) radiation from the sun or tanning beds. It primarily affects the outer layer of skin (the epidermis) and can lead to the development of squamous cell carcinoma (SCC) if left untreated. AK is one of the most common precursors to skin cancer, and although it is typically benign, it requires careful monitoring and management.",
      kr: "Актиник кератоз - (шунингдек, қуёш кератози ёки кексалик кератози сифатида ҳам танилган) Актиник кератоз — терининг саратон олди ҳолати бўлиб, қуёш ёки солярийларнинг ультрабинафша (УБ) нурлари билан шикастланиши натижасида юзага келади. Бу ҳолат асосан терининг ташқи қатлами — эпидермисга таъсир қилади ва даволанмаса, ясси ҳужайрали тери саратони (ЙҲТС) ривожланишига олиб келиши мумкин. АК саратон олди ҳолатлари орасида энг кўп учрайдиганларидан биридир. У одатда хавфсиз бўлса-да, диққат билан кузатиш ва даволашни талаб қилади.",
      uz: "Aktinik keratoz - (shuningdek, quyosh keratozi yoki keksalik keratozi sifatida ham tanilgan) Aktinik keratoz — terining saraton oldi holati bo‘lib, quyosh yoki solyariylarning ul'trabinafsha (UB) nurlari bilan shikastlanishi natijasida yuzaga keladi. Bu holat asosan terining tashqi qatlami — epidermisga ta'sir qiladi va davolanmasa, yassi hujayrali teri saratoni (YHTS) rivojlanishiga olib kelishi mumkin. AK saraton oldi holatlari orasida eng ko‘p uchraydiganlaridan biridir. U odatda xavfsiz bo‘lsa-da, diqqat bilan kuzatish va davolashni talab qiladi.",
      ru: "Актинический кератоз (АК), также известный как солнечный кератоз или сенильный кератоз, — это предраковое состояние, возникающее при повреждении клеток кожи ультрафиолетовым (УФ) излучением от солнца или соляриев. Оно в первую очередь затрагивает внешний слой кожи (эпидермис) и может привести к развитию плоскоклеточного рака кожи (ПКР), если не лечить. АК является одним из наиболее распространённых предвестников рака кожи. Хотя оно, как правило, доброкачественное, требует внимательного наблюдения и лечения.",
    },
    image: "/article-images/ak/image-1.jpg",
    href: "/articles/1",
    date: "2025-06-18",
    linkText: {
      uz: "Ko'proq o'qish",
      en: "Read more",
      ru: "Читать далее",
      kr: "Кўпроқ ўқиш",
    },
    isPopular: false,
    structure: [
      {
        elementType: "heading",
        level: 1,
        content: {
          en: "Actinic Keratosis Overview",
          kr: "Актиник кератоз умумий кўриниши",
          uz: "Aktinik keratoz umumiy ko'rinishi",
          ru: "Обзор актинического кератоза",
        },
      },
      {
        elementType: "wrapper",
        elements: [
          {
            elementType: "image",
            content: "/article-images/ak/image-1.jpg",
          },
          {
            elementType: "image",
            content: "/article-images/ak/image-2.jpg",
          },
        ],
      },
      {
        elementType: "paragraph",
        level: 1,
        content: {
          en: "Actinic Keratosis (AK), also known as solar keratosis or senile keratosis, is a precancerous condition that occurs when skin cells become damaged by ultraviolet (UV) radiation from the sun or tanning beds. It primarily affects the outer layer of skin (the epidermis) and can lead to the development of squamous cell carcinoma (SCC) if left untreated. AK is one of the most common precursors to skin cancer, and although it is typically benign, it requires careful monitoring and management.",
          kr: "Актиник кератоз - (шунингдек, қуёш кератози ёки кексалик кератози сифатида ҳам танилган) Актиник кератоз — терининг саратон олди ҳолати бўлиб, қуёш ёки солярийларнинг ультрабинафша (УБ) нурлари билан шикастланиши натижасида юзага келади. Бу ҳолат асосан терининг ташқи қатлами — эпидермисга таъсир қилади ва даволанмаса, ясси ҳужайрали тери саратони (ЙҲТС) ривожланишига олиб келиши мумкин. АК саратон олди ҳолатлари орасида энг кўп учрайдиганларидан биридир. У одатда хавфсиз бўлса-да, диққат билан кузатиш ва даволашни талаб қилади.",
          uz: "Aktinik keratoz - (shuningdek, quyosh keratozi yoki keksalik keratozi sifatida ham tanilgan) Aktinik keratoz — terining saraton oldi holati bo‘lib, quyosh yoki solyariylarning ul'trabinafsha (UB) nurlari bilan shikastlanishi natijasida yuzaga keladi. Bu holat asosan terining tashqi qatlami — epidermisga ta'sir qiladi va davolanmasa, yassi hujayrali teri saratoni (YHTS) rivojlanishiga olib kelishi mumkin. AK saraton oldi holatlari orasida eng ko‘p uchraydiganlaridan biridir. U odatda xavfsiz bo‘lsa-da, diqqat bilan kuzatish va davolashni talab qiladi.",
          ru: "Актинический кератоз (АК), также известный как солнечный кератоз или сенильный кератоз, — это предраковое состояние, возникающее при повреждении клеток кожи ультрафиолетовым (УФ) излучением от солнца или соляриев. Оно в первую очередь затрагивает внешний слой кожи (эпидермис) и может привести к развитию плоскоклеточного рака кожи (ПКР), если не лечить. АК является одним из наиболее распространённых предвестников рака кожи. Хотя оно, как правило, доброкачественное, требует внимательного наблюдения и лечения.",
        },
      },
      {
        elementType: "heading",
        level: 3,
        content: {
          en: "Key Features of Actinic Keratosis (AK):",
          kr: "Актиник кератоз (АК)нинг асосий хусусиятлари:",
          uz: "Aktinik keratoz (AK)ning asosiy xususiyatlari:",
          ru: "Ключевые особенности актинического кератоза (АК):",
        },
      },
      {
        elementType: "list",
        content: {
          en: [
            {
              text: "Appearance: ",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Lesion Characteristics: AK typically appears as a rough, scaly patch or bump on the skin. The lesion is often red, pink, or flesh-colored but may have a brownish or yellowish tinge",
                      "Texture: The surface of the lesion may feel dry, crusty, or gritty to the touch. It can be slightly raised or flat, with some areas being flaky or rough.",
                      "Size: AK lesions are generally small, usually ranging from 2 to 6 millimeters in diameter, though some can be larger.",
                      "Location: The lesions commonly appear on sun-exposed areas of the body, such as the face, ears, scalp, neck, forearms, back of the hands, chest, and shoulders. In individuals who have been exposed to excessive sun over time, AKs may be more widespread, especially in areas like the lips (which can lead to actinic cheilitis).",
                    ],
                  },
                },
              ],
            },

            {
              text: "Risk Factors:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Chronic Sun Exposure: The primary cause of AK is long-term UV exposure, which damages skin cells. Individuals who spend a lot of time outdoors, especially without sun protection, are at higher risk.",
                      "Fair Skin: People with light skin, blond or red hair, and blue or green eyes are more prone to AK due to their reduced ability to produce melanin, the pigment that helps protect the skin from UV damage.",
                      "Age: AK is more common in individuals aged 40 years or older, though it can occur at any age. Older individuals who have accumulated years of sun exposure are particularly at risk.",
                      "Weakened Immune System: People with immunosuppression, such as organ transplant recipients or those with HIV/AIDS, are at higher risk for developing AK.",
                      "History of Sunburns: Individuals who have experienced frequent or severe sunburns are more likely to develop AK.",
                      "Tanning Bed Use: Use of tanning beds, which emit UV radiation, can also increase the risk of developing AK.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Symptoms:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Rough or Scaly Texture: The most common symptom of AK is the presence of a rough, dry, or scaly patch of skin. It may feel like sandpaper or a small bump.",
                      "Itching or Burning: Some people with AK may experience mild symptoms such as itching, burning, or tenderness at the site of the lesion.",
                      "Bleeding or Crusting: In some cases, an AK may bleed or form a crust if it becomes irritated or traumatized.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Diagnosis:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Clinical Examination: An oncodermatologist typically diagnoses AK by visually inspecting the skin. If the lesion is suspicious, the oncodermatologist may inquire about the patient's history of sun exposure and other risk factors.",
                      "Skin Biopsy: If there is concern that an AK might have progressed to skin cancer (such as squamous cell carcinoma), a biopsy of the lesion may be performed. A small sample of the lesion is taken and examined under a microscope for any signs of cancerous changes.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Progression:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Precancerous: AK is considered a precancerous lesion, meaning it has the potential to develop into squamous cell carcinoma (SCC) over time, though most AKs do not become cancerous.",
                      "Squamous Cell Carcinoma: It is estimated that 10-15% of untreated AK lesions may progress to squamous cell carcinoma, a more aggressive form of skin cancer. This risk increases with the size, number, and duration of AKs, especially in individuals with compromised immune systems.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Treatment: The goal of treatment for AK is to remove or treat the precancerous cells to prevent them from developing into squamous cell carcinoma. Treatment options vary based on the number, location, and size of AK lesions, as well as the patient’s overall health.",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Photodynamic Therapy (PDT): This treatment involves applying a photosensitizing agent to the skin and then exposing it to light. The light activates the medication to destroy the abnormal cells.",
                      "Excisional Surgery: In some cases, particularly with large or persistent lesions, a surgical procedure to cut out the AK may be necessary.",
                      "Electrosurgery: This technique uses electric currents to destroy abnormal tissue. It is used for larger or thicker lesions.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Prevention:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Sun Protection: The most effective way to prevent AK is to avoid excessive sun exposure and to use sun protection. This includes applying broad-spectrum sunscreen with an SPF of 30 or higher, wearing protective clothing, seeking shade, and avoiding tanning beds.",
                      "Regular Skin Checks: Regular self-exams and visits to an oncodermatologist can help detect AKs early, when they are easier to treat. Early treatment reduces the risk of the lesion developing into squamous cell carcinoma.",
                      "Protective Clothing: Wearing wide-brimmed hats, sunglasses, and UV-protective clothing can help reduce sun exposure, especially to the face, neck, and ears.",
                      "Avoid Tanning Beds: Tanning beds should be avoided due to their harmful UV radiation, which can increase the risk of developing AK and other types of skin cancer.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Prognosis:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    en: [
                      "Excellent Prognosis: For most individuals, the prognosis is excellent, as AK can usually be effectively treated with minimal risk of progression to squamous cell carcinoma.",
                      "Risk of Recurrence: While AK lesions can be treated, new ones may develop over time, especially if the individual continues to experience sun exposure. Regular monitoring is important to catch any new lesions.",
                      "Malignant Transformation: While most AK lesions do not progress to cancer, untreated lesions or those in individuals with a weakened immune system are at increased risk of developing into squamous cell carcinoma.",
                    ],
                  },
                },
              ],
            },
          ],
          kr: [
            {
              text: "Ташқи кўриниши",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Ўчоқ тавсифи: ғадир-будур, тангачасимон доғ ёки дўмбоқча. Қизил, пушти, тана ранги, жигарранг ёки сарғиш тусда бўлиши мумкин.",
                      "Текстура: қуруқ, пўстлоқ, пайпаслаганда ғадир-будур. Кўтарилган ёки ясси.",
                      "Ўлчами: 2–6 мм, баъзан каттароқ.",
                      "Локализацияси: қуёшга таъсирланган жойлар — юз, қулоқ, бош териси, бўйин, билак, қўл панжаси, кўкрак, елка, лаб.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Хавф омиллари",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Узоқ муддатли қуёш таъсири",
                      "Оқиш тери, кўк/яшил кўз, оч соч",
                      "Ёш (40 ёшдан юқори)",
                      "Иммунитет танқислиги",
                      "Қуёшдан куйишлар тарихи",
                      "Солярийлардан фойдаланиш",
                    ],
                  },
                },
              ],
            },
            {
              text: "Белгилари",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Қумқоғозсимон ғадир-будур доғ",
                      "Қичишиш, ачишиш, оғриқ",
                      "Қонаш ёки пўстлоқ ҳосил бўлиши",
                    ],
                  },
                },
              ],
            },
            {
              text: "Диагностика",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Клиник кўрик: онкодерматолог томонидан визуал текшириш ва анамнез йиғиш орқали.",
                      "Тери биопсияси: ўсмага шубҳа бўлса, тўқима олиб, микроскопда текширилади.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Ривожланиши",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Саратон олди ҳолати: Актиник кератоз кўп ҳолларда саратонга айланмайди.",
                      "ЙҲТС хавфи: 10–15% даволанмаган Актиник кератозлар ясси ҳужайрали тери саратони (ЙҲТС) га айланиши мумкин. Хавф кўп ўчоқ, катта ўлчам ва заиф иммунитетда юқори бўлади.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Даволаш мақсади: Атипик ҳужайраларни йўқ қилиш ва ЙҲТС ривожланишининг олдини олиш.",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Криотерапия: суюқ азот билан музлатиш",
                      "Маҳаллий препаратлар",
                      "Фотодинамик терапия (ФДТ): фотосенсибилизатор ва ёруғлик таъсири",
                      "Жарроҳлик йўли билан олиб ташлаш: катта/турғун ўчоқларда",
                      "Электрохирургия: электр токи орқали тўқимани йўқ қилиш",
                    ],
                  },
                },
              ],
            },
            {
              text: "Профилактика",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Қуёшдан ҳимояланиш: SPF 30+ кремлар, соябон, ҳимоя кийимлар",
                      "Мунтазам тери текширувлари: ўз-ўзини кузатиш ва онкодерматолог кўриги",
                      "Солярийлардан сақланиш: сунъий УБ манбаларидан воз кечиш",
                    ],
                  },
                },
              ],
            },
            {
              text: "Прогноз",
              elements: [
                {
                  elementType: "list",
                  content: {
                    kr: [
                      "Ажойиб: АК аксарият ҳолларда муваффақиятли даволанади",
                      "Рецидив эҳтимоли: янги ўчоқлар пайдо бўлиши мумкин",
                      "Хавфли ўсмага айланиш: даволанмаган, иммунитети заифларда хавф юқори",
                    ],
                  },
                },
              ],
            },
          ],
          uz: [
            {
              text: "Tashqi ko'rinishi",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "O'choq tavsifi: g'adir-budur, tangachamsimon dog' yoki dumbaqcha. Qizil, pushti, tana rangi, jigarrang yoki sariq tusda bo'lishi mumkin.",
                      "Tekstura: quruq, po'stloq, paypaslaganda g'adir-budur. Ko'tarilgan yoki tekis.",
                      "O'lchami: 2–6 mm, ba'zan kattaroq.",
                      "Lokalizatsiyasi: quyoshga ta'sirlangan joylar — yuz, quloq, bosh terisi, bo'yin, bilak, qo'l panjasi, ko'krak, elka, lab.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Xavf omillari",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "Uzoq muddatli quyosh ta'siri",
                      "Oqish teri, ko'k/yashil ko'z, och soch",
                      "Yosh (40 yoshdan yuqori)",
                      "Immunitet tanqisligi",
                      "Quyoshdan kuyishlar tarixi",
                      "Solyariylardan foydalanish",
                    ],
                  },
                },
              ],
            },
            {
              text: "Belgilari",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "Qumqo'g'ozsimon g'adir-budur dog'",
                      "Qichishish, achishish, og'riq",
                      "Qonash yoki po'stloq hosil bo'lishi",
                    ],
                  },
                },
              ],
            },
            {
              text: "Diagnostika",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "Klinik ko'rik: onkodermatolog tomonidan vizual tekshirish va anamnez yig'ish orqali.",
                      "Teri biopsiyasi: o'smaga shubha bo'lsa, to'qima olib, mikroskopda tekshiriladi.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Rivojlanishi",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "Klinik ko'rik: onkodermatolog tomonidan vizual tekshirish va anamnez yig'ish orqali.",
                      "Teri biopsiyasi: o'smaga shubha bo'lsa, to'qima olib, mikroskopda tekshiriladi.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Davolash maqsadi: Atipik hujayralarni yo'q qilish va YHTS rivojlanishining oldini olish.",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "Krioterapiya: suyuq azot bilan muzlatish",
                      "Mahalliy preparatlar",
                      "Fotodinamik terapiya (FDT): fotosensibilizator va yorug'lik ta'siri",
                      "Jarrohlik yo'li bilan olib tashlash: katta/turg'un o'choklarda",
                      "Elektroxirurgiya: elektr toki orqali to'qimani yo'q qilish",
                    ],
                  },
                },
              ],
            },
            {
              text: "Profilaktika",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "Quyoshdan himoyalanish: SPF 30+ kremlar, soyabon, himoya kiyimlar",
                      "Muntazam teri tekshiruvlari: o'z-o'zini kuzatish va onkodermatolog ko'rigi",
                      "Solyariylardan saqlanish: sun'iy UB manbalaridan voz kechish",
                    ],
                  },
                },
              ],
            },
            {
              text: "Prognoz",
              elements: [
                {
                  elementType: "list",
                  content: {
                    uz: [
                      "Ajoyib: AK aksariyat hollarda muvaffaqiyatli davolanadi",
                      "Retsidiv ehtimoli: yangi o'choklar paydo bo'lishi mumkin",
                      "Xavfli o'smaga aylanish: davolangan, immuniteti zaiflarda xavf yuqori",
                    ],
                  },
                },
              ],
            },
          ],
          ru: [
            {
              text: "Внешний вид:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Характеристика очага: АК обычно проявляется в виде шероховатого, чешуйчатого пятна или бугорка на коже. Очаг часто имеет красный, розовый или телесный цвет, но может быть с коричневатым или желтоватым оттенком.",
                      "Текстура: Поверхность может быть сухой, коркой покрытой или шероховатой на ощупь. Может быть немного приподнятой или плоской, с шелушением.",
                      "Размер: Обычно от 2 до 6 мм в диаметре, но может быть и больше.",
                      "Локализация: Чаще всего возникает на участках, подверженных солнцу — лице, ушах, коже головы, шее, предплечьях, тыльной стороне кистей, груди и плечах. У людей с длительным воздействием солнца АК может быть более распространённой, особенно на губах (в таком случае может развиться актинический хейлит).",
                    ],
                  },
                },
              ],
            },
            {
              text: "Факторы риска:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Хроническое воздействие солнца: Главная причина — длительное воздействие УФ-лучей. Люди, часто находящиеся на солнце без защиты, подвергаются высокому риску.",
                      "Светлая кожа: Люди с бледной кожей, светлыми волосами и голубыми или зелёными глазами более склонны к АК из-за пониженного уровня меланина, который защищает от УФ-излучения.",
                      "Возраст: Чаще встречается у людей старше 40 лет, но может развиться и раньше.",
                      "Ослабленный иммунитет: Люди с иммунодефицитом (например, после трансплантации органов или с ВИЧ/СПИД) подвержены более высокому риску.",
                      "История солнечных ожогов: Частые и сильные ожоги увеличивают вероятность развития АК.",
                      "Использование соляриев: Искусственные источники УФ-излучения также повышают риск.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Симптомы:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Шероховатая или чешуйчатая кожа: Самый распространённый симптом — грубое сухое пятно, напоминающее наждачную бумагу.",
                      "Зуд или жжение: У некоторых наблюдаются зуд, жжение или болезненность в поражённой области.",
                      "Кровоточивость или образование корки: При раздражении очаг может начать кровоточить или покрываться коркой.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Диагностика:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Клинический осмотр: Обычно диагноз ставит онкодерматолог при визуальном осмотре кожи и сборе анамнеза.",
                      "Биопсия кожи: Если есть подозрение на злокачественное перерождение (например, в ПКР), проводится биопсия — берётся образец ткани для микроскопического исследования.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Прогрессирование:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Предраковое состояние: АК имеет потенциал перерасти в плоскоклеточный рак кожи, хотя в большинстве случаев этого не происходит.",
                      "Плоскоклеточный рак кожи: По оценкам, 10–15% нелеченых АК могут перерасти в ПКР. Риск увеличивается при множественных или длительно существующих очагах, особенно у людей с ослабленным иммунитетом.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Лечение: Цель лечения — удалить или разрушить атипичные клетки, чтобы предотвратить развитие ПКР. Выбор метода зависит от количества, размера, локализации очагов и состояния здоровья пациента.",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Криотерапия (замораживание): Замораживание поражённых участков жидким азотом — распространённый метод для отдельных очагов.",
                      "Местные препараты",
                      "Фотодинамическая терапия (ФДТ): На кожу наносят фотосенсибилизатор, затем воздействуют светом, активируя препарат и уничтожая атипичные клетки.",
                      "Хирургическое удаление: Применяется при крупных или устойчивых очагах.",
                      "Электрохирургия: Уничтожение ткани электрическим током — для крупных или плотных поражений.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Профилактика:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Защита от солнца: Наиболее эффективный способ — избегать избыточного воздействия УФ-лучей. Используйте солнцезащитные кремы с SPF 30 и выше, носите защитную одежду, избегайте пребывания на солнце в пиковые часы.",
                      "Регулярные осмотры кожи: Самоосмотры и визиты к онкодерматологу помогают раннему выявлению и лечению.",
                      "Защитная одежда: Широкополые шляпы, солнцезащитные очки и одежда с УФ-защитой особенно важны.",
                      "Избегание соляриев: Использование соляриев повышает риск АК и других видов рака кожи.",
                    ],
                  },
                },
              ],
            },
            {
              text: "Прогноз:",
              elements: [
                {
                  elementType: "list",
                  content: {
                    ru: [
                      "Отличный прогноз: У большинства пациентов АК успешно лечится и не прогрессирует.",
                      "Риск рецидива: Даже после лечения могут появляться новые очаги, особенно при продолжении воздействия солнца.",
                      "Злокачественное перерождение: Хотя большинство очагов АК не становятся злокачественными, при отсутствии лечения и ослабленном иммунитете риск возрастает.",
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
      {
        elementType: "heading",
        level: 3,
        content: {
          en: "Summary:",
          kr: "Хулоса",
          uz: "Xulosa:",
          ru: "Вывод:",
        },
      },
      {
        elementType: "paragraph",
        content: {
          en: "Actinic Keratosis (AK) is a precancerous skin lesion caused by chronic sun exposure, typically appearing as a rough, scaly patch or bump on sun-exposed skin. It has the potential to develop into squamous cell carcinoma if left untreated, but early detection and treatment are often highly effective. Treatment options include cryotherapy, topical medications, and laser therapy, and the primary prevention method is sun protection to avoid UV damage. Regular skin checks are recommended to detect and manage AK lesions early.",
          kr: "Актиник кератоз — узоқ муддатли қуёш таъсиридан келиб чиққан саратон олди терининг шикастланишидир. Одатда қуёш таъсирига кўпроқ учрайдиган жойларда ғадир-будур доғлар кўринишида намоён бўлади. Эрта аниқлаш ва самарали даволаш орқали ясси ҳужайрали тери саратони ривожланишининг олдини олиш мумкин. Асосий профилактика — қуёшдан ҳимоя ва мунтазам терини текшириб туриш.",
          uz: "Aktinik keratoz — uzoq muddatli quyosh ta'siridan kelib chiqqan saraton oldi terining shikastlanishidir. Odatda quyosh ta'siriga ko'proq uchraydigan joylarda g'adir-budur dog'lar ko'rinishida namoyon bo'ladi. Erta aniqlash va samarali davolash orqali yassi hujayrali teri saratoni rivojlanishining oldini olish mumkin. Asosiy profilaktika — quyoshdan himoya va muntazam terini tekshirib turish.",
          ru: "Актинический кератоз (АК) — это предраковое кожное поражение, вызванное хроническим воздействием солнца, обычно проявляющееся в виде шероховатого, чешуйчатого пятна или бугорка на открытых участках кожи. Если его не лечить, оно может развиться в плоскоклеточный рак кожи, но раннее обнаружение и лечение часто оказываются очень эффективными. К методам лечения относятся криотерапия, местные препараты и лазерная терапия, а основным методом профилактики является защита от солнца для предотвращения повреждения УФ-лучами. Рекомендуется регулярная проверка кожи для раннего выявления и лечения АК.",
        },
      },
    ],
    type: "disease",
  },
  {
    id: 2,
    title: {
      kr: "Атеромалар",
      uz: "Ateromalar",
      en: "Atheromas",
      ru: "Атеромы",
    },
    description: {
      en: "Atheromas, also known as sebaceous cysts or epidermoid cysts, are benign (non-cancerous) lumps or growths that develop within the skin, typically caused by the accumulation of sebum (an oily substance produced by sebaceous glands). These cysts are generally slow-growing and can be found in various parts of the body, most commonly on the face, neck, and back.",
      kr: "Атеромалар, шунингдек, ёғ кисталари ёки эпидермоид кисталар деб ҳам аталади, терида ривожланадиган хавфсиз (рак эмас) зичлашмалар ёки неоплазмалардир. Улар одатда тери ёғининг (ёғ безлари ишлаб чиқарадиган ёғ моддаси) тўпланиши натижасида юзага келади. Бу кисталар одатда секин ўсади ва тананинг турли қисмларида, кўпинча юз, бўйин ва орқада учраши мумкин.",
      uz: "Ateromalar, shuningdek, yog‘ kistalari yoki epidermoid kistalar deb ham ataladi, terida rivojlanadigan xavfsiz (rak emas) zichlashmalar yoki neoplazmalardir. Ular odatda teri yog‘ining (yog‘ bezlari ishlab chiqaradigan yog‘ moddasi) to‘planishi natijasida yuzaga keladi. Bu kistalar odatda sekin o‘sadi va tananing turli qismlarida, ko‘pincha yuz, bo‘yin va orqada uchrashi mumkin.",
      ru: "Атеромы, также известные как сальные кисты или эпидермоидные кисты, — это доброкачественные (не раковые) уплотнения или новообразования, которые развиваются в коже. Они обычно возникают в результате накопления кожного сала (жирного вещества, вырабатываемого сальными железами). Эти кисты, как правило, растут медленно и могут встречаться в различных частях тела, чаще всего на лице, шее и спине.",
    },
    image: "/article-images/ath/image-1.jpg",
    href: "/articles/2",
    date: "2025-06-22",
    linkText: {
      uz: "Ko'proq o'qish",
      en: "Read more",
      ru: "Читать далее",
      kr: "Кўпроқ ўқиш",
    },
    isPopular: true,
    structure: [
      {
        elementType: "list",
        content: {
          en: ["En list item 1", "En list item 2", "En list item 3"],
          kr: [
            "Кр рўйхат элемент 1",
            "Кр рўйхат элемент 2",
            "Кр рўйхат элемент 3",
          ],
          uz: [
            "Уз рўйхат элемент 1",
            "Уз рўйхат элемент 2",
            "Уз рўйхат элемент 3",
          ],
          ru: [
            "Ру элемент списка 1",
            "Ру элемент списка 2",
            "Ру элемент списка 3",
          ],
        },
      },
    ],
    type: "disease",
  },
  {
    id: 3,
    title: {
      kr: "Базалиома",
      uz: "Bazalioma",
      en: "Basal Cell Carcinoma (BCC)",
      ru: "Базалиома",
    },
    description: {
      en: "Basal Cell Carcinoma (BCC) is the most common form of skin cancer. It originates in the basal cells, which are located in the lowest layer of the epidermis (the outermost layer of the skin). BCC is typically slow-growing, locally invasive, and rarely metastasizes (spreads to other parts of the body), but it can cause significant local damage if left untreated. While it is generally not considered life-threatening, early detection and treatment are crucial to prevent complications.",
      kr: "Базал ҳужайрали тери саратониБазал ҳужайрали тери саратони (БҲС) тери саратонининг энг кенг тарқалган шаклидир. У эпидермиснинг пастки қаватида (терининг энг ташқи қаватида) жойлашган базал ҳужайралардан ҳосил бўлади. Одатда, Базал ҳужайрали тери саратони (БҲС) секин ўсади, маҳаллий инвазив ва камдан-кам ҳолларда метастаз беради (тананинг бошқа қисмларига тарқалади), аммо даволанмаса, тўқималарнинг сезиларли маҳаллий бузилишига олиб келиши мумкин. Умуман олганда, у ҳаёт учун хавфли ҳисобланмаса-да, асоратларнинг олдини олиш учун эрта ташхис қўйиш ва даволаш муҳим аҳамиятга эга.",
      uz: "Bazal hujayrali teri saratoniBazal hujayrali teri saratoni (BHS) teri saratonining eng keng tarqalgan shaklidir. U epidermisning pastki qavatida (terining eng tashqi qavatida) joylashgan bazal hujayralardan hosil bo‘ladi. Odatda, Bazal hujayrali teri saratoni (BHS) sekin o‘sadi, mahalliy invaziv va kamdan-kam hollarda metastaz beradi (tananing boshqa qismlariga tarqaladi), ammo davolanmasa, to‘qimalarning sezilarli mahalliy buzilishiga olib kelishi mumkin. Umuman olganda, u hayot uchun xavfli hisoblanmasa-da, asoratlarning oldini olish uchun erta tashxis qo‘yish va davolash muhim ahamiyatga ega.",
      ru: "Базально-клеточный рак кожи (БКРК) — это самая распространённая форма рака кожи. Он возникает из базальных клеток, расположенных в нижнем слое эпидермиса (самого внешнего слоя кожи). Обычно БКРК медленно растёт, локально инвазивен и редко метастазирует (распространяется на другие части тела), но при отсутствии лечения может вызывать значительное местное разрушение тканей. Хотя он в целом не считается опасным для жизни, ранняя диагностика и лечение имеют решающее значение для предотвращения осложнений.",
    },
    image: "/article-images/bcc/image-1.jpg",
    href: "/articles/3",
    date: "2025-06-25",
    linkText: {
      uz: "Ko'proq o'qish",
      en: "Read more",
      ru: "Читать далее",
      kr: "Кўпроқ ўқиш",
    },
    isPopular: true,
    structure: [
      {
        elementType: "list",
        content: {
          en: ["En list item 1", "En list item 2", "En list item 3"],
          kr: [
            "Кр рўйхат элемент 1",
            "Кр рўйхат элемент 2",
            "Кр рўйхат элемент 3",
          ],
          uz: [
            "Уз рўйхат элемент 1",
            "Уз рўйхат элемент 2",
            "Уз рўйхат элемент 3",
          ],
          ru: [
            "Ру элемент списка 1",
            "Ру элемент списка 2",
            "Ру элемент списка 3",
          ],
        },
      },
    ],
    type: "disease",
  },
];
