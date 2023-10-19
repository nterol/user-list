import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { SetUserFamily } from '@/store/users';
import { User } from '@/utils/schema';

export function useSyncUser() {
  const setUsers = useSetAtom(SetUserFamily);
  const data = useLoaderData() as User[];

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);
}
