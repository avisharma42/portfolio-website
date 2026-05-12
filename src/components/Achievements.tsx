"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal, BookOpen } from "lucide-react";

const achievementsData = [
  {
    title: "Winner – NASA International Space Apps Challenge 2024",
    description: "Secured Top 3 position out of 177 competing teams with an innovative solution.",
    icon: Trophy,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10"
  },
  {
    title: "Top 3 – ICP Blockchain Hackathon",
    description: "Block Se Block Hackathon - Built a decentralized solution using Internet Computer Protocol.",
    icon: Star,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10"
  },
  {
    title: "Finalist – Hack with Uttarakhand Hackathon",
    description: "Reached the offline final round by developing an impactful tech solution.",
    icon: Medal,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10"
  },
  {
    title: "Best Library User Award (2025)",
    description: "Recognized for academic research excellence and consistent learning.",
    icon: BookOpen,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 z-0"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Milestones and recognition from various hackathons and academic pursuits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-6 border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <div className={`p-4 rounded-full ${item.bgColor} flex-shrink-0`}>
                <item.icon className={item.color} size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
