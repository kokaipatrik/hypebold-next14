'use client';

import { useBackdropStore } from '@/store/backdrop';
import { useModalsStore } from '@/store/modals';

export default function Backdrop() {
  const { isActive: backdropIsActive, toggle: backdropToggle } =
    useBackdropStore();
  const { remove: removeModal } = useModalsStore();

  const exit = () => {
    backdropToggle();
    removeModal();
  };

  return backdropIsActive ? (
    <div
      className='fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50 transition-all'
      onClick={() => exit()}
    />
  ) : null;
}
