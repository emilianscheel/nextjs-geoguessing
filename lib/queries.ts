import { openDB } from "./db";
import { Room, Result, Participant } from "./types";

export const getRooms = async () => {
    const db = await openDB();
    return db.get("SELECT * FROM rooms") as Promise<Room[]>;
};

export const getParticipants = async () => {
    const db = await openDB();
    return db.get("SELECT * FROM participants") as Promise<Participant[]>;
};

export const getResults = async () => {
    const db = await openDB();
    return db.get("SELECT * FROM results") as Promise<Result[]>;
};

export const getRoom = async (roomId: string) => {
    const db = await openDB();
    return db.get("SELECT * FROM rooms WHERE id = ?", roomId) as Promise<Room>;
};

export const getParticipant = async (userId: string) => {
    const db = await openDB();
    return db.get(
        "SELECT * FROM participants WHERE id = ?",
        userId,
    ) as Promise<Participant>;
};

export const getResult = async (userId: string) => {
    const db = await openDB();
    return db.get(
        "SELECT * FROM results WHERE id = ?",
        userId,
    ) as Promise<Result>;
};

export const submitResult = async (
    userId: string,
    roomId: string,
    distance: string,
) => {
    const db = await openDB();
    await db.run(
        "INSERT INTO results (userId, roomId, distance) VALUES (?, ?, ?)",
        userId,
        roomId,
        distance,
    );
};

export const joinRoom = async (userId: string, roomId: string) => {
    const db = await openDB();

    const existingRoom = await getRoom(roomId);
    if (!existingRoom) {
        await db.run("INSERT INTO rooms (id) VALUES (?)", roomId);
        console.log("New Room: ", roomId);
    }

    const existingParticipant = await getParticipant(userId);
    if (!existingParticipant) {
        await db.run(
            "INSERT INTO participants (id, name, roomId) VALUES (?, ?, ?)",
            userId,
            "Participant " + userId,
            roomId,
        );
        console.log("New Participant: ", userId);
    }

    await db.run(
        "UPDATE participants SET roomId = ? WHERE id = ?",
        roomId,
        userId,
    );

    return { message: "User joined Room" };
};
