import { errorResponse } from "@/libs/api/responses";
import { PlotterModel } from "@/models/mysql/productos/plotter";
import { validarPlotterCrear } from "@/schemas/productos/plotter";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const ordenValidada = validarPlotterCrear(body);
    
    const ordenCreada = await PlotterModel.crear(ordenValidada);

    return NextResponse.json(ordenCreada);
  } catch (error) {
    return errorResponse(error);
  }
};
