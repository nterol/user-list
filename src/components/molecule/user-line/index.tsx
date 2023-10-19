import { useAtomValue } from 'jotai';

import s from './user-line.module.css';

import { Avatar } from '@/components/atom/avatar';
import { Pill } from '@/components/atom/pill';
import { MoreIcon } from '@/components/icons/more';
import { TeamIcon } from '@/components/icons/team';
import { UserFamily } from '@/store/users';
import { User } from '@/utils/schema';

type UserHolderProps = Pick<User, 'name' | 'email' | 'avatar'>;

const UserHolder = ({ name, email, avatar }: UserHolderProps) => (
  <section className={s.user_holder}>
    <Avatar name={name} avatar={avatar} />
    <p className="font-semibold">{name}</p>
    <p className="text-primary">{email}</p>
  </section>
);

type UserLineProps = {
  id: User['id'];
};

const defaultOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'Europe/Paris',
};

function FormatStamp({
  timeStamp,
  options = defaultOptions,
}: {
  timeStamp: number | null;
  options?: Intl.DateTimeFormatOptions;
}) {
  if (!timeStamp) return <p></p>;
  const formatedStamp = new Intl.DateTimeFormat('fr', options).format(new Date(timeStamp));
  return <p className="text-text-secondary text-xs">{formatedStamp}</p>;
}

function Access({ access }: { access: User['access'] | null }) {
  const accessNb = access ? access.length : 0;
  return (
    <p className="text-text-secondary text-xs">
      {accessNb === 0 ? 'No access' : `On ${accessNb} product${accessNb > 1 ? 's' : ''}`}
    </p>
  );
}

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
