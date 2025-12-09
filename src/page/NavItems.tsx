import React, { useState, useRef, useEffect } from "react";
import { topMenus, leftMenuItems, leftSubMenus } from "../constants";

const NavItems: React.FC = () => {
  const [faolTopMenu, setFaolTopMenu] = useState<string | null>(null);
  const [faolChapMenu, setFaolChapMenu] = useState<string | null>(null);
  const [hoverQilinganChapMenu, setHoverQilinganChapMenu] = useState<
    string | null
  >(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleTopMenuHover = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setFaolTopMenu(menuId);
    setFaolChapMenu(null);
  };

  const handleTopMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setFaolTopMenu(null);
    }, 200);
  };

  const handleChapMenuHover = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoverQilinganChapMenu(menuId);
    setFaolTopMenu(null);
  };

  const handleChapMenuClick = (menuId: string) => {
    setFaolChapMenu(faolChapMenu === menuId ? null : menuId);
    setFaolTopMenu(null);
  };

  const handleChapMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverQilinganChapMenu(null);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setFaolTopMenu(null);
        setFaolChapMenu(null);
        setHoverQilinganChapMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const joriyTopMenu = topMenus.find((menu) => menu.id === faolTopMenu);
  const joriyChapKichikMenu = hoverQilinganChapMenu
    ? leftSubMenus[hoverQilinganChapMenu]
    : null;

  return (
    <div ref={navRef} className="relative bg-white shadow-lg font-sans">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-start space-x-8">
          <div className="w-64">
            <div className="space-y-1">
              {leftMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleChapMenuHover(item.id)}
                  onMouseLeave={handleChapMenuLeave}
                >
                  <button
                    onClick={() => handleChapMenuClick(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-between ${
                      faolChapMenu === item.id ||
                      hoverQilinganChapMenu === item.id
                        ? "bg-ko'k-50 text-ko'k-600"
                        : "text-kulrang-700 hover:bg-kulrang-50"
                    }`}
                  >
                    <span>{item.title}</span>
                    {faolChapMenu === item.id ? (
                      <span className="text-ko'k-500">▲</span>
                    ) : (
                      <span className="text-kulrang-400">▼</span>
                    )}
                  </button>

                  {faolChapMenu === item.id && leftSubMenus[item.id] && (
                    <div className="absolute left-full top-0 ml-2 w-72 bg-white shadow-xl rounded-lg border border-kulrang-200 z-50">
                      <div className="p-4">
                        <h3 className="font-semibold text-kulrang-800 mb-3 px-2 border-b pb-2">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          {leftSubMenus[item.id].map((subItem) => (
                            <a
                              key={subItem.id}
                              href="#"
                              className="block px-4 py-2 text-sm text-kulrang-600 hover:bg-ko'k-50 hover:text-ko'k-600 rounded-md transition-colors"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {hoverQilinganChapMenu &&
              joriyChapKichikMenu &&
              faolChapMenu === null && (
                <div className="absolute left-full top-0 ml-2 w-72 bg-white shadow-xl rounded-lg border border-kulrang-200 z-40">
                  <div className="p-4">
                    <h3 className="font-semibold text-kulrang-800 mb-3 px-2 border-b pb-2">
                      {
                        leftMenuItems.find(
                          (item) => item.id === hoverQilinganChapMenu
                        )?.title
                      }
                    </h3>
                    <div className="space-y-1">
                      {joriyChapKichikMenu.map((subItem) => (
                        <a
                          key={subItem.id}
                          href="#"
                          className="block px-4 py-2 text-sm text-kulrang-600 hover:bg-ko'k-50 hover:text-ko'k-600 rounded-md transition-colors"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>

          <div className="flex-1">
            <div className="flex space-x-4 border-b pb-4 mb-4">
              {topMenus.map((menu) => (
                <div
                  key={menu.id}
                  className="relative"
                  onMouseEnter={() => handleTopMenuHover(menu.id)}
                  onMouseLeave={handleTopMenuLeave}
                >
                  <button
                    className={`px-4 py-2 text-base font-semibold rounded-lg transition-all duration-200 ${
                      faolTopMenu === menu.id
                        ? "bg-ko'k-600 text-white shadow-md"
                        : "text-kulrang-800 hover:bg-ko'k-50 hover:text-ko'k-600"
                    }`}
                  >
                    {menu.title}
                    <span className="ml-2 text-xs">
                      {faolTopMenu === menu.id ? "▲" : "▼"}
                    </span>
                  </button>

                  {faolTopMenu === menu.id && menu.categories && (
                    <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-2xl rounded-xl border border-kulrang-200 z-50 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {menu.categories.map((category) => (
                          <div key={category.id} className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl">{category.icon}</span>
                              <h4 className="font-bold text-kulrang-900">
                                {category.title}
                              </h4>
                            </div>
                            <ul className="space-y-2">
                              {category.submenu.map((item, index) => (
                                <li key={index}>
                                  <a
                                    href="#"
                                    className="block text-sm text-kulrang-600 hover:text-ko'k-600 hover:bg-kulrang-50 px-2 py-1 rounded transition-colors"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-kulrang-50 rounded-lg">
              <p className="text-kulrang-600 text-sm">
                {joriyTopMenu
                  ? `Tanlangan bo'lim: ${joriyTopMenu.title}`
                  : "Xizmatlar kategoriyasini tanlang yoki asbob-uskunalarni ijaraga olishga o'ting"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden p-4 border-t">
        <select className="w-full p-2 border rounded">
          <option>Kategoriyani tanlang</option>
          {leftMenuItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <select className="w-full p-2 border rounded mt-2">
          <option>Asosiy xizmatlarni tanlang</option>
          {topMenus.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NavItems;
