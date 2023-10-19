import { useAtom, useAtomValue } from 'jotai';

import { NavBar } from '@/components/molecule/nav-bar';
import { CurrentPage, PageTotal } from '@/store/page';

export function Pagination() {
  const [page, setPage] = useAtom(CurrentPage);

  const totalPage = useAtomValue(PageTotal);

  if (totalPage === 1 || page === null) return null;

  return (
    <section className="flex items-center justify-center bg-white p-4">
      <NavBar setNavigation={setPage} currentPage={page} />
    </section>
  );
}
