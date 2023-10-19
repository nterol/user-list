import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useMemo } from 'react';

import { CurrentPage, PageTotal } from '@/store/page';
import { UserLength } from '@/store/users';

export const max_count = 15;

export function usePagination() {
  const [totalPage, setTotalPage] = useAtom(PageTotal);
  const [page, setPage] = useAtom(CurrentPage);

  const userCount = useAtomValue(UserLength);

  const totalPages = useMemo(() => Math.ceil(userCount / max_count), [userCount]);

  useEffect(() => {
    if (userCount === 0) return;
    setTotalPage(totalPages);
  }, [setPage, setTotalPage, totalPages, userCount]);

  useEffect(() => {
    if (totalPage <= 1 && page !== null) {
      setPage(null);
    }
  }, [page, setPage, totalPage]);

  useEffect(() => {
    if (totalPage > 1 && !page) {
      setPage(1);
    }
  }, [page, setPage, totalPage]);
}
