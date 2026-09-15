import { useTranslation } from "react-i18next";
import { ShieldCheck, SearchCheck, FileCheck, Car } from "lucide-react";
import reportImage from "../assets/report.png";

function ReportSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Trusted Data",
    },
    {
      icon: <SearchCheck size={24} />,
      title: "VIN Verification",
    },
    {
      icon: <FileCheck size={24} />,
      title: "Detailed Reports",
    },
    {
      icon: <Car size={24} />,
      title: "Vehicle Insights",
    },
  ];

  return (
    <section className="bg-[#0B1120] text-white py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">

              {/* Glow Effects */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

              <img
                src={reportImage}
                alt="Vehicle History Report"
                className="
                  relative
                  z-10
                  w-full
                  rounded-3xl
                  border
                  border-slate-800
                  shadow-2xl
                  transition-all
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
              Vehicle History Reports
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
              {t("report.title")}
            </h2>

            <div className="w-16 h-1 bg-blue-500 rounded-full mt-6 mb-6"></div>

            <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
              {t("report.highlight")}
            </h3>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              {t("report.description")}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-900/60
                    border
                    border-slate-800
                    rounded-2xl
                    p-4
                    hover:border-blue-500
                    hover:bg-slate-900
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <div className="text-blue-500 mb-3">
                    {item.icon}
                  </div>

                  <p className="font-medium text-white">
                    {item.title}
                  </p>
                </div>
              ))}

            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                mt-8
                px-8
                py-4
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                rounded-xl
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
                shadow-blue-600/30
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