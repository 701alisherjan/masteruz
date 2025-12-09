export interface MenuItem {
  id: string;
  title: string;
  items?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  submenu: string[];
}

export interface TopMenu {
  id: string;
  title: string;
  type: "services" | "rental";
  categories?: ServiceCategory[];
  leftMenu?: MenuItem[];
}

// Tepadagi 2ta menyu
export const topMenus: TopMenu[] = [
  {
    id: "services",
    title: "Yuqori balandlikdagi ishlar, sanoat alpinizmi",
    type: "services",
    categories: [
      {
        id: "demontage",
        title: "Demontaj ishlari",
        icon: "🔧",
        submenu: [
          "Polikarbonatni demontaj qilish",
          "Panel-qavslarni demontaj qilish",
          "Turli konstruksiyalarni demontaj qilish",
        ],
      },
      {
        id: "montage",
        title: "Montaj ishlari",
        icon: "🏗️",
        submenu: [
          "Polikarbonat montaji",
          "Panel-qavslar montaji",
          "Yana xizmatlar...",
        ],
      },
      {
        id: "equipment",
        title: "Maydon uskunalari va tizimlari",
        icon: "🛠️",
        submenu: [
          "Konditsionerlashtirish, chiroqlar",
          "Gaz uskunalari",
          "Santexnika uskunalari",
        ],
      },
      {
        id: "masters",
        title: "Soatiga usta",
        icon: "👷",
        submenu: [
          "Ob'yekt, bo'yoqchilar, gipschilar",
          "Shiftlar bilan ishlar",
          "Kalitga ta'mir",
        ],
      },
      {
        id: "plumbing",
        title: "Santexnika, isitish, kanalizatsiya",
        icon: "🚰",
        submenu: [
          "Santexnika o'rnatish",
          "Isitish tizimini ta'mirlash",
          "Kanalizatsiyani tozalash",
        ],
      },
    ],
  },
  {
    id: "rental",
    title: "Asbob-uskunalarni ijaraga olish",
    type: "rental",
    categories: [
      {
        id: "electric",
        title: "Elektr asboblarini ijaraga olish",
        icon: "⚡",
        submenu: [
          "Burg'ular va perforatorlar",
          "Silliqlash mashinalari",
          "Aralar va elektrik to'pilar",
        ],
      },
      {
        id: "pneumatic",
        title: "Pnevmatik asboblarni ijaraga olish",
        icon: "💨",
        submenu: [
          "Pnevmatik bolg'alar",
          "Pnevmatik gaykovurtlar",
          "Bo'yoq purkagichlar",
        ],
      },
      {
        id: "generators",
        title: "Generatorlarni ijaraga olish",
        icon: "🔌",
        submenu: [
          "Benzin generatorlar",
          "Dizel generatorlar",
          "Payvandlash generatorlari",
        ],
      },
      {
        id: "construction",
        title: "Qurilish asboblarini ijaraga olish",
        icon: "🏭",
        submenu: [
          "Qurilish changyutgichlari",
          "Beton aralashtirgichlar",
          "Qozonlar va minoralar",
        ],
      },
      {
        id: "gas",
        title: "Benzin asboblarini ijaraga olish",
        icon: "⛽",
        submenu: [
          "Benzinli arra",
          "Maysazor kesish mashinalari",
          "Motosikllar",
        ],
      },
    ],
  },
];

export const leftMenuItems: MenuItem[] = [
  { id: "construction", title: "Qurilish" },
  { id: "external", title: "Tashqi ishlar, sanoat tahlili" },
  { id: "gas-equipment", title: "Gaz uskunalari va tizimlari" },
  { id: "conditioning", title: "Konditsionerlashtirish, ventilyatsiya" },
  { id: "masters-hour", title: "Soatiga usta" },
  { id: "finishing", title: "Bitirish ishlari, bo'yoqchilar, gipschilar" },
  { id: "ceilings", title: "Shiftlar bilan ishlar" },
  { id: "repair", title: "Kalitga ta'mir" },
  { id: "plumbing-heating", title: "Santexnika, isitish, kanalizatsiya" },
];

export const leftSubMenus: Record<string, MenuItem[]> = {
  construction: [
    { id: "c1", title: "Poydevor ishlari" },
    { id: "c2", title: "Tom ishlari" },
    { id: "c3", title: "Bitirish ishlari" },
    { id: "c4", title: "Santexnika ishlari" },
  ],
  external: [
    { id: "e1", title: "Fasad ishlari" },
    { id: "e2", title: "Hududni obodonlashtirish" },
    { id: "e3", title: "Tashqi yoritish" },
  ],
  "gas-equipment": [
    { id: "g1", title: "Gaz uskunalarini o'rnatish" },
    { id: "g2", title: "Gaz tizimlarini xizmat ko'rsatish" },
    { id: "g3", title: "Gaz qozonlarini ta'mirlash" },
  ],
  conditioning: [
    { id: "ac1", title: "Konditsionerlarni o'rnatish" },
    { id: "ac2", title: "Ventilyatsiyani xizmat ko'rsatish" },
    { id: "ac3", title: "Konditsionerlash tizimlarini tozalash" },
  ],
  "masters-hour": [
    { id: "m1", title: "Elektrik" },
    { id: "m2", title: "Santexnik" },
    { id: "m3", title: "Mebel yig'uvchi" },
  ],
  finishing: [
    { id: "f1", title: "Gips ishlari" },
    { id: "f2", title: "Bo'yoq ishlari" },
    { id: "f3", title: "Plitka yotqizish" },
  ],
  ceilings: [
    { id: "ce1", title: "Cho'zma shiftlar" },
    { id: "ce2", title: "Gipsokarton shiftlar" },
    { id: "ce3", title: "Shift qoplamlari" },
  ],
  repair: [
    { id: "r1", title: "Kosmetik ta'mir" },
    { id: "r2", title: "Kapital ta'mir" },
    { id: "r3", title: "Evrota'mir" },
  ],
  "plumbing-heating": [
    { id: "p1", title: "Santexnika o'rnatish" },
    { id: "p2", title: "Isitish tizimini o'rnatish" },
    { id: "p3", title: "Kanalizatsiyani tozalash" },
  ],
};

// Qo'shimcha funksiyalar
export const getMenuTitle = (menuId: string): string => {
  const menu = leftMenuItems.find((item) => item.id === menuId);
  return menu ? menu.title : "";
};

export const getTopMenuTitle = (menuId: string): string => {
  const menu = topMenus.find((item) => item.id === menuId);
  return menu ? menu.title : "";
};
