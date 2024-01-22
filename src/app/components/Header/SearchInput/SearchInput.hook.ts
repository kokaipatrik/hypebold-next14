import { useState, useEffect, useCallback } from 'react';

export default function useSearchInput() {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const inputWidth = `${
    isFocus ? 'w-[500px] xl:w-[600px]' : 'w-[220px] xl:w-[360px]'
  }`;
  const relatedWidth = `${
    isFocus ? 'scale-100 opacity-1 visible' : 'scale-90 opacity-0 invisible'
  }`;

  const escHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') setIsFocus(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escHandler, false);

    return () => {
      document.removeEventListener('keydown', escHandler, false);
    };
  }, [escHandler]);

  return {
    setIsFocus,
    inputWidth,
    relatedWidth,
  };
}
