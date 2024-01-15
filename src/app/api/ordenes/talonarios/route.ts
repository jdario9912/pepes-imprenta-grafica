import { errorResponse } from "@/libs/api/responses";
import { TalonariosModel } from "@/models/mysql/productos/talonarios";
import { validarTalonariosCrear } from "@/schemas/productos/talonarios";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarTalonariosCrear(body);
    
    const id = await TalonariosModel.crear(ordenValidada);

    const ordenCreada = await TalonariosModel.obtener(id);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
