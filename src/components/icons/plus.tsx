import { BaseIconProp } from './types';

export function PlusIcon({ classes = 'h-[16px] w-[16px]' }: BaseIconProp) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        // stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M3.333 8h9.334M8 3.333v9.334"
      />
    </svg>
  );
}
