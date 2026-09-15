import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import carImage from "../assets/car.png";

function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [visibleWords, setVisibleWords] = useState(0);
  const [vin, setVin] = useState("");
  const [error, setError] = useState("");

  const title = t("hero.title");
  const words = title.split(" ");

  useEffect(() => {
    if (visibleWords === words.length) {
      const timer = setTimeout(() => {
        setVisibleWords(0);
      }, 3000);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleWords((prev) => prev + 1);
    }, 180);

    return () => clearTimeout(timer);
  }, [visibleWords, words.length]);

  const handleSearch = () => {
    const enteredVin = vin.trim();

    // Don't continue if input is empty
    if (!enteredVin) {
      setError("Please enter something first.");
      return;
    }

    // Anything entered → Pricing page
    setError("");
    navigate("/pricing");
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-[#0B1120] text-white overflow-hidden">

  {/* Background Effects */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* LEFT SIDE */}
      <div className="flex flex-col items-start">

        <div
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-5xl
            xl:text-6xl
            font-bold
            leading-tight
            tracking-tight
            max-w-2xl
            min-h-[180px]
          "
        >
          <h1>
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className={`
                  inline-block
                  mr-2
                  sm:mr-3
                  transition-all
                  duration-500
                  ${
                    index < visibleWords
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                  ${
                    word.toLowerCase().includes("best")
                      ? "text-blue-500"
                      : "text-white"
                  }
                `}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        <div className="mt-2 mb-8">
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>

        {/* Glass Search Box */}
        <div className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl">

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              value={vin}
              onChange={(e) => {
                setVin(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder={t("hero.vinPlaceholder")}
              className="
                flex-1
                bg-slate-900/80
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                placeholder:text-slate-500
                outline-none
                focus:border-blue-500
              "
            />

            <button
              type="button"
              onClick={handleSearch}
              className="
                px-8
                py-4
                bg-blue-600
                hover:bg-blue-700
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
                shadow-blue-500/30
              "
            >
              {t("hero.search")}
            </button>

          </div>

          {error && (
            <p className="mt-3 text-red-400 text-sm">
              {error}
            </p>
          )}

          <p className="mt-4 text-slate-400 hover:text-white transition cursor-pointer">
            {t("hero.vinHelp")}
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center lg:justify-end">

        <div className="relative w-full max-w-2xl">

          <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>

          <img
            src={carImage}
            alt="Vehicle"
            className="
              relative
              z-10
              w-full
              h-auto
              object-contain
              drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]
              float-car
            "
          />

        </div>

      </div>

    </div>

  </div>
</section>
  );
}

export default Hero;