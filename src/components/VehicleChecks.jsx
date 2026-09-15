import { useTranslation } from "react-i18next";
import {
  Check,
  CarFront,
  Gauge,
  ShieldAlert,
  Car,
  Wrench,
  Globe,
  UserRound,
  ClipboardCheck,
} from "lucide-react";

function VehicleChecks() {
  const { t } = useTranslation();

  const checks = [
    {
      key: "damage",
      icon: <CarFront size={26} />,
    },
    {
      key: "mileage",
      icon: <Gauge size={26} />,
    },
    {
      key: "thefts",
      icon: <ShieldAlert size={26} />,
    },
    {
      key: "taxi",
      icon: <Car size={26} />,
    },
    {
      key: "maintenance",
      icon: <Wrench size={26} />,
    },
    {
      key: "import",
      icon: <Globe size={26} />,
    },
    {
      key: "ownership",
      icon: <UserRound size={26} />,
    },
    {
      key: "recalls",
      icon: <ClipboardCheck size={26} />,
    },
  ];

  return (
    <section className="relative bg-[#0B1120] text-white py-20 sm:py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
            <ShieldAlert size={16} />
            Vehicle Verification
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t("vehicleChecks.title")}
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            Check the important details before you make a purchase decision.
          </p>

        </div>

        {/* CHECK CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {checks.map((check, index) => (
            <div
              key={check.key}
              className="
                group
                relative
                bg-slate-900/50
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                p-6
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-2xl
                hover:shadow-blue-500/10
              "
            >

              {/* Card Glow */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-32
                  h-32
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
              <span className="absolute top-4 right-5 text-xs font-bold text-slate-700 group-hover:text-blue-500/50 transition-colors duration-300">
                0{index + 1}
              </span>

              {/* Icon */}
              <div
                className="
                  relative
                  w-14
                  h-14
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
                "
              >
                {check.icon}
              </div>

              {/* Text */}
              <h3 className="mt-6 text-lg font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                {t(`vehicleChecks.${check.key}`)}
              </h3>

              {/* Verified */}
              <div className="flex items-center gap-2 mt-5 text-sm text-slate-500 group-hover:text-blue-400 transition-colors duration-300">

                <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                  <Check size={12} strokeWidth={3} />
                </div>

                <span>Verified</span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default VehicleChecks;