import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery.module.css';
import { paintings } from '../const/paintingData';

const Gallery = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    imgSrc: '',
    imgTitle: '',
  });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const displayModal = useCallback(
    (imgSrc: string, imgTitle: string) => {
      if (animationComplete) {
        setModal({ isOpen: true, imgSrc, imgTitle });
      }
    },
    [animationComplete],
  );

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, imgSrc: '', imgTitle: '' });
  }, []);

  return (
    <>
      <main className={styles.galleryContainer}>
        <motion.div
          className={styles.fullGallery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {paintings.map(({ id, src, alt, title, width, height }, index) => (
            <motion.div
              key={id}
              className={styles.imgWidget}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => displayModal(src, title)}
            >
              <img
                src={src}
                alt={alt}
                className={styles.imgThumb}
                width={width || 300}
                height={height || 400}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <div className={styles.paintingTitle}>
                <h3 className={styles.title}>{title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <AnimatePresence>
        {modal.isOpen && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
          >
            <div className={styles.modalImageContainer}>
              <motion.span
                className={styles.close}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role='button'
                aria-label='Close modal'
              >
                ×
              </motion.span>
              <motion.img
                className={styles.modalImg}
                src={modal.imgSrc}
                alt={modal.imgTitle}
                width={600}
                height={800}
                loading='eager'
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />
            </div>
            <motion.div className={styles.modalPaintingTitle}>
              {modal.imgTitle}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
