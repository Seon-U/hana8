'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginEmail, type ValidError } from '@/lib/sign.action';

type Props = {
  redirectTo: string;
};

export default function SignForm({ redirectTo = '/hello' }: Props) {
  const [validError, login, isPending] = useActionState(
    async (_: ValidError | undefined, formData: FormData) => {
      const ret = await loginEmail(formData);
      return ret;
    },
    undefined,
  );

  return (
    <form action={loginEmail} className="grid place-items-center">
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <div>
        <Label htmlFor="email">email </Label>
        <Input
          name="email"
          type="email"
          placeholder="user@email.com"
          defaultValue={'abs@gmail.com'}
        />
      </div>

      <div>
        <Label htmlFor="passwd"> password </Label>
        <Input
          id="passwd"
          name="passwd"
          type="password"
          placeholder="password..."
          className="w-full"
        />
      </div>
      <div className="flex justify-center gap-5">
        <Button type="reset"> Cancel</Button>
        <Button type="submit" disabled={isPending}>
          login {isPending && '...'}
        </Button>
      </div>
    </form>
  );
}
