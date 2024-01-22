'use client';

import SearchInput from '@/components/Header/SearchInput';

interface MobileSearchProps {
  isActive: boolean;
}

export default function MobileSearch({ isActive }: MobileSearchProps) {
  return (
    <div
      className={`fixed left-0 top-0 z-[1] w-full overflow-hidden bg-black transition-all duration-500 lg:hidden ${
        isActive ? 'h-full' : 'h-0'
      }`}
    >
      <div className='container mx-auto px-[20px] py-[80px]'>
        <SearchInput />
      </div>
    </div>
  );
}
