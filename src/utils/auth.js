import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        "885170186922-00d9p75kno0kh7h3akd9o66c9npjbeq2.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
export const getAuthSession = () => getServerSession(authOptions);
