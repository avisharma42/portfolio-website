"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:avisharmam42@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-400/20 transition-colors">
                    <Mail size={24} className="group-hover:text-cyan-400" />
                  </div>
                  <span className="text-lg">avisharmam42@gmail.com</span>
                </a>
                
                <a href="tel:+918571010453" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-400/20 transition-colors">
                    <Phone size={24} className="group-hover:text-cyan-400" />
                  </div>
                  <span className="text-lg">+91 8571010453</span>
                </a>
                
                <a href="https://linkedin.com/in/avi-sharma" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-400/20 transition-colors">
                    <FaLinkedin size={24} className="group-hover:text-purple-400" />
                  </div>
                  <span className="text-lg">linkedin.com/in/avi-sharma</span>
                </a>
                
                <a href="https://github.com/avisharma" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-400/20 transition-colors">
                    <FaGithub size={24} className="group-hover:text-purple-400" />
                  </div>
                  <span className="text-lg">github.com/avisharma</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass-panel p-8 rounded-3xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                type="button"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
