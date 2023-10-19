import s from './avatar.module.css';

import { type User } from '@/utils/schema';

type AvatarProps = Pick<User, 'name' | 'avatar'>;

export function Avatar({ name, avatar }: AvatarProps) {
  return (
    <div className="bg-mid-kapptigreen relative h-[24px] w-[24px] rounded-full flex justify-center items-center text-main">
      <span className="font-grotesk text-base font-bold">{name[0]}</span>
      <div style={{ '--avatar-url': `url(${avatar})` } as React.CSSProperties} className={s.avatar} />
    </div>
  );
}
