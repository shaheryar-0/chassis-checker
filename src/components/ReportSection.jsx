import { useTranslation } from "react-i18next";
import reportImage from "../assets/report.png";

function ReportSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0B1120] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">

              <div className="absolute inset-8 bg-blue-500/10 blur-3xl rounded-full"></div>

              <img
                src={reportImage}
                alt="Vehicle History Report"
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

          {/* RIGHT CONTENT */}
          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {t("report.title")}
            </h2>

            <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mt-6 mb-7"></div>

            <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
              {t("report.highlight")}
            </h3>

            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
              {t("report.description")}
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                mt-8
                px-7
                py-4
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                rounded-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-95
                shadow-lg
                shadow-blue-600/20
              "
            >
              {t("report.button")}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReportSection;