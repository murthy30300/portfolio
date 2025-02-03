import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95 }
};

const glowVariants = {
  initial: { opacity: 0 },
  hover: { 
    opacity: 0.5,
    transition: { duration: 0.3 }
  }
};

export const ThemeButton = ({ theme, isActive, onClick }) => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={clsx(
        'relative px-4 py-2 rounded-lg font-mono text-sm',
        'border-2 transition-all duration-300',
        'overflow-hidden group',
        isActive ? 'border-opacity-100' : 'border-opacity-30'
      )}
      style={{
        backgroundColor: theme.bg,
        color: theme.color,
        borderColor: theme.accent
      }}
    >
      <span className="relative z-10">{theme.name}</span>
      
      {/* Glow effect on hover */}
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 blur-sm"
        style={{ backgroundColor: theme.accent }}
      />

      {/* Active indicator */}
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