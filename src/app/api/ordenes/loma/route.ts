import { errorResponse } from "@/libs/api/responses";
import { LomaModel } from "@/models/mysql/productos/loma";
import { validarLomaCrear } from "@/schemas/productos/loma";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const lomaValidado = validarLomaCrear(body);

    const ordenLomaCreada = await LomaModel.crear(lomaValidado);

    return NextResponse.json(ordenLomaCreada);
  } catch (error) {
    return errorResponse(error);
  }
};