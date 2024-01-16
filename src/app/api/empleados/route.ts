import { empleado404Response, errorResponse } from "@/libs/api/responses";
import { EmpleadosModel } from "@/models/mysql/empleados";
import { validarEmpleadoCrear } from "@/schemas/empleado";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const empleados = await EmpleadosModel.obtenerTodos();

    return NextResponse.json(empleados);
  } catch (error) {
    return errorResponse(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as Empleado;

    const empleadoValidado = validarEmpleadoCrear(body);

    const idEmpleado = await EmpleadosModel.crear(empleadoValidado);

    const empleado = await EmpleadosModel.obtenerUno(idEmpleado);

    if (!empleado) return empleado404Response();

    return NextResponse.json(empleado);
  } catch (error) {
    console.log(error);
    
    return errorResponse(error);
  }
};