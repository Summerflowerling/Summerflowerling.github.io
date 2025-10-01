import { motion } from 'framer-motion';
import styles from './CloseButton.module.css';
import type { CloseButtonProps } from '../types/gallery';

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <motion.span
      className={styles.close}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role='button'
      aria-label='Close modal'
      onClick={onClose}
    >
      ×
    </motion.span>
  );
};

export default CloseButton;
