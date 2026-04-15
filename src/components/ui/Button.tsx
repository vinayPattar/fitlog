import { cn } from '../../lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon, 
  className, 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-br from-primary to-primary-container text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95',
    secondary: 'bg-surface-container-low text-primary hover:bg-surface-container active:scale-95',
    ghost: 'text-on-surface-variant hover:text-primary active:scale-95',
  };

  return (
    <button 
      className={cn(
        "pill px-8 py-4 flex items-center justify-center gap-3 font-bold font-headline text-lg transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
