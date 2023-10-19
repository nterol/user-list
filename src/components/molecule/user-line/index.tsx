import { useAtomValue } from 'jotai';

import { Access } from '../access';

import { FormatStamp } from '@/components/atom/format-stamp';
import { Pill } from '@/components/atom/pill';
import { UserHolder } from '@/components/atom/user-holder';
import { MoreIcon } from '@/components/icons/more';
import { TeamIcon } from '@/components/icons/team';
import { UserFamily } from '@/store/users';
import { type User } from '@/utils/schema';

type UserLineProps = {
  id: User['id'];
};

export function UserLine({ id }: UserLineProps) {
  const user = useAtomValue(UserFamily(id));

  return (
    <article className="grid grid-cols-12 grid-rows-1 gap-1 border-b border-b-primary px-4 py-2 last:border-none bg-white">
      <UserHolder name={user?.name ?? ''} email={user?.email ?? ''} avatar={user?.avatar ?? ''} />
      <div className="col-span-2 flex items-center">
        {user?.groups.length ? <Pill icon={TeamIcon}>{user?.groups[0]}</Pill> : null}
      </div>
      <div className="col-span-3 flex items-center">
        <Access access={user?.access ?? null} />
      </div>
      <div className="col-span-2 flex items-center">
        <FormatStamp timeStamp={user?.last_login ?? null} />
      </div>
      <button>
        <MoreIcon classes="w-[16px] h-[16px]" />
      </button>
    </article>
  );
}
