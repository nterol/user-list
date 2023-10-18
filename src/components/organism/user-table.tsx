import { UserRegistry } from '@/store/users';
import { useAtomValue } from 'jotai';
//import { useParams } from 'react-router-dom';
import { UserLine } from '../molecule/user-line';

export function UserTable() {
  const registry = useAtomValue(UserRegistry);
  //const params = useParams();

  return (
    <>
      {registry.map((id) => (
        <UserLine id={id} />
      ))}
    </>
  );
}
