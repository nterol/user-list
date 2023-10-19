import { atom } from 'jotai';
import { atomFamily, selectAtom } from 'jotai/utils';

import { type User } from '@/utils/schema';

export const UserFamily = atomFamily(() => atom<User | null>(null));
export const UserRegistry = atom<User['id'][]>([]);

export const FilterRegistry = atom<User['id'][] | null>(null);

export const SetFilterRegistry = atom(
  (get) => get(FilterRegistry),
  (get, set, args: string[] | null) => {
    if (args === null) return set(FilterRegistry, null);

    const roles = new Set(args);
    const allUsers = get(AllUsers);
    const filtered = allUsers
      .filter((user) => {
        let filter = false;
        user?.groups.forEach((group) => {
          if (roles.has(group)) {
            filter = true;
          }
        });
        return filter;
      })
      .map((user) => user?.id)
      .filter((e): e is string => !!e);
    return set(FilterRegistry, filtered);
  },
);

export const SearchRegistry = atom<User['id'][] | null>(null);
export const SetUserFamily = atom(
  () => {},
  (_, set, data: User[]) => {
    set(UserRegistry, [...new Set(data.map(({ id }) => id))]);
    data.forEach((user) => {
      set(UserFamily(user.id), user);
    });
  },
);

export const FinalRegistry = atom((get) => {
  const searchRegistry = get(SearchRegistry);
  const filterRegistry = get(FilterRegistry);
  const userRegistry = get(UserRegistry);

  if (!filterRegistry) return searchRegistry ?? userRegistry;
  const filterSet = new Set(filterRegistry);
  return (searchRegistry ?? userRegistry).filter((id) => filterSet.has(id));
});

export const AllUsers = atom((get) => {
  const register = get(UserRegistry);
  return register.map((id) => get(UserFamily(id)));
});

export const FilteredUser = atom((get) => {
  const searchRegister = get(SearchRegistry);
  return searchRegister?.map((id) => get(UserFamily(id))) ?? null;
});

export const UserLength = atom((get) => get(FinalRegistry).length);

export const UserTeam = selectAtom(AllUsers, (allUsers) =>
  [...new Set(allUsers.flatMap((user) => user?.groups))].filter((r): r is 'QA Tester' | 'Manager' | 'Intern' => !!r),
);
