import { BaseIconProp } from './types';

export function SearchIcon({ classes = 'h-[16px] w-[16px]' }: BaseIconProp) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" stroke="currentColor">
      <path
        // stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.867-2.867"
      />
    </svg>
  );
}
