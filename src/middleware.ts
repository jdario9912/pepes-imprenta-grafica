import { NextResponse, type NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  return NextResponse.json("esto nunca llegara al backend")  
}