import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowUpRight,
  LockKeyhole,
  CarFront,
} from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#080D19] border-t border-slate-800 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  flex
                  items-center
                  justify-center
                  text-blue-500
                  transition-all
                  duration-300
                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:border-blue-500
                  group-hover:scale-105
                "
              >
                <CarFront size={25} />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Auto <span className="text-blue-500">vincheck</span>
                </h2>

                <p className="text-[10px] sm:text-xs text-slate-500 tracking-[0.2em] uppercase mt-1">
                  Vehicle History Reports
                </p>
              </div>
            </Link>

            <div className="w-14 h-1 bg-blue-500 rounded-full mt-6 mb-6"></div>

            <p className="text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
              {t("footer.description")}
            </p>

            {/* Trust Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                mt-7
                px-4
                py-3
                rounded-2xl
                bg-slate-900/60
                border
                border-slate-800
                backdrop-blur-xl
              "
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <ShieldCheck size={18} className="text-blue-500" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Trusted Vehicle Data
                </p>

                <p className="text-xs text-slate-500 mt-0.5">
                  Built for smarter decisions
                </p>
              </div>
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-bold text-white mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {/* Home */}
              <Link
                to="/"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-slate-400
                  hover:text-blue-500
                  transition-all
                  duration-300
                  max-w-[180px]
                "
              >
                <span>{t("footer.home")}</span>

                <ArrowUpRight
                  size={15}
                  className="
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                    duration-300
                  "
                />
              </Link>

              {/* Pricing */}
              <Link
                to="/pricing"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-slate-400
                  hover:text-blue-500
                  transition-all
                  duration-300
                  max-w-[180px]
                "
              >
                <span>{t("footer.pricing")}</span>

                <ArrowUpRight
                  size={15}
                  className="
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                    duration-300
                  "
                />
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-slate-400
                  hover:text-blue-500
                  transition-all
                  duration-300
                  max-w-[180px]
                "
              >
                <span>{t("footer.contact")}</span>

                <ArrowUpRight
                  size={15}
                  className="
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                    duration-300
                  "
                />
              </Link>

              {/* Privacy Policy */}
              <Link
                to="/privacy-policy"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-slate-400
                  hover:text-blue-500
                  transition-all
                  duration-300
                  max-w-[180px]
                "
              >
                <span>{t("footer.privacy")}</span>

                <ArrowUpRight
                  size={15}
                  className="
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                    duration-300
                  "
                />
              </Link>

            </div>

          </div>

          {/* SECURITY */}
          <div>

            <h3 className="text-lg font-bold text-white mb-6">
              {t("footer.security")}
            </h3>

            <div
              className="
                bg-slate-900/50
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                p-5
                transition-all
                duration-300
                hover:border-blue-500/30
                hover:-translate-y-1
              "
            >

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <LockKeyhole size={20} className="text-blue-500" />
              </div>

              <h4 className="font-semibold text-white">
                Secure & Protected
              </h4>

              <p className="text-sm text-slate-500 leading-relaxed mt-2">
                Safe surfing through highest encryption standards.
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-slate-500 text-sm text-center sm:text-left">
              {t("footer.copyright")}
            </p>

            <div className="flex items-center gap-2 text-slate-600">
              <ShieldCheck size={15} />

              <p className="text-slate-500 text-sm">
                {t("footer.tagline")}
              </p>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;