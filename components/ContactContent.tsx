"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactContent() {
  return (
    <div className="container-custom py-20">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="section-title">Get In Touch</h1>
        <p className="text-gray-700 text-lg max-w-2xl">
          I'm passionate about building impactful software solutions and exploring
          new opportunities in technology. Whether you're interested in discussing a
          project, collaborating on healthcare technology, or simply connecting—I'd
          love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Details</h2>

          <div className="space-y-8">
            {/* Email */}
            <motion.div
              className="card p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </h3>
              <a
                href="mailto:mason@masonmaeder.com"
                className="text-accent hover:text-gray-700 transition-colors text-lg font-medium"
              >
                mason@masonmaeder.com
              </a>
              <p className="text-gray-600 text-sm mt-2">
                I'll get back to you within 24 hours
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Location
              </h3>
              <p className="text-gray-300 text-lg">Madison, Wisconsin</p>
              <p className="text-gray-600 text-sm mt-2">
                Based at UW-Madison, open to remote opportunities
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4.243 4.243a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4.243-4.243a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/masonmaeder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent transition-colors font-medium flex items-center gap-2 group"
                >
                  <span>LinkedIn</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6-6m6 6V5"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/masonmaeder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent transition-colors font-medium flex items-center gap-2 group"
                >
                  <span>GitHub</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6-6m6 6V5"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
          <p className="text-gray-600 text-sm mb-6">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </motion.div>
      </div >

      {/* FAQ Section */}
      <motion.section
        className="mt-20 pt-20 border-t border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
          Quick Answers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What are you looking for?
            </h3>
            <p className="text-gray-600">
              I'm interested in internships, full-time opportunities in software
              engineering, healthcare technology, and collaborative projects that
              make a real impact.
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How quickly do you respond?
            </h3>
            <p className="text-gray-600">
              I typically respond to inquiries within 24 hours during the week. For
              time-sensitive matters, feel free to reach out via email with
              "URGENT" in the subject line.
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Are you available for consulting?
            </h3>
            <p className="text-gray-600">
              I'm currently focused on my studies at UW-Madison. I'm open to
              discussing select projects or partnerships that align with my
              interests in healthcare tech and distributed systems.
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Want to collaborate?
            </h3>
            <p className="text-gray-600">
              Absolutely! I'm always excited about innovative projects. Whether it's
              open-source contributions or academic collaborations, let's talk about
              how we can work together.
            </p>
          </motion.div>
        </div>
      </motion.section >
    </div >
  );
}
