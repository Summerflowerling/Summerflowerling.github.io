import { useEffect, useState, useCallback, useRef } from 'react';

interface UseInViewSectionOptions {
  sectionIds: string[];
  rootMargin?: string;
  disabled?: boolean;
}

export const useInViewSection = ({
  sectionIds,
  rootMargin = '-20% 0px -20% 0px',
  disabled = false,
}: UseInViewSectionOptions) => {
  const [currentSection, setCurrentSection] = useState<string>(sectionIds[0]);
  const timeoutRef = useRef<number>(0);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      let maxRatio = 0;
      let bestSectionId = '';

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          const sectionId =
            entry.target.getAttribute('data-section-id') || entry.target.id;
          if (sectionId && sectionIds.includes(sectionId)) {
            maxRatio = entry.intersectionRatio;
            bestSectionId = sectionId;
          }
        }
      });

      if (bestSectionId && !disabled) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
          setCurrentSection(bestSectionId);
        }, 150);
      }
    },
    [sectionIds, disabled],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin,
    });

    sectionIds.forEach((sectionId) => {
      const element = document.querySelector(
        `[data-section-id="${sectionId}"], #${sectionId}`,
      );
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sectionIds, handleIntersection, rootMargin]);

  return currentSection;
};
