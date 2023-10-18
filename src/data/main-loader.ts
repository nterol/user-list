import { User, userList } from '@/utils/schema';

const endpoint = 'https://6511a930b8c6ce52b394dc63.mockapi.io/api/users/users';

export async function mainLoader() {
  try {
    const raw = await fetch(endpoint);
    const res = await raw.json();
    userList.parse(res);

    return res as User[];
  } catch (e) {
    console.log('ERROR', e);
  }
}
