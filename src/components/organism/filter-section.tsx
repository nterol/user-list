import { Filter } from '@/components/molecule/filter';
import { Search } from '@/components/molecule/search';

export function FilterSection() {
  return (
    <section className="flex items-center gap-1">
      <Search />
      <Filter />
    </section>
  );
}
