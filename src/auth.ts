import NextAuth, { AuthError } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/models/user.model";
import { connectToDB } from "./lib/utils";
import { redirect } from "next/navigation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }) => {
      console.log(user);

      if (account?.provider === "google") {
        try {
          const { id, name, email, image } = user;

          // to perform any operation on db we need to connect first
          await connectToDB();

          // check if email already exist
          const foundUser = await User.findOne({ email });

          // if already existing user then we don't create new document/row
          if (foundUser) return true;

          console.log("🔥🔥🔥🔥🔥", image);
          const newUser = await User.create({
            name: name?.toLowerCase().replaceAll(" ", ""),
            googleId: id,
            email,
            image,
          });
          redirect("/new");
          return true;
        } catch (error) {
          throw new AuthError("Error while logging in...");
        }
      } else {
        // this tells that something didn't go right
        return false;
      }
    },
  },
});
