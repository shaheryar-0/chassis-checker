import { useTranslation } from "react-i18next";
import {
  Database,
  ShieldCheck,
  Eye,
  ArrowUpRight,
} from "lucide-react";

function WhatMakesUsSpecial() {
  const { t } = useTranslation();

  const features = [
    {
      number: "01",
      icon: Database,
      title: t("special.database"),
      description: "Access information from a large international vehicle database.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "100% Data Protection",
      description: "Your information is handled with strong security standards.",
    },
    {
      number: "03",
      icon: Eye,
      title: "Complete Transparency",
      description: "Get clear vehicle history information before making a decision.",
    },
  ];

  return (
    <section className="relative bg-[#0B1120] text-white py-20 sm:py-24 lg:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t("special.title")}
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            Everything you need to make a smarter and more confident vehicle purchase.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="
                  group
                  relative
                  min-h-[330px]
                  bg-slate-900/50
                  backdrop-blur-xl
                  border
                  border-slate-800
                  rounded-3xl
                  p-7
                  sm:p-8
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-blue-500/50
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                "
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    -top-24
                    -right-24
                    w-56
                    h-56
                    bg-blue-500/10
                    blur-3xl
                    rounded-full
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                ></div>

                {/* Number */}
                <div className="absolute top-6 right-7">
                  <span className="text-5xl font-bold text-slate-800 group-hover:text-blue-500/20 transition-colors duration-500">
                    {feature.number}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="
                    relative
                    w-16
                    h-16
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-800
                    border
                    border-slate-700
                    text-blue-500
                    transition-all
                    duration-500
                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:border-blue-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Content */}
                <div className="relative mt-8">

                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-blue-400
                    "
                  >
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>

                </div>

                {/* Bottom Arrow */}
                <div className="absolute bottom-7 left-7">

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-full
                      bg-slate-800
                      border
                      border-slate-700
                      text-slate-500
                      transition-all
                      duration-300
                      group-hover:bg-blue-600
                      group-hover:text-white
                      group-hover:border-blue-600
                    "
                  >
                    <ArrowUpRight size={18} />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhatMakesUsSpecial;