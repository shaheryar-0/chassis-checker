import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#080D19] border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand / Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              THE <span className="text-blue-500">BEST CARFAX</span>
            </h2>

            <div className="w-[40px] h-[3px] bg-blue-500 rounded-full mt-4 mb-5"></div>

            <p className="text-slate-400 leading-relaxed max-w-xl">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              {t("footer.home")}
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
              >
                {t("footer.home")}
              </Link>

              <Link
                to="/pricing"
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
              >
                {t("footer.pricing")}
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
              >
                {t("footer.contact")}
              </Link>

              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
              >
                {t("footer.privacy")}
              </Link>
            </div>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              {t("footer.security")}
            </h3>

            <div className="flex items-start gap-3 text-slate-400">
              <span className="text-blue-500 text-xl">🔒</span>

              <p className="text-sm leading-relaxed">
                Safe surfing through highest encryption standards.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-slate-500 text-sm text-center sm:text-left">
              {t("footer.copyright")}
            </p>

            <p className="text-slate-500 text-sm">
              {t("footer.tagline")}
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
