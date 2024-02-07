import { connectToDatabase } from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { itemID } = req.body;

    if (!itemID) {
        return res.status(400).json({ message: itemID });
    }

    try {

        const client = await connectToDatabase();

        const db = client.db();

        const albumCollection = db.collection("albums");

        const result = await albumCollection.deleteOne({ _id: itemID });

        return res.status(200).json({ message: "Album deleted" });
    } catch (error) {
        console.error("Error deleting album:", error);
        return res.status(500).json({ message: "Error deleting album" });
    }
}

export default handler;