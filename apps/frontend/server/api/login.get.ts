import { db, userTable } from 'database'

export default defineEventHandler(async () => {
	const users = await db.select().from(userTable)
	return { users }
})
