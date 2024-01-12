import { errorResponse } from "@/libs/api/responses";
import { SellosModel } from "@/models/mysql/productos/sellos";
import { validarSellosCrear } from "@/schemas/productos/sellos";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarSellosCrear(body);
    
    const ordenCreada = await SellosModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
