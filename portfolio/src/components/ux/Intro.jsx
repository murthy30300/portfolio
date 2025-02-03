import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Terminal, Code2, Monitor, Cpu } from "lucide-react";
import { clsx } from "clsx";

const themes = [
  { name: "Matrix", bg: "#001a00", color: "#00ff00", accent: "#00cc00" },
  { name: "Cyberpunk", bg: "#13111C", color: "#ff00ff", accent: "#cc00cc" },
  { name: "Midnight", bg: "#000033", color: "#00ffff", accent: "#0099cc" },
  { name: "Sunset", bg: "#1a0f00", color: "#ff9933", accent: "#cc7a29" },
  { name: "Ghost", bg: "#1a1a1a", color: "#ffffff", accent: "#cccccc" },
  { name: "Blood", bg: "#1a0000", color: "#ff0000", accent: "#cc0000" },
];

const cursors = [
  { name: "Command Prompt", value: "block" },
  { name: "Terminal", value: "underscore" },
  { name: "Classic", value: "pointer" },
  { name: "Hacker", value: "crosshair" },
];

const aboutMe = [
  "I'm a passionate developer with a love for creating elegant solutions.",
  "Specializing in full-stack development and cybersecurity.",
  "Always learning, always coding, always hacking.",
  "Let's build something amazing together.",
];

const TypewriterText = ({ text, delay = 0, className = "" }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0, delay },
      });

      for (let i = 0; i <= text.length; i++) {
        await controls.start({
          width: `${(i * 100) / text.length}%`,
          transition: { duration: 0.05 },
        });
      }
    };

    animate();
  }, [text, controls, delay]);

  return (
    <div className="relative inline-block">
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={controls}
        className={`overflow-hidden whitespace-pre ${className}`}
      >
        {text}
      </motion.div>
      <motion.div
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute right-[-2px] top-0 h-full w-[2px] bg-current"
      />
    </div>
  );
};

const ThemeButton = ({ theme, isActive, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300",
        "border-2",
        isActive ? "border-opacity-100" : "border-opacity-30",
        "relative overflow-hidden"
      )}
      style={{
        backgroundColor: theme.bg,
        color: theme.color,
        borderColor: theme.accent,
      }}
    >
      <span className="relative z-10">{theme.name}</span>
      {isActive && (
        <motion.div
          layoutId="activeTheme"
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: theme.accent }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

const CursorButton = ({ cursor, isActive, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300",
        "border-2",
        isActive ? "border-opacity-100 bg-white/10" : "border-opacity-30"
      )}
    >
      {cursor.name}
    </motion.button>
  );
};

function Intro() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [cursorIndex, setCursorIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  const currentTheme = themes[themeIndex];
  const currentCursor = cursors[cursorIndex];

  return (
    <div
      className="min-h-screen font-mono transition-colors duration-700"
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.color,
        cursor: currentCursor.value,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <Terminal className="w-8 h-8" />
            <TypewriterText
              text="System initialized..."
              className="text-2xl font-bold"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6" />
              <TypewriterText text="> whoami" delay={1.5} className="text-xl" />
            </div>

            <motion.button
              onClick={() => setShowAbout(!showAbout)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg border-2 border-current"
            >
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
                    <TypewriterText
                      key={index}
                      text={line}
                      delay={2 + index * 0.5}
                      className="block"
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-6 h-6" />
                <h2 className="text-xl">Theme Selection</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {themes.map((theme, index) => (
                  <ThemeButton
                    key={theme.name}
                    theme={theme}
                    isActive={index === themeIndex}
                    onClick={() => setThemeIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6" />
                <h2 className="text-xl">Cursor Style</h2>
              </div>
              <div className={`flex flex-col ${cursors[cursorIndex].value}`}>
                <div className="flex flex-wrap gap-4">
                  {cursors.map((cursor, index) => (
                    <CursorButton
                      key={cursor.name}
                      cursor={cursor}
                      isActive={index === cursorIndex}
                      onClick={() => setCursorIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;
