import { errorResponse } from "@/libs/api/responses";
import { VolantesModel } from "@/models/mysql/productos/volantes";
import { validarVolantesCrear } from "@/schemas/productos/volantes";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarVolantesCrear(body);
    
    const ordenCreada = await VolantesModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    console.log(error);
    
    return errorResponse(error);
  }
};
