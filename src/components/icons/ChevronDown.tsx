import { BaseIconProp } from './types';

export function ChevronDownIcon({ classes = 'h-[16px] w-[16px]' }: BaseIconProp) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path stroke="#24292F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="m4 6 4 4 4-4" />
    </svg>
  );
}
