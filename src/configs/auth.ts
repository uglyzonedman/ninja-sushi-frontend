import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "92172138376-8tajkeefn35vp2ap7ntendsbb3m6r2eh.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        const result = await axios.post(
          "http://localhost:8080/api-v2/account/login/default",
          {
            email,
            password,
          }
        );
        return result.data;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  jwt: {},
  callbacks: {},
};
