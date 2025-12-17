import { useId, type ChangeEvent, type RefObject } from 'react';

type Props = {
  type?: string;
  label?: string;
  ref?: RefObject<HTMLInputElement | null>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  defaultValue?: string | number;
  className?: string;
  autoComplete?: 'off' | '' | 'email' | 'tel';
  required?: boolean;
};

export default function LabelInput({
  type,
  label,
  ref,
  onChange,
  placeholder,
  defaultValue,
  className,
  autoComplete,
  required = false,
}: Props) {
  const inputId = useId();
  // console.log('🚀 ~ inputId:', inputId);

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className='text-sm text-gray-600'>
          {label}
        </label>
      )}
      <input
        type={type || 'text'}
        id={inputId}
        ref={ref}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${className}`}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
}
