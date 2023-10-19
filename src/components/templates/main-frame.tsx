import { Header } from '../molecule/header';
import { ActionHeaderSection } from '../organism/action-header-section';

type MainFrameProps = {
  children: React.ReactNode;
};

export function MainFrame({ children }: MainFrameProps) {
  return (
    <>
      <Header />
      <main className="max-w-[80vw] mx-auto flex flex-col gap-8 pt-16">
        <ActionHeaderSection />

        {children}
      </main>
    </>
  );
}
