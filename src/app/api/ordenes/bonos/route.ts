import { errorResponse } from "@/libs/api/responses";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    console.log(body);
  } catch (error) {
    return errorResponse(error)
  }

  return NextResponse.json("creando un producto");
};
