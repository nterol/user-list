import Fuse from 'fuse.js';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useMemo, useState } from 'react';

import s from './search.module.css';

import { SearchIcon } from '@/components/icons/search';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useFilter';
import { AllUsers, SearchRegistry } from '@/store/users';
import { type User } from '@/utils/schema';

const options = {
  includeScores: false,
  threshold: 0.2,
  keys: ['name', 'email', 'access'],
};

export function Search() {
  const { search, setSearch } = useSearch();
  const [value, setValue] = useState(search ?? '');
  const setSearchFilter = useSetAtom(SearchRegistry);

  const allUsers = useAtomValue(AllUsers);

  const fuse = useMemo(() => new Fuse(allUsers, options), [allUsers]);

  useEffect(() => {
    if (!search) return;
    const searched = fuse.search(search);
    if (searched.length > 0) {
      const register = searched.map(({ item }) => item?.id).filter((e): e is User['id'] => !!e);
      setSearchFilter(register);
    }
  }, [fuse, search, setSearchFilter]);

  useEffect(() => {
    if (search === null) setSearchFilter(null);
  }, [search, setSearchFilter]);

  const debounced = useDebounce((v) => setSearch(v));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounced(e.target.value);
  };

  return (
    <div className={s.search_bar}>
      <SearchIcon classes="w-[16px] h-[16px]" />
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search..."
        className="outline-none focus:outline-none"
      />
    </div>
  );
}
