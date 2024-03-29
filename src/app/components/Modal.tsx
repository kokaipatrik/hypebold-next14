'use client';

import { ReactNode } from 'react';

import ExitIcon from '@/app/assets/svg/exit-border.svg?svgr';

import { useBackdropStore } from '@/store/backdrop';
import { useModalsStore } from '@/store/modals';

interface ModalProps {
  name: string;
  children: ReactNode;
}

export default function Modal({ name, children }: Required<ModalProps>) {
  const { isActive: backdropIsActive, toggle: backdropToggle } =
    useBackdropStore();
  const { active: activeModal, remove: removeModal } = useModalsStore();

  const exit = () => {
    backdropToggle();
    removeModal();
  };

  if (backdropIsActive && activeModal === name) {
    return (
      <div className='fixed left-[50%] bottom-0 md:bottom-auto md:top-[50%] z-20 h-auto w-full md:w-[420px] -translate-x-[50%] md:-translate-y-[50%] rounded-[12px] bg-gray-dark'>
        <div className='p-[35px]'>
          <div
            className='ml-auto w-[25px] cursor-pointer [&>svg]:text-[#656565]'
            onClick={() => exit()}
          >
            <ExitIcon />
          </div>
          <div className='mt-[4px]'>{children}</div>
        </div>
      </div>
    );
  }
  return null;
}
