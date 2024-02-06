import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from '../../../db/db'

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "asd",
  providers: [
    CredentialsProvider({
      name: "credentials",
      authorize: async (credentials) => {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("adminUser");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Invalid password! Try again!");
        }

        client.close();

        return { email: user.email };
      },
      credentials: {
        email: {},
        password: {},
      },
    }),
  ],
};

export default NextAuth(authOptions);
