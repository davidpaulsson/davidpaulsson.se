import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './src/styles/reset.scss';
import './src/styles/variables.scss';
import './src/styles/global.scss';
import './src/styles/fonts.scss';

// detect and toggle dark mode
const htmlTag = document.body.parentNode;
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  htmlTag.classList.add('__dark-mode');
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false} {...props}>
      {element}
    </AnimatePresence>
  );
};
