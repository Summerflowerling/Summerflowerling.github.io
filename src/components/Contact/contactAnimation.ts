import type { Variants } from 'framer-motion';
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    background:
      'linear-gradient(90deg, var(--highlight-color), var(--contactMe-btn-hover-bg))',
    color: 'var(--button-text-color)',
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};
