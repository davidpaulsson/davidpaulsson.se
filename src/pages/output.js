import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import Input from '../components/input';
import Output from '../components/output';
import useWindowSize from '../utils/useWindowSize';
import './styles.scss';

const IndexPage = () => {
  const { height } = useWindowSize();

  return (
    <>
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ ease: 'easeInOut', duration: 2 }}
        className="behind pad"
      >
        <Input />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'var(--background)',
          opacity: 0.75,
        }}
        animate={{ opacity: 0.5 }}
        transition={{ ease: 'easeInOut', duration: 2 }}
        exit={{ opacity: 0 }}
      />
      <Link className="behind" to="/" />
      <motion.div
        className="front"
        initial={{ y: -180 }}
        animate={{ y: 0 }}
        exit={{ y: height - 180 }}
        transition={{ ease: 'easeInOut', duration: 2 }}
      >
        <div className="pad">
          <Output />
        </div>
      </motion.div>
    </>
  );
};

export default IndexPage;
