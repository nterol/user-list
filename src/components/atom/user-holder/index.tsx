import { Avatar } from '../avatar';

import s from './user-holder.module.css';

import { type User } from '@/utils/schema';

type UserHolderProps = Pick<User, 'name' | 'email' | 'avatar'>;

export const UserHolder = ({ name, email, avatar }: UserHolderProps) => (
  <section className={s.user_holder}>
    <Avatar name={name} avatar={avatar} />
    <p className="font-semibold">{name}</p>
    <p className="text-primary">{email}</p>
  </section>
);
