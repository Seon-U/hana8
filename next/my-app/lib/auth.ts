import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      name: 'Email & Password',
      credentials: {
        email: { label: 'Email', type: 'mail', placeholder: 'user@mail.com' },
        passwd: {
          label: 'password',
          type: 'password',
          placeholder: 'password...',
        },
      },
      async authorize(credentials) {
        console.log('🚀 ~ credentials:', credentials);
        const { email } = credentials;
        return { id: '1', email: email as string, name: 'HONG' };
      },
    }),
    Google,
    GitHub,
  ],
  callbacks: {
    async signIn({ profile, user }) {
      console.log('signIn - profile', profile);
      console.log('signIn - user', user);
      return true;
    },
    async jwt({ token, user, trigger }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  pages: {
    // signIn: '/sign',
    error: '/sign/error',
  },
  session: {
    strategy: 'jwt',
  },
  trustHost: true,
  jwt: { maxAge: 30 * 60 },
});
