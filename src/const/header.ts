import { User, Palette, Mail } from 'lucide-react';
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
