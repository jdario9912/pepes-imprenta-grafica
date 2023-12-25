import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextApiRequest) => {
  return NextResponse.json("todos los productos")
}

export const POST = async (req: NextRequest, { params }: any) => {
  const body = await req.json()
  
  console.log(params);
  
  console.log(body);
  
  return NextResponse.json("creando un producto")
}