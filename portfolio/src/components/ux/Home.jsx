import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "typed.js";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Wrench,
  Palette,
  Server,
  Cloud,
} from "lucide-react";

const skills = {
  Languages: {
    icon: <Code2 className="w-6 h-6 text-[#bd93f9]" />,
    items: ["Java SE", "Java EE", "Python", "C"],
  },
  Databases: {
    icon: <Database className="w-6 h-6 text-[#ff79c6]" />,
    items: ["MySQL", "Mongo"],
  },
  Tools: {
    icon: <Wrench className="w-6 h-6 text-[#50fa7b]" />,
    items: ["VSCode", "Figma", "Postman"],
  },
  Frontend: {
    icon: <Palette className="w-6 h-6 text-[#f1fa8c]" />,
    items: ["HTML CSS JS", "REST"],
  },
  Frameworks: {
    icon: <Server className="w-6 h-6 text-[#8be9fd]" />,
    items: ["Vite+React", "Django", "Spring Boot"],
  },
  Cloud:{
    icon:<Cloud className="w-6 h-6 text-[#9af4d9]"/>,
    items:["AWS","GCP"],
  },
};

const navLinks = [
  { href: "/", label: "home" },
  { href: "/intro", label: "intro" },
  { href: "/about", label: "about" },
  { href: "/works", label: "works" },
  { href: "/contacts", label: "contacts" },
];


export default function Home() {
  const { scrollYProgress } = useScroll();
  const typedRef = useRef(null);
  const typeIam = useRef(null);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Currently working on Portfolio",
          "Open to Freelance",
          "Available for Hire",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }
  }, []);
  
  useEffect(() => {
    if (typeIam.current) {
      const iam = new Typed(typeIam.current, {
        strings: [
          "Web Designer",
          "Back-end Developer",
          "Data Engineer Enthusiast",
        ],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true,
      });
  
      return () => {
        iam.destroy();
      };
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-[#1a1b26] text-gray-300">
      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 bg-[#1a1b26] z-50 border-b border-gray-800/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-bold"
            >
              <span className="text-[#bd93f9]">Nukala Venkata Vishnu</span>{" "}
              <span className="text-[#50fa7b]">Murthy</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-8"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#ff79c6] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="pt-32 px-6" id="home">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-6xl font-bold">
                {/* <span className="text-[#bd93f9]">Data engineer</span>
                <br />
                <span className="text-[#ff79c6]">Enthusiast</span> */}
                  <span ref={typeIam} className="text-[#ff79c6]"></span>
              </h2>
              <p className="text-lg text-gray-400">
                I can design responsive websites where technologies meet creativity
              </p>
              <motion.button
                className="px-8 py-3 bg-[#bd93f9] text-white rounded-lg font-medium hover:bg-[#a178f1] transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://t.me/vishnu1702")}
              >
                Contact me!!
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://res.cloudinary.com/dovvc3hvb/image/upload/v1734166398/tsyxmpfmpv5wfwkzraro.jpg"
                alt="Developer"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-[#1a1b26]/90 p-4 backdrop-blur-sm rounded-lg border border-[#bd93f9]/30">
                <span ref={typedRef} className="text-[#ff79c6]"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          className="border border-gray-700/50 p-8 rounded-lg bg-[#1e1f2e]/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-2xl font-serif text-gray-100 italic">
            "Peace and contentment blossom when each soul tends its own garden, leaving no room for the burden of another's toil"
          </p> */}
          <p className="text-2xl font-serif text-gray-100 italic">
            "Success comes from small efforts repeated every day, driven by persistence, resilience, and the belief that each step brings you closer to your goal."
          </p>
          <p className="text-right mt-4 text-[#ff79c6]">-Me</p>
        </motion.div>
      </section>

      {/* Projects Section */}
      {/* <section className="container mx-auto px-6 py-12" id="works">
        <motion.div
          className="border border-[#0ea5e9]/30 p-8 rounded-lg bg-[#1e1f2e]/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif mb-8">
            <span className="text-[#ff79c6]">#</span>projects
            <motion.span
              className="float-right text-sm bg-[#ff79c6]/10 px-4 py-2 rounded-lg hover:bg-[#ff79c6]/20 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all →
            </motion.span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-[#1e1f2e] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f2e] to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#bd93f9] mb-2">
                    {project.tech}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.links.linkedin && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-[#bd93f9]/10 rounded-lg hover:bg-[#bd93f9]/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {window.open(project.links.linkedin)}}
                      >
                        LinkedIn <Linkedin className="w-4 h-4" />
                      </motion.button>
                    )}
                    {project.links.cached && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-[#ff79c6]/10 rounded-lg hover:bg-[#ff79c6]/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Cached <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif mb-8">
            <span className="text-[#ff79c6]">#</span>skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, { icon, items }], index) => (
              <motion.div
                key={category}
                className="bg-[#1e1f2e] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h3 className="text-xl font-semibold text-white">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="text-gray-300 bg-[#282a36] px-4 py-2 rounded-lg hover:bg-[#282a36]/80 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contacts Section */}
      {/* <section className="container mx-auto px-6 py-12" id="contacts">
        <motion.div
          className="border border-[#0ea5e9]/30 p-8 rounded-lg bg-[#1e1f2e]/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif mb-8">
            <span className="text-[#ff79c6]">#</span>contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm interested in freelance opportunities. However, if you
                have other request or question, don't hesitate to contact me
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Message me here</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/murthy30300"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff79c6] transition-colors p-3 rounded-lg hover:bg-[#282a36]"
                  whileHover={{ x: 10 }}
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/murthy30300</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vishnu1702"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff79c6] transition-colors p-3 rounded-lg hover:bg-[#282a36]"
                  whileHover={{ x: 10 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/vishnu1702</span>
                </motion.a>
                <motion.a
                  href="vishnumurthy1702@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff79c6] transition-colors p-3 rounded-lg hover:bg-[#282a36]"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>vishnumurthy1702@gmail.com</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-gray-800/50 mt-12 bg-[#1a1b26]/95">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-white mb-2">
                Vishnu Murthy
              </h3>
              <p className="text-gray-300">
                Web designer and back-end developer
              </p>
            </div>
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/murthy30300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-[#ff79c6] transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vishnu1702"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-[#ff79c6] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="vishnumurthy1702@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-[#ff79c6] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            © {new Date().getFullYear()} Vishnu Murthy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}