import { errorResponse } from "@/libs/api/responses";
import { VolantesModel } from "@/models/mysql/productos/volantes";
import { validarVolantesCrear } from "@/schemas/productos/volantes";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarVolantesCrear(body);
    
    const id = await VolantesModel.crear(ordenValidada);

    const ordenCreada = await VolantesModel.obtener(id);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
