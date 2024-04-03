import { EmpleadosModel } from "@/models/mysql/empleados";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
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
      async authorize(credentials) {
        try {
          const empleado = await EmpleadosModel.login(
            credentials?.email || "",
            credentials?.password || ""
          );

          if (!empleado) throw new Error("Credenciales incorrectas.");

          return empleado;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
