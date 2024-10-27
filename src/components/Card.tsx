import { cn } from '@/lib/utils';
import { Box } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
  color?: string;
}

const Card = ({ children, className, color = '#f7efe8' }: CardProps) => {
  return (
    <Box
      className={cn(
        `bg-[${color}] my-4 flex w-full max-w-[940px] place-content-center rounded-xl text-center font-poppins`,
        className
      )}
    >
      {children}
    </Box>
  );
};

export default Card;
