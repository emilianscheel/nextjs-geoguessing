import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Function to open the SQLite database
export async function openDB(): Promise<Database> {
    return open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    });
}
