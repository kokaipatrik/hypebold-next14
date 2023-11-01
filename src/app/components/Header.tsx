'use client';

import Link from 'next/link';

import { useConfigStore } from '../store/config';
import type { Config, Brand, Category } from '@/app/store/config.types';
import Logo from 'public/logo.svg?svgr';

export default function Header() {
  const store = useConfigStore();
  const config = store.config as Config;

  return (
    <header>
      <Link href='/'>
        <Logo />
      </Link>
      {config.categories.length > 0 && (
        <ul>
          <li>
            Brands
            {config.brands.length > 0 && (
              <ul>
                {config.brands.map((brand: Brand, key: number) => {
                  return (
                    <li key={key}>
                      <Link href={`/brand/${brand.url}`}>{brand.name}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          {config.categories.map((category: Category, key: number) => {
            return (
              <li key={key}>
                <Link href={`/category/${category.url}`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
