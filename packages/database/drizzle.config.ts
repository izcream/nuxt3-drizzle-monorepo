import { defineConfig } from 'drizzle-kit'
export default defineConfig({
	schema: './schema.ts',
	driver: 'better-sqlite',
	out: '.drizzle',
	dbCredentials: {
		url: process.env.DATABASE_URL!
	},
	verbose: true,
	strict: true
})
