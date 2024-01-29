import { NextResponse, type NextRequest } from "next/server";
import { validarToken } from "./libs/api/jwt";
import { errorResponse } from "./libs/api/responses";

export async function middleware(req: NextRequest) {
  const pathAuthQuery = req.nextUrl.pathname.startsWith("/api/auth/login");
  if (pathAuthQuery) NextResponse.next();
  
  const method = req.method;

  try {
    const headers = new Headers(req.headers);
    const token = headers.get("Authorization");

    if (!token) return NextResponse.redirect("/login");

    await validarToken(token);

    // obtener el rol

    // usuario ruta clientes y ordenes puede
    // crear, obtener, actualizar

    // externo ruta ordenes puede
    // obtener

  } catch (error) {
    return errorResponse(error);
  }
}
