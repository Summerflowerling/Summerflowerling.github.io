import { motion } from 'framer-motion';
import { type FC } from 'react';

interface SocialLinkProps {
  href: string;
  icon: string;
  alt: string;
}

const SocialLink: FC<SocialLinkProps> = ({ href, icon, alt }) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <img src={icon} alt={alt} />
  </motion.a>
);

export default SocialLink;
