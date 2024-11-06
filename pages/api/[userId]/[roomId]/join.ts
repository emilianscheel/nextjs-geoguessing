import { NextApiRequest, NextApiResponse } from "next";
import { joinRoom } from "../../../../lib/queries";

type ResponseData = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    const { userId, roomId } = req.query as { userId: string; roomId: string };

    await joinRoom(userId, roomId);

    res.status(200).json({ message: "User joined Room" });
}
