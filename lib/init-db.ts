import { openDB } from "./db";

async function initDB() {
    const db = await openDB();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS rooms (
        id TEXT PRIMARY KEY,
        value TEXT
        )
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS participants (
            id TEXT PRIMARY KEY,
            name TEXT,
            roomId TEXT
        )
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId TEXT,
            roomId TEXT,
            distance REAL
        )
    `);

    console.log("Database schema initialized");
}

initDB().catch(console.error);
