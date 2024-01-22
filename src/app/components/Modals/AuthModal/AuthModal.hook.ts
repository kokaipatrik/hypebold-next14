import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';

import useUser from '@/app/hooks/useUser';
import { signInSchema, type SignIn } from '@/app/hooks/useUser/types';
import { useBackdropStore } from '@/store/backdrop';
import { useModalsStore } from '@/store/modals';

export default function useAuthModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  });

  const { signIn, me } = useUser();
  const { toggle: backdropToggle } = useBackdropStore();
  const { remove: removeModal } = useModalsStore();
  const [error, setError] = useState<string>('');

  const onSignInSubmit: SubmitHandler<SignIn> = async (data: SignIn) => {
    try {
      const signInMutate = await signIn(data);

      if (signInMutate) {
        setError('');
        Cookies.set('token', signInMutate?.token, { expires: 60 });
        await me();

        backdropToggle();
        removeModal();
      }
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError(err as string);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    error,
    onSignInSubmit,
  };
}
