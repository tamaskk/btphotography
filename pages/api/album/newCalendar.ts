import { connectToDatabase } from '@/db/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { calendarData } = req.body;

    if (!calendarData) {
        return res.status(400).json({ message: "Missing calendar data" });
    }

    try {
        const client = await connectToDatabase();

        const db = client.db();

        const calendar = db.collection("calendar");

        const result = await calendar.insertOne( calendarData );

        return res.status(200).json({ message: "Date created" });

    } catch (error) {
        console.error("Error creating album:", error);
        return res.status(500).json({ message: "Error creating date" });
    }

};

export default handler;