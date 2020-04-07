import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';
import Toggle from './toggle';
import './header.scss';

const Header = ({ headline, html }) => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <header className="header">
      <motion.h1
        animate={isOpen ? { opacity: 0.5 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="header__title"
        dangerouslySetInnerHTML={{ __html: headline }}
      />

      <Toggle {...{ isOpen, setIsOpen }} />

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
