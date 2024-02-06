import { MongoClient } from "mongodb";
export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://timiphotography08:ysmMh8Dm4BWVPumY@cluster0.m7tvrod.mongodb.net"
  );
  return client;
};