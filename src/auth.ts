import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { compare } from 'bcryptjs';
import { z } from 'zod';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await db.query.users.findFirst({
            where: eq(users.email, email),
          });

          if (!user) return null;

          const passwordsMatch = await compare(password, user.password);

          if (passwordsMatch) {
             // Return user object compatible with NextAuth
             // We cast to any because id is uuid but NextAuth expects string (which it is)
             return { id: user.id, name: user.name, email: user.email }; 
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.id = user.id;
        }
        return token;
    },
    async session({ session, token }) {
        if (token && session.user) {
            session.user.id = token.id as string;
        }
        return session;
    }
  },
  secret: process.env.AUTH_SECRET,
});
