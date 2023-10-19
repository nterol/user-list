export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[2px] py border rounded-md flex items-center gap-2  bg-secondary-light border-secondary cursor-pointer">
      <span>{children}</span>
    </div>
  );
}
