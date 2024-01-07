import { errorResponse } from "@/libs/api/responses";
import { DisenosModel } from "@/models/mysql/productos/disenos";
import { validarDisenosCrear } from "@/schemas/productos/disenos";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const disenoValidado = validarDisenosCrear(body);

    const ordenBonoCreada = await DisenosModel.crear(disenoValidado);

    return NextResponse.json(ordenBonoCreada);
  } catch (error) {
    return errorResponse(error);
  }
}