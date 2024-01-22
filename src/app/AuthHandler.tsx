'use client';

import { useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

import useUser from '@/app/hooks/useUser/useUser';
import { useAuthStore } from '@/store/auth';

export default function AuthHandler() {
  const authenticated = useRef(false);
  const token = Cookies.get('token');
  const { me } = useUser();

  useEffect(() => {
    async function authHandler() {
      if (
        !useAuthStore.getState().authenticated &&
        !authenticated.current &&
        token
      ) {
        const user = await me();

        if (user) authenticated.current = true;
      }
    }

    authHandler();
  }, [token, me]);

  return null;
}
