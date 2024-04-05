import { errorResponse } from "@/libs/api/responses";
import { DisenosModel } from "@/models/mysql/productos/disenos";
import { validarDisenosCrear } from "@/schemas/productos/disenos";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarDisenosCrear(body);

    const id = await DisenosModel.crear(ordenValidada);

    const ordenCreada = await DisenosModel.obtener(id);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
}