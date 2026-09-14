import { useTranslation } from "react-i18next";
import howWeHelpImage from "../assets/how-we-help.png";

function HowWeHelp() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0B1120] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {t("howWeHelp.title")}
            </h2>

            <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mt-6 mb-7"></div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              {t("howWeHelp.description")}
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">

              {/* Glow */}
              <div className="absolute inset-10 bg-blue-500/10 blur-3xl rounded-full"></div>

              <img
                src={howWeHelpImage}
                alt="How we help"
                className="
                  relative
                  z-10
                  w-full
                  h-auto
                  object-contain
                  rounded-2xl
                  transition-all
                  duration-700
                  hover:scale-[1.03]
                "
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowWeHelp;