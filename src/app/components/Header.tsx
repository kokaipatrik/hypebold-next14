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
import MobileSearch from '@/components/Header/Dropdowns/MobileSearch';
import DesktopNavigation from '@/components/Header/DesktopNavigation';
import SearchInput from '@/components/Header/SearchInput';
import UserAction from '@/components/Header/UserAction';

export default function Header() {
  const router = useRouter();
  const { toggle: backdropToggle } = useBackdropStore();
  const { set: setModal } = useModalsStore();
  const { authenticated } = useAuthStore();
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  const [searchIsActive, setSearchIsActive] = useState<boolean>(false);

  const authModal = () => {
    backdropToggle();
    setModal('auth');
  };

  return (
    <>
      <header className='header sticky top-0 z-[2] flex h-[65px] items-center border-b-[1px] border-[#262626] lg:h-[90px]'>
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
                onClick={() => setSearchIsActive(!searchIsActive)}
              >
                {!searchIsActive && <Search />}
                {searchIsActive && <MenuAction isActive={searchIsActive} />}
              </div>
              <div className='action'>
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
                    onClick={() => authModal()}
                  >
                    Sign In
                  </button>
                )}
                {authenticated && (
                  <>
                    <button
                      className='btn btn-secondary'
                      onClick={() => router.push('/sell')}
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
      <MobileSearch isActive={searchIsActive} />
    </>
  );
}
