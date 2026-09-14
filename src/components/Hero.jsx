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
    <section className="min-h-[calc(100vh-80px)] bg-[#0B1120] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-start">

            {/* Heading */}
   {/* Heading */}
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
    min-h-[144px]
    sm:min-h-[160px]
    md:min-h-[180px]
    lg:min-h-[160px]
    xl:min-h-[180px]
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

            {/* Small Blue Line */}
            <div className="mt-6 mb-8">
              <div className="w-[15px] h-[3px] bg-blue-500 rounded-full"></div>
            </div>

            {/* VIN Search */}
            <div className="w-full max-w-xl">

              <div className="flex flex-col sm:flex-row gap-3">

                {/* VIN Input */}
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
                    min-w-0
                    bg-slate-900
                    border
                    border-slate-700
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                  "
                />

                {/* Search Button */}
                <button
                  type="button"
                  onClick={handleSearch}
                  className="
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
                  {t("hero.search")}
                </button>

              </div>

              {/* Error */}
              {error && (
                <p className="mt-3 text-sm text-red-400">
                  {error}
                </p>
              )}

              {/* VIN Help */}
              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  text-slate-400
                  hover:text-slate-300
                  transition-colors
                  duration-300
                  cursor-pointer
                "
              >
                {t("hero.vinHelp")}
              </p>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-xl">

              {/* Glow */}
              <div className="absolute inset-10 bg-blue-500/20 blur-3xl rounded-full"></div>

              {/* Car */}
              <img
                src={carImage}
                alt="Vehicle"
                className="
                  relative
                  z-10
                  w-full
                  h-auto
                  object-contain
                  drop-shadow-2xl
                  transition-transform
                  duration-700
                  hover:scale-105
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