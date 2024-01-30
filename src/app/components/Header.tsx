'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Logo from 'public/logo.svg?svgr';
import Search from '@/app/assets/svg/search.svg?svgr';
import User from '@/app/assets/svg/user.svg?svgr';

import { useBackdropStore } from '@/store/backdrop';
import { useModalsStore } from '@/store/modals';
import { useAuthStore } from '@/store/auth';

import MenuAction from '@/components/Header/MenuAction';
import MobileNavigation from '@/components/Header/Dropdowns/MobileNavigation';
import DesktopNavigation from '@/components/Header/DesktopNavigation';
import SearchInput from '@/components/Header/SearchInput';
import UserAction from '@/components/Header/UserAction';

import AuthModal from '@/components/Modals/AuthModal';
import SearchModal from '@/components/Modals/SearchModal';

export default function Header() {
  const router = useRouter();
  const { toggle: backdropToggle } = useBackdropStore();
  const { set: setModal } = useModalsStore();
  const { authenticated } = useAuthStore();
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  const modalHandler = (name: string) => {
    backdropToggle();
    setModal(name);
  };

  return (
    <>
      <header className='header sticky top-0 z-[2] flex h-[65px] items-center border-b-[1px] border-gray lg:h-[90px]'>
        <div className='container mx-auto px-[20px]'>
          <div className='grid grid-cols-3 lg:hidden'>
            <div
              className='flex items-center'
              onClick={() => setMenuIsActive(!menuIsActive)}
            >
              <MenuAction isActive={menuIsActive} />
            </div>
            <Link
              href='/'
              className='mx-auto [&>svg]:h-[32px] [&>svg]:w-[24px]'
              aria-label='HypeBold'
            >
              <Logo />
            </Link>
            <div className='flex items-center justify-end gap-[22px]'>
              <div
                className='action'
                onClick={() => modalHandler('search')}
              >
                <Search />
              </div>
              <div
                className='action'
                onClick={() => modalHandler('auth')}
              >
                <User />
              </div>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className='flex justify-between'>
              <div className='flex'>
                <Link
                  href='/'
                  className='mr-[36px] xl:mr-[48px] [&>svg]:h-[40px] [&>svg]:w-[30px]'
                  aria-label='HypeBold'
                >
                  <Logo />
                </Link>
                <DesktopNavigation />
              </div>
              <div className='flex gap-[20px]'>
                <SearchInput interactive={true} />
                {!authenticated && (
                  <button
                    className='btn btn-secondary !w-[90px]'
                    onClick={() => modalHandler('auth')}
                    type='button'
                    aria-label='Sign In'
                  >
                    Sign In
                  </button>
                )}
                {authenticated && (
                  <>
                    <button
                      className='btn btn-secondary'
                      onClick={() => router.push('/sell')}
                      type='button'
                      aria-label='Sell'
                    >
                      Sell
                    </button>
                    <UserAction />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileNavigation isActive={menuIsActive} />
      <AuthModal />
      <SearchModal />
    </>
  );
}
