import { motion } from 'framer-motion';
import styles from './PaintingItem.module.css';
import type { PaintingItemProps } from '../types/gallery';
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  GALLERY_CONFIG,
} from '../const/galleryConstants';

const PaintingItem = ({ painting, index, onImageClick }: PaintingItemProps) => {
  const {
    id,
    src,
    alt,
    title,
    width = GALLERY_CONFIG.DEFAULT_IMAGE_WIDTH,
    height = GALLERY_CONFIG.DEFAULT_IMAGE_HEIGHT,
  } = painting;

  return (
    <motion.div
      key={id}
      className={styles.imgWidget}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: ANIMATION_DURATIONS.ITEM_SLIDE_IN,
        delay: index * ANIMATION_DELAYS.STAGGER_ITEM,
      }}
      whileHover={{ scale: 1.05 }}
      onClick={() => onImageClick(src, title)}
    >
      <img
        src={src}
        alt={alt}
        className={styles.imgThumb}
        width={width}
        height={height}
        loading={index < GALLERY_CONFIG.EAGER_LOAD_COUNT ? 'eager' : 'lazy'}
      />
      <div className={styles.paintingTitle}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </motion.div>
  );
};

export default PaintingItem;
