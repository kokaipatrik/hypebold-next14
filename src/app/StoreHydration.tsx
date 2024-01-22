'use client';

import { ReactNode, useEffect, useState } from 'react';

type StoreHydration = {
  children: ReactNode;
};

const StoreHydration = ({ children }: StoreHydration) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated ? <>{children}</> : null;
};

export default StoreHydration;
