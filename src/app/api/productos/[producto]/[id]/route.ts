import { Productos } from "@/types/enums";
import { IdProductoParam } from "@/types/params";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (_: NextApiRequest, { params }: any) => {
  const { id, producto } = params as IdProductoParam;

  if (!Object.values(Productos).includes(producto))
    return NextResponse.json(
      { mensaje: "El producto no existe" },
      { status: 404 }
    );

  return NextResponse.json({ id, producto });
};
