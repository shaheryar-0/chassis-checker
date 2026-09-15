import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      key: "david",
      image:
        "https://bestAUTO VIN CHECK.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-5.58.20-PM.jpeg",
    },
    {
      key: "james",
      image:
        "https://bestAUTO VIN CHECK.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-5.58.53-PM.jpeg",
    },
    {
      key: "michael",
      image:
        "https://bestAUTO VIN CHECK.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-5.58.21-PM.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="relative bg-[#0B1120] text-white py-20 sm:py-24 lg:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="absolute -left-32 top-20 w-72 h-72 bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute -right-32 bottom-10 w-80 h-80 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
            <ShieldCheck size={16} />
            Customer Experiences
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t("testimonials.title")}
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            See why drivers choose THE BEST AUTO VIN CHECK before buying their next
            vehicle.
          </p>

        </div>

        {/* Testimonial Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={previousTestimonial}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-1
              sm:-translate-x-5
              lg:-translate-x-8
              z-20
              w-11
              h-11
              sm:w-12
              sm:h-12
              rounded-full
              bg-slate-900/90
              backdrop-blur-xl
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-slate-300
              hover:bg-blue-600
              hover:border-blue-500
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Main Card */}
          <div
            className="
              group
              relative
              bg-slate-900/50
              backdrop-blur-xl
              border
              border-slate-800
              rounded-3xl
              p-6
              sm:p-10
              lg:p-14
              mx-5
              sm:mx-10
              overflow-hidden
              transition-all
              duration-500
              hover:border-blue-500/40
              hover:shadow-2xl
              hover:shadow-blue-500/10
            "
          >

            {/* Card Glow */}
            <div
              className="
                absolute
                -top-32
                left-1/2
                -translate-x-1/2
                w-80
                h-80
                bg-blue-500/10
                blur-[100px]
                rounded-full
                pointer-events-none
              "
            ></div>

            {/* Number */}
            <div className="absolute top-6 right-7 sm:top-8 sm:right-10">
              <span className="text-5xl sm:text-6xl font-bold text-slate-800 group-hover:text-blue-500/10 transition-colors duration-500">
                0{current + 1}
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Customer Image */}
              <div className="relative mb-6">

                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-110"></div>

                <div className="relative p-1 rounded-full bg-gradient-to-br from-blue-500/60 to-slate-700">

                  <img
                    src={testimonial.image}
                    alt={t(`testimonials.${testimonial.key}.name`)}
                    className="
                      w-20
                      h-20
                      sm:w-24
                      sm:h-24
                      rounded-full
                      object-cover
                      border-4
                      border-slate-900
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>

                {/* Verified Badge */}
                <div
                  className="
                    absolute
                    -bottom-1
                    -right-1
                    w-7
                    h-7
                    rounded-full
                    bg-blue-600
                    border-2
                    border-slate-900
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ShieldCheck size={14} />
                </div>

              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-5">

                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>

                <div
                  className="
                    relative
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-500
                    transition-all
                    duration-500
                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:scale-110
                  "
                >
                  <Quote size={24} fill="currentColor" />
                </div>

              </div>

              {/* Testimonial Text */}
              <p
                className="
                  text-slate-300
                  text-base
                  sm:text-lg
                  lg:text-xl
                  leading-relaxed
                  max-w-3xl
                "
              >
                {t(`testimonials.${testimonial.key}.text`)}
              </p>

              {/* Name */}
              <h3 className="mt-7 text-lg sm:text-xl font-bold text-white">
                {t(`testimonials.${testimonial.key}.name`)}
              </h3>

              <p className="mt-1 text-sm text-blue-400">
                Verified Customer
              </p>

            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-1
              sm:translate-x-5
              lg:translate-x-8
              z-20
              w-11
              h-11
              sm:w-12
              sm:h-12
              rounded-full
              bg-slate-900/90
              backdrop-blur-xl
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-slate-300
              hover:bg-blue-600
              hover:border-blue-500
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col items-center mt-9">

          <div className="flex items-center gap-2">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    current === index
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-slate-700 hover:bg-slate-500"
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

          </div>

          <p className="mt-4 text-xs text-slate-600 tracking-widest uppercase">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </p>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;