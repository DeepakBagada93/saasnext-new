"use client";
import { useState } from "react";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    budget: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Thank you! We’ll contact you soon." });
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          budget: "",
          message: "",
          service: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus({ success: false, message: "Failed to send email. Please check your details and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Get a Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-2 border rounded" />
        <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp (Optional)" className="w-full p-2 border rounded" />
        <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="Your Budget (Optional)" className="w-full p-2 border rounded" />
        <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="SEO Optimization">SEO Optimization</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
        </select>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 rounded">
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
      {submitStatus && (
        <p className={`mt-2 text-sm ${submitStatus.success ? "text-green-500" : "text-red-500"}`}>
          {submitStatus.message}
        </p>
      )}
    </div>
  );
};

export default Services;
