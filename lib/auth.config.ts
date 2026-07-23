import type { NextAuthConfig } from "next-auth";

/*
 * Edge-safe config: no providers, no Node-only deps (prisma/bcryptjs).
 * Imported by middleware.ts (Edge runtime) and extended by lib/auth.ts (Node runtime).
 */
export const authConfig = {
  providers: [],
  pages: {
    signIn: "/admin/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as { role?: string }).role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) (session.user as { role?: string }).role = token.role as string;
      return session;
    },
  },
} satisfies NextAuthConfig;
