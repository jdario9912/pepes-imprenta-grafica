import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { Tarjetas } from "@/types/productos";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export class TarjetasModel {
  static async crear(input: Tarjetas): Promise<Tarjetas | Error> {
    const {
      id_cliente,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      ubicacion_archivo,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      tipo,
      cantidad,
      papel,
      terminacion,
      puntas_redondeadas,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO tarjetas (
      id_cliente,
      nro_orden,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      ubicacion_archivo,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      tipo,
      cantidad,
      papel,
      terminacion,
      puntas_redondeadas
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
        ubicacion_archivo,
        observaciones,
        total,
        entrega,
        estado,
        metodo_pago,
        tipo,
        cantidad,
        papel,
        terminacion,
        puntas_redondeadas,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) return errorGuardarOrden();

    const [registro]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      "SELECT * FROM tarjetas WHERE id = ?",
      [respuesta.insertId]
    );

    const impresionesNuevo: RowDataPacket = registro[0];

    const impresionesRegistrado: Tarjetas = impresionesNuevo as Tarjetas;

    return impresionesRegistrado;
  }

  static async obtener(id: IdParam) {}

  static async actualizar(id: IdParam) {}

  static async eliminar(id: IdParam) {}
}
