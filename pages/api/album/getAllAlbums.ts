import { connectToDatabase } from "@/db/db";
import { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const client = await connectToDatabase();

        const db = client.db();

        const albumCollection = db.collection("albums");

        const albums = await albumCollection.find({}).toArray();

        return res.status(200).json(albums);
    } catch (error) {
        return res.status(500).json({ message: "Error getting albums" });
    }
}

export default handler;