import { useContext } from 'react';
import { useState, createContext } from 'react';

export const SlideOverType = {
  NONE: 'NONE',
  ADD_EMPLOYEE: 'ADD_EMPLOYEE',
  EDIT_EMPLOYEE: 'EDIT_EMPLOYEE',
};

export const SlideOverlContext = createContext();

function SlideOverProvider({ children }) {
  const [slideOver, setSlideOver] = useState(SlideOverType.NONE);

  const value = { slideOver, setSlideOver };

  return (
    <SlideOverlContext.Provider value={value}>
      {children}
    </SlideOverlContext.Provider>
  );
}

function useSlideOver() {
  const context = useContext(SlideOverlContext);
  if (context === undefined)
    throw new Error(
      `SlideOverContext was used outside of the SlideOverProvider`
    );
  return context;
}

export { SlideOverProvider, useSlideOver };
