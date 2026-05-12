"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationCard = ({ title, institution, date, grade, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border-l-4 border-l-purple-500 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{institution}</p>
      </div>
      <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-3 py-1 rounded-full">
        {date}
      </span>
    </div>
    <div className="flex items-center gap-2 text-purple-400 mt-4 relative z-10">
      <Award size={18} />
      <span className="font-medium">{grade}</span>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am a passionate Computer Science Engineering student with strong foundations
              in Java, C++, Data Structures & Algorithms, and Object-Oriented Programming.
            </p>
            <p>
              I have practical experience in building full-stack applications and RESTful web
              services using modern technologies. My focus lies in solving complex problems
              and building scalable, secure, and innovative software solutions.
            </p>
            <p>
              Currently, I'm exploring the realms of Web3, Blockchain (Ethereum & ICP), and
              creating intuitive, high-performance web experiences.
            </p>
            <div className="pt-6 border-t border-white/10 mt-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-cyan-400" /> Education Journey
              </h4>
              <div className="space-y-6">
                <EducationCard
                  title="B.E. in Computer Science Engineering"
                  institution="Chandigarh University, Mohali, Punjab"
                  date="Expected May 2027"
                  grade="CGPA: 8.76"
                  delay={0.1}
                />
                <EducationCard
                  title="Intermediate (CBSE)"
                  institution="Geeta Public Senior Secondary School, Panipat"
                  date="2023"
                  grade="Percentage: 90.4%"
                  delay={0.2}
                />
                <EducationCard
                  title="Matriculation (CBSE)"
                  institution="Geeta Public Senior Secondary School, Panipat"
                  date="2021"
                  grade="Percentage: 97%"
                  delay={0.3}
                />
              </div>
            </div>
          </motion.div>

          {/* 3D or Abstract Visual representation on the right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] rounded-3xl glass-panel flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mix-blend-overlay"></div>
            {/* Simple CSS 3D effect */}
            <div className="relative w-64 h-64 perspective-1000">
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-full h-full transform-style-3d relative"
              >
                <div className="absolute inset-0 border-2 border-purple-500/50 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-4 border-2 border-cyan-500/50 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)]"></div>
                <div className="absolute inset-8 border border-white/20 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400">Avi</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
