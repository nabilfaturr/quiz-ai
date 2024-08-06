import {
  integer,
  sqliteTable,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import type { AdapterAccountType } from "next-auth/adapters";
import {nanoid} from "nanoid"

export const teachersTable = sqliteTable("teacher", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull(),
  name: text("name"),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  password: text("password").notNull(),
  image: text("image"),
});

export const studentsTable = sqliteTable("student", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
});

export const classTable = sqliteTable("class", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  classCode: text("classCode").notNull().$defaultFn(() => nanoid(6)),
  name: text("name").notNull(),
  subject: text("subject").notNull(),
  level: text("level").notNull(),
  description: text("description"),
});

export const studentClassTable = sqliteTable('student_class', {
    studentId: text('student_id').notNull().references(() => studentsTable.id, { onDelete: 'cascade' }),
    classId: text('class_id').notNull().references(() => classTable.id, { onDelete: 'cascade' }),
    // using a compound key to join the two tables
  }, (table) => ({
    pk: primaryKey({columns: [table.studentId, table.classId]}) // pk is a compound key
  }));

export const accountsTable = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => studentsTable.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);
