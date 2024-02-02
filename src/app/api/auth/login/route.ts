import { NextRequest, NextResponse } from "next/server";
import { generarToken } from "@/libs/api/jwt";
import { errorResponse } from "@/libs/api/responses";
import { EmpleadosModel } from "@/models/mysql/empleados";
import { validarLogin } from "@/schemas/auth";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as Empleado;
  try {
    const { email, password } = validarLogin(body);

    const dataToken = await EmpleadosModel.login(email, password);

    const token = await generarToken(dataToken);

    return NextResponse.json(token, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return errorResponse(error);
  }
};
