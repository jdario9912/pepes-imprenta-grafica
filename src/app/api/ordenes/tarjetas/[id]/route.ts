import { errorResponse, orden404Response } from "@/libs/api/responses";
import { TarjetasModel } from "@/models/mysql/productos/tarjetas";
import { validarId } from "@/schemas/id";
import { validarTarjetasEditar } from "@/schemas/productos/tarjetas";
import type { Id } from "@/types/params";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const idValido = validarId(id);

    const orden = await TarjetasModel.obtener(idValido);

    if (!orden) return orden404Response();

    return NextResponse.json(orden);
  } catch (error) {
    return errorResponse(error);
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const body = await req.json();

    const idValido = validarId(id);

    const productoValidado = validarTarjetasEditar(body);

    const actualizado = await TarjetasModel.actualizar(idValido, productoValidado);

    if (!actualizado) return orden404Response();

    const ordenActualizada = await TarjetasModel.obtener(id);

    return NextResponse.json(ordenActualizada);
  } catch (error) {
    return errorResponse(error);
  }
};

export const DELETE = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const idValido = validarId(id);

    const eliminado = await TarjetasModel.eliminar(idValido);

    if (!eliminado) return orden404Response();

    return NextResponse.json(null);
  } catch (error) {
    return errorResponse(error);
  }
};
