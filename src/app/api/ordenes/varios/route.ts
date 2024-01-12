import { errorResponse } from "@/libs/api/responses";
import { VariosModel } from "@/models/mysql/productos/varios";
import { validarVariosCrear } from "@/schemas/productos/varios";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarVariosCrear(body);
    
    const ordenCreada = await VariosModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    console.log(error);
    
    return errorResponse(error);
  }
};
