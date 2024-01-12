import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { Varios } from "@/types/productos";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export class VariosModel {
  static async crear(input: Varios): Promise<Varios | Error> {
    const {
      id_cliente,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      detalle,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO varios (
      id_cliente,
      nro_orden,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      detalle
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    )`,
      [
        id_cliente,
        generarNumeroOrden(),
        atendido_por,
        fecha_entrega,
        hora_entrega,
        muestra,
        observaciones,
        total,
        entrega,
        estado,
        metodo_pago,
        detalle,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) return errorGuardarOrden();

    const [registro]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      "SELECT * FROM varios WHERE id = ?",
      [respuesta.insertId]
    );

    const impresionesNuevo: RowDataPacket = registro[0];

    const impresionesRegistrado: Varios = impresionesNuevo as Varios;

    return impresionesRegistrado;
  }

  static async obtener(id: IdParam) {}

  static async actualizar(id: IdParam) {}

  static async eliminar(id: IdParam) {}
}
