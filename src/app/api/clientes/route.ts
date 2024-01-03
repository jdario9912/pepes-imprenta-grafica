import { errorResponse } from "@/libs/api/responses";
import { ClientesModel } from "@/models/mysql/clientes";
import { validarClienteCrear } from "@/schemas/cliente";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const clientes = await ClientesModel.obtenerTodos();
    
    return NextResponse.json(clientes);
  } catch (error) {
    return errorResponse(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as Cliente;

    const clienteValidado = validarClienteCrear(body);

    const clienteCreado = await ClientesModel.crear(clienteValidado);

    return NextResponse.json(clienteCreado);
  } catch (error) {
    return errorResponse(error);
  }
};
