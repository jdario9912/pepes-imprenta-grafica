import { pool } from "@/db/mysql";
import { fechaANumero } from "@/libs/fechas";
import { OrdenCliente } from "@/types/orden";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  let ordenes: OrdenCliente[] = [];

  try {
    const [result]: Array<unknown[]> = (await pool.query(
      `CALL ordenes_cliente(${id})`
    )) as Array<unknown[]>;

    const listaOrdenesCliente: Array<OrdenCliente[]> = result.filter(
      (row) => row instanceof Array
    ) as Array<OrdenCliente[]>;

    const ordenesCliente = listaOrdenesCliente.filter((producto) => producto.length > 0);

    ordenesCliente.forEach((producto) => {
      producto.forEach((orden) => {
        ordenes.push(orden);
      });
    });

    const ordenesClienteSort = ordenes.sort(
      (a, b) => fechaANumero(b.fecha_entrega) - fechaANumero(a.fecha_entrega)
    );

    return NextResponse.json(ordenesClienteSort);
  } catch (error) {return NextResponse.json({
        mensaje: "Algo salio mal en ordenes de cliente.",
      });}
};
