import { NextResponse, type NextRequest } from 'next/server'
import { validarToken } from './libs/api/jwt';
 
export async function middleware(req: NextRequest) {
  
  // return NextResponse.json("esto nunca llegara al backend")  
  // const tokenValido = await validarToken(token);
}