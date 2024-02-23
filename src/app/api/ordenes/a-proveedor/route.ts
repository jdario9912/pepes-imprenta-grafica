import { pool } from "@/db/mysql";
import { OrdenAProveedor } from "@/types/orden-a-proveedor";
import { FieldPacket, ResultSetHeader } from "mysql2";
import { NextResponse } from "next/server";

export const GET = async () => {
  let pendientes: OrdenAProveedor[] = []
  try {
    // const session = await getServerSession();

    // if (!session) return noAutorizadoResponse();

    const [rows]: [ResultSetHeader[], FieldPacket[]] = await pool.query(
      "CALL buscar_ordenes_pendientes()"
    );

    const productos = rows.filter((row) => row instanceof Array);

    const productosProveedor = productos.filter((producto) => producto.length > 0);

    productosProveedor.forEach((producto) => {
      producto.forEach((proveedor) => {
        pendientes.push(proveedor)
      })
    })

    return NextResponse.json(pendientes);
  } catch (error) {
    console.log(error);
    
    return NextResponse.json("algo salio mal en ordenes a proveedor");
  }
};