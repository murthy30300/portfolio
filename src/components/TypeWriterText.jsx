import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import {clsx} from 'clsx';
const cursorVariants = {
  blink: {
    opacity: [1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren"
    }
  }
};

export const TypewriterText = ({ text, delay = 0, className = '', cursorStyle = 'block' }) => {
  const controls = useAnimation();
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust typing speed here
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);

  const cursorClassName = clsx(
    'absolute right-[-2px] top-0 h-full',
    {
      'w-[2px] bg-current': cursorStyle === 'underscore',
      'w-[8px] bg-current': cursorStyle === 'block'
    }
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative inline-block"
    >
      <div className={`overflow-hidden whitespace-pre ${className}`}>
        {displayedText}
      </div>
      <motion.div
        variants={cursorVariants}
        animate="blink"
        className={cursorClassName}
      />
    </motion.div>
  );
};