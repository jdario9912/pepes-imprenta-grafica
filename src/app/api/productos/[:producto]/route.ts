import { NextResponse, NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  const producto = req.nextUrl.searchParams

  console.log(producto);
  
  
  return NextResponse.json(req)
}