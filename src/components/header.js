import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';
import Toggle from './toggle';
import './header.scss';

const horunge = (str, opt = 2) => {
  const arr = str.trim().split(' ');
  if (arr.length > 2) {
    const lastWords = arr.slice(-opt).join('\u00A0');
    arr.splice(-opt, opt, lastWords);
    return arr.join(' ');
  }
  return str;
};

const Header = ({ headline, subtitle, html }) => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <header className="header">
      <motion.h1
        animate={isOpen ? { opacity: 0.5 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="header__title"
      >
        {headline}
        <br />
        {horunge(subtitle)} <Toggle {...{ isOpen, setIsOpen }} />
      </motion.h1>

      <AnimatePresence>
        <motion.div
          className="h2 header__content"
          style={{ overflow: 'hidden' }}
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          exit={{ height: 0 }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </AnimatePresence>
    </header>
  );
};

export default Header;
