"use client";
import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  whatsapp: "",
  service: "",
};

const services = [
  "Web App Development",
  "Lead Generation",
  "Email Marketing"
];

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let message = `API Error: ${response.statusText}`;
        try {
          const errorData = await response.json();
          message = errorData.message || message;
        } catch {}
        throw new Error(message);
      }

      setSubmitStatus({
        success: true,
        message: "Thank you! We will get in touch shortly.",
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClasses =
    "w-full px-4 py-2.5 rounded-lg bg-[#1f2a55] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400";

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#161e42] rounded-2xl shadow-xl my-12 border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SIDE – FORM */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Let’s Build Something Great Together 🚀
          </h2>
          <p className="text-gray-300 mb-8">
            Have an idea or project in mind? Share the details, and we’ll help you turn it into a powerful solution.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={inputBaseClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputBaseClasses}
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="+91 12345 67890"
                value={formData.whatsapp}
                onChange={handleChange}
                className={inputBaseClasses}
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                I am interested in
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={`${inputBaseClasses} appearance-none`}
              >
                <option value="" disabled>
                  -- Select Service --
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-orange-600 transition disabled:bg-orange-700"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>

          {submitStatus && (
            <div
              role="alert"
              className={`mt-5 p-3 rounded-lg text-sm font-medium ${
                submitStatus.success
                  ? "bg-green-800 text-green-200"
                  : "bg-red-800 text-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </div>

        {/* RIGHT SIDE – HOOK CONTENT */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <h3 className="text-3xl font-bold leading-tight">
            Your Vision, <span className="text-orange-500">Our Code.</span>
          </h3>
          <p className="text-gray-300 text-lg">
            We specialize in helping brands launch fast, scale smart, and grow with impact.
          </p>

          <div className="space-y-4">
            <div className="bg-[#1f2a55] rounded-xl p-4 border border-gray-600">
              <h4 className="font-semibold text-lg">⚡ Fast Development</h4>
              <p className="text-gray-400 text-sm">From concept to launch in record time.</p>
            </div>
            <div className="bg-[#1f2a55] rounded-xl p-4 border border-gray-600">
              <h4 className="font-semibold text-lg">💡 Growth-Oriented</h4>
              <p className="text-gray-400 text-sm">Built for leads, conversions, and scale.</p>
            </div>
            <div className="bg-[#1f2a55] rounded-xl p-4 border border-gray-600">
              <h4 className="font-semibold text-lg">🤝 Human-Centered</h4>
              <p className="text-gray-400 text-sm">We focus on clarity, collaboration, and long-term value.</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            100+ brands trust us to bring their digital ideas to life. Let’s connect today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
