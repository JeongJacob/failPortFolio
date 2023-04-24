import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";

export default async function nerdNestProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("nerdnest").find().toArray();
  if (req.method === "GET") {
    res.status(200).json(result);
  }
}
