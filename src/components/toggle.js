import { motion } from 'framer-motion';
import React from 'react';
import './toggle.scss';

const Toggle = ({ isOpen, setIsOpen }) => (
  <motion.button
    className="toggle"
    onClick={setIsOpen}
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
        opacity: 0.6,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
  >
    <div className="toggle__inner">
      <motion.svg viewBox="0 0 28 12" width="28" height="12" initial="closed">
        <motion.circle
          cx="6"
          cy="6"
          r="1"
          // variants={{ open: { cy: 4 } }}
        />
        <motion.circle
          cx="14"
          cy="6"
          r="1"
          variants={{
            open: {
              cx: 14,
              // cy: 4,
            },
            closed: {
              cx: 6,
            },
          }}
        />
        <motion.circle
          cx="22"
          cy="6"
          r="1"
          variants={{
            open: {
              cx: 22,
              // cy: 4,
            },
            closed: {
              cx: 6,
            },
          }}
        />

        <motion.line
          x1="6"
          y1="6"
          x2="22"
          y2="6"
          style={{
            strokeWidth: 4,
          }}
          strokeLinecap="round"
          variants={{
            open: {
              x2: 6,
            },
            closed: {
              x2: 22,
            },
          }}
        />
      </motion.svg>
    </div>
  </motion.button>
);

export default Toggle;
