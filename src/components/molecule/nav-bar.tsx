import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

import { MoreIcon } from '../icons/more';

import { ArrowButton, NavButton } from '@/components/atom/navigation';
import { PageTotal } from '@/store/page';

type NavProps = {
  currentPage: number;
  setNavigation: (n: number) => void;
};

const nav_max_length = 5;

export function NavBar({ currentPage, setNavigation }: NavProps) {
  const pageTotal = useAtomValue(PageTotal);

  const handlePrevious = () => {
    setNavigation(currentPage - 1);
  };
  const handleGoToPage = (n: number) => setNavigation(n);
  const handleNext = () => setNavigation(currentPage + 1);

  const isTooLong = pageTotal > nav_max_length;

  const pagesVisible = useMemo(() => {
    if (isTooLong) {
      const middlePage = Math.floor(pageTotal / 2) + currentPage - 1; // this can be improved
      return Array.from({ length: nav_max_length }, (_, i) =>
        (i <= 1 ? i + currentPage : i >= nav_max_length - 2) ? pageTotal - (nav_max_length - (i + 1)) : middlePage,
      );
    }
    return Array.from({ length: pageTotal }, (_, i) => i + 1);
  }, [currentPage, isTooLong, pageTotal]); // not sure useMemo  actually usefull

  return (
    <div className="flex items-center">
      <ArrowButton side="previous" disabled={currentPage === 1} handleClick={handlePrevious} />
      {pagesVisible.map((pageValue, i) => (
        <NavButton
          key={pageValue}
          isCurrent={pageValue === currentPage}
          setNavigation={handleGoToPage}
          pageValue={pageValue}
        >
          {isTooLong && i === 2 ? <MoreIcon classes="w-[16px] h-[16px]" /> : pageValue}
        </NavButton>
      ))}
      <ArrowButton side="next" disabled={currentPage >= pageTotal} handleClick={handleNext} />
    </div>
  );
}
