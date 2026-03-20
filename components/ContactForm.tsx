"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error || "Failed to send message";
        console.error("API Error:", errorMsg);
        setErrorMessage(errorMsg);
        throw new Error(errorMsg);
      }

      console.log("Form submitted successfully!");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      {/* Name Field */}
      <div className="group">
        <label
          htmlFor="name"
          className="block text-gray-900 font-semibold mb-2 text-sm tracking-wide"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Mason Maeder"
          aria-label="Your full name"
        />
      </div>

      {/* Email Field */}
      <div className="group">
        <label
          htmlFor="email"
          className="block text-gray-900 font-semibold mb-2 text-sm tracking-wide"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="you@example.com"
          aria-label="Your email address"
        />
      </div>

      {/* Subject Field */}
      <div className="group">
        <label
          htmlFor="subject"
          className="block text-gray-900 font-semibold mb-2 text-sm tracking-wide"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Project Inquiry"
          aria-label="Message subject"
        />
      </div>

      {/* Message Field */}
      <div className="group">
        <label
          htmlFor="message"
          className="block text-gray-900 font-semibold mb-2 text-sm tracking-wide"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input resize-none"
          placeholder="Tell me about your project, idea, or opportunity..."
          aria-label="Your message"
        />
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg animate-fade-in">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-green-400 font-medium">
              Thank you! Your message has been sent successfully. I'll get back
              to you shortly.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg animate-fade-in">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="text-red-400 font-medium">
              {errorMessage || "Oops! There was an error sending your message. Please try again."}
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${isSubmitting ? "opacity-50" : ""
          }`}
      >
        <div className="flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.25"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M4 12a8 8 0 018-8v0a8 8 0 110 16v0a8 8 0 01-8-8"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </>
          )}
        </div>
      </button>

      <p className="text-xs text-gray-500 text-center">
        I typically respond within 24 hours.
      </p>
    </form>
  );
}
