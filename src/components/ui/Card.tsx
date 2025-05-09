import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg bg-white p-6 shadow-sm',
          {
            'border border-gray-200': variant === 'bordered',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export default Card; 