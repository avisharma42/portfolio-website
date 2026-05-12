"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Electronic Medical Passport (EMP)",
    date: "Nov 2025 – Jan 2026",
    status: "Patent Filed | Active Development",
    description: "A Blockchain Healthcare Platform. Developed RESTful APIs and backend services following SDLC practices. Implemented RBAC with auto-expiring permissions for doctors and emergency responders. Used IPFS for decentralized file storage and Ethereum smart contracts for immutable audit trails.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Ethereum", "IPFS"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Role-Based Access Control System (RBAC)",
    date: "Sep 2025 – Nov 2025",
    status: "Completed",
    description: "Developed a full-stack Role-Based Access Control system using REST APIs and MongoDB to manage users, roles, and permissions across multiple modules. Ensured secure API access using middleware-based role and permission validation, improving system security and maintainability.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "DigiVoter – Decentralized Voting",
    date: "Jan 2025 – Oct 2025",
    status: "Patent Published | ICP Blockchain",
    description: "Co-invented and developed a serverless, decentralized online voting platform using the Internet Computer Protocol (ICP). Eliminated centralized servers to prevent vote tampering. Implemented end-to-end transparency, cryptographic vote receipts, and real-time result publishing.",
    tech: ["ICP", "React", "Motoko", "Tailwind CSS"],
    color: "from-emerald-400 to-cyan-500"
  }
];

const ProjectCard = ({ project, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-panel rounded-3xl overflow-hidden group relative"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-white/20 transition-colors duration-300">
            <Layers className="text-cyan-400" size={32} />
          </div>
          <div className="text-right">
            <span className="block text-sm text-gray-400 font-medium mb-1">{project.date}</span>
            <span className="inline-block text-xs font-semibold bg-white/5 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20">
              {project.status}
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-8 line-clamp-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech: string, i: number) => (
            <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200">
            <FaGithub size={18} /> Code
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors duration-200">
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
      
      {/* Decorative hover effect */}
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of my recent work focusing on Web3, Blockchain, and Full-Stack Development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
