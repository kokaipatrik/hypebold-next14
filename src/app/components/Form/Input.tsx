import { InputHTMLAttributes, ReactNode } from 'react';

import ErrorIcon from '@/app/assets/svg/error.svg?svgr';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  validate?: any;
  error?: any;
  fixPlaceholder?: string;
}

export default function Input({
  label,
  icon,
  validate,
  error,
  fixPlaceholder,
  ...props
}: InputProps) {
  const iconPosition = 'absolute top-[50%] z-20 -translate-y-[50%]';
  const { id } = props;

  return (
    <div className='w-full'>
      {label && id && (
        <label className='label' htmlFor={id}>
          {label}
        </label>
      )}
      <div className='relative z-0 h-[40px] w-full'>
        {icon && (
          <div className={`${iconPosition} left-[10px] [&>svg]:text-gray-5`}>
            {icon}
          </div>
        )}
        {error && (
          <div className={`${iconPosition} right-[10px] [&>svg]:text-red`}>
            <ErrorIcon />
          </div>
        )}
        {fixPlaceholder && (
          <div className={`${iconPosition} left-[12px]`}>{fixPlaceholder}</div>
        )}
        <input
          {...props}
          {...validate}
          className={`input absolute z-10 w-full font-medium ${
            icon || fixPlaceholder ? '!pl-[32px]' : null
          } ${error ? '!border-red' : null}`}
        />
      </div>
      {error && <div className='mt-[4px] text-[14px] text-red'>{error}</div>}
    </div>
  );
}
