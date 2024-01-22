import Link from 'next/link';

import { searchSuggestions as suggestions } from './SearchSuggestions.mock';

export default function searchSuggestions() {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-1'>
        <p className='mb-[12px] text-[16px]'>Search suggestions</p>
        {suggestions?.length > 0 && (
          <ul>
            {suggestions.map((suggestion, key) => {
              return (
                <li key={key} className='mb-[6px] last-of-type:mb-0'>
                  <Link href={suggestion.url} className='link'>
                    {suggestion.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div>Product recommends</div>
    </div>
  );
}
