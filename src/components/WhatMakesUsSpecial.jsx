import { useTranslation } from "react-i18next";

function WhatMakesUsSpecial() {
  const { t } = useTranslation();

  const features = [
    {
      image:
        "https://bestcarfax.com/wp-content/uploads/2026/08/imgi_15_usp-small-databank-blue-32px.png",
    },
    {
      image:
        "https://bestcarfax.com/wp-content/uploads/2026/08/imgi_16_100-percent-data-protection-32px.png",
    },
    {
      image:
        "https://bestcarfax.com/wp-content/uploads/2026/08/imgi_17_usp-small-transparency-blue-32px-02__1_.png",
    },
  ];

  return (
    <section className="bg-[#0B1120] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t("special.title")}
          </h2>

          <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                bg-slate-900/60
                border
                border-slate-800
                rounded-2xl
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-xl
                hover:shadow-blue-500/10
              "
            >

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    w-16
                    h-16
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    transition-all
                    duration-500
                    group-hover:bg-blue-600/10
                    group-hover:border-blue-500/50
                    group-hover:scale-110
                  "
                >
                  <img
                    src={feature.image}
                    alt="Feature"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-blue-500
                "
              >
                {t("special.database")}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhatMakesUsSpecial;