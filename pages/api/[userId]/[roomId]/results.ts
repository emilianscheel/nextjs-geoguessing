import { NextApiRequest, NextApiResponse } from "next";
import { getResults } from "../../../../lib/queries";
import { Result } from "../../../../lib/types";

type ResponseData = Result[];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    const { userId, roomId } = req.query;

    const results = await getResults();

    const filteredResults = results?.filter(
        (result) => result.userId === userId && result.roomId === roomId,
    );

    res.status(200).json(filteredResults);
}
