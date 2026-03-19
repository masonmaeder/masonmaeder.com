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
            Software Engineer & Curling Enthusiast
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a passionate full-stack software engineer with a Bachelor of
            Science in Computer Science. My journey in tech started with a
            curiosity about how systems work, which led me to master modern
            technologies including TypeScript, React, Next.js, and cloud
            services. With over 5 years of professional experience, I've built
            scalable, user-centric applications for startups and enterprise
            clients.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beyond the code, I'm passionate about leadership and community
            building. I've led student organizations, mentored junior developers,
            and founded a curling club that has grown into a thriving community.
            My competitive spirit led me to become a national champion curler,
            consistently ranking among the top teams in national competitions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What drives me is creating impact—whether through innovative software
            solutions or building strong teams around shared interests. I believe
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Passion for Curling</h2>
        <p className="text-gray-700 text-lg mb-8">
          Beyond software engineering, curling is my competitive outlet and
          source of joy. I founded a local curling club and have dedicated myself
          to the sport, earning recognition as a national champion. The sport has
          taught me valuable lessons about strategy, teamwork, and precision—all
          skills that translate directly to software development.
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
              National champion and committed athlete
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
              Club Founder
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Building community through sport
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills & Expertise */}
      <motion.section
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
      </motion.section>

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
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-accent mb-2">University Name</p>
          <p className="text-gray-400">Graduated: 2020</p>
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
