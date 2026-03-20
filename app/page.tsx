"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const featuredProjects = [
  {
    id: 1,
    title: "Adrenal Nodule Clinic Navigator",
    description:
      "A patient-facing web application designed to help individuals understand and navigate the clinical process after an incidental adrenal nodule referral.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "OpenAI API"],
    link: "/portfolio",
    category: "Web App",
    image: "/images/projects/navigator.png",
  },
  {
    id: 2,
    title: "Finding Love in Chernobyl",
    description:
      "A narrative-driven dating simulator that explores intimacy, mortality, and choice under the pressure of impending doom.",
    technologies: ["GameMaker"],
    link: "/portfolio",
    category: "PC Game",
    image: "/images/projects/finding-love.png",
  },
];

export default function Home() {
  return (
    <div className="container-custom">
      {/* Hero Section */}
      <motion.section
        className="py-20 md:py-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm Mason Maeder
            </h1>
            {/* <p className="text-xl text-gray-700 mb-6">
              Software Engineer
            </p> */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Senior Computer Science and Information Science student at UW-Madison seeking a full-time Software Engineer or Systems Programmer role upon graduation in May 2026.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/assets/Mason_Maeder_resume.pdf"
                download
                className="button-primary text-center"
              >
                Download My Resume
              </a>
              <Link href="/contact" className="button-secondary text-center">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right: Headshot Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Image placeholder with gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-gray-500/20 rounded-2xl"></div>
              <div className="relative w-full h-full bg-secondary rounded-2xl border-2 border-accent flex items-center justify-center overflow-hidden">
                <img
                  src="/images/headshot.jpg"
                  alt="Mason Maeder headshot"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    const img = (e.target as HTMLImageElement)
                      .parentElement;
                    if (img) {
                      img.innerHTML +=
                        '<span class="text-gray-600 text-center px-4">Add your headshot to /public/images/headshot.jpg</span>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      {/* <motion.section
        className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="card text-center py-10">
          <div className="text-5xl font-bold text-accent mb-3">5+</div>
          <p className="text-gray-700 text-lg">Years Experience</p>
        </div>
        <div className="card text-center py-10">
          <div className="text-5xl font-bold text-accent mb-3">20+</div>
          <p className="text-gray-700 text-lg">Projects Completed</p>
        </div>
        <div className="card text-center py-10">
          <div className="text-5xl font-bold text-accent mb-3">100%</div>
          <p className="text-gray-700 text-lg">Client Satisfaction</p>
        </div>
      </motion.section> */}

      {/* Featured Projects Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-700 text-lg">
            Explore a selection of my recent work showcasing my experience in
            software development and user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link href="/portfolio" className="button-primary inline-block">
            View All Projects
          </Link>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title text-center mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Python",
            "Java",
            "C",
            "Job Control Language (JCL)",
            "REXX",
            "z/OS (IBM Z Xplore - Advanced Certificate)",
            "TSO/ISPF",
            "Git",
            "Operating Systems",
            "SQL",
            "YAML",
            "Docker",
            "Kubernetes",
            "Apache Airflow",
            "Relational Databases",
            "PostgreSQL",
            "CloudNativePG",
            "Artificial Intelligence (AI)",
            "Elasticsearch",
            "LLMs",
            "FastAPI",
            "Selenium",
            "Linux",
            "Data Structures",
            "Algorithms",
            "React",
            "HTML",
            "CSS",
            "Microsoft Office",
            "Microsoft Excel",
          ].map((skill) => (
            <div
              key={skill}
              className="card text-center py-8 hover:bg-accent hover:text-primary transition-colors duration-200"
            >
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-secondary rounded-lg p-8 md:p-12 text-center border border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Work Together?
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Whether you have a question or just want to say hi, feel free to reach
          out. I'm always interested in hearing about new projects and
          opportunities.
        </p>
        <Link href="/contact" className="button-primary">
          Get In Touch
        </Link>
      </motion.section>
    </div>
  );
}
