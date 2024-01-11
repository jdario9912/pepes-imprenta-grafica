import { errorResponse } from "@/libs/api/responses";
import { BonosModel } from "@/models/mysql/productos/bonos";
import { validarBonosCrear } from "@/schemas/productos/bonos";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarBonosCrear(body);

    const ordenCreada = await BonosModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
