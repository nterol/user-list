import { BaseIconProp } from './types';

export function FileUpIcon({ classes = 'h-[16px] w-[16px]' }: BaseIconProp) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path
        stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M9.667 1.333H4a1.333 1.333 0 0 0-1.333 1.334v10.666A1.333 1.333 0 0 0 4 14.667h8a1.334 1.334 0 0 0 1.333-1.334V5L9.667 1.333Z"
      />
      <path
        stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M9.333 1.333v4h4M8 8v4M10 10 8 8l-2 2"
      />
    </svg>
  );
}
