'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

import User from '@/app/assets/svg/user.svg?svgr';

import { useAuthStore } from '@/store/auth';

export default function UserAction() {
  const { user } = useAuthStore();
  const [isActive, setIsActive] = useState<boolean>(false);
  const userRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const styles = {
    dropdownList:
      'absolute top-[calc(100%+8px)] -right-[10px] w-[180px] px-[14px] py-[10px] bg-gray-dark border-[1px] border-gray rounded-[12px] transition-all',
    dropdownItem:
      'text-right text-sm text-[#909090] font-medium mb-[6px] last-of-type:mb-0 cursor-pointer transition-[color] duration-300 hover:text-white',
  };

  const getMonogram = (username: string) => username?.slice(0, 2);

  const links = [
    {
      title: 'My profile',
      url: '/my-profile',
    },
    {
      title: 'My ads',
      url: '/my-ads',
    },
    {
      title: 'Settings',
      url: '/settings',
    },
  ];

  const logout = () => {
    useAuthStore.setState({ authenticated: false, user: {} });
    Cookies.remove('token');
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current?.contains(e.target as Node) &&
        userRef.current &&
        !userRef.current?.contains(e.target as Node) &&
        isActive
      ) {
        setIsActive(false);
      }
    };

    window.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('click', handleOutsideClick, false);
    };
  });

  return (
    <div className='relative'>
      <div
        className='flex w-[70px] cursor-pointer items-center justify-end gap-[12px]'
        onClick={() => setIsActive(!isActive)}
        ref={userRef}
        tabIndex={0}
      >
        <p className='font-semibold uppercase'>{getMonogram(user.username)}</p>
        <div className='flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border-[1px] border-gray bg-gray-dark'>
          <User />
        </div>
      </div>
      <div
        className={`${styles.dropdownList} ${
          isActive
            ? 'opacity-1 visible scale-100'
            : 'invisible scale-95 opacity-0'
        }`}
        ref={dropdownRef}
      >
        {links.length > 0 && (
          <ul>
            {links.map((link, i) => (
              <li key={i} className={styles.dropdownItem}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
            <li className={styles.dropdownItem} onClick={() => logout()}>
              Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
