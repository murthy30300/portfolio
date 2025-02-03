import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/ux/Home.jsx";
import Intro from "./components/ux/Intro";
//import PreBoot from "./components/ux/PreBoot.jsx";
import About from "./components/ux/About.jsx";
import Projects from "./components/ux/Projects.jsx";
import Contact from "./components/ux/Contact.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { House, User, Briefcase, Mail, FileText } from "lucide-react";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Oops! Lost in the void? 🤯</h1>
      <p className="text-lg mb-6">Looks like you entered a wrong URL. Even Google wouldn't find this one! 😆</p>
      <a href="/" className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition">
        Take me home 🏠
      </a>
    </div>
  );
};
const navLinks = [
  { href: "/", label: "home", icon:<House/>},
  { href: "/about", label: "about", icon: <User size={20} /> },
  { href: "/works", label: "works", icon: <Briefcase size={20} /> },
  { href: "/contacts", label: "contacts", icon: <Mail size={20} /> },
  { 
    href: "https://drive.google.com/file/d/1GcA3gRRHUSIJExJvYVnCMHhcDBlaL3GZ/view?usp=sharing", 
    label: "cv", 
    icon: <FileText size={20} />,
    external: true
  }
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-[#1a1b26] to-[#24283b] text-gray-100 font-sans">
        <nav className="fixed top-0 left-0 right-0 bg-[#1a1b26] z-50 border-b border-gray-800/10">
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
                className="text-gray-300 hover:text-[#ff79c6] transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.1, textDecoration: "underline" }}
                whileTap={{ scale: 0.95 }}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.icon} {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/contacts" element={<Contact/>}/>
            <Route path="*" element={<NotFound />} /> {/* Wildcard route for unmatched URLs */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
