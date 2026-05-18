import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames'; // npm install classnames

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const base = 'rounded-full font-semibold transition-all duration-200 focus:outline-none';
  const variants = {
    primary: 'bg-[#1E3A8A] text-white hover:bg-[#1E40AF] active:bg-[#1E3A8A]',
    secondary: 'bg-transparent border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#EFF6FF]',
    outline: 'bg-white border border-gray-300 text-gray-700 hover:border-[#1E3A8A]',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return (
    <button
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </button>
  );
};