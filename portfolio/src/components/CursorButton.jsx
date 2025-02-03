import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const buttonVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05,
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95, y: 0 }
};

const cursorPreviewVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

export const CursorButton = ({ cursor, isActive, onClick }) => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-lg font-mono text-sm',
        'border-2 transition-all duration-300',
        'flex items-center gap-2',
        isActive ? 'border-opacity-100 bg-white/10' : 'border-opacity-30'
      )}
    >
      {/* Cursor preview */}
      <motion.span
        variants={cursorPreviewVariants}
        initial="initial"
        animate="animate"
        className={clsx(
          'w-4 h-4 flex items-center justify-center',
          {
            'after:content-[""] after:w-2 after:h-4 after:bg-current after:animate-blink': cursor.value === 'block',
            'after:content-[""] after:w-2 after:h-0.5 after:bg-current after:animate-blink': cursor.value === 'underscore',
            'cursor-pointer': cursor.value === 'pointer',
            'cursor-crosshair': cursor.value === 'crosshair'
          }
        )}
      />
      
      <span>{cursor.name}</span>
    </motion.button>
  );
};