'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/lib/auth';

export type Provider = 'google' | 'github' | 'credentials';

export const logout = async () => {
  await signOut({ redirectTo: '/sign' });
};

// export type ValidError<T> = {
//   error:
//   data:
// }

export type ValidError = {
  error: string;
};

export const login = async (provider: Provider, formData: FormData) => {
  const redirectTo = formData.get('redirectTo') as string;
  const email = formData.get('email');
  const passwd = formData.get('passwd');
  try {
    await signIn(provider, { redirect: false, email, passwd });
  } catch (err) {
    console.log('🚀 ~ login ~ err:', err, err instanceof AuthError);
    return { error: JSON.stringify(err) };
  }
};

export const loginEmail = async (
  formData: FormData,
): Promise<ValidError | undefined> => {
  const redirectTo = formData.get('redirectTo') as string;
  login('credentials', formData);
};

export const loginGoogle = async (formData: FormData) =>
  login('google', formData);

export const loginGithub = async (formData: FormData) =>
  login('github', formData);
