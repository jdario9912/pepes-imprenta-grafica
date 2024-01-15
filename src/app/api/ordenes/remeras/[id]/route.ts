import { errorResponse, orden404Response } from "@/libs/api/responses";
import { RemerasModel } from "@/models/mysql/productos/remeras";
import { validarId } from "@/schemas/id";
import { validarRemerasEditar } from "@/schemas/productos/remeras";
import type { Id } from "@/types/params";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const idValido = validarId(id);

    const orden = await RemerasModel.obtener(idValido);

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

    const productoValidado = validarRemerasEditar(body);

    const actualizado = await RemerasModel.actualizar(idValido, productoValidado);

    if (!actualizado) return orden404Response();

    const ordenActualizada = await RemerasModel.obtener(id);

    return NextResponse.json(ordenActualizada);
  } catch (error) {
    return errorResponse(error);
  }
};

export const DELETE = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const idValido = validarId(id);

    const eliminado = await RemerasModel.eliminar(idValido);

    if (!eliminado) return orden404Response();

    return NextResponse.json(null);
  } catch (error) {
    return errorResponse(error);
  }
};
