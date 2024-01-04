import { NextResponse, type NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  try {
    if (req.nextUrl.pathname.startsWith('/api/ordenes')) {
      console.log("esta peticion va para un tipo de orden");
  
      // aca tengo que validar si el path tiene un tipo de orden real
      
      // en una peticion post validar que el producto existe
      // producto: z.enum([
      //   "bonos",
      //   "disenos",
      //   "impresiones",
      //   "loma",
      //   "plotter",
      //   "remeras",
      //   "sellos",
      //   "talonarios",
      //   "tarjetas",
      //   "varios",
      //   "volantes",
      // ]),
    }
    
    if (req.nextUrl.pathname.startsWith('/api/clientes')) {
      console.log("esta peticion va para los clientes");
      
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json("algo salio mal")
  }
  
}