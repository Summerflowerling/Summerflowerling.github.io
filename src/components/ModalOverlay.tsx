import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ModalOverlay.module.css';
import CloseButton from './CloseButton';
import type { ModalOverlayProps } from '../types/gallery';
import { GALLERY_CONFIG } from '../const/galleryConstants';

const ModalOverlay = ({ modalState, onClose }: ModalOverlayProps) => {
  if (!modalState.isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <div
        className={styles.modalOverlay}
        onClick={onClose}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
      />
      <div className={styles.modalImageContainer}>
        <CloseButton onClose={onClose} />
        <motion.img
          className={styles.modalImg}
          src={modalState.imgSrc}
          alt={modalState.imgTitle}
          width={GALLERY_CONFIG.MODAL_IMAGE_WIDTH}
          height={GALLERY_CONFIG.MODAL_IMAGE_HEIGHT}
          loading='eager'
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        />
      </div>
      <motion.div
        className={styles.modalPaintingTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {modalState.imgTitle}
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default ModalOverlay;
