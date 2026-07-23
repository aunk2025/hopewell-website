import { PrismaClient } from "@prisma/client";
import path from "path";

// Resolve absolute path so the DB file is always found regardless of CWD
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = `file:${path.resolve(process.cwd(), "prisma", "dev.db")}`;
}

// Prevent multiple Prisma instances in development (Next.js hot reload)
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
