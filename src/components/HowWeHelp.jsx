
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Database,
  BarChart3,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import howWeHelpImage from "../assets/how-we-help.png";

function HowWeHelp() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const benefits = [
    {
      icon: <Database size={22} />,
      title: "Millions of Records",
      text: "Access valuable vehicle history information from millions of records across multiple countries. Explore important details about a vehicle before making your purchase.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Better Decisions",
      text: "Make informed purchasing decisions with useful vehicle history insights. Understand a vehicle's past, identify potential risks, and negotiate with greater confidence.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Drive With Confidence",
      text: "Get greater peace of mind before buying your next vehicle. Review important history information and reduce the risk of unexpected problems and expenses.",
    },
  ];

  const toggleBenefit = (index) => {
    setOpenIndex((previous) => previous === index ? null : index);
  };

  return (
    <section className="relative bg-[#0B1120] text-white py-20 sm:py-24 lg:py-28 overflow-hidden">

      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              <ShieldCheck size={16} />
              Smart Vehicle Research
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
              {t("howWeHelp.title")}
            </h2>

            <div className="w-16 h-1 bg-blue-500 rounded-full mt-6"></div>

            <p className="mt-7 text-slate-400 text-base sm:text-lg leading-relaxed">
              {t("howWeHelp.description")}
            </p>

            {/* CLICKABLE TOGGLE ITEMS */}
            <div className="mt-9 space-y-4">

              {benefits.map((benefit, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`
                      group rounded-2xl border backdrop-blur-xl
                      overflow-hidden transition-all duration-300
                      ${
                        isOpen
                          ? "bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10"
                          : "bg-slate-900/50 border-slate-800 hover:border-blue-500/40"
                      }
                    `}
                  >

                    <button
                      type="button"
                      onClick={() => toggleBenefit(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-4 p-4 text-left"
                    >

                      {/* ICON */}
                      <div className={`
                        flex items-center justify-center w-12 h-12 min-w-12
                        rounded-xl border transition-all duration-300
                        ${
                          isOpen
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-slate-800 border-slate-700 text-blue-500 group-hover:bg-blue-600 group-hover:text-white"
                        }
                      `}>
                        {benefit.icon}
                      </div>

                      {/* TITLE */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-base sm:text-lg">
                          {benefit.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          {isOpen ? "Click to close" : "Click to learn more"}
                        </p>
                      </div>

                      {/* TOGGLE ICON */}
                      <ChevronDown
                        size={21}
                        className={`
                          flex-shrink-0 text-slate-400
                          transition-transform duration-300
                          ${isOpen ? "rotate-180 text-blue-400" : ""}
                        `}
                      />

                    </button>

                    {/* EXPANDABLE PARAGRAPH */}
                    <div
                      className={`
                        grid transition-all duration-300 ease-in-out
                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pl-20">
                          <div className="w-full h-px bg-slate-800 mb-4"></div>
                          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                            {benefit.text}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

            <div className="relative w-full max-w-xl">

              <div className="absolute inset-0 bg-blue-500/15 blur-[90px] rounded-full"></div>

              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-3 shadow-2xl transition-all duration-700 hover:border-blue-500/40 hover:shadow-blue-500/10">

                <img
                  src={howWeHelpImage}
                  alt="How we help"
                  className="relative z-10 w-full h-auto object-contain rounded-2xl transition-transform duration-700 hover:scale-[1.03]"
                />

              </div>

              {/* IMAGE BADGE */}
              <div className="absolute -bottom-5 -left-3 sm:left-5 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl px-5 py-4 shadow-2xl z-20 transition-all duration-300 hover:border-blue-500/50">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-green-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Vehicle Data
                    </p>
                    <p className="text-xs text-green-400 mt-1">
                      Verified & Secure
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowWeHelp;
