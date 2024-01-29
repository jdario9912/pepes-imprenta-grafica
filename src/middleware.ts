import { NextResponse, type NextRequest } from "next/server";
import { validarToken } from "./libs/api/jwt";
import { errorResponse } from "./libs/api/responses";

export async function middleware(req: NextRequest) {
  const pathAuthQuery = req.nextUrl.pathname.startsWith("/api/auth/login");

  if (!pathAuthQuery) {
    const headers = new Headers(req.headers);
    const token = headers.get("Authorization");

    if (!token) return NextResponse.json({ mensaje: "No estas autorizado." });

    try {
      await validarToken(token);
      NextResponse.next();
    } catch (error) {
      return errorResponse(error);
    }
  }
}
