import { errorResponse } from "@/libs/api/responses";
import { TarjetasModel } from "@/models/mysql/productos/tarjetas";
import { validarTalonariosCrear } from "@/schemas/productos/talonarios";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarTalonariosCrear(body);
    
    const ordenCreada = await TarjetasModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    console.log(error);
    
    return errorResponse(error);
  }
};
