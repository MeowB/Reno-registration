import db from "../db/db.js";

export function resetDatabase() {
	db.serialize(() => {
		db.run('PRAGMA foreign_keys = OFF');

		db.run('DROP TABLE IF EXISTS agent_profiles');
		db.run('DROP TABLE IF EXISTS merchant_profiles');
		db.run('DROP TABLE IF EXISTS users');

		db.run('PRAGMA foreign_keys = ON');

		// Recreate tables
		db.run(`
		CREATE TABLE IF NOT EXISTS users (
		  id INTEGER PRIMARY KEY AUTOINCREMENT,
		  email TEXT NOT NULL UNIQUE,
		  password TEXT NOT NULL,
		  role TEXT NOT NULL CHECK(role IN ('merchant', 'agent'))
		)
	  `);
		db.run(`
		CREATE TABLE IF NOT EXISTS merchant_profiles (
		  user_id INTEGER PRIMARY KEY,
		  first_name TEXT NOT NULL,
		  company_name TEXT,
		  business_email TEXT NOT NULL,
		  industry TEXT,
		  phone_number TEXT,
		  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
		)
	  `);
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

		console.log('Database has been reset (hard reset).');
	});
}

export function cleanDatabase() {
	db.serialize(() => {
	  db.run('DELETE FROM agent_profiles');
	  db.run('DELETE FROM merchant_profiles');
	  db.run('DELETE FROM users', (err) => {
		if (err) {
		  console.error('Error cleaning users table:', err.message);
		} else {
		  console.log('Database cleaned (soft reset).');
		}
	  });
	});
  }
  