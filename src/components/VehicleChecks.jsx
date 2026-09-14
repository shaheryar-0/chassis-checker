import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

function VehicleChecks() {
  const { t } = useTranslation();

  const checks = [
    "damage",
    "mileage",
    "thefts",
    "taxi",
    "maintenance",
    "import",
    "ownership",
    "recalls",
  ];

  return (
    <section className="bg-[#0B1120] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t("vehicleChecks.title")}
          </h2>

          <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Checks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {checks.map((check) => (
            <div
              key={check}
              className="
                group
                flex
                items-center
                gap-4
                p-5
                rounded-xl
                bg-slate-900/60
                border
                border-slate-800
                transition-all
                duration-300
                hover:border-blue-500/50
                hover:bg-slate-900
                hover:-translate-y-1
              "
            >

              {/* Check Icon */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  min-w-10
                  rounded-full
                  bg-slate-800
                  text-blue-500
                  border
                  border-slate-700
                  transition-all
                  duration-300
                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:border-blue-600
                "
              >
                <Check size={21} strokeWidth={3} />
              </div>

              {/* Text */}
              <span className="text-slate-200 text-base sm:text-lg">
                {t(`vehicleChecks.${check}`)}
              </span>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default VehicleChecks;