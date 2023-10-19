import { BaseIconProp } from './types';

export function NoUserIcon({ classes = 'h-[16px] w-[16px]' }: BaseIconProp) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" stroke="currentColor">
      <path
        // stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M9.333 12.667a4 4 0 1 0-8 0"
      />
      <path
        // stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M5.333 8.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334ZM11.333 5.333l3.334 3.334M14.667 5.333l-3.334 3.334"
      />
    </svg>
  );
}
