export type Participant = {
    id: string;
    name: string;
    roomId: string;
};

export type Room = {
    id: string;
};

export type Result = {
    userId: string;
    roomId: string;
    distance: number;
};
