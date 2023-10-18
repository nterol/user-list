import { SearchIcon } from '@/components/icons/search';

import s from './search.module.css';

export function Search() {
  return (
    <div className={s.search_bar}>
      <SearchIcon classes="w-[16px] h-[16px]" />
      <input placeholder="Search..." className="outline-none focus:outline-none" />
    </div>
  );
}
