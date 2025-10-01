import { useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';
import { paintings } from '../const/paintingData';
import { useModal } from '../hook/useModal';
import { useDelayedAnimation } from '../hook/useDelayedAnimation';
import PaintingItem from '../components/PaintingItem';
import ModalOverlay from '../components/ModalOverlay';
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
} from '../const/galleryConstants';

const Gallery = () => {
  const { modalState, openModal, closeModal } = useModal();
  const isAnimationComplete = useDelayedAnimation(
    ANIMATION_DELAYS.INITIAL_LOAD,
  );

  const handleImageClick = useCallback(
    (imgSrc: string, imgTitle: string) => {
      if (isAnimationComplete) {
        openModal(imgSrc, imgTitle);
      }
    },
    [isAnimationComplete, openModal],
  );

  return (
    <>
      <main className={styles.galleryContainer}>
        <motion.div
          className={styles.fullGallery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIMATION_DURATIONS.GALLERY_FADE_IN }}
        >
          {paintings.map((painting, index) => (
            <PaintingItem
              key={painting.id}
              painting={painting}
              index={index}
              onImageClick={handleImageClick}
            />
          ))}
        </motion.div>
      </main>

      <ModalOverlay modalState={modalState} onClose={closeModal} />
    </>
  );
};

export default Gallery;
