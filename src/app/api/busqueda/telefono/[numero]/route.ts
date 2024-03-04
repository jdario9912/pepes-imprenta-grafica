import { ClientesModel } from "@/models/mysql/clientes";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { numero: string } }
) => {
  const telefono = params.numero;

  try {
    const cliente = await ClientesModel.buscarPorTelefono(telefono);

    if (!cliente)
      return NextResponse.json(
        { mensaje: "El numero no esta registrado" },
        { status: 404 }
      );

    return NextResponse.json(cliente);
  } catch (error) {
    console.log(error);

    return NextResponse.json("algo salio mal");
  }
};
