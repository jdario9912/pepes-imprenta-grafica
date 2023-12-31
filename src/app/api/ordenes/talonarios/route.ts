import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest, { params }: any) => {
  const body = await req.json()
  
  console.log(params);
  
  console.log(body);
  
  return NextResponse.json("creando un producto")
}