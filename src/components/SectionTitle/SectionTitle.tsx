import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    className={styles.sectionTitle}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.h2>
);
