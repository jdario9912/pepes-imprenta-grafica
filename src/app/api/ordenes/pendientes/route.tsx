import { pool } from "@/db/mysql";
import { noAutorizadoResponse } from "@/libs/api/responses";
import { OrdenePendiente } from "@/types/ordenes-pendientes";
import { FieldPacket, ProcedureCallPacket, ResultSetHeader } from "mysql2";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  let pendientes: OrdenePendiente[] = []
  try {
    // const session = await getServerSession();

    // if (!session) return noAutorizadoResponse();

    const [rows]: [ResultSetHeader[], FieldPacket[]] = await pool.query(
      "CALL buscar_ordenes_pendientes()"
    );

    const productos = rows.filter((row) => row instanceof Array);

    const productosPendientes = productos.filter((producto) => producto.length > 0);

    productosPendientes.forEach((producto) => {
      producto.forEach((pendiente) => {
        pendientes.push(pendiente)
      })
    })

    return NextResponse.json(pendientes);
  } catch (error) {
    return NextResponse.json("algo salio mal en ordenes pendientes");
  }
};
