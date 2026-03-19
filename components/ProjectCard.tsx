import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  category: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="card flex flex-col h-full group"
      whileHover={{
        boxShadow:
          "0 10px 15px -3px rgb(51 51 51 / 0.1), 0 4px 6px -2px rgb(51 51 51 / 0.04)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 mb-4 rounded overflow-hidden bg-gradient-to-br from-accent/10 to-gray-500/10 border border-gray-300 group-hover:border-accent transition-colors duration-300">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const container = (e.target as HTMLImageElement).parentElement;
              if (container) {
                container.innerHTML +=
                  '<div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-gray-500/10"><span class="text-gray-600 text-center px-4">Project Image</span></div>';
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-600 text-sm">Project Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full group-hover:bg-accent group-hover:text-primary transition-all duration-200">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        <a
          href={project.link}
          className="text-accent font-semibold hover:text-gray-700 transition-all duration-200 flex items-center gap-2 group/link"
        >
          View Project
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
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
        </a>
      </div>
    </motion.div>
  );
}
