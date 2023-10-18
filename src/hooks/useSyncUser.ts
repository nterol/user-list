import { useSetAtom } from 'jotai';

import { useEffect } from 'react';
import { SetUserFamily } from '@/store/users';
import { useLoaderData } from 'react-router-dom';
import { User } from '@/utils/schema';

export function useSyncUser() {
  const setUsers = useSetAtom(SetUserFamily);
  const data = useLoaderData() as User[];

  // This is until I choose between tanstack query or SSR
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);
}
