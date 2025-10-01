import { useState, useCallback } from 'react';
import type { ModalState } from '../types/gallery';

const INITIAL_MODAL_STATE: ModalState = {
  isOpen: false,
  imgSrc: '',
  imgTitle: '',
};

export const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>(INITIAL_MODAL_STATE);

  const openModal = useCallback((imgSrc: string, imgTitle: string) => {
    setModalState({ isOpen: true, imgSrc, imgTitle });
  }, []);

  const closeModal = useCallback(() => {
    setModalState(INITIAL_MODAL_STATE);
  }, []);

  return {
    modalState,
    openModal,
    closeModal,
  };
};
