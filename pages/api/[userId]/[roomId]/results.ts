import { NextApiRequest, NextApiResponse } from "next";
import { results, Result } from "./join";

type ResponseData = Result[];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    const { userId, roomId } = req.query;

    const filteredResults = results.filter(
        (result) => result.userId === userId && result.roomId === roomId,
    );

    res.status(200).json(filteredResults);
}
