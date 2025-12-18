import { type PropsWithChildren } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';

type Props = {
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
};

export default function Alerter({
  title,
  description,
  okText = 'ok',
  cancelText = 'cancel',
  children,
}: PropsWithChildren<Props>) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className=''>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {!!description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='w-32'>{cancelText}</AlertDialogCancel>
          <AlertDialogAction className='w-[50%]'>{okText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
