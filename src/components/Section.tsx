import { Box } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <Box
      className={`flex w-full flex-col flex-wrap items-center px-8 pt-24 ${className}`}
    >
      {children}
    </Box>
  );
};

export default Section;
