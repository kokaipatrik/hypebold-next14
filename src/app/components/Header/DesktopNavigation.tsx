'use client';

import { useState } from 'react';
import Link from 'next/link';

import { useConfigStore } from '@/store/config';
import type { Config, Brand, Category } from '@/store/config.types';

import ArrowDownIcon from '@/app/assets/svg/arrow-down.svg?svgr';

export default function DesktopNavigation() {
  const store = useConfigStore();
  const config = store.config as Config;
  const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);

  const dropdownEnter = (): void => setDropdownIsActive(true);
  const dropdownLeave = (): void => setDropdownIsActive(false);

  const styles = {
    list: 'flex wrap-none items-center gap-[32px] h-full xl:gap-[48px]',
    listItem:
      'relative flex items-center h-full text-[16px] text-[#909090] font-medium transition-all duration-300 hover:text-white',
    dropdownList:
      'absolute top-[100%] -left-[12px] w-[200px] px-[12px] py-[10px] backdrop-blur-[10px] bg-[#121212]/90 border-[1px] border-[#262626] rounded-[12px] transition-all',
    dropdownItem:
      'text-[15px] leading-[28px] text-[#909090] font-medium transition-all duration-300 hover:text-white',
  };

  return (
    <nav className='flex items-center'>
      {config.categories.length > 0 && (
        <ul className={styles.list}>
          <li
            className={styles.listItem}
            onMouseEnter={dropdownEnter}
            onMouseLeave={dropdownLeave}
          >
            <a className='flex cursor-pointer items-center' tabIndex={0}>
              Brands
              <ArrowDownIcon className='ml-[8px]' />
            </a>
            {config.brands.length > 0 && (
              <ul
                className={`${styles.dropdownList} ${
                  dropdownIsActive
                    ? 'opacity-1 visible scale-100'
                    : 'invisible scale-95 opacity-0'
                }`}
              >
                {config.brands.map((brand: Brand, key: number) => {
                  return (
                    <li className={styles.dropdownItem} key={key}>
                      <Link href={`/brand/${brand.url}`} className='link'>
                        {brand.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          {config.categories.map((category: Category, key: number) => {
            return (
              <li key={key} className={styles.listItem}>
                <Link href={`/category/${category.url}`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
