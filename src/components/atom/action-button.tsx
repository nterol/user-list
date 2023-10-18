import { BaseIconProp } from '../icons/types';

type ActionButtonProps = {
  icon: React.ComponentType<BaseIconProp>;
  children: React.ReactNode;
  level?: 'primary' | 'secondary';
  handleClick?: () => void;
};

export function ActionButton({ icon: Icon, children, level = 'primary', handleClick }: ActionButtonProps) {
  return (
    <button
      data-level={level}
      onClick={handleClick}
      className="py-2 px-4 border rounded-md flex items-center gap-2 data-[level=primary]:bg-white data-[level=primary]:border-primary data-[level=secondary]:bg-secondary data-[level=secondary]:border-secondary-dark data-[level=secondary]:text-white cursor-pointer data-[level=secondary]:hover:bg-secondary-darker data-[level=primary]:hover:bg-primary"
    >
      <Icon classes="w-[16px] h-[16px]" /> <span className="whitespace-nowrap text-sm">{children}</span>
    </button>
  );
}
