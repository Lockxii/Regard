import * as React from 'react';

import { cn } from '@/lib/utils';

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn('py-16 sm:py-20', className)}
    {...props}
  />
));
Section.displayName = 'Section';

export { Section };
