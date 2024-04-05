import { errorResponse, orden404Response } from "@/libs/api/responses";
import { LomaModel } from "@/models/mysql/productos/loma";
import { validarId } from "@/schemas/id";
import { validarLomaEditar } from "@/schemas/productos/loma";
import type { Id } from "@/types/params";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const idValido = validarId(id);

    const orden = await LomaModel.obtener(idValido);

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

    const productoValidado = validarLomaEditar(body);

    const actualizado = await LomaModel.actualizar(idValido, productoValidado);

    if (!actualizado) return orden404Response();

    const ordenActualizada = await LomaModel.obtener(id);

    return NextResponse.json(ordenActualizada);
  } catch (error) {
    return errorResponse(error);
  }
};

export const DELETE = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const idValido = validarId(id);

    const eliminado = await LomaModel.eliminar(idValido);

    if (!eliminado) return orden404Response();

    return NextResponse.json(null);
  } catch (error) {
    return errorResponse(error);
  }
};
