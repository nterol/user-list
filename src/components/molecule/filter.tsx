import { a, useSpring } from '@react-spring/web';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { Badge } from '../atom/badge';
import { EraserIcon } from '../icons/eraser';

import { ChevronDownIcon } from '@/components/icons/ChevronDown';
import { TeamIcon } from '@/components/icons/team';
import { useRole } from '@/hooks/useFilter';
import { SetFilterRegistry, UserTeam } from '@/store/users';

type CheckSlotProps = {
  children: React.ReactNode;
  isActive: boolean;
  handleCheck: () => void;
};

function CheckSlot({ children, isActive, handleCheck }: CheckSlotProps) {
  return (
    <button
      role="button"
      onClick={handleCheck}
      data-active={isActive}
      className="flex items-center px-3 py-2 gap-3 bg-white hover:bg-secondary-light data-[active=true]:bg-secondary-light"
    >
      <input
        className="checked:accent-secondary checked:text-white"
        type="checkbox"
        defaultChecked={false}
        checked={isActive}
      />
      <p className="font-semibold">{children}</p>
    </button>
  );
}

export function Filter() {
  const [open, setOpen] = useState(false);
  const userTeams = useAtomValue(UserTeam);
  const setFilterRegistry = useSetAtom(SetFilterRegistry);

  const { roles, setRoles } = useRole();

  const handleCheck = (t: string | null) => () => setRoles(t);

  const iconSpring = useSpring({ rotate: open ? 180 : 0 });
  const dropdownSpring = useSpring({ height: open ? 200 : -0, y: open ? 216 : 0 });

  useEffect(() => {
    setFilterRegistry(roles.length > 0 ? roles : null);
  }, [roles, setFilterRegistry]);

  return (
    <div className="relative border rounded-md bg-white border-primary flex items-center gap-2 px-2 hover:bg-primary">
      <button onClick={() => setOpen((o) => !o)} className="py-2 flex items-center gap-2 cursor-pointer ">
        <TeamIcon classes="h-[16px] w-[16px]" />
        <span className="text-semibold">Teams</span>
        <a.div style={iconSpring}>
          <ChevronDownIcon classes="h-[16px] w-[16px]" />
        </a.div>
      </button>
      {roles.length ? (
        <>
          <span className="text-sm text-primary">|</span>
          {roles.map((role) => (
            <Badge key={role}>{role}</Badge>
          ))}
        </>
      ) : null}
      <a.div
        onClick={(e) => e.stopPropagation()}
        data-active={open}
        style={dropdownSpring}
        className="left-0 w-44 absolute border border-primary bottom-0 overflow-hidden rounded-md bg-white z-10 data-[active=false]:border-none"
      >
        <div className="flex flex-col">
          <CheckSlot handleCheck={handleCheck(null)} isActive={!roles || roles.length === 0}>
            All ({userTeams.length})
          </CheckSlot>
          {userTeams.map((team) => (
            <CheckSlot isActive={roles?.includes(team) ?? false} handleCheck={handleCheck(team)} key={team}>
              {team}
            </CheckSlot>
          ))}
          <button className="absolute bottom-0 flex flex-col justify-center items-center w-full py-2">
            <EraserIcon classes="h-[16px] w-[16px]" />
          </button>
        </div>
      </a.div>
    </div>
  );
}
