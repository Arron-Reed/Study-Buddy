import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_cGzBd8pkmP5o@ep-little-hat-agg6in9h-pooler.c-2.eu-central-1.aws.neon.tech/AI-Study-Buddy?sslmode=require&channel_binding=require",
  },
});
