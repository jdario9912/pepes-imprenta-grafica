import { errorResponse } from "@/libs/api/responses";
import { LomaModel } from "@/models/mysql/productos/loma";
import { validarLomaCrear } from "@/schemas/productos/loma";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarLomaCrear(body);

    const ordenCreada = await LomaModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};