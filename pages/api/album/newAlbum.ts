import { connectToDatabase } from "@/db/db";
import { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { albumData } = req.body;

    if (!albumData) {
        return res.status(400).json({ message: "Missing album data" });
    }

    try {

        const client = await connectToDatabase();

        const db = client.db();

        const albumCollection = db.collection("albums");

        const result = await albumCollection.insertOne(albumData);

        return res.status(201).json({ message: "Album created" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating album" });
    }
}

export default handler;