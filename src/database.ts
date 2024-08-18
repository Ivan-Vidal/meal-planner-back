import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

export async function initializeDb(): Promise<Database> {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      day TEXT NOT NULL,
      mealType TEXT NOT NULL,
      recipes TEXT,
      portions INTEGER NOT NULL,
      notes TEXT
    )
  `);

  return db;
}
