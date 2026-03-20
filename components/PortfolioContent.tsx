"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Adrenal Nodule Clinic Navigator",
    description:
      "A patient-facing web application designed to help individuals understand and navigate the clinical process after an incidental adrenal nodule referral.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "OpenAI API"],
    link: "https://cs620.masonmaeder.com/",
    category: "Healthcare Tech",
    image: "/images/projects/navigator.png",
  },
  {
    id: 2,
    title: "Finding Love in Chernobyl",
    description:
      "A narrative-driven dating simulator that explores intimacy, mortality, and choice under the pressure of impending doom.",
    technologies: ["GameMaker"],
    link: "https://masonmaeder.itch.io/finding-love-in-chernobyl",
    category: "PC Game",
    image: "/images/projects/finding-love.png",
  },
  // {
  //   id: 3,
  //   title: "Distributed Systems & Big Data Project",
  //   description:
  //     "Large-scale distributed data processing system for analyzing medical datasets. Implements MapReduce patterns, data pipeline orchestration, and real-time metrics aggregation across multiple nodes.",
  //   technologies: ["Apache Spark", "Hadoop", "Java", "Kafka"],
  //   link: "#",
  //   category: "Backend",
  //   image: "/images/projects/distributed-systems.jpg",
  // },
  // {
  //   id: 4,
  //   title: "E-Commerce Platform",
  //   description:
  //     "Full-stack e-commerce platform with real-time inventory management, payment processing, and administrative dashboard for product and order management.",
  //   technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  //   link: "#",
  //   category: "Full Stack",
  //   image: "/images/projects/ecommerce.jpg",
  // },
  // {
  //   id: 5,
  //   title: "Task Management Application",
  //   description:
  //     "Collaborative task management platform with real-time updates, team collaboration features, notifications, and project tracking capabilities.",
  //   technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
  //   link: "#",
  //   category: "Frontend",
  //   image: "/images/projects/task-manager.jpg",
  // },
  // {
  //   id: 6,
  //   title: "AI-Powered Chat Application",
  //   description:
  //     "Intelligent chat application powered by AI with conversation history, user preferences, context awareness, and natural language processing capabilities.",
  //   technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind"],
  //   link: "#",
  //   category: "Full Stack",
  //   image: "/images/projects/ai-chat.jpg",
  // },
];

export default function PortfolioContent() {
  return (
    <div className="container-custom py-20">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="section-title">Portfolio</h1>
        <p className="text-gray-700 text-lg max-w-3xl">
          A selection of projects showcasing my expertise in full-stack development,
          healthcare technology, distributed systems, and innovative solutions. Each
          project demonstrates my commitment to clean code, user experience, and
          solving real-world problems.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </motion.div>

      {/* Call to Action Section */}
      <motion.section
        className="bg-secondary rounded-lg p-8 md:p-12 text-center border border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Interested in Collaborating?
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          I'm excited to discuss new projects, challenges, and
          opportunities to create impactful solutions. Let's connect!
        </p>
        <Link href="/contact" className="button-primary">
          Get In Touch
        </Link>
      </motion.section>
    </div>
  );
}
