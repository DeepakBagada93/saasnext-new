"use client";
import { useState } from "react";

// Define constants outside the component
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
  const [submitStatus, setSubmitStatus] = useState(null); // { success: boolean, message: string } | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
        let errorMessage = `API Error: ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          console.error("Error parsing error response:", parseError);
        }
        throw new Error(errorMessage);
      }

      setSubmitStatus({
        success: true,
        message: "Thank you! We'll contact you soon.",
      });
      setFormData(initialFormData);

    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus({
        success: false,
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Base input/select classes for dark theme
  const inputBaseClasses = "w-full px-4 py-2.5 rounded-lg bg-[#1f2a55] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400";

  return (
    // Apply dark background, white text, padding, and rounded corners
    <div className="max-w-lg mx-auto p-8 bg-[#161e42] rounded-xl shadow-lg my-10 border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., John Doe"
            required
            aria-required="true"
            className={inputBaseClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., john.doe@example.com"
            required
            aria-required="true"
            className={inputBaseClasses}
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
            WhatsApp Number (Optional)
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="e.g., +1 123 456 7890"
            className={inputBaseClasses}
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            aria-required="true"
            className={`${inputBaseClasses} appearance-none`} // Added appearance-none for custom arrow styling if needed
          >
            <option value="" disabled className="text-gray-500">-- Select a Service --</option>
            {services.map((service) => (
              <option key={service} value={service} className="bg-[#1f2a55] text-white">
                {service}
              </option>
            ))}
          </select>
          {/* Basic custom arrow - adjust styling as needed */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div> */}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 ease-in-out disabled:bg-orange-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {submitStatus && (
        <div
          role="alert"
          aria-live="assertive"
          className={`mt-5 p-3 rounded-lg text-sm font-medium ${
            submitStatus.success
              ? "bg-green-900 bg-opacity-50 text-green-300 border border-green-700" // Adjusted for dark theme
              : "bg-red-900 bg-opacity-50 text-red-300 border border-red-700" // Adjusted for dark theme
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
