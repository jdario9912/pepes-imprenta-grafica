import { cliente404Response, errorResponse } from "@/libs/api/responses";
import { ClientesModel } from "@/models/mysql/clientes";
import { validarClienteActualizar } from "@/schemas/cliente";
import { Id } from "@/types/params";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    
    const { id }: { id: Id } = params;

    const cliente = await ClientesModel.obtenerUno(id);

    if (!cliente) return cliente404Response();

    return NextResponse.json(cliente);
  } catch (error) {
    return errorResponse(error);
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const body = await req.json();

    const { id }: { id: Id } = params;

    const clienteValidado = validarClienteActualizar(body);

    const actualizaCliente = await ClientesModel.actualizar(
      id,
      clienteValidado
    );

    if (!actualizaCliente) return cliente404Response();

    const clienteActualizado = await ClientesModel.obtenerUno(id);

    return NextResponse.json(clienteActualizado);
  } catch (error) {
    return errorResponse(error);
  }
};

export const DELETE = async (_: NextRequest, { params }: any) => {
  try {
    const { id }: { id: Id } = params;

    const eliminado = await ClientesModel.eliminar(id);

    if (!eliminado) return cliente404Response();

    return NextResponse.json(null);
  } catch (error) {
    return errorResponse(error);
  }
};
