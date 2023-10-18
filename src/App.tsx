import { Header } from '@/components/header';

import { ActionHeaderSection } from '@/components/organism/action-header-section';
import { FilterSection } from './components/organism/filter-section';
import { Outlet } from 'react-router-dom';
import { useSyncUser } from './hooks/useSyncUser';
import { Labels } from './components/molecule/labels';

function App() {
  useSyncUser();
  return (
    <>
      <Header />
      <main className="max-w-[80vw] mx-auto flex flex-col gap-8 pt-16">
        <ActionHeaderSection />
        <FilterSection />
        <section className="flex flex-col border border-primary rounded-md">
          <Labels />
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
