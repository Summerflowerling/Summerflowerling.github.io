import { useState, lazy, Suspense, useEffect } from 'react';
import Header from '../components/Header';
import SectionTransition from '../components/SectionTransition';
import About from './About';
import Contact from './Contact';
import { useInViewSection } from '../hook/useInViewSection';
import { SECTIONS } from '../const/headerData';

const Gallery = lazy(() => import('./Gallery'));

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState('about');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const sectionIds = SECTIONS.map((section) => section.id);

  const scrollBasedSection = useInViewSection({
    sectionIds,
    rootMargin: '-10% 0px -10% 0px',
    disabled: isTransitioning,
  });

  useEffect(() => {
    if (!isTransitioning && scrollBasedSection !== currentSection) {
      setCurrentSection(scrollBasedSection);
      setShouldAnimate(false);
    }
  }, [scrollBasedSection, isTransitioning, currentSection]);

  const handleSectionChange = (sectionId: string) => {
    if (sectionId !== currentSection && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSection(sectionId);
      setShouldAnimate(true);
    }
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setShouldAnimate(false);
  };

  const sections = {
    about: <About />,
    gallery: (
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              fontFamily: 'Prata, Times, serif',
              fontSize: '1.1rem',
              color: '#666',
            }}
          >
            Loading Gallery...
          </div>
        }
      >
        <Gallery />
      </Suspense>
    ),
    contact: <Contact />,
  };

  return (
    <>
      <Header
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />
      <SectionTransition
        activeSection={currentSection}
        children={sections}
        transitionDuration={2100}
        onTransitionComplete={handleTransitionComplete}
        shouldAnimate={shouldAnimate}
      />
    </>
  );
};

export default HomePage;
