"use client";

import { motion } from "framer-motion";

const skillsData = [
  { category: "Programming", items: ["Java", "C++", "C", "Python", "JavaScript"] },
  { category: "Web & Backend", items: ["React.js", "Node.js", "Express.js", "REST APIs", "HTML5", "CSS3"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "SQL"] },
  { category: "Core Concepts", items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Memory Management", "Problem Solving"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Figma", "Ethereum", "IPFS", "Blockchain"] }
];

const SkillCard = ({ title, skills, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-panel p-6 rounded-2xl border border-white/5 relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 relative z-10">
        {skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies, languages, and concepts I've mastered to build scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((data, index) => (
            <SkillCard
              key={data.category}
              title={data.category}
              skills={data.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
