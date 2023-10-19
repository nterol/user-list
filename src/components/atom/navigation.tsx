import { NavigationArrowIcon } from '@/components/icons/navigation-arrow';

type ArrowButtonProps = {
  side: 'previous' | 'next';
  disabled: boolean;
  handleClick: () => void;
};

export function ArrowButton({ side, disabled, handleClick }: ArrowButtonProps) {
  return (
    <button
      data-nav={side}
      role="button"
      disabled={disabled}
      onClick={handleClick}
      className="cursor-pointer disabled:bg-primary disabled:cursor-not-allowed hover:bg-primary bg-white data-[nav=previous]:rounded-tl-md data-[nav=previous]:rounded-bl-md data-[nav=next]:rounded-tr-md data-[nav=next]:rounded-br-md border border-primary h-8 w-8 flex justify-center items-center"
    >
      <NavigationArrowIcon classes={`h-[16px] w-[16px] ${side === 'next' ? 'rotate-180' : ''}`} />
    </button>
  );
}

type NavButtonProps = {
  pageValue: number;
  setNavigation: (n: number) => void;
  isCurrent: boolean;
  children: React.ReactNode;
};

export function NavButton({ children, pageValue, setNavigation, isCurrent }: NavButtonProps) {
  const handleClick = () => setNavigation(pageValue);
  return (
    <button
      data-active={isCurrent}
      role="button"
      onClick={handleClick}
      className="bg-white data-[active=true]:bg-primary h-8 w-8 flex justify-center items-center"
    >
      {children}
    </button>
  );
}
