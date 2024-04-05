import { pool } from "@/db/mysql";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { numero: string } }
) => {
  const nro_orden = params.numero;
  try {
    const [result]: Array<unknown[]> = (await pool.query(
      `CALL buscar_orden(${nro_orden})`
    )) as Array<unknown[]>;

    const productos: Array<unknown[]> = result.filter((row) =>
      Array.isArray(row)
    ) as Array<unknown[]>;

    const ordenes = productos.filter((producto) => producto.length > 0);

    if (ordenes.length > 1)
      return NextResponse.json(
        { mensaje: "Existen dos ordenes con el mismo numero" },
        { status: 400 }
      );

    if (ordenes.length === 0)
      return NextResponse.json(
        {
          mensaje: `No existe la orden nº ${nro_orden}`,
        },
        { status: 404 }
      );

    return NextResponse.json(ordenes[0][0]);
  } catch (error) {
    return NextResponse.json({ mensaje: "algo salio mal" });
  }
};
