import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string;
};

type;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    const { userId, roomId } = req.query;

    const existingRoom = results;

    res.status(200).json({ message: "Room is available" });
}
