import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './src/styles/reset.scss';
import './src/styles/variables.scss';
import './src/styles/global.scss';
import './src/styles/fonts.scss';

export const wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false} {...props}>
      {element}
    </AnimatePresence>
  );
};
