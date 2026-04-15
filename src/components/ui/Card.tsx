import { cn } from '../../lib/utils';
import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'low' | 'lowest' | 'gradient';
}

export function Card({ children, className, variant = 'lowest', ...props }: CardProps) {
  const variants = {
    default: 'bg-surface-container',
    low: 'bg-surface-container-low',
    lowest: 'bg-surface-container-lowest ambient-shadow',
    gradient: 'bg-gradient-to-br from-primary to-primary-container text-white shadow-lg shadow-primary/20',
  };

  return (
    <div 
      className={cn("p-6 rounded-lg transition-all", variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
