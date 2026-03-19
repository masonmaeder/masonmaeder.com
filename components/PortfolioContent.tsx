"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Adrenal Nodule Clinic Navigator",
    description:
      "Web application designed to help clinicians manage and track adrenal nodule cases. Features patient data visualization, diagnostic guidelines, and decision support tools for clinical evaluation and follow-up protocols.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    category: "Healthcare Tech",
    image: "/images/projects/adrenal-nodule.jpg",
  },
  {
    id: 2,
    title: "AI Healthcare Ethics Research",
    description:
      "Research platform exploring ethical implications of AI in clinical decision-making. Includes data collection tools, analysis dashboards, and visualization of bias patterns in medical AI systems.",
    technologies: ["Next.js", "Python", "TensorFlow", "React"],
    link: "#",
    category: "Research",
    image: "/images/projects/ai-ethics.jpg",
  },
  {
    id: 3,
    title: "Distributed Systems & Big Data Project",
    description:
      "Large-scale distributed data processing system for analyzing medical datasets. Implements MapReduce patterns, data pipeline orchestration, and real-time metrics aggregation across multiple nodes.",
    technologies: ["Apache Spark", "Hadoop", "Java", "Kafka"],
    link: "#",
    category: "Backend",
    image: "/images/projects/distributed-systems.jpg",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with real-time inventory management, payment processing, and administrative dashboard for product and order management.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    link: "#",
    category: "Full Stack",
    image: "/images/projects/ecommerce.jpg",
  },
  {
    id: 5,
    title: "Task Management Application",
    description:
      "Collaborative task management platform with real-time updates, team collaboration features, notifications, and project tracking capabilities.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    link: "#",
    category: "Frontend",
    image: "/images/projects/task-manager.jpg",
  },
  {
    id: 6,
    title: "AI-Powered Chat Application",
    description:
      "Intelligent chat application powered by AI with conversation history, user preferences, context awareness, and natural language processing capabilities.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind"],
    link: "#",
    category: "Full Stack",
    image: "/images/projects/ai-chat.jpg",
  },
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
        <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
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
          I'm always excited to discuss new projects, technical challenges, and
          opportunities to create impactful software solutions. Let's connect and
          explore what we can build together.
        </p>
        <Link href="/contact" className="button-primary">
          Start a Project
        </Link>
      </motion.section>
    </div>
  );
}
