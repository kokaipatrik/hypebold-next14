'use client';

import UserIcon from '@/app/assets/svg/user.svg?svgr';
import PasswordIcon from '@/app/assets/svg/password.svg?svgr';

import useAuthModal from './AuthModal.hook';
import Modal from '@/components/Modal';
import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';

export default function AuthModal() {
  const { register, handleSubmit, errors, error, onSignInSubmit } =
    useAuthModal();

  return (
    <Modal name='auth'>
      <h2 className='mb-[28px] text-[25px] font-bold'>Sign In</h2>
      <form
        onSubmit={handleSubmit(onSignInSubmit)}
        className='flex h-full flex-wrap gap-[20px]'
      >
        {error && <div className='text-red'>{error}</div>}
        <Input
          type='email'
          icon={<UserIcon />}
          placeholder='E-mail'
          autoComplete='true'
          validate={register('email')}
          error={errors.email?.message}
        />
        <Input
          type='password'
          icon={<PasswordIcon />}
          placeholder='Password'
          autoComplete='true'
          validate={register('password')}
          error={errors.password?.message}
        />
        <Button type='submit' title='Sign In' className='btn btn-primary' />
      </form>
    </Modal>
  );
}
