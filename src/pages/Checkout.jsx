import { useState } from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";

const packages = {
  Silver: {
    name: "Silver",
    price: "$47.99",
  },
  Gold: {
    name: "Gold",
    price: "$68.99",
  },
  Platinum: {
    name: "Platinum",
    price: "$89.99",
  },
};

function Checkout() {
  const [searchParams] = useSearchParams();

  const selectedPackage =
    searchParams.get("package") || "Silver";

  const packageInfo =
    packages[selectedPackage] || packages.Silver;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    vinHin: "",
    package: packageInfo.name,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      {/* =========================
          CHECKOUT HEADER
      ========================== */}
      <section className="pt-16 sm:pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">

          <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-4">
            Vehicle History Report
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {packageInfo.name}
          </h1>

          <div className="w-[50px] h-[3px] bg-blue-500 rounded-full mx-auto mt-5 mb-5"></div>

          <p className="text-slate-400 text-base sm:text-lg">
            Complete the form below to request your vehicle history report.
          </p>

        </div>
      </section>

      {/* =========================
          SUCCESS MESSAGE
      ========================== */}
      {submitted && (
        <section className="max-w-3xl mx-auto px-5 sm:px-6 mb-8">

          <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <CheckCircle
                size={32}
                className="text-white"
              />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-green-400">
                Your submission is confirmed
              </h2>

              <p className="text-slate-300 mt-1">
                Your information has been successfully submitted.
                You can now continue to payment.
              </p>
            </div>

          </div>

        </section>
      )}

      {/* =========================
          FORM
      ========================== */}
      <section className="pb-16">

        <div className="max-w-4xl mx-auto px-5 sm:px-6">

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">

            {!submitted ? (
              <form onSubmit={handleSubmit}>

                {/* Package */}
                <div className="mb-8">

                  <div className="flex items-center justify-between flex-wrap gap-3 mb-5">

                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider">
                        Selected Package
                      </p>

                      <h2 className="text-2xl font-bold text-white mt-1">
                        {packageInfo.name}
                      </h2>
                    </div>

                    <div className="text-2xl font-bold text-blue-500">
                      {packageInfo.price}
                    </div>

                  </div>

                  <div className="h-px bg-slate-800"></div>

                </div>

                {/* Personal Information */}
                <div className="mb-8">

                  <h2 className="text-xl font-bold mb-5">
                    Your Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="checkout-input"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        Phone
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                        className="checkout-input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="checkout-input"
                      />
                    </div>

                    {/* Street Address */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        Street Address
                      </label>

                      <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        required
                        placeholder="Enter street address"
                        className="checkout-input"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Enter city"
                        className="checkout-input"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        placeholder="Enter state"
                        className="checkout-input"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        Country
                      </label>

                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        placeholder="Enter country"
                        className="checkout-input"
                      />
                    </div>

                    {/* ZIP */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        ZIP Code
                      </label>

                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        placeholder="Enter ZIP code"
                        className="checkout-input"
                      />
                    </div>

                  </div>

                </div>

                {/* Vehicle Information */}
                <div className="mb-8">

                  <h2 className="text-xl font-bold mb-5">
                    Vehicle Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* VIN */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        VIN/HIN
                      </label>

                      <input
                        type="text"
                        name="vinHin"
                        value={formData.vinHin}
                        onChange={handleChange}
                        required
                        placeholder="Enter VIN/HIN"
                        className="checkout-input uppercase"
                      />
                    </div>

                    {/* Package */}
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">
                        Select Package
                      </label>

                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="checkout-input cursor-pointer"
                      >
                        <option value="Silver">
                          Silver - $47.99
                        </option>

                        <option value="Gold">
                          Gold - $68.99
                        </option>

                        <option value="Platinum">
                          Platinum - $89.99
                        </option>
                      </select>
                    </div>

                  </div>

                </div>

                {/* Terms */}
                <div className="border border-slate-800 rounded-xl p-5 sm:p-6 bg-slate-950/50 mb-7">

                  <h2 className="text-xl font-bold mb-5">
                    Terms & Conditions
                  </h2>

                  <div className="space-y-5 text-sm text-slate-400 leading-relaxed">

                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Accuracy of Information
                      </h3>

                      <p>
                        By submitting this form, you confirm that all the
                        information provided is accurate and complete to the
                        best of your knowledge. BEST CARFAX is not responsible
                        for errors or omissions in the information submitted.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Data Usage Consent
                      </h3>

                      <p>
                        The information collected through this form will be
                        used solely for the purpose of generating vehicle
                        history reports and providing related services. Your
                        data will be handled in accordance with our Privacy
                        Policy.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Service Disclaimer
                      </h3>

                      <p>
                        BEST CARFAX does not guarantee the availability or
                        accuracy of vehicle history data, as it depends on
                        third-party sources. Submitting this form indicates
                        your understanding that BEST CARFAX is not liable for
                        any discrepancies or incomplete information in the
                        reports provided.
                      </p>
                    </div>

                  </div>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-semibold
                    text-lg
                    transition-all
                    duration-300
                    hover:scale-[1.01]
                    active:scale-95
                    shadow-lg
                    shadow-blue-600/20
                  "
                >
                  Submit
                </button>

              </form>
            ) : (

              /* =========================
                 PAYMENT SECTION
              ========================== */
              <div>

                <div className="text-center mb-10">

                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Complete Your Payment
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Selected package:{" "}
                    <span className="text-blue-500 font-semibold">
                      {formData.package}
                    </span>
                  </p>

                  <p className="text-3xl font-bold mt-4">
                    {
                      packages[formData.package]?.price ||
                      packageInfo.price
                    }
                  </p>

                </div>

                {/* PayPal */}
                <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 bg-slate-950/50 mb-5">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-xl">
                        P
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        PayPal
                      </h3>

                      <p className="text-slate-400 text-sm">
                        Pay via PayPal.
                      </p>
                    </div>

                  </div>

                  <button
                    type="button"
                    className="
                      w-full
                      mt-6
                      py-4
                      rounded-xl
                      bg-[#ffc439]
                      hover:bg-[#f2b900]
                      text-black
                      font-bold
                      transition-all
                      duration-300
                      hover:scale-[1.01]
                    "
                    onClick={() => {
                      alert(
                        "PayPal checkout will be connected here."
                      );
                    }}
                  >
                    Pay with PayPal
                  </button>

                </div>

                {/* Other Payment Methods */}
                <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 bg-slate-950/50 mb-5">

                  <h3 className="text-lg font-bold mb-5">
                    Other payment methods
                  </h3>

                  <div className="space-y-3">

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                        💳
                      </div>

                      <span className="text-slate-200">
                        Debit & Credit Cards
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                        G
                      </div>

                      <span className="text-slate-200">
                        Google Pay
                      </span>
                    </div>

                  </div>

                </div>

                {/* Privacy Notice */}
                <div className="flex items-start gap-3 mt-7">

                  <ShieldCheck
                    size={22}
                    className="text-blue-500 shrink-0 mt-0.5"
                  />

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      privacy policy
                    </Link>
                    .
                  </p>

                </div>

                {/* Back */}
                <div className="text-center mt-8">

                  <Link
                    to="/pricing"
                    className="text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    ← Back to Pricing
                  </Link>

                </div>

              </div>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Checkout;