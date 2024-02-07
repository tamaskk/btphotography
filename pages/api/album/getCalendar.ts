import { connectToDatabase } from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const client = await connectToDatabase();

    const db = client.db();

    const calendar = db.collection("calendar");

    const calendarItems = await calendar.find({}).toArray();

    res.status(200).json(calendarItems);
  } catch (error) {
    res.status(500).json({ message: "Error getting calendar items" });
  }
};

export default handler;
