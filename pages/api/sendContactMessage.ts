import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/db/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { contactData } = req.body;

    if (!contactData) {
      return res.status(422).json({ message: "Invalid input" });
    }

    const client = await connectToDatabase();
    const db = client.db();
    
    await db.collection("messages").insertOne(contactData);

    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Could not send message" });
  }
};

export default handler;
