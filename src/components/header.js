import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';
import './header.scss';

const Header = ({ headline, html }) => {
  const [isOpen, toggleIsOpen] = useCycle(false, true);

  return (
    <header className="header">
      <h1
        className="header__title"
        dangerouslySetInnerHTML={{ __html: headline }}
      />

      <button className="header__toggle" onClick={toggleIsOpen}>
        {isOpen ? (
          <motion.svg viewBox="0 0 50 30" width="50" height="30">
            <line x1="8" y1="14" x2="28" y2="14" />
          </motion.svg>
        ) : (
          <motion.svg viewBox="0 0 50 30" width="50" height="30">
            <circle cx="10" cy="14" r="1"></circle>
            <circle cx="18" cy="14" r="1"></circle>
            <circle cx="26" cy="14" r="1"></circle>
          </motion.svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="h2 header__content"
            style={{ overflow: 'hidden' }}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            // transition={{ duration: 1 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
