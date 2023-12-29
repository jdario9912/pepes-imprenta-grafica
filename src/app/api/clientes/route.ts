import { errorResponse } from "@/libs/errors";
import { ClientesModel } from "@/models/mysql/clientes";
import { validarCliente } from "@/schemas/cliente";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json("obteniendo clientes");
};

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as Cliente;

    const clienteValidado = validarCliente(body);

    const clienteCreado = await ClientesModel.crear(clienteValidado);

    return NextResponse.json(clienteCreado);
  } catch (error) {
    console.log(error);
    
    return errorResponse(error)
  }
};
