import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { client, db, userTable } from './index'
async function main() {
	migrate(db, { migrationsFolder: '.drizzle' })
	await db.insert(userTable).values({
		username: 'user',
		password: 'password',
		name: 'user001'
	})
}
main()
	.catch(console.error)
	.finally(() => client.close())
