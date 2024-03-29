import { useState, useMemo, useEffect } from 'react';

import { useConfigStore } from '@/store/config';
import type { Config, Size } from '@/store/config.types';

export default function useSell() {
  const store = useConfigStore();
  const config = store.config as Config;
  const [form, setForm] = useState<Record<string, any>>({
    sizeType: {
      name: 'EU',
      value: 'eu',
    },
  });

  const isSneaker = useMemo(() => {
    return form?.category?.value === 'sneaker';
  }, [form?.category?.value]);

  useEffect(() => {
    if (form?.size) {
      setForm((prevState) => {
        const { size, ...state } = prevState;
        return state;
      });
    }
  }, [isSneaker]);

  const getSizesByCategory = (slug: string) => {
    const sizes = config?.sizes.filter((s) => s.categoryUrl === slug);

    if (isSneaker) {
      return sizes.map((size: any) => ({
        name: size.size[form?.sizeType.value],
        value: size.size,
      }));
    } else {
      return sizes.map((size) => ({
        name: size.size,
        value: size.size,
      }));
    }
  };

  const sizeTypes = [
    {
      name: 'EU',
      value: 'eu',
    },
    {
      name: 'US',
      value: 'us',
    },
    {
      name: 'UK',
      value: 'uk',
    },
  ];

  const setValue = (value: any) => {
    setForm((prevState) => ({
      ...prevState,
      [value.name]: value.item,
    }));
  };

  return {
    config,
    form,
    sizeTypes,
    isSneaker,
    setValue,
    getSizesByCategory,
  };
}
