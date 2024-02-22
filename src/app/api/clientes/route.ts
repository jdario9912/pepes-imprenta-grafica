import { cliente404Response, errorResponse } from "@/libs/api/responses";
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

    console.log(body);
    

    const clienteValidado = validarClienteCrear(body);

    const idCliente = await ClientesModel.crear(clienteValidado);

    const cliente = await ClientesModel.obtenerUno(idCliente);

    if (!cliente) return cliente404Response();

    return NextResponse.json(cliente);
  } catch (error) {
    return errorResponse(error);
  }
};
