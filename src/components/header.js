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

      <motion.button
        className="header__toggle"
        onClick={toggleIsOpen}
        animate={!isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
            },
          },
          closed: {
            opacity: 0.8,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.svg viewBox="0 0 24 8" width="24" height="8" initial="closed">
          <motion.circle cx="4" cy="4" r="1" />
          <motion.circle
            cx="12"
            cy="4"
            r="1"
            variants={{
              open: { cx: 12 },
              closed: { cx: 4 },
            }}
          />
          <motion.circle
            cx="20"
            cy="4"
            r="1"
            variants={{
              open: { cx: 20 },
              closed: { cx: 4 },
            }}
          />

          <motion.line
            x1="2"
            y1="4"
            x2="22"
            y2="4"
            style={{ strokeWidth: 4 }}
            variants={{
              open: { opacity: 1, x2: 2 },
              closed: { opacity: 1, x2: 22 },
            }}
          />
        </motion.svg>
      </motion.button>

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
