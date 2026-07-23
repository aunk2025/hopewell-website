import path from "path";
import { defineConfig } from "prisma/config";

const dbPath = path.resolve(process.cwd(), "prisma", "dev.db");
const dbUrl  = `file:${dbPath}`;

// Make DATABASE_URL available to the schema
process.env.DATABASE_URL = dbUrl;

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: dbUrl,
  },
});
