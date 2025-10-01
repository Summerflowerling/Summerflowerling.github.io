export interface Painting {
  id: string;
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
}

export interface ModalState {
  isOpen: boolean;
  imgSrc: string;
  imgTitle: string;
}

export interface PaintingItemProps {
  painting: Painting;
  index: number;
  onImageClick: (src: string, title: string) => void;
}

export interface ModalOverlayProps {
  modalState: ModalState;
  onClose: () => void;
}

export interface CloseButtonProps {
  onClose: () => void;
}
