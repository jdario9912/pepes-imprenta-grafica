import { errorResponse } from "@/libs/api/responses";
import { RemerasModel } from "@/models/mysql/productos/remeras";
import { validarRemerasCrear } from "@/schemas/productos/remeras";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarRemerasCrear(body);
    
    const id = await RemerasModel.crear(ordenValidada);

    const ordenCreada = await RemerasModel.obtener(id);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
