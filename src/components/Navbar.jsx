import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const languages = [
  { name: "English", flag: "🇬🇧", code: "en" },
  { name: "Spanish", flag: "🇪🇸", code: "es" },
  { name: "Arabic", flag: "🇸🇦", code: "ar" },
  { name: "Dutch", flag: "🇳🇱", code: "nl" },
  { name: "Chinese", flag: "🇨🇳", code: "zh" },
  { name: "French", flag: "🇫🇷", code: "fr" },
  { name: "German", flag: "🇩🇪", code: "de" },
];

function Navbar() {
  const { t, i18n } = useTranslation();

  const [showSearch, setShowSearch] = useState(false);
  const [language, setLanguage] = useState(
    languages.find((lang) => lang.code === i18n.language) || languages[0]
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep HTML direction and language updated
  useEffect(() => {
    const currentLanguage =
      languages.find((lang) => lang.code === i18n.language) || languages[0];

    setLanguage(currentLanguage);

    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // Change website language
  const handleLanguageChange = (e) => {
    const selectedCode = e.target.value;

    const selectedLanguage = languages.find(
      (lang) => lang.code === selectedCode
    );

    setLanguage(selectedLanguage);

    i18n.changeLanguage(selectedCode);

    localStorage.setItem("language", selectedCode);

    document.documentElement.lang = selectedCode;
    document.documentElement.dir =
      selectedCode === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="w-full bg-[#0B1120] border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">

            {/* Home */}
            <Link
              to="/"
              className="
                px-4 py-2
                rounded-lg
                bg-blue-600
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-blue-700
              "
            >
              {t("navbar.home")}
            </Link>

            {/* Pricing */}
            <Link
              to="/pricing"
              className="
                relative
                px-4 py-2
                rounded-lg
                text-slate-200
                transition-all
                duration-300
                hover:bg-slate-800
                hover:text-white
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {t("navbar.pricing")}
            </Link>

            {/* Privacy Policy */}
            <Link
              to="/privacy-policy"
              className="
                relative
                px-4 py-2
                rounded-lg
                text-slate-200
                transition-all
                duration-300
                hover:bg-slate-800
                hover:text-white
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {t("navbar.privacy")}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="
                relative
                px-4 py-2
                rounded-lg
                text-slate-200
                transition-all
                duration-300
                hover:bg-slate-800
                hover:text-white
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {t("navbar.contact")}
            </Link>

            {/* Search + Language */}
            <div className="flex items-center ml-3">

              {/* Search Button */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="
                  p-2
                  rounded-full
                  text-white
                  hover:bg-slate-800
                  transition
                  duration-300
                "
              >
                <Search size={21} />
              </button>

              {/* Search Input */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${showSearch ? "w-52 ml-3" : "w-0"}
                `}
              >
                <input
                  type="text"
                  placeholder={t("navbar.search")}
                  className="
                    w-full
                    bg-slate-900
                    border
                    border-slate-700
                    text-white
                    placeholder:text-slate-500
                    rounded-lg
                    px-3 py-2
                    outline-none
                    focus:border-blue-500
                  "
                />
              </div>

              {/* Separator */}
              <div className="mx-4 text-slate-500 text-xl select-none">
                |
              </div>

              {/* Language */}
              <select
                value={language.code}
                onChange={handleLanguageChange}
                className="
                  bg-slate-900
                  text-white
                  border
                  border-slate-700
                  rounded-lg
                  px-3 py-2
                  cursor-pointer
                  outline-none
                  focus:border-blue-500
                  text-sm
                "
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              p-2
              rounded-lg
              text-white
              hover:bg-slate-800
              transition
            "
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-4">

            <div className="flex flex-col gap-2">

              {/* Home */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-left
                  px-4 py-3
                  rounded-lg
                  bg-blue-600
                  text-white
                  font-medium
                "
              >
                {t("navbar.home")}
              </Link>

              {/* Pricing */}
              <Link
                to="/pricing"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-left
                  px-4 py-3
                  rounded-lg
                  text-slate-200
                  hover:bg-slate-800
                  hover:text-white
                  transition
                  duration-300
                "
              >
                {t("navbar.pricing")}
              </Link>

              {/* Privacy Policy */}
              <Link
                to="/privacy-policy"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-left
                  px-4 py-3
                  rounded-lg
                  text-slate-200
                  hover:bg-slate-800
                  hover:text-white
                  transition
                  duration-300
                "
              >
                {t("navbar.privacy")}
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-left
                  px-4 py-3
                  rounded-lg
                  text-slate-200
                  hover:bg-slate-800
                  hover:text-white
                  transition
                  duration-300
                "
              >
                {t("navbar.contact")}
              </Link>

              {/* Mobile Search */}
              <div className="flex items-center gap-3 mt-3">
                <Search
                  size={20}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  placeholder={t("navbar.search")}
                  className="
                    flex-1
                    bg-slate-900
                    border
                    border-slate-700
                    text-white
                    placeholder:text-slate-500
                    rounded-lg
                    px-3 py-3
                    outline-none
                    focus:border-blue-500
                  "
                />
              </div>

              {/* Mobile Language */}
              <select
                value={language.code}
                onChange={handleLanguageChange}
                className="
                  w-full
                  mt-2
                  bg-slate-900
                  text-white
                  border
                  border-slate-700
                  rounded-lg
                  px-3 py-3
                  cursor-pointer
                  outline-none
                  focus:border-blue-500
                "
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;