import useSearchInput from './SearchInput.hook';
import SearchSuggestions from './../SearchSuggestions';
import SearchBold from '@/app/assets/svg/search-bold.svg?svgr';

interface SearchInputProps {
  interactive?: boolean;
}

export default function SearchInput({ interactive }: SearchInputProps) {
  const { setIsFocus, inputWidth, relatedWidth } = useSearchInput();

  const focusHandler = (value: boolean) => {
    if (interactive) setIsFocus(value);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search for product, seller, etc...'
        className={`${interactive ? inputWidth : 'w-full'} input !pr-[40px]`}
        onFocus={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
      />
      <button
        className='transition-scale absolute right-[5px] top-[5px] z-10 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[12px] bg-gradient-to-r from-[#2CF2FF] to-[#2C41FF] duration-150 active:scale-95 active:opacity-80'
        type='button'
        aria-label='Search'
      >
        <SearchBold />
      </button>
      {interactive && (
        <div
          className={`${relatedWidth} absolute -right-[20px] -top-[20px] h-auto w-[540px] rounded-[12px] border-[1px] border-gray bg-gray-dark/90 px-[20px] pb-[20px] pt-[80px] backdrop-blur-[10px] transition-all duration-200 xl:w-[640px]`}
        >
          <SearchSuggestions />
        </div>
      )}
      {!interactive && (
        <div className='py-[20px]'>
          <SearchSuggestions />
        </div>
      )}
    </div>
  );
}
