import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      key: "david",
      image:
        "https://bestcarfax.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-5.58.20-PM.jpeg",
    },
    {
      key: "james",
      image:
        "https://bestcarfax.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-5.58.53-PM.jpeg",
    },
    {
      key: "michael",
      image:
        "https://bestcarfax.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-5.58.21-PM.jpeg",
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
    <section className="bg-[#0B1120] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t("testimonials.title")}
          </h2>

          <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Testimonial */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={previousTestimonial}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-2
              sm:-translate-x-6
              w-11
              h-11
              rounded-full
              bg-slate-900
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-slate-300
              hover:bg-blue-600
              hover:border-blue-600
              hover:text-white
              transition-all
              duration-300
              z-10
            "
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Card */}
          <div
            className="
              bg-slate-900/60
              border
              border-slate-800
              rounded-2xl
              p-7
              sm:p-10
              mx-4
              sm:mx-8
              transition-all
              duration-500
              hover:border-blue-500/40
              hover:shadow-xl
              hover:shadow-blue-500/10
            "
          >
            <div className="flex flex-col items-center text-center">

              {/* Customer Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>

                <img
                  src={testimonial.image}
                  alt={t(`testimonials.${testimonial.key}.name`)}
                  className="
                    relative
                    w-20
                    h-20
                    rounded-full
                    object-cover
                    border-2
                    border-slate-700
                  "
                />
              </div>

              {/* Quote Icon */}
              <div className="text-blue-500 mb-5">
                <Quote size={30} fill="currentColor" />
              </div>

              {/* Text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                {t(`testimonials.${testimonial.key}.text`)}
              </p>

              {/* Name */}
              <h3 className="mt-6 text-lg font-bold text-white">
                {t(`testimonials.${testimonial.key}.name`)}
              </h3>

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
              translate-x-2
              sm:translate-x-6
              w-11
              h-11
              rounded-full
              bg-slate-900
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-slate-300
              hover:bg-blue-600
              hover:border-blue-600
              hover:text-white
              transition-all
              duration-300
              z-10
            "
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
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
                    ? "w-7 bg-blue-500"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;