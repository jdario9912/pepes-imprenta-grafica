import { EmpleadosModel } from "@/models/mysql/empleados";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions =

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const empleado = await EmpleadosModel.login(
            credentials?.email || "",
            credentials?.password || ""
          );

          return empleado;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
