import { empleado404Response, errorResponse } from "@/libs/api/responses";
import { EmpleadosModel } from "@/models/mysql/empleados";
import { validarEmpleadoActualizar } from "@/schemas/empleado";
import type { Id } from "@/types/params";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const empleado = await EmpleadosModel.obtenerUno(id);

    if (!empleado) return empleado404Response();

    return NextResponse.json(empleado);
  } catch (error) {
    return errorResponse(error);
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const body = await req.json();
    const { id }: { id: Id } = params;

    const empeadoValidado = validarEmpleadoActualizar(body);

    const actualizaEmpleado = await EmpleadosModel.actualizar(
      id,
      empeadoValidado
    );

    if (!actualizaEmpleado) return empleado404Response();

    const empleadoActualizado = await EmpleadosModel.obtenerUno(id);

    return NextResponse.json(empleadoActualizado);
  } catch (error) {
    console.log(error);
    
    return errorResponse(error);
  }
};

export const DELETE = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const eliminado = await EmpleadosModel.eliminar(id);

    if (!eliminado) return empleado404Response();

    return NextResponse.json(null);
  } catch (error) {
    return errorResponse(error);
  }
};