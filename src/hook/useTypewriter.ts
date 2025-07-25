import { useReducer, useEffect } from 'react';

// Story state management
interface StoryState {
  currentParagraph: number;
  isTyping: boolean;
  typedText: string;
}

type StoryAction =
  | { type: 'START_TYPING'; paragraph: number }
  | { type: 'UPDATE_TEXT'; text: string }
  | { type: 'FINISH_TYPING' }
  | { type: 'RESET' };

const storyReducer = (state: StoryState, action: StoryAction): StoryState => {
  switch (action.type) {
    case 'START_TYPING':
      return {
        ...state,
        currentParagraph: action.paragraph,
        isTyping: true,
        typedText: '',
      };
    case 'UPDATE_TEXT':
      return { ...state, typedText: action.text };
    case 'FINISH_TYPING':
      return { ...state, isTyping: false };
    case 'RESET':
      return { currentParagraph: 0, isTyping: false, typedText: '' };
    default:
      return state;
  }
};

// Typewriter hook for accessibility-friendly typing effect
export const useTypewriter = (
  text: string,
  speed: number = 50,
  shouldStart: boolean = false,
) => {
  const [state, dispatch] = useReducer(storyReducer, {
    currentParagraph: 0,
    isTyping: false,
    typedText: '',
  });

  useEffect(() => {
    if (!shouldStart || !text) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      dispatch({ type: 'UPDATE_TEXT', text });
      dispatch({ type: 'FINISH_TYPING' });
      return;
    }

    dispatch({ type: 'START_TYPING', paragraph: 0 });
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        dispatch({ type: 'UPDATE_TEXT', text: text.slice(0, currentIndex) });
        currentIndex++;
      } else {
        dispatch({ type: 'FINISH_TYPING' });
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed, shouldStart]);

  return state.typedText;
};
