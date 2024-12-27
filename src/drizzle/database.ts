import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";
import "dotenv/config";

if (!process.env.DB_STRING) {
  throw new Error("invalid db connection string!");
}

const client = postgres(process.env.DB_STRING as string, {
  ssl: process.env.NODE_ENV === "production",
});

export const db = drizzle(client, {
  schema,
  logger: true,
});
