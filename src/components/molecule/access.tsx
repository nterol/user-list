import { useSpring } from '@react-spring/web';

import { Tooltip } from '../atom/tooltip';

import { type User } from '@/utils/schema';

// this needs to be renamed
export function Access({ access }: { access: User['access'] | null }) {
  const accessNb = access ? access.length : 0;
  const [spring, api] = useSpring(() => ({ opacity: 0, y: 0 }));
  return (
    <p
      className="text-text-secondary text-xs absolute cursor-pointer"
      onMouseEnter={() => (access?.length ? api.start({ opacity: 1, y: -45 + access?.length * -10 }) : null)}
      onMouseLeave={() => api.start({ opacity: 0, y: 0 })}
    >
      {accessNb === 0 ? 'No access' : `On ${accessNb} product${accessNb > 1 ? 's' : ''}`}
      {access?.length ? (
        <Tooltip spring={spring}>
          {access.map((a) => (
            <span key={a} className="whitespace-nowrap">
              {a}
            </span>
          ))}
        </Tooltip>
      ) : null}
    </p>
  );
}
