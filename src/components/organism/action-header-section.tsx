import { useAtomValue } from 'jotai';

import { ActionButton } from '../atom/action-button';
import { FileUpIcon } from '../icons/file-up';
import { PlusIcon } from '../icons/plus';

import { UserLength } from '@/store/users';

export function ActionHeaderSection() {
  const userCount = useAtomValue(UserLength);
  return (
    <section className="w-full flex justify-between items-center">
      <h1 className="font-semibold text-3xl">
        User{userCount > 1 ? 's' : ''} ({userCount})
      </h1>
      <div className="flex items-center gap-2">
        <ActionButton level="primary" icon={FileUpIcon}>
          Export CSV
        </ActionButton>
        <ActionButton level="secondary" icon={PlusIcon}>
          New User
        </ActionButton>
      </div>
    </section>
  );
}
