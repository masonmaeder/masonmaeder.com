"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div className="container-custom py-20">
      <h1 className="section-title">About Me</h1>

      {/* Hero Section with Introduction and Image */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Software Developer
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a software developer with a Bachelor of
            Science in Computer Sciences and Information Science. My journey in tech started with a
            curiosity about how systems work.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beyond the code, I'm passionate about leadership and community
            building. I founded a curling club on campus that has grown into a community.
            My competitive spirit led me to become a national champion curler, winning gold at collegiate curling nationals three years in a row.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What drives me is creating impact, whether through software
            solutions or team building around shared interests. I believe
            the best results come from combining technical excellence with strong
            communication and leadership skills.
          </p>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-gray-500/20 rounded-2xl"></div>
            <div className="relative aspect-square bg-secondary rounded-2xl border-2 border-accent flex items-center justify-center overflow-hidden">
              <img
                src="/images/headshot.jpg"
                alt="Mason Maeder"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  const container = (e.target as HTMLImageElement)
                    .parentElement;
                  if (container) {
                    container.innerHTML +=
                      '<span class="text-gray-400 text-center px-4">Add your headshot to /public/images/headshot.jpg</span>';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Curling Section */}
      <motion.section
        className="mb-20 py-12 border-t border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Curling</h2>
        <p className="text-gray-700 text-lg mb-8">
          I curl! Beyond software development, curling is my competitive outlet. I founded a collegiate curling club, earning recognition as a national champion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Curling Image 1 */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-gray-500/10 rounded-lg"></div>
            <div className="relative bg-secondary rounded-lg h-64 border border-gray-300 flex items-center justify-center overflow-hidden">
              <img
                src="/images/curling-action.jpg"
                alt="Curling action shot"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  const container = (e.target as HTMLImageElement)
                    .parentElement;
                  if (container) {
                    container.innerHTML +=
                      '<span class="text-gray-400 text-center px-4">Add curling photo to /public/images/curling-action.jpg</span>';
                  }
                }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Competitive Play
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              🥇 2024, 🥇 2025, 🥇 2026 College Curling National Champions
            </p>
          </div>

          {/* Curling Image 2 */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-gray-500/10 rounded-lg"></div>
            <div className="relative bg-secondary rounded-lg h-64 border border-gray-300 flex items-center justify-center overflow-hidden">
              <img
                src="/images/curling-team.jpg"
                alt="Curling team photo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  const container = (e.target as HTMLImageElement)
                    .parentElement;
                  if (container) {
                    container.innerHTML +=
                      '<span class="text-gray-400 text-center px-4">Add team photo to /public/images/curling-team.jpg</span>';
                  }
                }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Founder and President
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Representing the University of Wisconsin-Madison on the national level of competitive curling; and to instill in each of its members the values central to curling: integrity, teamwork, and self-betterment.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills & Expertise */}
      {/* <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">
              Frontend Development
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ React & Next.js</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Responsive Design</li>
              <li>✓ Web Performance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">
              Backend Development
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Node.js & Express</li>
              <li>✓ PostgreSQL & MongoDB</li>
              <li>✓ REST APIs</li>
              <li>✓ Database Design</li>
              <li>✓ AWS & Cloud Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">
              Tools & Technologies
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Git & GitHub</li>
              <li>✓ Docker & Kubernetes</li>
              <li>✓ CI/CD Pipelines</li>
              <li>✓ Agile Methodologies</li>
              <li>✓ Testing & QA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">
              Soft Skills
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Problem Solving</li>
              <li>✓ Team Leadership</li>
              <li>✓ Communication</li>
              <li>✓ Project Management</li>
              <li>✓ Mentoring</li>
            </ul>
          </div>
        </div>
      </motion.section> */}

      {/* Education */}
      <motion.section
        className="mb-20 py-12 border-t border-gray-300"
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

      {/* Call to Action */}
      <motion.section
        className="bg-secondary rounded-lg p-8 md:p-12 text-center border border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're interested in discussing software projects,
          collaborating on tech initiatives, or talking about curling, I'd love
          to hear from you. Let's build something great together.
        </p>
        <Link href="/contact" className="button-primary">
          Get In Touch
        </Link>
      </motion.section>
    </div>
  );
}
