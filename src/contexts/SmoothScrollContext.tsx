import React, { createContext, useContext, useState } from 'react';

interface SmoothScrollContextProps {
  scrollTo: (target: string | HTMLElement) => void;
  registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextProps>({
  scrollTo: () => {},
  registerSection: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sections, setSections] = useState<Map<string, React.RefObject<HTMLElement>>>(
    new Map()
  );

  const registerSection = (id: string, ref: React.RefObject<HTMLElement>) => {
    setSections((prev) => {
      const newMap = new Map(prev);
      newMap.set(id, ref);
      return newMap;
    });
  };

  const scrollTo = (target: string | HTMLElement) => {
    if (typeof target === 'string') {
      const sectionRef = sections.get(target);
      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, registerSection }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};