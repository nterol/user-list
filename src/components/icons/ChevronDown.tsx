import { BaseIconProp } from './types';

export function SearchIcon(props: BaseIconProp) {
  return (
    <svg className={props.classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path stroke="#24292F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="m4 6 4 4 4-4" />
    </svg>
  );
}
