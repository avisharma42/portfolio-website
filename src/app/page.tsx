import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import StarsCanvas from "@/components/Canvas/Stars";

export default function Home() {
  return (
    <main className="relative z-0 bg-transparent min-h-screen">
      <StarsCanvas />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10 glass-panel mt-12">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Avi Sharma. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
