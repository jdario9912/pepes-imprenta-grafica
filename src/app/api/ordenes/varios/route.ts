import { errorResponse } from "@/libs/api/responses";
import { VariosModel } from "@/models/mysql/productos/varios";
import { validarVariosCrear } from "@/schemas/productos/varios";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarVariosCrear(body);
    
    const id = await VariosModel.crear(ordenValidada);

    const ordenCreada = await VariosModel.obtener(id);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
