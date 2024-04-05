import { pool } from "@/db/mysql";
import { formatearFecha } from "@/libs/client/moment";
import { fechaANumero } from "@/libs/fechas";
import { OrdenAProveedor } from "@/types/orden";
import { NextResponse } from "next/server";

export const GET = async () => {
  let proveedor: OrdenAProveedor[] = [];
  try {
    const [result]: Array<unknown[]> = (await pool.query(
      "CALL buscar_ordenes_a_proveedor()"
    )) as Array<unknown[]>;

    const productos: Array<OrdenAProveedor[]> = result.filter((row) =>
      Array.isArray(row)
    ) as Array<OrdenAProveedor[]>;

    productos.forEach((producto) => {
      producto.forEach((orden) => {
        proveedor.push(orden);
      });
    });

    const ordenesProveedorSort = proveedor.sort(
      (a, b) => fechaANumero(b.fecha_entrega) - fechaANumero(a.fecha_entrega)
    );    

    return NextResponse.json(ordenesProveedorSort);
  } catch (error) {
    return NextResponse.json("algo salio mal en ordenes a proveedor");
  }
};
