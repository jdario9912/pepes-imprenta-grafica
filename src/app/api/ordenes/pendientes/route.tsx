import { pool } from "@/db/mysql";
import { fechaANumero } from "@/libs/fechas";
import { OrdenPendiente } from "@/types/orden";
import { NextResponse } from "next/server";

export const GET = async () => {
  let pendientes: OrdenPendiente[] = [];
  try {
    const [result]: Array<unknown[]> = (await pool.query(
      "CALL buscar_ordenes_pendientes()"
    )) as Array<unknown[]>;

    const productos: Array<OrdenPendiente[]> = result.filter(
      (row) => row instanceof Array
    ) as Array<OrdenPendiente[]>;

    const productosPendientes = productos.filter(
      (producto) => producto.length > 0
    );

    productosPendientes.forEach((producto) => {
      producto.forEach((pendiente) => {
        pendientes.push(pendiente);
      });
    });

    const ordenesPendientesSort = pendientes.sort(
      (a, b) => fechaANumero(b.fecha_entrega) - fechaANumero(a.fecha_entrega)
    );

    return NextResponse.json(ordenesPendientesSort);
  } catch (error) {
    return NextResponse.json("algo salio mal en ordenes pendientes");
  }
};
