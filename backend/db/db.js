import sqlite3 from 'sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const db = new sqlite3.Database(path.resolve(__dirname, 'database.sqlite'), (err) => {
	if (err) {
		console.error('Failed to connect to database: ', err.message)
	} else {
		console.log('Connected to SQLite database.')
	}
})

// Enable foreign key constraints
db.run('PRAGMA foreign_keys = ON');

// Users table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('merchant', 'agent'))
  )
`);

// Merchant profiles table
db.run(`
  CREATE TABLE IF NOT EXISTS merchant_profiles (
    user_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    company_location TEXT,
    business_email TEXT NOT NULL,
    industry TEXT,
    phone_number TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

// Agent profiles table
db.run(`
  CREATE TABLE IF NOT EXISTS agent_profiles (
    user_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT,
    region TEXT,
    phone_number TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

export default db