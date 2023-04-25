export let easeing = [0.6, -0.05, 0.01, 0.99];

export const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
