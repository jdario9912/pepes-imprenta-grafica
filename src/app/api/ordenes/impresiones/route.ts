import { errorResponse } from "@/libs/api/responses";
import { ImpresionesModel } from "@/models/mysql/productos/impresiones";
import { validarImpresionesCrear } from "@/schemas/productos/impresiones";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const impresionesValidado = validarImpresionesCrear(body);

    const ordenImpresionesCreada = await ImpresionesModel.crear(impresionesValidado);

    return NextResponse.json(ordenImpresionesCreada);
  } catch (error) {
    return errorResponse(error);
  }
};