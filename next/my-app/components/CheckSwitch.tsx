'use client';

import { useId, useReducer } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

type Props = {
  type?: 'switch' | 'check';
  name?: string;
  label?: string;
  checked?: boolean;
  setCheckedAction?: (checked: boolean) => void;
  variant?: 'default' | 'destructive' | 'secondary' | 'muted';
};

const dynamicCss = [
  'bg-desructive',
  'text-destructive-foreground',
  'bg-destructive',
];

const setClassnames = (variant: Props['variant'] | 'primary') => [
  `border-${variant}`,
  `bg-${variant}`,
  `text-${variant}-foreground`,
  `bg-${variant}`,
];

const CheckVaraiant = {
  default: setClassnames('primary'),
  destructive: setClassnames('destructive'),
  secondary: setClassnames('secondary'),
  muted: setClassnames('muted'),
};

export default function CheckSwitch({
  type = 'check',
  name,
  label,
  checked,
  setCheckedAction,
  variant = 'default',
}: Props) {
  const checkId = useId();
  const [isCheck, toggleCheck] = useReducer((p) => !p, !!checked);

  const Compo = type === 'switch' ? Switch : Checkbox;

  const css = CheckVaraiant[variant];

  return (
    <Label htmlFor={checkId} className="cursor-pointer">
      <Compo
        id={checkId}
        name={name}
        checked={isCheck}
        onClick={() => {
          toggleCheck();
          if (setCheckedAction) setCheckedAction(!isCheck);
        }}
        className={cn({ ...css.map((cs) => `data-[state=checked]: ${cs}`) })}
      />
      {label} - {isCheck ? 'Checked' : 'UnChecked'}
      {!!name && (
        <input type="hidden" name={name} defaultValue={isCheck ? 'on' : ''} />
      )}
    </Label>
  );
}
