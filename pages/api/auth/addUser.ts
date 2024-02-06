import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../../db/db';
import bcrypt from 'bcryptjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ message: "Email and password are required" });
    }

    try {
        const client = await connectToDatabase();
        const db = client.db();

        const existingUser = await db.collection("users").findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await db.collection("users").insertOne({ email, password: hashedPassword });

        return res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Could not add user" });
    }
}

export default handler;
