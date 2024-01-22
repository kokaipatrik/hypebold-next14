'use client';

import { useConfigStore } from '@/store/config';

type PageType = 'category' | 'brand';

interface FiltersProps {
  pageType: PageType;
  slug: string;
}

export default function Filters(props: FiltersProps) {
  const store = useConfigStore();
  const config = store.config;

  const getSizesByCategory = (slug: string) =>
    config?.sizes.filter((s) => s.categoryUrl === slug);
  const categories = config?.categories;
  const brands = config?.brands;
  const conditions = config?.conditions;

  return (
    <div className='filters'>
      {props.pageType === 'brand' && (
        <div>
          <h2 className='text-2xl'>Categories:</h2>
          {JSON.stringify(categories)}
        </div>
      )}
      {props.pageType === 'category' && (
        <>
          <div>
            <h2 className='text-2xl'>Brands:</h2>
            {JSON.stringify(brands)}
          </div>
          <div>
            <h2 className='text-2xl'>Sizes:</h2>
            {JSON.stringify(getSizesByCategory(props.slug))}
          </div>
        </>
      )}
      <div>
        <h2 className='text-2xl'>Conditions:</h2>
        {JSON.stringify(conditions)}
      </div>
    </div>
  );
}
