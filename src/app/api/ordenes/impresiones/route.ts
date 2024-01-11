import { errorResponse } from "@/libs/api/responses";
import { ImpresionesModel } from "@/models/mysql/productos/impresiones";
import { validarImpresionesCrear } from "@/schemas/productos/impresiones";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarImpresionesCrear(body);

    const ordenCreada = await ImpresionesModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};