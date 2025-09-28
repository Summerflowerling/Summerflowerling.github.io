import { useCallback } from 'react';

interface UseNavigationReturn {
  navigateToSection: (sectionId: string) => void;
}

interface UseNavigationProps {
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
  setExpanded: (expanded: boolean) => void;
}

export const useNavigation = ({
  currentSection,
  onSectionChange,
  setExpanded,
}: UseNavigationProps): UseNavigationReturn => {
  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (sectionId !== currentSection) {
        onSectionChange(sectionId);
      }
      setExpanded(false);
    },
    [currentSection, onSectionChange, setExpanded],
  );

  return {
    navigateToSection,
  };
};
