"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "UW School of Medicine and Public Health",
    position: "Informatics Software Engineering Intern",
    period: "2024 - Present",
    description: [
      "Develop full-stack healthcare informatics applications using React and Node.js",
      "Collaborate with medical professionals to understand clinical workflows and requirements",
      "Implement secure data handling and HIPAA-compliant features",
      "Contribute to open-source healthcare technology initiatives",
    ],
  },
  {
    id: 2,
    company: "CVS Health",
    position: "Store Manager in Training",
    period: "2023 - 2024",
    description: [
      "Developed leadership and operational management skills across retail operations",
      "Managed inventory systems, staff scheduling, and customer service excellence",
      "Analyzed sales data and implemented strategies to improve store performance",
      "Balanced corporate leadership track with personal pursuit of software engineering",
    ],
  },
  {
    id: 3,
    company: "UW Housing",
    position: "House Fellow",
    period: "2022 - 2023",
    description: [
      "Led residential community of 40+ students with mentoring and support",
      "Organized educational programming and community-building events",
      "Managed residential policies and student conduct matters",
      "Developed conflict resolution and interpersonal communication skills",
    ],
  },
  {
    id: 4,
    company: "UW-Madison",
    position: "Founder & President – Curling Club",
    period: "2021 - Present",
    description: [
      "Founded and grew university curling club to 50+ active members",
      "Organized competitions, clinics, and community partnerships",
      "Led team to national championship recognition",
      "Developed strategic planning and organizational leadership capabilities",
    ],
  },
];

export default function ExperienceContent() {
  return (
    <div className="container-custom py-20">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="section-title">Experience</h1>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl">
          A passion for impact across technology, leadership, and community. My
          experience spans healthcare informatics, retail operations, student
          leadership, and entrepreneurship—all building toward my goal of creating
          meaningful software solutions.
        </p>

        {/* Resume Download Button */}
        <a
          href="/assets/resume.pdf"
          download
          className="button-primary inline-flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2H3l9-2m0 0V5m0 14l-9-2H3m9 2l9-2m-9-14l-9 2H3m9-2l9 2"
            />
          </svg>
          Download Full Resume
        </a>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-gray-500"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:grid-cols-[1fr_1fr]" : "md:grid-cols-[1fr_1fr]"
                }`}
            >
              {/* For even indices, content on left, timeline on right */}
              {index % 2 === 0 ? (
                <>
                  <div className="md:text-right">
                    <div className="card hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 hover:border-accent">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-accent font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 mb-4 text-sm font-medium">
                        {exp.period}
                      </p>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        {exp.description.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center items-start pt-6">
                    <div className="w-5 h-5 bg-accent rounded-full border-4 border-primary shadow-lg shadow-accent/50"></div>
                  </div>
                </>
              ) : (
                <>
                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center items-start pt-6">
                    <div className="w-5 h-5 bg-accent rounded-full border-4 border-primary shadow-lg shadow-accent/50"></div>
                  </div>
                  <div>
                    <div className="card hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:border-accent">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-accent font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 mb-4 text-sm font-medium">
                        {exp.period}
                      </p>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        {exp.description.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.section
        className="mt-20 pt-20 border-t border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                B.S. Computer Sciences
              </h3>
              <p className="text-accent text-lg font-medium mb-4">
                University of Wisconsin–Madison
              </p>
              <p className="text-gray-600 text-base">
                Exploring the intersection of software engineering, healthcare
                technology, and distributed systems. Focus on practical
                applications and real-world problem solving.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="text-accent font-semibold">Expected Graduation:</span> May
                  2026
                </p>
                <p className="text-gray-700">
                  <span className="text-accent font-semibold">Interests:</span> Healthcare
                  Informatics, Distributed Systems, Software Architecture
                </p>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 text-sm mb-3 font-medium">
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Database Systems",
                    "Software Engineering",
                    "Distributed Systems",
                    "Web Development",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certifications & Achievements */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="card hover:border-accent transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              National Curling Champion
            </h3>
            <p className="text-accent mb-2 font-medium">UW-Madison Curling Club</p>
            <p className="text-gray-600 text-sm">
              Led team to national championship recognition and grew club to 50+
              active members through strategic leadership and community engagement.
            </p>
          </motion.div>
          <motion.div
            className="card hover:border-accent transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Healthcare Innovation
            </h3>
            <p className="text-accent mb-2 font-medium">
              Informatics Internship
            </p>
            <p className="text-gray-600 text-sm">
              Contributing to cutting-edge healthcare technology solutions at UW
              School of Medicine, bridging software engineering with clinical
              applications.
            </p>
          </motion.div>
          <motion.div
            className="card hover:border-accent transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Leadership Development
            </h3>
            <p className="text-accent mb-2 font-medium">House Fellow & Founder</p>
            <p className="text-gray-600 text-sm">
              Developed leadership capabilities through student housing leadership
              and entrepreneurial ventures, managing teams and organizational
              growth.
            </p>
          </motion.div>
          <motion.div
            className="card hover:border-accent transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Full-Stack Development
            </h3>
            <p className="text-accent mb-2 font-medium">Technical Skills</p>
            <p className="text-gray-600 text-sm">
              Proficient in modern web technologies including React, Node.js,
              TypeScript, and healthcare-specific systems with focus on secure
              and scalable applications.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="mt-16 bg-secondary rounded-lg p-8 md:p-12 text-center border border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          I'm excited about opportunities in healthcare technology, full-stack
          development, and collaborative projects. Let's discuss how we can work
          together to create impactful solutions.
        </p>
        <Link href="/contact" className="button-primary">
          Get In Touch
        </Link>
      </motion.section>
    </div>
  );
}
