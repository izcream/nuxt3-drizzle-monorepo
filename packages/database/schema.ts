import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable('users', {
	id: integer('id').primaryKey(),
	username: text('username').unique().notNull(),
	password: text('password').notNull(),
	name: text('name').notNull()
})
