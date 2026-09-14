import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="min-h-screen bg-[#0B1120] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">

          <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            {t("contact.label")}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t("contact.title")}
          </h1>

          <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-6"></div>

          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>

        </div>

        {/* Contact Card */}
        <div
          className="
            max-w-3xl
            mx-auto
            bg-slate-900/60
            border
            border-slate-800
            rounded-2xl
            p-6
            sm:p-8
            lg:p-10
            shadow-xl
          "
        >

          {/* Success Message */}
          {submitted && (
            <div
              className="
                mb-8
                p-5
                rounded-xl
                bg-green-500/10
                border
                border-green-500/30
                text-center
              "
            >
              <p className="text-green-400 font-semibold text-lg">
                {t("contact.success")}
              </p>

              <p className="text-slate-400 mt-2">
                {t("contact.thankYou")}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t("contact.name")}
              </label>

              <input
                type="text"
                required
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                "
                placeholder={t("contact.name")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t("contact.email")}
              </label>

              <input
                type="email"
                required
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                "
                placeholder={t("contact.email")}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t("contact.phone")}
              </label>

              <input
                type="tel"
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                "
                placeholder={t("contact.phone")}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t("contact.message")}
              </label>

              <textarea
                required
                rows="6"
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                "
                placeholder={t("contact.message")}
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full
                sm:w-auto
                px-8
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
              {t("contact.send")}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;