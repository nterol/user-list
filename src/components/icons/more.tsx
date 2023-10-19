import { BaseIconProp } from './types';

export function MoreIcon({ classes = 'h-[16px] w-[16px]' }: BaseIconProp) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path
        stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM12.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM3.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
      />
    </svg>
  );
}
