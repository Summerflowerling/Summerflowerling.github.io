import { motion } from 'framer-motion';
import { HEADER_ANIMATIONS, HEADER_CONFIG } from '../../const/headerData';

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo = ({ className }: AnimatedLogoProps) => {
  return (
    <motion.h1
      className={className}
      variants={HEADER_ANIMATIONS.logo}
      initial='visible'
      animate='visible'
    >
      {HEADER_CONFIG.logoText.split('').map((char, index) => (
        <motion.span key={index} variants={HEADER_ANIMATIONS.letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
