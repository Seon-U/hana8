import type { PropsWithChildren } from 'react';

type Prop = {
  onClick?: () => void;
  type?: 'reset' | 'submit';
  className?: string;
  disabled?: boolean;
};

export default function Button({
  onClick,
  type,
  className,
  disabled,
  children,
}: PropsWithChildren<Prop>) {
  return (
    <button
      type={type}
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
