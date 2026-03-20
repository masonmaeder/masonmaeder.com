"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "UW School of Medicine and Public Health",
    position: "Informatics Student Developer",
    startDate: "June 2023",
    endDate: "Present",
    description: [
      "Architected an agentic AI system using Atomic Agents and Instructor AI to translate natural language prompts into executable SQL queries, allowing non-technical research staff to directly and efficiently access clinical data stored in Delta Tables",
      "Built a Retrieval-Augmented Generation (RAG) pipeline by integrating Elasticsearch as a vector database, enabling the AI tool to provide context-aware responses through a FastAPI interface",
      "Migrated the Airflow database from a traditional Postgres cluster to CloudNativePG, enabling a more resilient backup and restore workflow using volume snapshots in preparation for a major system upgrade",
      "Developed a DeltaTable upsert task in Airflow by leveraging the KubernetesPodOperator to run workloads in custom Docker containers, improving deployment security and resource efficiency by restricting task environments to only access essential dependencies",
      "Developed a Python-based automation script with Selenium to streamline daily OnCore functions, increasing data accuracy by minimizing the risk of manual entry errors by clinical researchers",
    ],
  },
  {
    id: 2,
    company: "CVS Health",
    position: "Operations Manager",
    startDate: "May 2024",
    endDate: "Present",
    description: [
      "Directly manage a team of 10 employees, overseeing operations including weekly scheduling, payroll, and performance management to optimize efficiency of shifts and improve the store's financial results",
      "Optimize the customer-focused inventory replenishment process in a high-volume retail environment, implementing strategies to improve product availability and reduce overstock",
      "Screen, interview, and select qualified candidates for store supervisory and pharmacy technician positions, contributing to developing a well-performing team",
    ],
  },
  {
    id: 3,
    company: "State of Wisconsin Department of Administration",
    position: "Mainframe Intern",
    startDate: "June 2025",
    endDate: "August 2025",
    description: [
      "Wrote and automated the generation of a once-daily report to track IBM z16 CPU consumption trends using REXX and integrated the solution into a scheduled JCL job using Control-M to notify the mainframe performance team of any overages",
      "Developed a post-processing script using Python, which uploads z/OS report datasets to email and SharePoint, automating report distribution to centralize reporting and streamline the onboarding process for new mainframe professionals",
      "Researched and presented to State of Wisconsin Administrators on the application of Infrastructure as Code (IaC) principles to mainframe environments, analyzing tools including Ansible, Terraform, and z/OSMF Workflows to provide recommendations for modernizing system deployment and infrastructure management",
    ],
  },
  // {
  //   id: 4,
  //   company: "UW-Madison",
  //   position: "Founder & President – Curling Club",
  //   startDate: "2021",
  //   endDate: "Present",
  //   concurrent: true,
  //   description: [
  //     "Founded and grew university curling club to 50+ active members",
  //     "Organized competitions, clinics, and community partnerships",
  //     "Led team to national championship recognition",
  //     "Developed strategic planning and organizational leadership capabilities",
  //   ],
  // },
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
          href="/assets/Mason_Maeder_resume.pdf"
          download
          className="button-primary inline-flex items-center gap-2"
        >
          {/* <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg> */}
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
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-gray-500"></div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative md:ml-24"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute -left-14 top-6 w-5 h-5 bg-accent rounded-full border-4 border-primary shadow-lg shadow-accent/50 z-10"></div>

              <div className="card hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 hover:border-accent">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-accent font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 font-medium whitespace-nowrap">
                      {exp.startDate} – {exp.endDate}
                    </p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
                Bachelor of Science: Computer Sciences, Information Science
              </h3>
              <p className="text-accent text-lg font-medium mb-4">
                University of Wisconsin–Madison
              </p>
              {/* <p className="text-gray-600 text-base">
                Exploring the intersection of software engineering, healthcare
                technology, and distributed systems. Focus on practical
                applications and real-world problem solving.
              </p> */}
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="text-accent font-semibold">Expected Graduation:</span> May
                  2026
                </p>
                <p className="text-gray-700">
                  <span className="text-accent font-semibold">Certificates:</span> Digital Studies, Game Design, Leadership
                </p>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 text-sm mb-3 font-medium">
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Algorithms",
                    "Artificial Intelligence (AI)",
                    "Big Data Systems",
                    "Database Design",
                    "Operating Systems",
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership & Involvement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="card hover:border-accent transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Founder and President
            </h3>
            <p className="text-accent mb-2 font-medium">Curling Club of UW-Madison</p>
            <p className="text-gray-600 text-sm">
              We won three consectuive National College Curling Championships in 2024, 2025, and 2026. As president, I provide coaching and skill development for 15+ students during weekly practices. I also handle all administrative duties, including managing a $13,000+ annual budget, scheduling events, and presenting to the Sport Club Council to secure funding.
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
              House Fellow (Resident Advisor)
            </h3>
            <p className="text-accent mb-2 font-medium">
              University Housing, UW-Madison
            </p>
            <p className="text-gray-600 text-sm">
              I work closely with two others to manage a floor of 137 residents, fostering an inclusive and supportive community through regular events. We respond to medical emergencies, resolve roommate conflicts, and handle mental health concerns. We collaborate with university departments to organize events that enhance residents' academic, social, and personal development.
            </p>
          </motion.div>
          {/* <motion.div
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
          </motion.div> */}
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
          I'm excited to discuss new projects, challenges, and opportunities to create impactful solutions. Let's connect!
        </p>
        <Link href="/contact" className="button-primary">
          Get In Touch
        </Link>
      </motion.section>
    </div>
  );
}
