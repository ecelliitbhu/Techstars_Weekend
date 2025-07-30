//@ts-ignore
import type { NextAuthOptions, User, Session } from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import admin from "firebase-admin";
import { db } from "./firebaseStore";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import type { JWT } from "next-auth/jwt";


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export const authOptions: NextAuthOptions = {
  

  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    
    async signIn({ user }: { user: User }) {
      try {
        if (!user.email || !user.id) return false;

        const q = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          await setDoc(doc(db, "users", user.id), {
            ...user,
            formFilled: false,
          });
        } else {
          const userDoc = querySnapshot.docs[0];
          await updateDoc(doc(db, "users", user.id), {
            ...user,
            formFilled: userDoc.data().formFilled || false,
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

   
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: User;
    }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },

    
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }) {
      if (session.user) {
        //@ts-ignore
        session.user.id = token.sub || token.id || "";
      }
      return session;
    },


    async redirect({
      url,
      baseUrl,
    }: {
      url: string;
      baseUrl: string;
    }) {
      return baseUrl;
    },
  },
};

