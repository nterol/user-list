import { BaseIconProp } from './types';

export function NavigationArrowIcon({ classes = 'h-[16px] w-[16px]' }: BaseIconProp) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path
        stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M8 12.667 3.333 8 8 3.333M12.667 8H3.333"
      />
    </svg>
  );
}
