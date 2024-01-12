import { errorResponse } from "@/libs/api/responses";
import { BonosModel } from "@/models/mysql/productos/bonos";
import { validarBonosCrear } from "@/schemas/productos/bonos";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarBonosCrear(body);

    const id = await BonosModel.crear(ordenValidada);

    const ordenCreada = await BonosModel.obtener(id)

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
