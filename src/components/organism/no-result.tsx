import { NoUserIcon } from '../icons/no-user';

export function NoResult() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-[300px] w-full bg-white text-text-secondary">
      <NoUserIcon />
      <h3 className="font-semibold text-lg">No result for this research</h3>
      <p className="text-primary">Please refine your filter to find a matching user</p>
    </div>
  );
}
