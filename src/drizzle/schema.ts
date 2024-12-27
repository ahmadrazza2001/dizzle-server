import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const TodoTable = pgTable("todo", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  status: boolean("status").default(false),
  createdat: timestamp("createdat").defaultNow(),
  updatedat: timestamp("updatedat").defaultNow(),
});
