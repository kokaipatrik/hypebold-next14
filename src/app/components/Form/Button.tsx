import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  onlyIcon?: boolean;
}

export default function Button({ title, ...props }: ButtonProps) {
  return <button {...props}>{title}</button>;
}
