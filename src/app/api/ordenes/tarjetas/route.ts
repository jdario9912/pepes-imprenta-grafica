import { errorResponse } from "@/libs/api/responses";
import { TarjetasModel } from "@/models/mysql/productos/tarjetas";
import { validarTarjetasCrear } from "@/schemas/productos/tarjetas";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarTarjetasCrear(body);
    
    const ordenCreada = await TarjetasModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
