import { useEffect, RefObject } from 'react';

interface UseMobileNavigationProps {
  nav: RefObject<HTMLElement>;
  isActive: boolean;
}

export default function useMobileNavigation({
  nav,
  isActive,
}: UseMobileNavigationProps) {
  const classHandler = (item: HTMLLIElement, show: boolean) => {
    if (show) {
      item.classList.remove('opacity-0');
      item.classList.remove('translate-y-[6px]');
      item.classList.add('opacity-1');
      item.classList.add('translate-y-0');
    } else {
      item.classList.remove('opacity-1');
      item.classList.remove('translate-y-0');
      item.classList.add('opacity-0');
      item.classList.add('translate-y-[6px]');
    }
  };

  useEffect(() => {
    const items: NodeListOf<HTMLLIElement> | undefined =
      nav.current?.querySelectorAll('.main-item');

    if (items) {
      const listItems = [...items];
      if (!isActive) listItems.reverse();

      for (let index = 0; index < listItems.length; index++) {
        const item = listItems[index];
        setTimeout(
          () => classHandler(item, isActive ? true : false),
          index * 100
        );
      }
    }
  }, [isActive, nav]);
}
