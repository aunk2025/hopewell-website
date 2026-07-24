import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

// Prisma's config file disables its own automatic .env loading, so load
// .env.local explicitly (Next.js's convention) to get DATABASE_URL etc.
loadEnv({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
});
