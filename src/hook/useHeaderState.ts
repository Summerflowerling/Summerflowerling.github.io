import { useState, useEffect, useCallback } from 'react';
import { HEADER_CONFIG } from '../const/headerData';

interface UseHeaderStateReturn {
  scrolled: boolean;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  handleHeaderClick: () => void;
  handleBurgerClick: (e: React.MouseEvent) => void;
}

export const useHeaderState = (): UseHeaderStateReturn => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (expanded) {
      setExpanded(false);
    }

    if (!expanded) {
      setScrolled(scrollY > HEADER_CONFIG.scrollThreshold);
    }
  }, [expanded]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleHeaderClick = useCallback(() => {
    if (expanded) {
      setExpanded(false);
      setScrolled(window.scrollY > HEADER_CONFIG.scrollThreshold);
    }
  }, [expanded]);

  const handleBurgerClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();

      if (expanded) {
        return;
      }

      setExpanded(true);
      setScrolled(false);
    },
    [expanded],
  );

  return {
    scrolled,
    expanded,
    setExpanded,
    handleHeaderClick,
    handleBurgerClick,
  };
};
