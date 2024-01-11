import { errorResponse } from "@/libs/api/responses";
import { PlotterModel } from "@/models/mysql/productos/plotter";
import { validarPlotterCrear } from "@/schemas/productos/plotter";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    // cambiar el nombre de esta constante en todos los productos
    const plotterValidado = validarPlotterCrear(body);
    // cambiar el nombre de esta constante en todos los productos
    const ordenPlotterCreada = await PlotterModel.crear(plotterValidado);

    return NextResponse.json(ordenPlotterCreada);
  } catch (error) {
    console.log(error);

    return errorResponse(error);
  }
};
