import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import './toggle.scss';

const Toggle = ({ isOpen, setIsOpen }) => {
  const [state, setState] = useState(isOpen ? 'open' : 'closed');

  useEffect(() => {
    setState(isOpen ? 'open' : 'closed');
  }, [isOpen]);

  useEffect(() => {
    if (state === 'closed') {
      setTimeout(() => {
        setState('waiting');
      }, 1000);
    }
  }, [state]);

  useEffect(() => {
    setState('waiting');
  }, []);

  return (
    <motion.button
      className="toggle"
      onClick={setIsOpen}
      animate={state}
      variants={{
        open: {
          opacity: 0.6,
        },
        closed: {
          opacity: 1,
        },
      }}
    >
      <div className="toggle__inner">
        <motion.svg viewBox="0 0 28 12" width="28" height="12" initial="closed">
          <motion.circle
            cx="6"
            cy="6"
            r="1"
            variants={{
              open: { cy: 6, opacity: 0.6 },
              closed: { cy: 6, opacity: 0.6 },
              waiting: {
                cy: [6, 5, 6],
                opacity: [0.6, 1, 0.6],
                transition: {
                  duration: 0.4,
                  loop: Infinity,
                  repeatDelay: 2,
                },
              },
            }}
          />
          <motion.circle
            cx="14"
            cy="6"
            r="1"
            variants={{
              open: {
                cx: 6,
                cy: 6,
                opacity: 0.6,
              },
              closed: {
                cx: 14,
                cy: 6,
                opacity: 0.6,
              },
              waiting: {
                cy: [6, 5, 6],
                opacity: [0.6, 1, 0.6],
                transition: {
                  duration: 0.4,
                  delay: 0.2,
                  loop: Infinity,
                  repeatDelay: 2,
                },
              },
            }}
            transition={{ delay: state === 'open' ? 0 : 0.2 }}
          />
          <motion.circle
            cx="22"
            cy="6"
            r="1"
            variants={{
              open: {
                cx: 6,
                cy: 6,
                opacity: 0.6,
              },
              closed: {
                cx: 22,
                cy: 6,
                opacity: 0.6,
              },
              waiting: {
                cy: [6, 5, 6],
                opacity: [0.6, 1, 0.6],
                transition: {
                  duration: 0.4,
                  delay: 0.4,
                  loop: Infinity,
                  repeatDelay: 2,
                },
              },
            }}
            transition={{ delay: state === 'open' ? 0.2 : 0.4 }}
          />

          <motion.line
            x1="6"
            y1="6"
            x2="22"
            y2="6"
            style={{
              opacity: state === 'waiting' ? 0 : 1,
              strokeWidth: 4,
            }}
            strokeLinecap="round"
            variants={{
              open: {
                x2: 22,
              },
              closed: {
                x2: 6,
              },
            }}
            transition={{ delay: state === 'open' ? 0.4 : 0, type: 'tween' }}
          />
        </motion.svg>
      </div>
    </motion.button>
  );
};

export default Toggle;
