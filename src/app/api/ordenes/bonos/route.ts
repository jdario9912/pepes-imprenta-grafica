import { errorResponse } from "@/libs/api/responses";
import { BonosModel } from "@/models/mysql/productos/bonos";
import { validarBonosCrear } from "@/schemas/productos/bonos";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const bonoValidado = validarBonosCrear(body);

    const ordenBonoCreada = await BonosModel.crear(bonoValidado);

    return NextResponse.json(ordenBonoCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
