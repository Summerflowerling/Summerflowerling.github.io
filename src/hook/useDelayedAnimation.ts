import { useState, useEffect } from 'react';

export const useDelayedAnimation = (delay: number = 1500) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimationComplete(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isAnimationComplete;
};
