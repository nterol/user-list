import { type SpringValue, a } from '@react-spring/web';

import s from './tooltip.module.css';

type TooltipProps = {
  spring: {
    opacity: SpringValue<number>;
    y: SpringValue<number>;
  };
  children: React.ReactNode;
};

export function Tooltip({ children, spring }: TooltipProps) {
  return (
    <a.div style={spring} className={s.tooltip}>
      {children}
    </a.div>
  );
}
