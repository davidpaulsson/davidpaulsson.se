export const behindTransition = {
  initial: { scale: 0.95 },
  animate: { scale: 1 },
  transition: { ease: 'easeInOut' },
};

export const frontTransition = ({ height }) => ({
  initial: { y: -180 },
  animate: { y: 0 },
  exit: { y: height - 180 },
  transition: { ease: 'easeInOut' },
});

export const coverTransition = {
  animate: { opacity: 0.1 },
  transition: { ease: 'easeInOut' },
  exit: { opacity: 0 },
};
