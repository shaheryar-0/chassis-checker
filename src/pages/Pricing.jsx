import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown } from "lucide-react";

const packages = [
  {
    name: "Silver",
    price: "$47.99",
    duration: "12 to 24 Hrs",
    features: [
      "Vehicle Overview",
      "Market Value",
      "Vehicle Specifications",
      "Sales Listing",
      "Accident Record",
      "Theft Record",
      "Open Recalls",
      "Impounds",
      "Active Warranties",
      "Expired Warranties",
      "HQ Vehicle Images",
      "Installed Options and Packages",
    ],
  },
  {
    name: "Gold",
    price: "$68.99",
    duration: "1 to 2 Hrs",
    popular: true,
    features: [
      "Accident Record",
      "Theft Record",
      "Open Recalls",
      "Exports",
      "Active Warranties",
      "Expired Warranties",
      "HQ Bike Images",
      "Installed Options and Packages",
      "Registration History",
    ],
  },
  {
    name: "Platinum",
    price: "$89.99",
    duration: "15 to 30 Minutes",
    features: [
      "Accident Record",
      "Hurricanes",
      "Fire",
      "Theft",
      "Run Aground",
      "Submerged",
    ],
  },
];

const faqs = [
  {
    question: "What does BEST CARFAX cost?",
    answer: (
      <>
        Currently we offer 3 packages to choose from:

        <ul className="mt-4 space-y-2">
          <li>• Silver Package Cost $47.99</li>
          <li>• Gold Package Cost $68.99</li>
          <li>• Platinum Package Cost $89.99</li>
        </ul>
      </>
    ),
  },
  {
    question: "What does the BEST CARFAX money back guarantee mean?",
    answer:
      "Our money back guarantee is designed to provide additional confidence when purchasing a vehicle history report. Please contact our support team for the applicable terms and conditions.",
  },
  {
    question:
      "How long can I access a purchased BEST CARFAX used Vehicle history?",
    answer:
      "Your purchased package credit remains valid for 4 years, giving you plenty of time to use your purchased vehicle history service.",
  },
  {
    question:
      "How long can I access a purchased BEST CARFAX vehicle history report?",
    answer:
      "Your purchased vehicle history report can be accessed according to the package terms. Package credits are valid for 4 years.",
  },
];

function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      {/* =======================
          PRICING INTRO
      ======================== */}
      <section className="pt-20 pb-14 sm:pt-24 sm:pb-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">

          <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-4">
            Vehicle History Reports
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            You can have more confidence by making a{" "}
            <span className="text-blue-500">small investment</span>
          </h1>

          <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-6 mb-7"></div>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Choose your package and get direct access to our Vehicle
            History Reports with a one-time payment. No follow-up costs
            are involved.
          </p>

        </div>
      </section>

      {/* =======================
          PRICING PACKAGES
      ======================== */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">

          {packages.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                flex
                flex-col
                rounded-2xl
                border
                p-7
                sm:p-8
                transition-all
                duration-500
                hover:-translate-y-2
                ${
                  plan.popular
                    ? "border-blue-500 bg-slate-900 shadow-2xl shadow-blue-500/10"
                    : "border-slate-800 bg-slate-900/50 hover:border-blue-500/40"
                }
              `}
            >

              {/* Most Popular */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Package Name */}
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                {plan.name}
              </h2>

              {/* Price */}
              <div className="text-center mt-5">
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  {plan.price}
                </span>
              </div>

              {/* Delivery */}
              <div className="mt-5 py-4 px-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Delivery Duration
                </p>

                <p className="text-sm sm:text-base font-semibold text-blue-400">
                  {plan.duration}
                </p>
              </div>

              {/* Features Title */}
              <div className="mt-7 mb-3">
                <h3 className="text-lg font-semibold text-white">
                  Top features
                </h3>
              </div>

              {/* Features Scrollbar */}
              <div
                className="
                  h-[260px]
                  overflow-y-auto
                  pr-3
                  scrollbar-thin
                  scrollbar-track-slate-900
                  scrollbar-thumb-slate-700
                  hover:scrollbar-thumb-blue-500
                "
              >
                <ul className="space-y-3">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-slate-400
                        hover:text-white
                        transition-colors
                        duration-300
                      "
                    >
                      <span
                        className="
                          w-6
                          h-6
                          flex
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-700
                          text-transparent
                          shrink-0
                          group-hover:bg-blue-600
                          group-hover:border-blue-600
                          group-hover:text-white
                          transition-all
                          duration-300
                        "
                      >
                        <Check size={14} strokeWidth={3} />
                      </span>

                      {feature}
                    </li>
                  ))}

                </ul>
              </div>

              {/* Buy Button */}
              <Link
                to={`/checkout?package=${plan.name}`}
                className={`
                  mt-8
                  w-full
                  py-4
                  rounded-xl
                  font-semibold
                  text-center
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-95
                  ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-800 hover:bg-blue-600 text-white"
                  }
                `}
              >
                Buy Now
              </Link>

            </div>
          ))}

        </div>
      </section>

      {/* =======================
          BEST CARFAX TAGLINE
      ======================== */}
      <section className="border-y border-slate-800 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-16 text-center">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            THE BEST CARFAX
            <span className="text-blue-500">
              {" "}– fast, secure, stress-free
            </span>
          </h2>

          <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-5 mb-5"></div>

          <p className="text-slate-400 text-base sm:text-lg">
            Package credit valid for{" "}
            <span className="text-white font-semibold">
              4 years
            </span>
          </p>

        </div>
      </section>

      {/* =======================
          FAQ SECTION
      ======================== */}
      <section className="py-20 sm:py-24">

        <div className="max-w-4xl mx-auto px-5 sm:px-6">

          {/* FAQ Heading */}
          <div className="text-center mb-12">

            <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-4">
              Support
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Any questions?
            </h2>

            <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-6"></div>

          </div>

          {/* FAQ Items */}
          <div className="space-y-4">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    rounded-2xl
                    border
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-blue-500 bg-slate-900 shadow-lg shadow-blue-500/5"
                        : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                    }
                  `}
                >

                  {/* Question Button */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-5
                      px-5
                      sm:px-7
                      py-5
                      text-left
                      group
                    "
                  >

                    <span
                      className={`
                        text-base
                        sm:text-lg
                        font-semibold
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-blue-500"
                            : "text-white group-hover:text-blue-400"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`
                        shrink-0
                        w-9
                        h-9
                        rounded-full
                        flex
                        items-center
                        justify-center
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-blue-600 border-blue-600 text-white rotate-180"
                            : "border-slate-700 text-slate-400 group-hover:border-blue-500 group-hover:text-blue-500"
                        }
                      `}
                    >
                      <ChevronDown size={18} />
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">

                      <div className="px-5 sm:px-7 pb-6 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-5">
                        {faq.answer}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Pricing;