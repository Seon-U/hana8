import type { HTMLInputTypeAttribute } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  classname?: string;
};

export default function TitleInput({ placeholder, type, classname }: Props) {
  return (
    <input
      type={type}
      className={cn(
        'items-center rounded-md border border-gray-400 p-2',
        classname,
      )}
      placeholder={placeholder}
    />
  );
}
