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
import { useTheme } from "../../App";
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

  const { theme, toggleTheme } = useTheme(); // Use the theme hook

  const { scrollYProgress } = useScroll();
  const typedRef = useRef(null);
  const typeIam = useRef(null);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  
  return (
<div className={`min-h-screen ${theme} text-gray-300`}>
      

     
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
          <span className="text-primary-color">Hello Visitor... 👋</span>
          <br />
          <span className="text-secondary-color">Mr. Vishnu Murthy</span>
        </h2>
        <p className="text-lg text-gray-400">
          I'm a passionate and results-oriented developer with a strong interest in data engineering and cloud technologies. I enjoy building scalable and efficient web applications and solving complex problems.
        </p>
        <p className="text-lg text-gray-400">
          {/* Add a brief summary of your background or key skills here */}
          Pursuing a Bachelor of Technology in Computer Science with Data Science and Big Data Analytics at K L University.
        </p>
        <motion.button
          className="px-8 py-3 bg-primary-color text-white rounded-lg font-medium hover:bg-opacity-80 transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://t.me/vishnu1702")}
        >
          Contact me!!
        </motion.button>
      </motion.div>

      <motion.div
        className="relative cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src = "https://res.cloudinary.com/dovvc3hvb/image/upload/v1747057083/hero%20section.jpg"
          // src="https://res.cloudinary.com/dovvc3hvb/image/upload/v1734166398/tsyxmpfmpv5wfwkzraro.jpg"
          alt="Developer"
          className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
        />
        {/* Removed the scrolling text div */}
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
          
          <p className="text-2xl font-serif text-gray-100 italic">
            "Success comes from small efforts repeated every day, driven by persistence, resilience, and the belief that each step brings you closer to your goal."
          </p>
          <p className="text-right mt-4 text-[#ff79c6]">-Me</p>
        </motion.div>
      </section>

     

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