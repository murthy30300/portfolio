import { useState, useEffect,React } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Monitor, Cpu, Zap, Brain, Send, Coffee } from 'lucide-react';
import { TypewriterText } from '../TypeWriterText';
import { ThemeButton } from '../ThemeButton';
import { CursorButton } from '../CursorButton';
import ReactDOM from "react-dom/client";
import { div } from 'framer-motion/client';

const themes = [
  { name: "Matrix", bg: "#001a00", color: "#00ff00", accent: "#00cc00" },
  { name: "Cyberpunk", bg: "#13111C", color: "#ff00ff", accent: "#cc00cc" },
  { name: "Midnight", bg: "#000033", color: "#00ffff", accent: "#0099cc" },
  { name: "Sunset", bg: "#1a0f00", color: "#ff9933", accent: "#cc7a29" },
  { name: "Ghost", bg: "#1a1a1a", color: "#ffffff", accent: "#cccccc" },
  { name: "Blood", bg: "#1a0000", color: "#ff0000", accent: "#cc0000" }
];

const cursors = [
  { name: "Classic", value: "pointer" },
  { name: "Hacker", value: "crosshair" }
];

const aboutMe = [
  "Karmanye Vadhika rasye Maa phalesu Kada chana",
  "I'm a passionate developer with a love for creating elegant solutions.",
  "Specializing in full-stack development, Data Science and Big Data analytics, Cloud",
  "Always learning, always coding, always browsing.",
  "Let's build something amazing together."
];

const bootSequence = [
  "Initializing Portfolio OS v1.0...",
  "Establishing Secure Connection...",
  "Decoding Digital Footprint...",
  "Access Granted: Welcome to Vishnu Murthy Digital Realm"
];

const encryptedMessage = "01010111 01100101 01101100 01100011 01101111 01101101 01100101";
const decryptedMessage = "Welcome to my world of innovation and creativity";

const navigationOptions = [
  { icon: Zap, label: "Dive into Projects", command: "cd /projects" },
  { icon: Brain, label: "Decode Skills", command: "cat skills.md" },
  { icon: Send, label: "Connect with Me", command: "vishnumurthy1702@gmail.com" },
  { icon: Coffee, label: "Powered by Caffeine && Code", command: "brew coffee" }
];

function PreBoot() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [cursorIndex, setCursorIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const currentTheme = themes[themeIndex];
  const currentCursor = cursors[cursorIndex] || { value: "default" };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    if (loadingProgress === 100) {
      setTimeout(() => setIsDecrypted(true), 1000); // Decryption animation
    //  setTimeout(() => setPageLoaded(true), 3000); // Page transition
    }

    return () => clearInterval(interval);
  }, [loadingProgress]);
  const handleNavigation = (command) => {
    if (command === "brew coffee") {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
  };
return (
    <div>
       <div className="min-h-screen font-mono transition-colors duration-700" style={{
            backgroundColor: currentTheme.bg,
            color: currentTheme.color,
            cursor: currentCursor.value === "block" || currentCursor.value === "underscore" ? "none" : currentCursor.value,
            }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
                {/* Loading Progress Bar */}
            <motion.div className="mb-8 relative h-2 bg-opacity-20 rounded overflow-hidden" style={{ backgroundColor: currentTheme.accent }}>
                <motion.div className="absolute top-0 left-0 h-full" style={{ backgroundColor: currentTheme.accent }} initial={{ width: "0%" }} animate={{ width: `${loadingProgress}%` }} transition={{ duration: 0.5 }} /> </motion.div>
                <motion.p className="text-sm mb-4 text-right" style={{ color: currentTheme.accent }}>
                  Loading awesomeness: {loadingProgress}% complete...
                </motion.p>
                {/* Boot Sequence */}
                {bootSequence.map((text, index) => (
                  <motion.div key={index} initial={{ scale: 0.9 }}  animate={{ scale: 1 }} transition={{ duration: 0.5, delay: index * 0.5 }} className="flex items-center gap-3 mb-8" >
                    <Terminal className="w-8 h-8" />
                    <TypewriterText text={text} className="text-2xl font-bold" cursorStyle={currentCursor.value} delay={index * 0.5} />
                  </motion.div>
                ))}
                {/* Navigation Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {navigationOptions.map(({ icon: Icon, label, command }) => (
                    <motion.button key={command} onClick={() => handleNavigation(command)}  className="flex items-center gap-3 p-4 rounded-lg border-2 transition-all"
                      style={{ borderColor: currentTheme.accent }}
                      whileHover={{ scale: 1.02, backgroundColor: `${currentTheme.accent}20` }}
                      whileTap={{ scale: 0.98 }}>
                      <Icon className="w-6 h-6" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm">{label}</span>
                        <span className="text-xs opacity-60">{command}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
      
                {/* Easter Egg Message */}
                <AnimatePresence>
                  {showEasterEgg && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="fixed bottom-8 right-8 p-4 rounded-lg"
                      style={{ backgroundColor: currentTheme.accent }}>
                      <p className="text-black">☕ Brewing your coffee... Error: Coffee machine is in another castle!</p>
                    </motion.div>
                  )}
                </AnimatePresence>
      
                {/* About Me Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="space-y-6" >
                  <motion.button
                    onClick={() => setShowAbout(!showAbout)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-lg border-2 border-current"
                    style={{ borderColor: currentTheme.accent }}>
                    {showAbout ? "Hide About Me" : "Show About Me"}
                  </motion.button>
      
                  <AnimatePresence>
                    {showAbout && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 overflow-hidden"
                      >
                        {aboutMe.map((line, index) => (
                          <TypewriterText key={index} text={line} delay={3 + index * 0.5} className="block" cursorStyle={currentCursor.value} />
                        ))}
                         <p className="text-lg">
                    {isDecrypted ? decryptedMessage : encryptedMessage}
                  </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
      
                {/* Theme and Cursor Selection */}
                <div className="space-y-6 mt-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-6 h-6" />
                    <h2 className="text-xl">Theme Selection</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {themes.map((theme, index) => (
                      <ThemeButton key={theme.name} theme={theme} isActive={index === themeIndex} onClick={() => setThemeIndex(index)} />
                    ))}
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="w-6 h-6" />
                      <h2 className="text-xl">Cursor Style</h2>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {cursors.map((cursor, index) => (
                        <CursorButton key={cursor.name}  cursor={cursor}  isActive={index === cursorIndex} onClick={() => setCursorIndex(index)}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
    </div>
    
  )
}

export default PreBoot
