import { Productos } from "@/types/enums";
import { ParamsRequest } from "@/types/productos";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, { params }: any) => {
  const { id, producto } = params as ParamsRequest;

  if (!Object.values(Productos).includes(producto))
    return NextResponse.json(
      { mensaje: "El producto no existe" },
      { status: 404 }
    );

  return NextResponse.json({ id, producto });
};
