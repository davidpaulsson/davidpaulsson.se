import React, { useEffect } from 'react';
import './logo.scss';
import { motion, useCycle } from 'framer-motion';

const Logo = () => {
  const [isDarkMode, setIsDarkMode] = useCycle(false, true);

  const htmlTag =
    typeof window !== `undefined` ? document.body.parentNode : null;

  useEffect(() => {
    if (htmlTag.classList.contains('__dark-mode')) {
      setIsDarkMode();
    }
  }, [htmlTag.classList]);

  return (
    <motion.svg
      className="logo"
      viewBox="0 0 70 45"
      width="70"
      height="45"
      onClick={() => {
        htmlTag.classList.toggle('__dark-mode');
        setIsDarkMode();
      }}
    >
      <motion.rect
        width="10"
        height="45"
        x="5"
        y="0"
        animate={{ x: isDarkMode ? 49 : 0 }}
      />
      <motion.circle
        cx="42"
        cy="22"
        r="17"
        animate={{ cx: isDarkMode ? 27 : 42 }}
      />
    </motion.svg>
  );
};

export default Logo;
