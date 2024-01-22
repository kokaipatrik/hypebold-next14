'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import { useConfigStore } from '@/store/config';
import type { Config, Brand, Category } from '@/store/config.types';
import useMobileNavigation from './MobileNavigation.hook';

import ArrowRightIcon from '@/app/assets/svg/arrow-right.svg?svgr';
import ArrowLeftIcon from '@/app/assets/svg/arrow-left.svg?svgr';

interface MobileNavigationProps {
  isActive: boolean;
}

export default function MobileNavigation({ isActive }: MobileNavigationProps) {
  const store = useConfigStore();
  const config = store.config as Config;

  const navRef = useRef<HTMLElement>(null);
  useMobileNavigation({ nav: navRef, isActive });

  const [brandsIsActive, setBrandsIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (!isActive) setTimeout(() => setBrandsIsActive(false), 500);
  }, [isActive]);

  const styles = {
    list: 'py-[15px]',
    listItem: 'w-full mb-[20px] last-of-type:mb-0 text-[25px] font-semibold',
    listItemMain:
      'main-item transition-all duration-500 opacity-0 translate-y-[6px]',
    listItemActive: 'opacity-1 translateY-0',
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[1] w-full overflow-hidden bg-black transition-all duration-500 lg:hidden ${
        isActive ? 'h-full' : 'h-0'
      }`}
    >
      <div className='container mx-auto px-[20px] py-[80px]'>
        <nav ref={navRef} className='relative'>
          {config.categories.length > 0 && (
            <ul
              className={`${styles.list} transition-all duration-300 ${
                brandsIsActive
                  ? 'invisible -translate-x-[15px] opacity-0'
                  : 'opacity-1 visible'
              }`}
            >
              <li className={`${styles.listItemMain} ${styles.listItem}`}>
                <a
                  className='flex cursor-pointer items-center justify-between'
                  onClick={() => setBrandsIsActive(true)}
                >
                  Brands
                  <ArrowRightIcon />
                </a>
              </li>
              {config.categories.map((category: Category, key: number) => {
                return (
                  <li
                    key={key}
                    className={`${styles.listItemMain} ${styles.listItem}`}
                  >
                    <Link
                      href={`/category/${category.url}`}
                      className='block w-full'
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          {config.brands.length > 0 && (
            <ul
              className={`absolute top-0 py-[15px] transition-all duration-300 ${
                brandsIsActive
                  ? 'opacity-1 visible translate-x-0 delay-200'
                  : 'invisible translate-x-[15px] opacity-0 delay-0'
              }`}
            >
              <li
                className='mb-[24px] cursor-pointer'
                onClick={() => setBrandsIsActive(false)}
              >
                <ArrowLeftIcon />
              </li>
              {config.brands.map((brand: Brand, key: number) => {
                return (
                  <li key={key} className={styles.listItem}>
                    <Link href={`/brand/${brand.url}`} className='block w-full'>
                      {brand.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
