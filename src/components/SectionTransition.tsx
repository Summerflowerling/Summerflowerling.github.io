import { useState, useEffect, type ReactNode } from 'react';
import styles from './SectionTransition.module.css';

interface SectionTransitionProps {
  activeSection: string;
  children: Record<string, ReactNode>;
  transitionDuration?: number;
  onTransitionComplete?: () => void;
  shouldAnimate?: boolean;
}

const SectionTransition = ({
  activeSection,
  children,
  transitionDuration = 600,
  onTransitionComplete,
  shouldAnimate = false,
}: SectionTransitionProps) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [fadeState, setFadeState] = useState<
    'visible' | 'fading-out' | 'white-pause' | 'fading-in'
  >('visible');
  const [lastActiveSection, setLastActiveSection] = useState(activeSection);

  useEffect(() => {
    if (activeSection !== lastActiveSection && shouldAnimate) {
      setIsNavigating(true);
      setFadeState('fading-out');

      // Stage 1: Slow fade-out (800ms)
      const fadeOutTimer = setTimeout(() => {
        // Immediately scroll when entering white pause (screen is fully white)
        const targetElement = document.getElementById(activeSection);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'instant', block: 'start' });
        }

        setFadeState('white-pause');

        // Stage 2: White pause (500ms)
        const pauseTimer = setTimeout(() => {
          setFadeState('fading-in');

          // Stage 3: Slow fade-in (800ms)
          const fadeInTimer = setTimeout(() => {
            setFadeState('visible');
            setIsNavigating(false);
            setLastActiveSection(activeSection);
            onTransitionComplete?.();
          }, 800);

          return () => clearTimeout(fadeInTimer);
        }, 500);

        return () => clearTimeout(pauseTimer);
      }, 800);

      return () => clearTimeout(fadeOutTimer);
    } else if (activeSection !== lastActiveSection) {
      setLastActiveSection(activeSection);
    }
  }, [
    activeSection,
    lastActiveSection,
    transitionDuration,
    onTransitionComplete,
    shouldAnimate,
  ]);

  return (
    <div className={styles.pageContainer}>
      {isNavigating && (
        <div
          className={`${styles.fadeOverlay} ${styles[fadeState]}`}
          style={
            {
              '--transition-duration': `${transitionDuration / 2}ms`,
            } as React.CSSProperties
          }
        />
      )}

      <div className={styles.sectionsContainer}>
        {Object.entries(children).map(([sectionId, content]) => (
          <section
            key={sectionId}
            id={sectionId}
            className={styles.section}
            data-active={sectionId === activeSection}
          >
            {content}
          </section>
        ))}
      </div>
    </div>
  );
};

export default SectionTransition;
