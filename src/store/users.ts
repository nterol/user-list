import { User } from '@/utils/schema';
import { atom } from 'jotai';
import { atomFamily, selectAtom } from 'jotai/utils';

export const UserFamily = atomFamily(() => atom<User | null>(null));
export const UserRegistry = atom<User['id'][]>([]);

export const SetUserFamily = atom(
  () => {},
  (_, set, data: User[]) => {
    set(
      UserRegistry,
      data.map(({ id }) => id),
    );
    data.forEach((user) => {
      set(UserFamily(user.id), user);
    });
  },
);

export const AllUsers = atom((get) => {
  const register = get(UserRegistry);
  const allUsers = register.map((id) => get(UserFamily(id)));
  return allUsers;
});

export const UserLength = selectAtom(AllUsers, (allUsers) => allUsers.length);
