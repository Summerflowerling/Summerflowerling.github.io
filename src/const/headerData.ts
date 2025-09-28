import { User, Palette, Mail } from 'lucide-react';
import { type Variants } from 'framer-motion';

export interface Section {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  ariaLabel: string;
}

export const SECTIONS = [
  {
    id: 'about',
    name: 'About me',
    icon: User,
    ariaLabel: 'Navigate to About me section',
  },
  {
    id: 'gallery',
    name: 'Gallery',
    icon: Palette,
    ariaLabel: 'Navigate to Gallery section',
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: Mail,
    ariaLabel: 'Navigate to Contact section',
  },
];

export const HEADER_ANIMATIONS = {
  logoContainer: {
    header: {
      height: '5rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  } as Variants,

  logo: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as Variants,

  letter: {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  } as Variants,

  navList: {
    header: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.6,
      },
    },
  } as Variants,
};

export const HEADER_CONFIG = {
  scrollThreshold: 100,
  resetDelay: 300,
  logoText: 'Yuling',
} as const;
