import { NextApiRequest, NextApiResponse } from "next";
import { results } from "./join";

type ResponseData = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    const { userId, roomId } = req.query;
    const { distance } = req.body;

    const newResult = {
        userId: userId as string,
        roomId: roomId as string,
        distance: parseInt(distance as string),
    };

    results.push(newResult);

    console.log("newResult", newResult);

    console.log("results", results);

    res.status(200).json({ message: "Room is available" });
}
