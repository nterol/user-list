import { useAtomValue } from 'jotai';
import { useAtomCallback } from 'jotai/utils';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { max_count } from './usePagination';

import { CurrentPage } from '@/store/page';
import { FinalRegistry } from '@/store/users';
import { cleanObject, removeEmptyArray } from '@/utils/clean-object';

export function useAllFilters() {
  const [params, setParams] = useSearchParams();
  const roles = params.getAll('roles');
  const search = params.get('search');

  return { roles, search, setParams };
}

export function useRole() {
  const { setParams, ...params } = useAllFilters();

  const roles = params.roles ?? [];

  const setRoles = (role: string | null) => {
    const newRoles = role ? (roles.includes(role) ? roles.filter((r) => r !== role) : [...roles, role]) : null;

    const newParams = removeEmptyArray(cleanObject({ ...params, roles: newRoles }));

    setParams(newParams);
  };

  return { roles, setRoles };
}

export function useSearch() {
  const { search, setParams, ...params } = useAllFilters();

  const setSearch = (s: string | null) => {
    const newParams = cleanObject({ ...params, search: s?.length ? s : null });

    setParams(newParams);
  };

  return { search, setSearch };
}

export function useFilteredUser() {
  const currentPage = useAtomValue(CurrentPage);

  const slicedUsers = useAtomCallback(
    useCallback(
      (get) => {
        const finalRegistry = get(FinalRegistry);

        if (currentPage === null) {
          return finalRegistry;
        }

        return finalRegistry.filter((_, i) => i >= (currentPage - 1) * max_count && i < currentPage * (max_count * 1));
      },
      [currentPage],
    ),
  );

  return slicedUsers();
}
