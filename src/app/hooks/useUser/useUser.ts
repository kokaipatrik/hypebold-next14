import Cookies from 'js-cookie';

import { useAuthStore } from '@/store/auth';
import type { SignIn } from './types';

export default function useUser() {
  const signIn = async (params: SignIn) => {
    const auth = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const response = await auth.json();

    if (!auth.ok) throw new Error(response?.message);

    return response;
  };

  const me = async () => {
    const token = Cookies.get('token');

    if (!useAuthStore.getState().authenticated && token) {
      const getUser = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await getUser.json();

      if (!getUser.ok) {
        Cookies.remove('token');
        throw new Error(user?.message);
      }

      useAuthStore.setState({ authenticated: true, user: user });

      return user;
    }
  };

  return {
    signIn,
    me,
  };
}
