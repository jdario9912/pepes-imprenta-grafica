import { errorResponse } from "@/libs/api/responses";
import { SellosModel } from "@/models/mysql/productos/sellos";
import { validarSellosCrear } from "@/schemas/productos/sellos";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarSellosCrear(body);
    
    const id = await SellosModel.crear(ordenValidada);

    const ordenCreada = await SellosModel.obtener(id);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
