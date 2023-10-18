import { BaseIconProp } from './types';

export function EraserIcon({ classes }: BaseIconProp) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path
        stroke="#24292F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M4.667 14 1.8 11.133c-.667-.666-.667-1.666 0-2.266l6.4-6.4c.667-.667 1.667-.667 2.267 0L14.2 6.2c.667.667.667 1.667 0 2.267L8.667 14M14.667 14h-10M3.333 7.333l6 6"
      />
    </svg>
  );
}
