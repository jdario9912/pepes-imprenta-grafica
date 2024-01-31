import { NextResponse, type NextRequest } from "next/server";
import { validarToken } from "./libs/api/jwt";
import { errorResponse } from "./libs/api/responses";
import { empleadoAutorizado } from "./libs/middleware/empleados";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.includes("api")) {
    const pathAuthQuery = pathname.startsWith("/api/auth/login");
    if (pathAuthQuery) return NextResponse.next();

    const method = req.method;
    const headers = new Headers(req.headers);
    const token = headers.get("Authorization");
    
    if (!token) return NextResponse.redirect(new URL("/login", req.url));
    
    try {
      await validarToken(token);

      if (empleadoAutorizado(token, method, pathname))
        return NextResponse.next();

      throw new Error("No estas autorizado.");
    } catch (error) {
      return errorResponse(error);
    }
  }
}
