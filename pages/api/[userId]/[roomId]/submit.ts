import { NextApiRequest, NextApiResponse } from "next";
import { getResults, submitResult } from "../../../../lib/queries";
import { results } from "./join";

type ResponseData = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    const { userId, roomId } = req.query as { userId: string; roomId: string };
    const { distance } = req.body;

    submitResult(userId, roomId, distance);

    const results = getResults();
    console.log("results", results);

    res.status(200).json({ message: "Result submitted" });
}
