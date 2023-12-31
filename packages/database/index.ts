import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
const client = new Database(process.env.DATABASE_URL!)
const db = drizzle(client)

export * from './schema'
export { client, db }
