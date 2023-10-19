import { Labels } from '../molecule/labels';
import { UserLine } from '../molecule/user-line';

import { NoResult } from './no-result';
import { Pagination } from './pagination';

import { useFilteredUser } from '@/hooks/useFilter';
import { usePagination } from '@/hooks/usePagination';
import { useSyncUser } from '@/hooks/useSyncUser';

export function UserTable() {
  usePagination();
  useSyncUser();

  const registry = useFilteredUser();

  return (
    <section className="relative flex flex-col border border-primary rounded-md bg-primary">
      <Labels />
      {registry.length > 0 ? registry.map((id) => <UserLine key={id} id={id} />) : <NoResult />}

      <Pagination />
    </section>
  );
}
