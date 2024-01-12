import { errorResponse } from "@/libs/api/responses";
import { TalonariosModel } from "@/models/mysql/productos/talonarios";
import { validarTalonariosCrear } from "@/schemas/productos/talonarios";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarTalonariosCrear(body);
    
    const ordenCreada = await TalonariosModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    console.log(error);
    
    return errorResponse(error);
  }
};
