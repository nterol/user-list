import { BaseIconProp } from '../icons/types';

type PillProps = {
  icon: React.ComponentType<BaseIconProp>;
  children: React.ReactNode;
  //   level?: 'primary' | 'secondary';
};

export function Pill({ icon: Icon, children }: PillProps) {
  return (
    <span className="flex border border-primary rounded-full py-2 px-4 items-center gap-2 w-fit">
      <Icon classes="w-[16px] h-[16px]" />
      <span className="whitespace-nowrap font-suisse font-semibold text-xs">{children}</span>
    </span>
  );
}
